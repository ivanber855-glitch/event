<template>
  <section class="hero">
    <!-- Фоновая фотография -->
    <div class="hero-bg">
      <img 
        :src="backgroundImage" 
        alt="Event background" 
        class="bg-image"
      />
      <div class="bg-overlay"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="title-main">ЕВЕНТ.РФ</span>
            <span class="title-sub">
              Техническое обеспечение<br>
              мероприятий под ключ
            </span>
          </h1>

          <p class="hero-description">
            Профессиональный свет, звук, светодиодные экраны,<br>
            сценические конструкции, любое ивент оборудование
          </p>

          <div class="hero-buttons">
            <button class="btn-primary">Обсудить проект</button>
            <button class="btn-secondary">Портфолио</button>
          </div>
        </div>
      </div>
    </div>

    <div class="scroll-hint">
      <span></span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      backgroundImage: new URL('../assets/a.jpg', import.meta.url).href
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Блок с фоном */
.hero-bg {
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
    105deg,
    rgba(8, 8, 12, 0.85) 0%,
    rgba(8, 8, 12, 0.6) 50%,
    rgba(139, 92, 246, 0.25) 100%
  );
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 80px;
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero-content {
  max-width: 900px;
}

.hero-title {
  margin-bottom: 32px;
}

.title-main {
  display: block;
  font-size: 80px;
  font-weight: 800;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #ffffff, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 24px;
}

.title-sub {
  display: block;
  font-size: 48px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: -0.01em;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.hero-description {
  font-size: 18px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 48px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
}

.hero-buttons {
  display: flex;
  gap: 20px;
}

.btn-primary {
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  border: none;
  padding: 14px 36px;
  border-radius: 40px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
}

.btn-secondary {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  border: 1.5px solid rgba(139, 92, 246, 0.6);
  padding: 14px 36px;
  border-radius: 40px;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  border-color: #8b5cf6;
  background: rgba(139, 92, 246, 0.15);
  transform: translateY(-2px);
}

.scroll-hint {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  opacity: 0.6;
  z-index: 2;
}

.scroll-hint span {
  width: 1px;
  height: 50px;
  background: linear-gradient(180deg, #c084fc, transparent);
  display: block;
  animation: scrollHint 2s ease-in-out infinite;
}

@keyframes scrollHint {
  0% {
    transform: scaleY(0.3);
    opacity: 0;
  }
  50% {
    transform: scaleY(1);
    opacity: 1;
  }
  100% {
    transform: scaleY(0.3);
    opacity: 0;
  }
}

@media (max-width: 1024px) {
  .container {
    padding: 0 48px;
  }
  .title-main { font-size: 64px; }
  .title-sub { font-size: 38px; }
}

@media (max-width: 768px) {
  .container {
    padding: 0 32px;
  }
  .title-main { font-size: 48px; }
  .title-sub { font-size: 28px; }
  .hero-description { font-size: 16px; }
  .hero-buttons {
    flex-direction: column;
    max-width: 280px;
  }
  .btn-primary, .btn-secondary {
    text-align: center;
  }
  .bg-overlay {
    background: linear-gradient(
      105deg,
      rgba(8, 8, 12, 0.9) 0%,
      rgba(8, 8, 12, 0.7) 60%,
      rgba(139, 92, 246, 0.3) 100%
    );
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 24px;
  }
  .title-main { font-size: 36px; }
  .title-sub { font-size: 22px; }
  .hero-description { font-size: 14px; }
}
</style>