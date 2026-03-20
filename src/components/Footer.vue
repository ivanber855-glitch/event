<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Логотип -->
        <div class="footer-logo">
          <img :src="logoUrl" alt="ЕВЕНТ.РФ" class="footer-logo-img">
        </div>
      </div>
      
      <!-- Нижняя линия с копирайтом -->
      <div class="footer-bottom">
        <p class="copyright">© 2026 ЕВЕНТ.РФ — организация мероприятий. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      logoUrl: new URL('../assets/__tildapng.png', import.meta.url).href
    }
  }
}
</script>

<style scoped>

.footer {
  background: rgba(8, 8, 12, 0.95);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(139, 92, 246, 0.2);
  padding: 60px 0 30px;
  margin-top: auto;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
}

/* Основной контент */
.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

/* Логотип */
.footer-logo-img {
  height: 60px;
  width: auto;
  filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.3));
  transition: filter 0.3s ease;
}

.footer-logo-img:hover {
  filter: drop-shadow(0 0 15px rgba(139, 92, 246, 0.5));
}

/* Нижняя линия */
.footer-bottom {
  padding-top: 30px;
  border-top: 1px solid rgba(139, 92, 246, 0.15);
  text-align: center;
}

.copyright {
  color: rgba(255, 255, 255, 0.4);
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  letter-spacing: 0.3px;
}


@media (max-width: 968px) {
  .container {
    padding: 0 40px;
  }
  
  .footer-logo-img {
    height: 55px;
  }
}

@media (max-width: 640px) {
  .footer {
    padding: 40px 0 25px;
  }
  
  .container {
    padding: 0 24px;
  }
  
  .footer-logo-img {
    height: 50px;
  }
  
  .copyright {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .footer-logo-img {
    height: 45px;
  }
  
  .footer-bottom {
    padding-top: 20px;
  }
}
</style>