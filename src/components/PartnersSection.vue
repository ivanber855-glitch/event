<template>
  <section id="partners" class="partners">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Нам доверяют</span>
        <h2 class="section-title">Мы уже работали вместе</h2>
      </div>

      <!-- Бегущая строка логотипов -->
      <div class="marquee">
        <div class="marquee-content">
          <span class="marquee-item">АРТЕК</span>
          <span class="marquee-item">ДГТУ</span>
          <span class="marquee-item">РЖД</span>
          <span class="marquee-item">Fonbet</span>
          <span class="marquee-item">Лев Голицынь</span>
          <span class="marquee-item">СМЕНА</span>
          <span class="marquee-item">BetBoom</span>
          <span class="marquee-item">ВТБ</span>
          <span class="marquee-item">АРТЕК</span>
          <span class="marquee-item">ДГТУ</span>
          <span class="marquee-item">РЖД</span>
          <span class="marquee-item">Fonbet</span>
          <span class="marquee-item">Лев Голицынь</span>
          <span class="marquee-item">СМЕНА</span>
          <span class="marquee-item">BetBoom</span>
          <span class="marquee-item">ВТБ</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PartnersSection'
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

.partners {
  padding: 100px 0;
  background: #0a0a0f;
  position: relative;
  overflow: hidden;
}

/* Верхняя линия */
.partners::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #8b5cf6, #c084fc, transparent);
}

/* Нижняя линия */
.partners::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #8b5cf6, #c084fc, transparent);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
  position: relative;
  z-index: 2;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-badge {
  display: inline-block;
  background: rgba(139, 92, 246, 0.1);
  padding: 6px 14px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
  color: #c084fc;
  margin-bottom: 20px;
}

.section-title {
  font-size: 48px;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.marquee {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.marquee::before,
.marquee::after {
  content: '';
  position: absolute;
  top: 0;
  width: 100px;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.marquee::before {
  left: 0;
  background: linear-gradient(90deg, #0a0a0f, transparent);
}

.marquee::after {
  right: 0;
  background: linear-gradient(270deg, #0a0a0f, transparent);
}

.marquee-content {
  display: flex;
  animation: marquee 25s linear infinite;
  gap: 80px;
  white-space: nowrap;
}

.marquee-item {
  font-size: 18px;
  font-weight: 500;
  font-family: 'Space Grotesk', sans-serif;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 2px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

/* Эффект свечения при наведении */
.marquee-item:hover {
  color: #c084fc;
  text-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
}

/* Точка между элементами */
.marquee-item::after {
  content: '•';
  position: absolute;
  right: -45px;
  color: rgba(139, 92, 246, 0.3);
  font-size: 14px;
}

.marquee-item:last-child::after {
  display: none;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@media (max-width: 1024px) {
  .container {
    padding: 0 40px;
  }
  
  .section-title {
    font-size: 40px;
  }
  
  .marquee-content {
    gap: 60px;
  }
  
  .marquee-item {
    font-size: 16px;
  }
  
  .marquee-item::after {
    right: -35px;
  }
}

@media (max-width: 768px) {
  .partners {
    padding: 70px 0;
  }
  
  .container {
    padding: 0 24px;
  }
  
  .section-title {
    font-size: 32px;
  }
  
  .marquee-content {
    gap: 50px;
    animation-duration: 20s;
  }
  
  .marquee-item {
    font-size: 14px;
    letter-spacing: 1px;
  }
  
  .marquee-item::after {
    right: -30px;
    font-size: 10px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 20px;
  }
  
  .section-title {
    font-size: 28px;
  }
  
  .marquee-content {
    gap: 40px;
    animation-duration: 18s;
  }
  
  .marquee-item {
    font-size: 12px;
    letter-spacing: 1px;
  }
  
  .marquee-item::after {
    right: -25px;
  }
}
</style>