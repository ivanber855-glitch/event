<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <img :src="logoUrl" alt="ЕВЕНТ.РФ" class="logo-img">
        </div>
        
        <!-- Десктопное меню -->
        <nav class="nav-menu">
          <a href="#rental" class="nav-link">Аренда</a>
          <a href="#partners" class="nav-link">Партнеры</a>
          <a href="#services" class="nav-link">Услуги</a>
          <a href="#director" class="nav-link">О нас</a>
          <a href="#final" class="nav-link">Поддержка</a>
          <a href="#calculator" class="nav-link">Расчет</a>
        </nav>
        
        <div class="right-section">
          <!-- Социальные иконки -->
          <div class="social-icons">
            <a href="https://t.me/dj_versatile" target="_blank" class="social-link" rel="noopener noreferrer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.352 21.4019C21.1467 21.5901 20.9044 21.7335 20.6407 21.8227C20.377 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.17 18.85C8.77333 17.3147 6.72533 15.2667 5.19 12.87C3.49973 10.2412 2.44842 7.27118 2.12 4.18C2.09497 3.90347 2.12801 3.62474 2.21681 3.36183C2.30561 3.09892 2.44841 2.85727 2.63584 2.65228C2.82327 2.44728 3.05127 2.28371 3.30516 2.17156C3.55905 2.05941 3.83344 2.00131 4.11097 2H7.11097C7.59529 1.99522 8.06573 2.16708 8.4338 2.48421C8.80187 2.80134 9.042 3.24193 9.11097 3.72C9.23672 4.68074 9.47144 5.62275 9.81097 6.53C9.94486 6.88799 9.97361 7.27691 9.89377 7.65038C9.81394 8.02385 9.6288 8.36511 9.36097 8.63L8.09097 9.9C9.51355 12.4135 11.5865 14.4865 14.1 15.909L15.37 14.639C15.6349 14.3712 15.9762 14.1861 16.3496 14.1062C16.7231 14.0264 17.112 14.0551 17.47 14.189C18.3773 14.5285 19.3193 14.7633 20.28 14.889C20.7584 14.9582 21.1991 15.1985 21.5162 15.5667C21.8333 15.9349 22.0049 16.4054 22 16.89V16.92Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </a>
            <a href="https://vk.com/federationevent" target="_blank" class="social-link" rel="noopener noreferrer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </a>
            <a href="https://wa.me/79933999912" target="_blank" class="social-link" rel="noopener noreferrer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M16.5 14.8C16.5 14.8 15.2 15.3 14.5 13.8C14.5 13.8 13.5 11.8 12.5 10.8C11.5 9.8 9.5 8.5 9.5 8.5C9.5 8.5 8 7.5 8 9C8 10.5 10 13.5 10 13.5C10 13.5 11 15 12.5 15.5C14 16 15.5 15.5 15.5 15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.6 2.4 15.1 3.1 16.4L2 22L7.6 20.9C8.9 21.6 10.4 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </a>
            <a href="tel:+79933999912" class="social-link phone-link" rel="noopener noreferrer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M6.5 8.5H9.5V17.5H6.5V8.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M9.5 12C11 11 12.5 10.5 14 11C15.5 11.5 16 13 16 14.5V17.5H13V14.5C13 13.5 12.5 13 11.5 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </a>
          </div>
          
          <a href="#calculator" class="btn-consultation">Связаться</a>
          
          <!-- Бургер-меню для мобильных -->
          <div class="burger-wrapper">
            <button class="burger-btn" @click="toggleMenu" :class="{ active: isMenuOpen }">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Мобильное меню (оверлей) -->
    <transition name="mobile-menu-fade">
      <div class="mobile-overlay" v-if="isMenuOpen" @click="closeMenu">
        <div class="mobile-menu-container">
          <div class="mobile-menu">
            <div class="mobile-menu-header">
              <img :src="logoUrl" alt="ЕВЕНТ.РФ" class="mobile-logo">
              <button class="close-btn" @click="closeMenu">✕</button>
            </div>
            <nav class="mobile-nav">
              <a href="#rental" class="mobile-nav-link" @click="closeMenu">Аренда</a>
              <a href="#partners" class="mobile-nav-link" @click="closeMenu">Партнеры</a>
              <a href="#services" class="mobile-nav-link" @click="closeMenu">Услуги</a>
              <a href="#director" class="mobile-nav-link" @click="closeMenu">О нас</a>
              <a href="#final" class="mobile-nav-link" @click="closeMenu">Поддержка</a>
              <a href="#calculator" class="mobile-nav-link" @click="closeMenu">Расчет</a>
            </nav>
            <div class="mobile-social">
              <a href="https://t.me/dj_versatile" target="_blank" class="mobile-social-link">Telegram</a>
              <a href="https://vk.com/federationevent" target="_blank" class="mobile-social-link">VK</a>
              <a href="https://wa.me/79933999912" target="_blank" class="mobile-social-link">WhatsApp</a>
              <a href="tel:+79933999912" class="mobile-social-link phone-link">📞 Позвонить</a>
            </div>
            <a href="#calculator" class="mobile-btn" @click="closeMenu">Связаться</a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      logoUrl: new URL('../assets/__tildapng.png', import.meta.url).href,
      isMenuOpen: false,
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    handleResize() {
      if (window.innerWidth > 1100 && this.isMenuOpen) {
        this.closeMenu();
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    closeMenu() {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(8, 8, 12, 0.65);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(139, 92, 246, 0.2);
  padding: 20px 0;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.header.scrolled {
  background: rgba(8, 8, 12, 0.85);
  backdrop-filter: blur(16px);
  border-bottom-color: rgba(139, 92, 246, 0.5);
  box-shadow: 0 0 30px rgba(139, 92, 246, 0.2);
  animation: glowPulse 2s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.15);
    border-bottom-color: rgba(139, 92, 246, 0.4);
  }
  50% {
    box-shadow: 0 0 35px rgba(139, 92, 246, 0.35);
    border-bottom-color: rgba(139, 92, 246, 0.7);
  }
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 60px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.02);
}

