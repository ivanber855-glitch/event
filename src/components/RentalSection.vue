<template>
  <section id="rental" class="rental">
    <div class="rental-bg">
      <img 
        :src="backgroundImage" 
        alt="Equipment background" 
        class="bg-image"
      />
      <div class="bg-overlay"></div>
    </div>

    <div class="container">
      <div class="rental-content">
        <div class="rental-text">
          <span class="rental-badge">Аренда</span>
          <h2 class="rental-title">
            оборудования<br>
            для вашего мероприятия
          </h2>
          <button class="rental-btn" @click="scrollToServices">Перейти в каталог</button>
        </div>
        <div class="rental-equipment">
          <div class="equipment-grid">
            <div class="equipment-item" @click="scrollToServices">Световое оборудование</div>
            <div class="equipment-item" @click="scrollToServices">Звуковое оборудование</div>
            <div class="equipment-item" @click="scrollToServices">LED экраны</div>
            <div class="equipment-item" @click="scrollToServices">Сценические конструкции</div>
            <div class="equipment-item" @click="scrollToServices">Спецэффекты</div>
            <div class="equipment-item" @click="scrollToServices">DJ оборудование</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RentalSection',
  data() {
    return {
      backgroundImage: new URL('../assets/b.jpg', import.meta.url).href
    }
  },
  methods: {
    scrollToServices() {
      const servicesSection = document.getElementById('services')
      if (servicesSection) {
        servicesSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        })
      }
    }
  }
}
</script>

<style scoped>
.rental {
  position: relative;
  padding: 100px 0;
  overflow: hidden;
}

.rental-bg {
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
    rgba(10, 10, 15, 0.95) 0%,
    rgba(10, 10, 15, 0.85) 50%,
    rgba(10, 10, 15, 0.7) 100%
  );
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
  position: relative;
  z-index: 2;
}

.rental-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.rental-badge {
  display: inline-block;
  background: rgba(139, 92, 246, 0.15);
  backdrop-filter: blur(10px);
  padding: 6px 14px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
  color: #c084fc;
  margin-bottom: 24px;
}

.rental-title {
  font-size: 48px;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 40px;
  letter-spacing: -0.02em;
}

.rental-btn {
  background: transparent;
  border: 1px solid rgba(139, 92, 246, 0.5);
  border-radius: 100px;
  padding: 14px 40px;
  color: #c084fc;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.rental-btn:hover {
  border-color: #8b5cf6;
  background: rgba(139, 92, 246, 0.15);
  transform: translateY(-2px);
}

.equipment-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.equipment-item {
  background: rgba(10, 10, 15, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 24px;
  padding: 20px 24px;
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  cursor: pointer;
}

.equipment-item:hover {
  border-color: rgba(139, 92, 246, 0.5);
  background: rgba(139, 92, 246, 0.1);
  transform: translateX(4px);
}

@media (max-width: 1024px) {
  .container {
    padding: 0 40px;
  }
  
  .rental-title {
    font-size: 40px;
  }
  
  .equipment-grid {
    gap: 14px;
  }
  
  .equipment-item {
    padding: 18px 20px;
    font-size: 15px;
  }
  
  .bg-overlay {
    background: linear-gradient(
      90deg,
      rgba(10, 10, 15, 0.95) 0%,
      rgba(10, 10, 15, 0.9) 100%
    );
  }
}

@media (max-width: 768px) {
  .rental {
    padding: 70px 0;
  }
  
  .container {
    padding: 0 24px;
  }
  
  .rental-content {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  
  .rental-title {
    font-size: 32px;
    margin-bottom: 32px;
  }
  
  .equipment-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .equipment-item {
    padding: 16px 20px;
    text-align: center;
  }
  
  .equipment-item:hover {
    transform: translateY(-2px);
  }
  
  .bg-overlay {
    background: rgba(10, 10, 15, 0.9);
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 20px;
  }
  
  .rental-title {
    font-size: 28px;
  }
  
  .rental-btn {
    padding: 12px 32px;
    font-size: 14px;
  }
  
  .equipment-item {
    padding: 14px 20px;
    font-size: 14px;
  }
}
</style>