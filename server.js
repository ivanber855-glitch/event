import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_FILE = path.join(__dirname, 'orders.json');
const ADMIN_PASSWORD = 'admin123';
let activeToken = null;

// Инициализация файла
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify([], null, 2));
}

const server = http.createServer((req, res) => {
  // CORS заголовки
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Preflight запросы
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }
  
  // GET /api/orders - получить все заявки
  if (req.method === 'GET' && req.url === '/api/orders') {
    try {
      const data = fs.readFileSync(DB_FILE, 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, orders: JSON.parse(data) }));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: error.message }));
    }
    return;
  }
  
  // POST /api/orders - добавить заявку
  if (req.method === 'POST' && req.url === '/api/orders') {
    let body = '';
    
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        
        const newOrder = {
          id: Date.now(),
          createdAt: new Date().toISOString(),
          name: data.name || '',
          phone: data.phone || '',
          eventType: data.eventType || 'не указано',
          services: data.services || [],
          date: data.date || 'не указана',
          additionalInfo: data.additionalInfo || ''
        };
        
        const ordersFile = fs.readFileSync(DB_FILE, 'utf8');
        const orders = JSON.parse(ordersFile);
        orders.push(newOrder);
        fs.writeFileSync(DB_FILE, JSON.stringify(orders, null, 2));
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Заявка сохранена', order: newOrder }));
        
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: error.message }));
      }
    });
    return;
  }
  
  // DELETE /api/orders - удалить все заявки
  if (req.method === 'DELETE' && req.url === '/api/orders') {
    try {
      fs.writeFileSync(DB_FILE, JSON.stringify([], null, 2));
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, message: 'Все заявки удалены' }));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: error.message }));
    }
    return;
  }
  
  // POST /api/login - авторизация в админку
  if (req.method === 'POST' && req.url === '/api/login') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        if (data.password === ADMIN_PASSWORD) {
          activeToken = Math.random().toString(36).substring(2) + Date.now().toString(36);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true, token: activeToken }));
        } else {
          res.writeHead(401, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: 'Неверный пароль' }));
        }
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Bad request' }));
      }
    });
    return;
  }
  
  // GET /api/admin-core - защищенный контент админки
  if (req.method === 'GET' && req.url.startsWith('/api/admin-core')) {
    const urlObj = new URL(req.url, `http://localhost:${PORT}`);
    const token = urlObj.searchParams.get('token');
    if (token === activeToken) {
      try {
        const adminFile = path.join(__dirname, 'admin-core.html');
        const html = fs.readFileSync(adminFile, 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(html);
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: error.message }));
      }
    } else {
      res.writeHead(403, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: 'Forbidden' }));
    }
    return;
  }
  
  // 404
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ success: false, error: 'Not found' }));
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`✅ Сервер запущен на http://localhost:${PORT}`);
  console.log(`📁 Заявки сохраняются в: ${DB_FILE}`);
  console.log(`🗑️  DELETE /api/orders - удалить все заявки`);
});