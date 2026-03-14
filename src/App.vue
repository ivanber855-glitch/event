<template>
  <div class="app">
    <Header />
    <main>
      <HeroSection />
      <CitiesSection />
      <RentalSection />
      <PartnersSection />
      <LightSection />
      <ServicesSection @add-to-calculator="addToCalculator" />
      <CalculatorSection ref="calculator" />
       <DirectorSection />
       <FinalSection />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HeroSection from './components/HeroSection.vue'
import CitiesSection from './components/CitiesSection.vue'
import RentalSection from './components/RentalSection.vue'
import PartnersSection from './components/PartnersSection.vue'
import LightSection from './components/LightSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import CalculatorSection from './components/CalculatorSection.vue'
import DirectorSection from './components/DirectorSection.vue'
import FinalSection from './components/FinalSection.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    HeroSection,
    CitiesSection,
    RentalSection,
    PartnersSection,
    LightSection,
    ServicesSection,
    CalculatorSection,
    DirectorSection,
      FinalSection
  },
  methods: {
    addToCalculator(serviceName) {
      // Проверяем наличие компонента калькулятора
      if (this.$refs.calculator) {
        // Вызываем метод addService у компонента калькулятора
        this.$refs.calculator.addService(serviceName)
        // Плавно прокручиваем к форме калькулятора
        setTimeout(() => {
          const calculatorEl = document.querySelector('.calculator')
          if (calculatorEl) {
            calculatorEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }
        }, 100)
      } else {
        console.warn('Calculator component not found')
        // Запасной вариант - показать уведомление
        alert(`Услуга "${serviceName}" добавлена в заявку!`)
      }
    }
  }
}
</script>

<style>
/* Глобальные стили */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #0a0a0f;
  color: #ffffff;
  overflow-x: hidden;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  margin-top: 100px;
}

/* Плавный скролл */
html {
  scroll-behavior: smooth;
}

/* Кастомный скроллбар */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a2e;
}

::-webkit-scrollbar-thumb {
  background: #8b5cf6;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a78bfa;
}
</style>