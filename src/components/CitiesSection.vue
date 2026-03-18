<template>
  <section class="cities">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">География присутствия</span>
        <h2 class="section-title">Работаем по всей России</h2>
        <p class="section-description">
          Организуем мероприятия в крупнейших городах и регионах страны
        </p>
      </div>

      <div class="cities-grid">
        <div 
          v-for="city in cities" 
          :key="city.name" 
          class="city-card"
        >
          <div class="city-name">{{ city.name }}</div>
          <div class="city-count">{{ city.count }}+ мероприятий</div>
        </div>
      </div>

      <div class="regions-wrapper">
        <div class="regions-cloud">
          <span 
            v-for="region in regions" 
            :key="region" 
            class="region-tag"
          >
            {{ region }}
          </span>
        </div>
      </div>

      <div class="stats-wrapper">
        <div class="stat-item">
          <span class="stat-number">50+</span>
          <span class="stat-label">городов</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">300+</span>
          <span class="stat-label">выездов</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">24/7</span>
          <span class="stat-label">поддержка</span>
        </div>
      </div>

      <div class="action-button">
        <button class="btn-region">Обсудить выездное мероприятие</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CitiesSection',
  data() {
    return {
      cities: [
        { name: 'Москва', count: '500' },
        { name: 'Санкт-Петербург', count: '280' },
        { name: 'Ростов-на-Дону', count: '120' },
        { name: 'Краснодар', count: '150' },
        { name: 'Сочи', count: '180' }
      ],
      regions: [
        'Московская область', 'Ленинградская область', 'Краснодарский край',
        'Ставропольский край', 'Республика Крым', 'Республика Татарстан',
        'Свердловская область', 'Новосибирская область', 'Нижегородская область',
        'Самарская область', 'Челябинская область', 'Ростовская область'
      ]
    }
  }
}
</script>

<style scoped>
.cities {
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

.cities-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-bottom: 60px;
}

.city-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 28px 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.city-card:hover {
  border-color: rgba(139, 92, 246, 0.3);
  background: rgba(139, 92, 246, 0.03);
  transform: translateY(-4px);
}

.city-name {
  font-size: 20px;
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  color: #ffffff;
  margin-bottom: 8px;
}

.city-count {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
}

.regions-wrapper {
  margin-bottom: 60px;
  padding: 40px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.regions-cloud {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.region-tag {
  padding: 10px 24px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 40px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.2s ease;
  cursor: pointer;
}

.region-tag:hover {
  border-color: rgba(139, 92, 246, 0.4);
  color: #c084fc;
}

.stats-wrapper {
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-bottom: 60px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 36px;
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  color: #ffffff;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.action-button {
  text-align: center;
}

.btn-region {
  background: transparent;
  border: 1px solid rgba(139, 92, 246, 0.4);
  border-radius: 100px;
  padding: 14px 40px;
  color: #c084fc;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-region:hover {
  border-color: #8b5cf6;
  background: rgba(139, 92, 246, 0.05);
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .container {
    padding: 0 40px;
  }
  
  .section-title {
    font-size: 40px;
  }
  
  .cities-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .stats-wrapper {
    gap: 50px;
  }
}

@media (max-width: 768px) {
  .cities {
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
  
  .cities-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  .city-card {
    padding: 24px 16px;
  }
  
  .city-name {
    font-size: 18px;
  }
  
  .stats-wrapper {
    gap: 40px;
    flex-wrap: wrap;
  }
  
  .stat-number {
    font-size: 28px;
  }
  
  .regions-wrapper {
    padding: 30px 0;
  }
  
  .region-tag {
    padding: 8px 20px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 20px;
  }
  
  .section-title {
    font-size: 28px;
  }
  
  .cities-grid {
    grid-template-columns: 1fr;
  }
  
  .city-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    padding: 18px 20px;
  }
  
  .city-name {
    margin-bottom: 0;
  }
  
  .stats-wrapper {
    gap: 30px;
  }
  
  .btn-region {
    padding: 12px 32px;
    font-size: 14px;
  }
}
</style>