.logo-img {
  height: 68px;
  width: auto;
  filter: drop-shadow(0 0 15px rgba(139, 92, 246, 0.4));
  transition: filter 0.3s ease;
}

.logo:hover .logo-img {
  filter: drop-shadow(0 0 25px rgba(139, 92, 246, 0.7));
}

.nav-menu {
  display: flex;
  gap: 32px;
}

.nav-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.2px;
  transition: all 0.3s ease;
  position: relative;
  padding: 8px 0;
  white-space: nowrap;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #8b5cf6, #c084fc);
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: #c084fc;
  transform: translateY(-1px);
}

.social-icons {
  display: flex;
  gap: 16px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(139, 92, 246, 0.1);
  color: #c084fc;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(139, 92, 246, 0.25);
  backdrop-filter: blur(4px);
}

.social-link:hover {
  color: white;
  transform: translateY(-4px) scale(1.05);
  background: rgba(139, 92, 246, 0.3);
  border-color: #8b5cf6;
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
}

.social-link svg {
  transition: transform 0.2s ease;
}

.social-link:hover svg {
  transform: scale(1.1);
}

.social-link.phone-link:hover {
  background: rgba(34, 197, 94, 0.3);
  border-color: #22c55e;
  box-shadow: 0 8px 25px rgba(34, 197, 94, 0.3);
}

.btn-consultation {
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  color: white;
  text-decoration: none;
  padding: 12px 28px;
  border-radius: 50px;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.3px;
  transition: all 0.3s ease;
  border: 1px solid rgba(139, 92, 246, 0.5);
  white-space: nowrap;
  position: relative;
  overflow: hidden;
}

.btn-consultation::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  transform: translate(-50%, -50%);
  transition: width 0.5s, height 0.5s;
}

.btn-consultation:hover::before {
  width: 200px;
  height: 200px;
}

.btn-consultation:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.5);
  border-color: #c084fc;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 24px;
}

.burger-wrapper {
  display: none;
}

.burger-btn {
  width: 40px;
  height: 40px;
  background: rgba(139, 92, 246, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.4);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 0;
  transition: all 0.3s ease;
}

.burger-btn span {
  display: block;
  width: 22px;
  height: 2px;
  background: #c084fc;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.burger-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.burger-btn.active span:nth-child(2) {
  opacity: 0;
}

