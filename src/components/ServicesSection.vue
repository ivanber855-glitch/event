<template>
  <section id="services" class="services-offer">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Что мы можем предложить</span>
        <h2 class="section-title">Наши услуги</h2>
        <p class="section-description">
          Профессиональное оборудование и услуги для мероприятий любого формата
        </p>
      </div>

      <div class="services-grid">
        <div 
          v-for="service in services" 
          :key="service.id" 
          class="service-card"
          @click="openModal(service)"
        >
          <div class="service-icon">{{ service.icon }}</div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-subtitle">{{ service.subtitle }}</p>
          <div class="service-price" v-if="service.priceFrom">от {{ service.priceFrom }}</div>
          <div class="service-btn-wrapper">
            <button class="service-btn">Подробнее</button>
          </div>
        </div>
      </div>
    </div>

    <ServicesModal 
      v-if="selectedService" 
      :service="selectedService" 
      @close="selectedService = null"
      @add="addToCalculator"
    />
  </section>
</template>

<script>
import ServicesModal from './ServicesModal.vue'

export default {
  name: 'ServicesSection',
  components: {
    ServicesModal
  },
  data() {
    return {
      selectedService: null,
      services: [
        {
          id: 1,
          icon: '💡',
          title: 'Световое оборудование',
          subtitle: 'Свет, стойки, монтаж сцены',
          priceFrom: '2 000р',
          description: `<p>Профессиональное световое оборудование для мероприятий любого масштаба. Создаем уникальную атмосферу с помощью современного света.</p>`,
          packages: [
            { name: 'Мини', price: 'от 2 000р', description: 'Т-образные стойки, 2шт' },
            { name: 'Средний', price: 'от 25 000р', description: '4 тотемных световых стойки по 2 прибора типа BEAM и WASH + Технический специалист + Доставка + Монтаж/демонтаж' },
            { name: 'Средний плюс', price: 'от 30 000р', description: '6 тотемных световых стоек по 2 прибора типа BEAM и WASH + Хейзер + Технический специалист + Доставка + Монтаж/демонтаж' }
          ],
          equipment: [
            { name: 'beam spot 13 r SHEHDS', price: '2 500р/сутки' },
            { name: 'big dippe', price: '2 500р/сутки' },
            { name: 'sharpi', price: '2 500р/сутки' },
            { name: 'Sheheds 19 15 zoom', price: '2 000р/сутки' },
            { name: 'Led par', price: '200р/сутки' }
          ]
        },
        {
          id: 2,
          icon: '🔊',
          title: 'Звуковое оборудование',
          subtitle: 'Для мероприятий от 10 до 700 человек',
          priceFrom: '500р/сутки',
          description: `<p>Профессиональное звуковое оборудование для мероприятий любого формата. От уютных домашних вечеринок до масштабных свадеб и корпоративов.</p>`,
          packages: [
            { name: 'Сверх Микро', price: 'от 500р/сутки', description: 'До 10 человек. 1 Сателлит Leem spa 15, кабель aux, мощность 200w' },
            { name: 'Микро', price: 'от 1 000р', description: 'До 20 человек. 2 сателлита Leem spa 15, микшерный пульт, мощность 400w' },
            { name: 'Мини', price: 'от 2 000р', description: '2 сателлита ZTX 15, микшер ZTX 8 каналов, микрофоны 2шт' },
            { name: 'Средний', price: 'от 3 000р', description: '2 топа JBL 615, микрофоны 2шт, микшерный пульт behringer 10 каналов' },
            { name: 'Средний плюс', price: 'от 4 000р', description: '2 топа RCF 715 MK4, микрофоны 2шт, микшерный пульт RCF FX' },
            { name: 'Оптимальный', price: 'от 6 000р', description: '2 топа RCF 915, 2 сабвуфера RCF, микшерный пульт RCF' },
            { name: 'Комплект свадьба', price: 'от 10 000р', description: '2 топа rcf 915 + 2 топа rcf 715 + 2 сабвуфера rcf, микрофоны 4шт' }
          ]
        },
        {
          id: 3,
          icon: '💨',
          title: 'Тяжелый дым',
          subtitle: 'Волшебный эффект для вашего мероприятия',
          priceFrom: '8 000р',
          description: `<p>Тяжелый дым - это роскошный, эксклюзивный, невероятно красивый и волшебный эффект, который запомнится всем. Настоящие облака будут стелиться у ваших ног!</p>`,
          packages: [
            { name: 'Базовый пакет', price: 'от 8 000р', description: '1 машина тяжелого дыма, оператор, доставка' },
            { name: 'Расширенный', price: 'от 15 000р', description: '2 машины тяжелого дыма, оператор, доставка' }
          ]
        },
        {
          id: 4,
          icon: '🎆',
          title: 'Пиротехника',
          subtitle: 'Спецэффекты и фейерверки',
          priceFrom: '7 000р',
          description: `<p>Профессиональная пиротехника для вашего мероприятия. Фонтаны, хлопушки, бенгальские огни и многое другое.</p>`,
          packages: [
            { name: 'Стартовый', price: 'от 7 000р', description: 'Салютные батареи, фонтаны холодного огня' },
            { name: 'Премиум', price: 'от 20 000р', description: 'Комбинированный салют, пиротехнические конструкции' }
          ]
        },
        {
          id: 5,
          icon: '🎤',
          title: 'Персонал',
          subtitle: 'Диджеи, аниматоры, ведущие',
          priceFrom: 'Индивидуально',
          description: `<p>Мы готовы сделать ваше мероприятие незабываемым. Наша команда опытных профессионалов поможет организовать любое событие.</p>`,
          packages: [
            { name: 'Диджей', price: 'от 10 000р', description: 'Профессиональный диджей, оборудование' },
            { name: 'Ведущий', price: 'от 15 000р', description: 'Ведущий мероприятия, сценарий' },
            { name: 'Аниматор', price: 'от 5 000р/час', description: 'Аниматор для детей или взрослых' },
            { name: 'Комплект', price: 'от 30 000р', description: 'Диджей + ведущий + световик' }
          ]
        },
        {
          id: 6,
          icon: '🫧',
          title: 'Пенные вечеринки',
          subtitle: 'Море пузырьков и веселья',
          priceFrom: '7 000р',
          description: `<p>Пенная вечеринка - это уникальное развлечение, которое подарит вашему мероприятию незабываемые моменты радости и веселья.</p>`,
          packages: [
            { name: 'Стандарт', price: 'от 7 000р', description: 'Пенная пушка, до 20 человек, 30 минут шоу' },
            { name: 'Премиум', price: 'от 12 000р', description: '2 пенные пушки, до 50 человек, 60 минут шоу' }
          ]
        },
        {
          id: 7,
          icon: '🎨',
          title: 'Фестивали красок',
          subtitle: 'Яркое событие для всех',
          priceFrom: '20 000р',
          description: `<p>Фестиваль красок - это яркое событие, где участники могут насладиться атмосферой праздника.</p>`,
          packages: [
            { name: 'Стандарт', price: 'от 20 000р', description: 'Краски 100 пакетов, ведущий, музыкальное сопровождение' },
            { name: 'Премиум', price: 'от 35 000р', description: 'Краски 200 пакетов, ведущий, диджей, фотограф' }
          ]
        },
        {
          id: 8,
          icon: '📦',
          title: 'Полиграфия и мерч',
          subtitle: 'Фирменная продукция и атрибутика',
          priceFrom: 'Индивидуально',
          description: `<p>Мы производим мерч и атрибутику для форумов, мероприятий и корпоративных клиентов.</p>`,
          packages: [
            { name: 'Футболки', price: 'от 800р/шт', description: 'Печать логотипа, любой тираж' },
            { name: 'Бейсболки', price: 'от 600р/шт', description: 'Вышивка или печать' },
            { name: 'Блокноты', price: 'от 300р/шт', description: 'С логотипом, любой тираж' },
            { name: 'Пакеты', price: 'от 150р/шт', description: 'Бумажные или тканевые с логотипом' }
          ]
        }
      ]
    }
  },
  methods: {
    openModal(service) {
      this.selectedService = service
    },
    addToCalculator(serviceName) {
      this.$emit('add-to-calculator', serviceName)
    }
  }
}
</script>

