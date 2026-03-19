<template>
  <section class="light">
    <div class="light-bg">
      <img 
        :src="backgroundImage" 
        alt="Light magic" 
        class="bg-image"
      />
      <div class="bg-overlay"></div>
    </div>

    <div class="container">
      <div class="light-content">
        <div class="light-text">
          <span class="light-badge">Магия света</span>
          <h2 class="light-title">
            Свет в ЕВЕНТ.РФ
          </h2>
          <p class="light-description">
            Почему световое оснащение так важно<br>
            на вашем мероприятии?
          </p>
          <div class="light-reasons">
            <div class="reason-item">
              <span class="reason-dot"></span>
              <span class="reason-text">Создает атмосферу и настроение</span>
            </div>
            <div class="reason-item">
              <span class="reason-dot"></span>
              <span class="reason-text">Подчеркивает важные моменты</span>
            </div>
            <div class="reason-item">
              <span class="reason-dot"></span>
              <span class="reason-text">Преображает любое пространство</span>
            </div>
            <div class="reason-item">
              <span class="reason-dot"></span>
              <span class="reason-text">Оставляет яркие впечатления</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LightSection',
  data() {
    return {
      backgroundImage: new URL('../assets/c.jpg', import.meta.url).href
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

.light {
  position: relative;
  padding: 120px 0;
  overflow: hidden;
}

.light-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    rgba(10, 10, 15, 0.9) 0%,
    rgba(10, 10, 15, 0.7) 50%,
    rgba(10, 10, 15, 0.5) 100%
  );
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
  position: relative;
  z-index: 2;
}

.light-content {
  max-width: 700px;
}

.light-badge {
  display: inline-block;
  background: rgba(139, 92, 246, 0.15);
  backdrop-filter: blur(10px);
  padding: 6px 14px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  color: #c084fc;
  letter-spacing: 1px;
  margin-bottom: 24px;
  border: 1px solid rgba(139, 92, 246, 0.3);
}

.light-title {
  font-size: 56px;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: #ffffff;
  line-height: 1.1;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}

.light-description {
  font-size: 20px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 40px;
  font-weight: 500;
}

.light-reasons {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.reason-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.reason-dot {
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #8b5cf6, #c084fc);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.reason-item:hover .reason-dot {
  transform: scale(1.5);
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
}

.reason-text {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  transition: color 0.3s ease;
}

.reason-item:hover .reason-text {
  color: #c084fc;
}

@media (max-width: 1024px) {
  .container {
    padding: 0 40px;
  }
  
  .light-title {
    font-size: 48px;
  }
  
  .light-description {
    font-size: 18px;
  }
  
  .reason-text {
    font-size: 16px;
  }
  
  .bg-overlay {
    background: linear-gradient(
      90deg,
      rgba(10, 10, 15, 0.95) 0%,
      rgba(10, 10, 15, 0.8) 100%
    );
  }
}

@media (max-width: 768px) {
  .light {
    padding: 80px 0;
  }
  
  .container {
    padding: 0 24px;
  }
  
  .light-title {
    font-size: 36px;
  }
  
  .light-description {
    font-size: 16px;
    margin-bottom: 32px;
  }
  
  .reason-text {
    font-size: 15px;
  }
  
  .light-reasons {
    gap: 16px;
  }
  
  .reason-item {
    padding: 10px 0;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 20px;
  }
  
  .light-title {
    font-size: 28px;
  }
  
  .light-description {
    font-size: 14px;
  }
  
  .reason-text {
    font-size: 14px;
  }
  
  .reason-dot {
    width: 6px;
    height: 6px;
  }
}
</style>