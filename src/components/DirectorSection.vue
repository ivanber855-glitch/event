<template>
  <section id="director" class="director">
    <div class="container">
      <div class="director-content">
        <!-- Левая часть - текст -->
        <div class="director-text">
          <span class="director-quote">«</span>
          <h2 class="director-title">
            Наша цель — сделать так,<br>
            чтобы вы захотели обратиться к нам еще раз
          </h2>
          <p class="director-description">
            Предоставляем полный комплекс услуг для организации Вашего мероприятия<br>
            любой сложности и масштаба
          </p>
          <div class="director-signature">
            <div class="signature-line"></div>
            <div class="signature-info">
              <p class="director-name">Александр Кочетов</p>
              <p class="director-position">директор агентства</p>
            </div>
          </div>
        </div>
        
        <!-- Правая часть - фото -->
        <div class="director-photo">
          <div class="photo-wrapper">
            <img :src="directorPhoto" alt="Александр Кочетов" class="photo-img">
            <div class="photo-glow"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DirectorSection',
  data() {
    return {
      directorPhoto: new URL('../assets/d.jpg', import.meta.url).href
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

.director {
  padding: 100px 0;
  background: linear-gradient(135deg, #0a0a0f 0%, #050507 100%);
  position: relative;
  overflow: hidden;
}

/* Фоновый акцент */
.director::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: radial-gradient(ellipse at 100% 50%, rgba(139, 92, 246, 0.08), transparent 70%);
  pointer-events: none;
}

.director::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30%;
  height: 30%;
  background: radial-gradient(ellipse at 0% 100%, rgba(139, 92, 246, 0.05), transparent);
  pointer-events: none;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
}

.director-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.director-text {
  position: relative;
  z-index: 2;
}

.director-quote {
  font-size: 120px;
  font-weight: 800;
  font-family: 'Space Grotesk', sans-serif;
  background: linear-gradient(135deg, #8b5cf6, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 0.8;
  display: inline-block;
  margin-bottom: 24px;
  opacity: 0.5;
}

.director-title {
  font-size: 42px;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}

.director-description {
  font-size: 18px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 48px;
  max-width: 500px;
}

.director-signature {
  display: flex;
  align-items: center;
  gap: 24px;
}

.signature-line {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #8b5cf6, #c084fc);
}

.signature-info {
  display: flex;
  flex-direction: column;
}

.director-name {
  font-size: 20px;
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  color: #ffffff;
  margin-bottom: 4px;
}

.director-position {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
}

.director-photo {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo-wrapper {
  position: relative;
  width: 100%;
  max-width: 400px;
  border-radius: 32px;
  overflow: hidden;
  aspect-ratio: 3 / 4;
}

.photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  filter: grayscale(20%);
}

.photo-wrapper:hover .photo-img {
  transform: scale(1.05);
}

.photo-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(139, 92, 246, 0.2) 0%,
    transparent 50%,
    rgba(139, 92, 246, 0.1) 100%);
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.photo-wrapper::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(135deg, #8b5cf6, #c084fc);
  border-radius: 40px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.photo-wrapper:hover::before {
  opacity: 0.3;
}

@media (max-width: 1024px) {
  .container {
    padding: 0 40px;
  }
  
  .director-title {
    font-size: 36px;
  }
  
  .director-description {
    font-size: 16px;
  }
  
  .director-content {
    gap: 50px;
  }
}

@media (max-width: 968px) {
  .director-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
  
  .director-text {
    order: 2;
  }
  
  .director-photo {
    order: 1;
  }
  
  .director-description {
    max-width: 100%;
  }
  
  .director-signature {
    justify-content: center;
  }
  
  .photo-wrapper {
    max-width: 300px;
    margin: 0 auto;
  }
  
  .director-quote {
    font-size: 80px;
  }
}

@media (max-width: 768px) {
  .director {
    padding: 70px 0;
  }
  
  .container {
    padding: 0 24px;
  }
  
  .director-title {
    font-size: 28px;
  }
  
  .director-description {
    font-size: 15px;
  }
  
  .director-name {
    font-size: 18px;
  }
  
  .director-position {
    font-size: 12px;
  }
  
  .photo-wrapper {
    max-width: 260px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 20px;
  }
  
  .director-title {
    font-size: 24px;
  }
  
  .director-quote {
    font-size: 60px;
  }
  
  .signature-line {
    width: 40px;
  }
  
  .photo-wrapper {
    max-width: 220px;
  }
}
</style>