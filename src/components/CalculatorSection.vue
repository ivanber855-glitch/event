<template>
  <section id="calculator" class="calculator">
    <div class="container">
      <div class="calculator-header">
        <span class="calculator-badge">Получите расчет</span>
        <h2 class="calculator-title">
          Ответьте на несколько вопросов<br>
          и получите расчет стоимости
        </h2>
      </div>

      <div class="calculator-wrapper">
        <!-- Основная форма -->
        <div class="calculator-form">
          <form @submit.prevent="submitForm">
            <!-- Вопрос 1: Тип события -->
            <div class="form-group">
              <label class="form-label">Какое у Вас событие?</label>
              <div class="options-grid">
                <button 
                  v-for="option in eventTypes" 
                  :key="option"
                  type="button"
                  class="option-btn"
                  :class="{ active: form.eventType === option }"
                  @click="form.eventType = option"
                >
                  {{ option }}
                </button>
              </div>
            </div>

            <!-- Вопрос 2: Услуги -->
            <div class="form-group">
              <label class="form-label">Какие услуги требуются?</label>
              <div class="options-grid services-grid">
                <label 
                  v-for="service in allServices" 
                  :key="service"
                  class="service-checkbox"
                >
                  <input 
                    type="checkbox" 
                    :value="service"
                    v-model="selectedServices"
                  >
                  <span>{{ service }}</span>
                </label>
              </div>
            </div>

            <!-- Вопрос 3: Дата -->
            <div class="form-group">
              <label class="form-label">Когда будет мероприятие?</label>
              <input 
                type="date" 
                class="form-input"
                v-model="form.date"
              >
            </div>

            <!-- Вопрос 4: Дополнительная информация -->
            <div class="form-group">
              <label class="form-label">Дополнительная информация</label>
              <textarea 
                class="form-textarea"
                rows="4"
                placeholder="Что-то, что нам необходимо знать..."
                v-model="form.additionalInfo"
              ></textarea>
            </div>

            <!-- Контактные данные -->
            <div class="form-row">
              <div class="form-group half">
                <label class="form-label">Ваше имя</label>
                <input 
                  type="text" 
                  class="form-input"
                  :class="{ error: errors.name }"
                  placeholder="Иван Смирнов"
                  v-model="form.name"
                  @blur="validateName"
                >
                <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
              </div>
              <div class="form-group half">
                <label class="form-label">Ваш телефон</label>
                <input 
                  type="tel" 
                  class="form-input"
                  :class="{ error: errors.phone }"
                  placeholder="+7 (999) 123-45-67"
                  v-model="form.phone"
                  @input="formatPhone"
                  @blur="validatePhone"
                >
                <span class="error-message" v-if="errors.phone">{{ errors.phone }}</span>
              </div>
            </div>

            <button type="submit" class="submit-btn" :disabled="!isFormValid || isLoading">
              <span v-if="isLoading">Отправка...</span>
              <span v-else>Отправить заявку</span>
              <svg v-if="!isLoading" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </form>
        </div>

        <!-- Корзина выбранных услуг (сбоку) -->
        <div class="services-cart" :class="{ 'has-items': selectedServices.length > 0 }">
          <div class="cart-header">
            <div class="cart-icon">📋</div>
            <h3 class="cart-title">Ваш заказ</h3>
            <span class="cart-count" v-if="selectedServices.length > 0">{{ selectedServices.length }}</span>
          </div>
          
          <div class="cart-content" v-if="selectedServices.length > 0">
            <div 
              v-for="service in selectedServices" 
              :key="service" 
              class="cart-item"
            >
              <span class="cart-item-name">{{ service }}</span>
              <button class="cart-item-remove" @click="removeService(service)">✕</button>
            </div>
          </div>
          
          <div class="cart-empty" v-else>
            <div class="empty-icon">🛒</div>
            <p>Выберите услуги<br>из списка слева</p>
          </div>
          
          <div class="cart-footer" v-if="selectedServices.length > 0">
            <button class="cart-clear" @click="clearAllServices">Очистить все</button>
            <div class="cart-total">
              <span>Всего услуг:</span>
              <strong>{{ selectedServices.length }}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CalculatorSection',
  data() {
    return {
      apiUrl: '/api/orders',
      isLoading: false,
      eventTypes: ['Торжество', 'День рождения', 'Вечеринка', 'Фестиваль красок', 'Пенное шоу', 'Другое'],
      allServices: [
        'Звуковое оборудование',
        'Световое оборудование',
        'Тяжелый дым',
        'Пиротехника',
        'Услуги персонала (диджей, аниматор, ведущий)',
        'Караоке на дому',
        'Пенная вечеринка',
        'Фестиваль красок',
        'Другое'
      ],
      selectedServices: [],
      form: {
        eventType: '',
        date: '',
        additionalInfo: '',
        name: '',
        phone: ''
      },
      errors: {
        name: '',
        phone: ''
      }
    }
  },
  computed: {
    isFormValid() {
      return this.form.name.trim() !== '' && 
             this.errors.name === '' && 
             this.form.phone.trim() !== '' && 
             this.errors.phone === ''
    }
  },
  watch: {
    selectedServices: {
      handler(newVal) {
        localStorage.setItem('selectedServices', JSON.stringify(newVal))
      },
      deep: true
    }
  },
  mounted() {
    const saved = localStorage.getItem('selectedServices')
    if (saved) {
      this.selectedServices = JSON.parse(saved)
    }
  },
  methods: {
    validateName() {
      if (!this.form.name.trim()) {
        this.errors.name = 'Введите ваше имя'
      } else if (this.form.name.trim().length < 2) {
        this.errors.name = 'Имя должно содержать минимум 2 символа'
      } else {
        this.errors.name = ''
      }
    },
    
    formatPhone(event) {
      let value = event.target.value.replace(/\D/g, '')
      
      if (value.length === 0) {
        this.form.phone = ''
        return
      }
      
      let formatted = ''
      
      if (value.startsWith('7') || value.startsWith('8')) {
        if (value.startsWith('8')) {
          value = '7' + value.substring(1)
        }
        formatted = '+7'
        
        if (value.length > 1) {
          formatted += ' (' + value.substring(1, 4)
        }
        if (value.length >= 5) {
          formatted += ') ' + value.substring(4, 7)
        }
        if (value.length >= 8) {
          formatted += '-' + value.substring(7, 9)
        }
        if (value.length >= 10) {
          formatted += '-' + value.substring(9, 11)
        }
      } else {
        formatted = value
      }
      
      this.form.phone = formatted.trim()
      this.validatePhone()
    },
    
    validatePhone() {
      const phone = this.form.phone.replace(/\D/g, '')
      
      if (!phone) {
        this.errors.phone = 'Введите номер телефона'
      } else if (phone.length === 11 && (phone.startsWith('7') || phone.startsWith('8'))) {
        this.errors.phone = ''
      } else if (phone.length === 10) {
        this.errors.phone = ''
      } else {
        this.errors.phone = 'Введите корректный номер (10 или 11 цифр)'
      }
    },
    
    addService(serviceName) {
      if (!this.selectedServices.includes(serviceName)) {
        this.selectedServices.push(serviceName)
        this.showNotification(`✓ "${serviceName}" добавлена в заказ`)
      } else {
        this.showNotification(`"${serviceName}" уже в заказе`, 'warning')
      }
    },
    
    removeService(serviceName) {
      const index = this.selectedServices.indexOf(serviceName)
      if (index > -1) {
        this.selectedServices.splice(index, 1)
        this.showNotification(`✕ "${serviceName}" удалена из заказа`, 'remove')
      }
    },
    
    clearAllServices() {
      if (this.selectedServices.length > 0) {
        this.selectedServices = []
        this.showNotification('Все услуги удалены из заказа', 'clear')
      }
    },
    
    async submitForm() {
      this.validateName()
      this.validatePhone()
      
      if (!this.isFormValid) {
        this.showNotification('Пожалуйста, заполните все поля корректно', 'warning')
        return
      }
      
      this.isLoading = true
      
      const orderData = {
        name: this.form.name.trim(),
        phone: this.form.phone,
        eventType: this.form.eventType || 'не указано',
        services: this.selectedServices,
        date: this.form.date || 'не указана',
        additionalInfo: this.form.additionalInfo || 'нет'
      }
      
      try {
        const response = await fetch(this.apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData)
        })
        
        const result = await response.json()
        
        if (result.success) {
          this.showNotification('✅ Заявка отправлена! Мы свяжемся с вами', 'success')
          this.resetForm()
        } else {
          throw new Error(result.error || 'Ошибка сервера')
        }
        
      } catch (error) {
        console.error('Ошибка отправки:', error)
        this.showNotification('❌ Ошибка отправки. Попробуйте позже', 'error')
      } finally {
        this.isLoading = false
      }
    },
    
    showNotification(message, type = 'success') {
      const colors = {
        success: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
        warning: 'linear-gradient(135deg, #f59e0b, #d97706)',
        error: 'linear-gradient(135deg, #ef4444, #dc2626)',
        remove: 'linear-gradient(135deg, #ef4444, #dc2626)',
        clear: 'linear-gradient(135deg, #6b7280, #4b5563)'
      }
      
      const notification = document.createElement('div')
      notification.textContent = message
      notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${colors[type] || colors.success};
        color: white;
        padding: 12px 24px;
        border-radius: 12px;
        font-size: 14px;
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      `
      document.body.appendChild(notification)
      
      setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease'
        setTimeout(() => notification.remove(), 300)
      }, 3000)
    },
    
    resetForm() {
      this.form = {
        eventType: '',
        date: '',
        additionalInfo: '',
        name: '',
        phone: ''
      }
      this.selectedServices = []
      this.errors = {
        name: '',
        phone: ''
      }
      localStorage.removeItem('selectedServices')
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

.calculator {
  padding: 100px 0;
  background: linear-gradient(180deg, #0a0a0f 0%, #050507 100%);
  position: relative;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
}

.calculator-header {
  text-align: center;
  margin-bottom: 60px;
}

.calculator-badge {
  display: inline-block;
  background: rgba(139, 92, 246, 0.1);
  padding: 6px 14px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
  color: #c084fc;
  margin-bottom: 20px;
}

.calculator-title {
  font-size: 40px;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

/* Двухколоночная структура */
.calculator-wrapper {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 32px;
  align-items: start;
}

/* Форма */
.calculator-form {
  background: rgba(20, 20, 30, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 32px;
  padding: 48px;
}

.form-group {
  margin-bottom: 32px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 32px;
}

.half {
  margin-bottom: 0;
}

.form-label {
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 16px;
  font-family: 'Space Grotesk', sans-serif;
}

.options-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.option-btn {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 40px;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;
}

.option-btn:hover {
  border-color: rgba(139, 92, 246, 0.5);
  color: #c084fc;
}

.option-btn.active {
  background: rgba(139, 92, 246, 0.15);
  border-color: #8b5cf6;
  color: #c084fc;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.service-checkbox {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.service-checkbox:hover {
  background: rgba(139, 92, 246, 0.05);
  border-color: rgba(139, 92, 246, 0.3);
}

.service-checkbox input {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #8b5cf6;
}

.service-checkbox span {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Inter', sans-serif;
}

.form-input, .form-textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 14px 18px;
  font-size: 15px;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
}

.form-input.error, .form-textarea.error {
  border-color: #ef4444;
  box-shadow: 0 0 0 1px rgba(239, 68, 68, 0.3);
}

.form-input:focus, .form-textarea:focus {
  outline: none;
  border-color: #8b5cf6;
  background: rgba(139, 92, 246, 0.05);
}

.form-input::placeholder, .form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

.error-message {
  display: block;
  font-size: 12px;
  color: #ef4444;
  margin-top: 6px;
  margin-left: 4px;
}

.form-textarea {
  resize: vertical;
}

.submit-btn {
  width: 100%;
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  border: none;
  border-radius: 60px;
  padding: 16px 32px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.services-cart {
  background: rgba(20, 20, 30, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 32px;
  padding: 24px;
  position: sticky;
  top: 120px;
  transition: all 0.3s ease;
}

.services-cart.has-items {
  border-color: rgba(139, 92, 246, 0.5);
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.2);
}

.cart-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(139, 92, 246, 0.2);
}

.cart-icon {
  font-size: 24px;
}

.cart-title {
  font-size: 18px;
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  color: #ffffff;
  margin: 0;
  flex: 1;
}

.cart-count {
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 20px;
}

.cart-content {
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.cart-item-name {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  flex: 1;
  padding-right: 12px;
}

.cart-item-remove {
  background: rgba(239, 68, 68, 0.2);
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: #ef4444;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-item-remove:hover {
  background: #ef4444;
  color: white;
  transform: scale(1.1);
}

.cart-empty {
  text-align: center;
  padding: 40px 20px;
}

.empty-icon {
  font-size: 48px;
  margin-bottom: 12px;
  opacity: 0.5;
}

.cart-empty p {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
  line-height: 1.4;
}

.cart-footer {
  padding-top: 16px;
  border-top: 1px solid rgba(139, 92, 246, 0.2);
}

.cart-clear {
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 40px;
  padding: 10px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 12px;
}

.cart-clear:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: #ef4444;
  color: #ef4444;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}

.cart-total strong {
  font-size: 20px;
  color: #c084fc;
}

/* Анимации */
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOutRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}

@media (max-width: 1024px) {
  .container {
    padding: 0 40px;
  }
  
  .calculator-title {
    font-size: 36px;
  }
  
  .calculator-form {
    padding: 36px;
  }
}

@media (max-width: 968px) {
  .calculator-wrapper {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .services-cart {
    position: static;
    max-width: 400px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .calculator {
    padding: 70px 0;
  }
  
  .container {
    padding: 0 24px;
  }
  
  .calculator-title {
    font-size: 28px;
  }
  
  .calculator-form {
    padding: 28px;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .options-grid {
    gap: 10px;
  }
  
  .option-btn {
    padding: 8px 18px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 20px;
  }
  
  .calculator-title {
    font-size: 24px;
  }
  
  .calculator-form {
    padding: 24px;
  }
  
  .form-label {
    font-size: 14px;
  }
  
  .option-btn {
    padding: 6px 14px;
    font-size: 12px;
  }
  
  .service-checkbox span {
    font-size: 13px;
  }
  
  .submit-btn {
    padding: 14px 24px;
    font-size: 14px;
  }
}
</style>