<style scoped>
.services-offer {
  padding: 100px 0;
  background: #0a0a0f;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
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
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.section-description {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.5);
  max-width: 600px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.service-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  min-height: 320px;
}

.service-card:hover {
  border-color: rgba(139, 92, 246, 0.4);
  background: rgba(139, 92, 246, 0.03);
  transform: translateY(-8px);
}

.service-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.service-title {
  font-size: 22px;
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  color: #ffffff;
  margin-bottom: 8px;
}

.service-subtitle {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 16px;
  line-height: 1.4;
  min-height: 40px;
}

.service-price {
  font-size: 20px;
  font-weight: 700;
  color: #c084fc;
  margin-bottom: 20px;
}

.service-btn-wrapper {
  margin-top: auto;
}

.service-btn {
  background: transparent;
  border: 1px solid rgba(139, 92, 246, 0.4);
  border-radius: 40px;
  padding: 10px 24px;
  color: #c084fc;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.service-card:hover .service-btn {
  border-color: #8b5cf6;
  background: rgba(139, 92, 246, 0.1);
}

@media (max-width: 1200px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1024px) {
  .container {
    padding: 0 40px;
  }
  
  .section-title {
    font-size: 40px;
  }
}

@media (max-width: 768px) {
  .services-offer {
    padding: 70px 0;
  }
  
  .container {
    padding: 0 24px;
  }
  
  .section-title {
    font-size: 32px;
  }
  
  .section-description {
    font-size: 16px;
  }
  
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  .service-card {
    padding: 24px 16px;
    min-height: 280px;
  }
  
  .service-title {
    font-size: 18px;
  }
  
  .service-icon {
    font-size: 36px;
  }
  
  .service-subtitle {
    min-height: 35px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 20px;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .service-card {
    min-height: auto;
  }
}
</style>