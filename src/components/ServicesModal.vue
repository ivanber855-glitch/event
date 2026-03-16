<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <button class="modal-close" @click="closeModal">✕</button>
      
      <div class="modal-header">
        <h3 class="modal-title">{{ service.title }}</h3>
        <p class="modal-subtitle">{{ service.subtitle }}</p>
      </div>
      
      <div class="modal-body">
        <div v-html="service.description" class="modal-description"></div>
        
        <div v-if="service.packages" class="packages-list">
          <div v-for="pkg in service.packages" :key="pkg.name" class="package-card">
            <div class="package-name">{{ pkg.name }}</div>
            <div class="package-price">{{ pkg.price }}</div>
            <div class="package-desc">{{ pkg.description }}</div>
          </div>
        </div>
        
        <div v-if="service.equipment" class="equipment-list">
          <div v-for="item in service.equipment" :key="item.name" class="equipment-item">
            <span class="equipment-name">{{ item.name }}</span>
            <span class="equipment-price">{{ item.price }}</span>
          </div>
        </div>
        
        <button class="modal-add-btn" @click="addToForm">
          Добавить услугу в заявку
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesModal',
  props: {
    service: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    addToForm() {
      this.$emit('add', this.service.title)
      this.closeModal()
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(12px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-content {
  max-width: 700px;
  max-height: 85vh;
  width: 100%;
  background: linear-gradient(135deg, #0f0f1a, #0a0a0f);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 32px;
  overflow-y: auto;
  position: relative;
  animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 24px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #c084fc;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: rgba(139, 92, 246, 0.2);
  transform: rotate(90deg);
}

.modal-header {
  padding: 32px 32px 0;
  border-bottom: 1px solid rgba(139, 92, 246, 0.2);
  margin-bottom: 24px;
}

.modal-title {
  font-size: 32px;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: #ffffff;
  margin-bottom: 8px;
}

.modal-subtitle {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 24px;
}

.modal-body {
  padding: 0 32px 32px;
}

.modal-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 24px;
  font-size: 15px;
}

.packages-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

.package-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 20px;
  padding: 20px;
}

.package-name {
  font-size: 18px;
  font-weight: 600;
  color: #c084fc;
  margin-bottom: 8px;
}

.package-price {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
}

.package-desc {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
}

.equipment-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.equipment-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.equipment-name {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
}

.equipment-price {
  font-size: 15px;
  font-weight: 600;
  color: #c084fc;
}

.modal-add-btn {
  width: 100%;
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  border: none;
  border-radius: 60px;
  padding: 14px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 16px;
}

.modal-add-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
}

@media (max-width: 768px) {
  .modal-title {
    font-size: 24px;
  }
  
  .modal-header {
    padding: 24px 24px 0;
  }
  
  .modal-body {
    padding: 0 24px 24px;
  }
  
  .package-price {
    font-size: 20px;
  }
}
</style>