.burger-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.burger-btn:hover {
  background: rgba(139, 92, 246, 0.25);
  border-color: #8b5cf6;
}
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  z-index: 1001;
  display: flex;
  justify-content: flex-end;
}

.mobile-menu-container {
  width: 85%;
  max-width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.mobile-menu {
  flex: 1;
  background: linear-gradient(135deg, #0a0a0f 0%, #0f0f1a 100%);
  box-shadow: -5px 0 40px rgba(0, 0, 0, 0.5);
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  border-left: 1px solid rgba(139, 92, 246, 0.3);
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(139, 92, 246, 0.2);
}

.mobile-logo {
  height: 45px;
  width: auto;
}

.close-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(139, 92, 246, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.4);
  color: #c084fc;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}

.close-btn:hover {
  background: rgba(139, 92, 246, 0.3);
  transform: rotate(90deg);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
}

.mobile-nav-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 500;
  padding: 12px 0;
  transition: 0.3s;
  display: inline-block;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.mobile-nav-link:hover {
  color: #c084fc;
  transform: translateX(8px);
  border-bottom-color: rgba(139, 92, 246, 0.3);
}

.mobile-social {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(139, 92, 246, 0.2);
}

.mobile-social-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  padding: 8px 16px;
  background: rgba(139, 92, 246, 0.1);
  border-radius: 30px;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 500;
  transition: 0.3s;
}

.mobile-social-link:hover {
  background: rgba(139, 92, 246, 0.2);
  color: #c084fc;
}

.mobile-social-link.phone-link:hover {
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
}

.mobile-btn {
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  color: white;
  text-decoration: none;
  padding: 14px;
  border-radius: 50px;
  text-align: center;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-weight: 600;
  font-size: 15px;
  margin-top: auto;
  transition: 0.3s;
  border: 1px solid rgba(139, 92, 246, 0.5);
}

.mobile-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
}

.mobile-menu-fade-enter-active,
.mobile-menu-fade-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-fade-enter-from,
.mobile-menu-fade-leave-to {
  opacity: 0;
}

@media (max-width: 1300px) {
  .nav-menu {
    gap: 24px;
  }
  .nav-link {
    font-size: 13px;
  }
}

@media (max-width: 1200px) {
  .container {
    padding: 0 40px;
  }
  .nav-menu {
    gap: 20px;
  }
  .nav-link {
    font-size: 12px;
  }
  .social-link {
    width: 42px;
    height: 42px;
  }
}

@media (max-width: 1100px) {
  .nav-menu {
    display: none;
  }
  .burger-wrapper {
    display: block;
  }
  .container {
    padding: 0 20px;
  }
  .logo-img {
    height: 50px;
  }
  .social-icons {
    gap: 10px;
  }
  .social-link {
    width: 40px;
    height: 40px;
  }
  .btn-consultation {
    padding: 8px 18px;
    font-size: 13px;
  }
}

@media (max-width: 768px) {
  .header {
    padding: 12px 0;
  }
  .logo-img {
    height: 45px;
  }
  .social-icons {
    gap: 8px;
  }
  .social-link {
    width: 38px;
    height: 38px;
  }
  .btn-consultation {
    padding: 6px 14px;
    font-size: 12px;
  }
}

@media (max-width: 600px) {
  .social-icons {
    display: none;
  }
  .btn-consultation {
    padding: 6px 14px;
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .btn-consultation {
    display: none;
  }
  .logo-img {
    height: 42px;
  }
  .container {
    padding: 0 16px;
  }
  .burger-btn {
    width: 36px;
    height: 36px;
    gap: 5px;
  }
  .burger-btn span {
    width: 18px;
  }
  .mobile-menu-container {
    width: 85%;
  }
  .mobile-menu {
    padding: 20px 20px;
  }
  .mobile-nav-link {
    font-size: 16px;
    padding: 10px 0;
  }
}

@media (max-width: 380px) {
  .logo-img {
    height: 38px;
  }
  .mobile-nav-link {
    font-size: 14px;
  }
  .mobile-social-link {
    padding: 5px 12px;
    font-size: 11px;
  }
}
</style>