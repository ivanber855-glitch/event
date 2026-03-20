<template>
  <section id="final" class="final">
    <div class="container">
      <div class="final-content">
        <div class="final-header">
          <span class="final-badge">Экспертная поддержка 24/7</span>
          <h2 class="final-title">
            Снимем с Вас ответственность<br>
            за техническую сторону важного мероприятия
          </h2>
          <div class="title-accent"></div>
        </div>

        <!-- Основной блок с преимуществами -->
        <div class="final-main">
          <div class="consultation-block">
            <div class="consultation-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.6 2.4 15.1 3.1 16.4L2 22L7.6 20.9C8.9 21.6 10.4 22 12 22Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M8 12H8.01M12 12H12.01M16 12H16.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <p class="consultation-text">
              Вы можете в любое время обратиться к нам за помощью или консультацией,<br>
              мы будем давать подсказки и рекомендации
            </p>
          </div>
          <div class="recommendations-grid">
            <div class="recommendation-item">
              <div class="rec-number">01</div>
              <div class="rec-content">
                <h4 class="rec-title">Тяжелый дым</h4>
                <p class="rec-text">Сколько машин нужно под ваш зал</p>
              </div>
            </div>
            <div class="recommendation-item">
              <div class="rec-number">02</div>
              <div class="rec-content">
                <h4 class="rec-title">Экраны</h4>
                <p class="rec-text">Какого размера использовать</p>
              </div>
            </div>
            <div class="recommendation-item">
              <div class="rec-number">03</div>
              <div class="rec-content">
                <h4 class="rec-title">Экономия</h4>
                <p class="rec-text">Где можно сэкономить, а на чем — нет</p>
              </div>
            </div>
            <div class="recommendation-item">
              <div class="rec-number">04</div>
              <div class="rec-content">
                <h4 class="rec-title">Музыка</h4>
                <p class="rec-text">Какой формат лучше выбрать</p>
              </div>
            </div>
            <div class="recommendation-item">
              <div class="rec-number">05</div>
              <div class="rec-content">
                <h4 class="rec-title">Освещение</h4>
                <p class="rec-text">Какое необходимо для вашей задачи</p>
              </div>
            </div>
            <div class="recommendation-item">
              <div class="rec-number">06</div>
              <div class="rec-content">
                <h4 class="rec-title">Доставка</h4>
                <p class="rec-text">Как организовать логистику без проблем</p>
              </div>
            </div>
          </div>
        </div>

        <div class="final-cta">
          <div class="cta-line"></div>
          <p class="cta-text">
            Полный комплекс услуг для мероприятий любой сложности<br>
            от профессионалов с 8-летним опытом
          </p>
          <button class="cta-button" @click="scrollToCalculator">
            Получить консультацию эксперта
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FinalSection',
  methods: {
    scrollToCalculator() {
      const calculatorEl = document.querySelector('.calculator')
      if (calculatorEl) {
        calculatorEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

.final {
  padding: 100px 0;
  background: linear-gradient(180deg, #0a0a0f 0%, #020207 100%);
  position: relative;
  border-top: 1px solid rgba(139, 92, 246, 0.2);
  border-bottom: 1px solid rgba(139, 92, 246, 0.2);
}

.final::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at 30% 50%, rgba(139, 92, 246, 0.05), transparent 70%);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 60px;
  position: relative;
  z-index: 2;
}

.final-header {
  text-align: center;
  margin-bottom: 60px;
}

.final-badge {
  display: inline-block;
  background: rgba(139, 92, 246, 0.12);
  padding: 6px 16px;
  border-radius: 40px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  color: #c084fc;
  margin-bottom: 24px;
  border: 1px solid rgba(139, 92, 246, 0.3);
}

.final-title {
  font-size: 44px;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}

.title-accent {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #8b5cf6, #c084fc);
  margin: 0 auto;
}

.final-main {
  background: rgba(15, 15, 25, 0.5);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 32px;
  padding: 48px;
  margin-bottom: 48px;
}

.consultation-block {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom: 1px solid rgba(139, 92, 246, 0.15);
}

.consultation-icon {
  flex-shrink: 0;
  color: #c084fc;
}

.consultation-text {
  font-size: 18px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

/* Сетка рекомендаций */
.recommendations-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.recommendation-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 8px 0;
  transition: all 0.3s ease;
}

.recommendation-item:hover {
  transform: translateX(8px);
}

.rec-number {
  font-size: 14px;
  font-weight: 600;
  font-family: 'Space Grotesk', monospace;
  color: #8b5cf6;
  background: rgba(139, 92, 246, 0.1);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  flex-shrink: 0;
}

.rec-content {
  flex: 1;
}

.rec-title {
  font-size: 18px;
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  color: #ffffff;
  margin-bottom: 6px;
}

.rec-text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.4;
}

.final-cta {
  text-align: center;
}

.cta-line {
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, #8b5cf6, #c084fc);
  margin: 0 auto 32px;
}

.cta-text {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 32px;
  line-height: 1.5;
}

.cta-button {
  background: transparent;
  border: 1.5px solid rgba(139, 92, 246, 0.5);
  border-radius: 60px;
  padding: 14px 40px;
  color: #c084fc;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.cta-button:hover {
  background: rgba(139, 92, 246, 0.1);
  border-color: #8b5cf6;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.2);
}

.cta-button svg {
  transition: transform 0.2s ease;
}

.cta-button:hover svg {
  transform: translateX(4px);
}

@media (max-width: 1024px) {
  .container {
    padding: 0 40px;
  }
  
  .final-title {
    font-size: 36px;
  }
  
  .final-main {
    padding: 36px;
  }
  
  .consultation-text {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .final {
    padding: 70px 0;
  }
  
  .container {
    padding: 0 24px;
  }
  
  .final-title {
    font-size: 28px;
  }
  
  .final-main {
    padding: 28px;
  }
  
  .consultation-block {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
  
  .consultation-icon {
    margin: 0 auto;
  }
  
  .recommendations-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .recommendation-item {
    padding: 4px 0;
  }
  
  .cta-text {
    font-size: 16px;
  }
  
  .cta-button {
    padding: 12px 32px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 20px;
  }
  
  .final-title {
    font-size: 24px;
  }
  
  .final-main {
    padding: 20px;
  }
  
  .consultation-text br {
    display: none;
  }
  
  .rec-number {
    width: 32px;
    height: 32px;
    font-size: 12px;
  }
  
  .rec-title {
    font-size: 16px;
  }
  
  .rec-text {
    font-size: 12px;
  }
  
  .cta-button {
    width: 100%;
    justify-content: center;
  }
}
</style>