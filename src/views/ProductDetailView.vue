<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import productsData from '../data/products.json';
import { useCartStore } from '../stores/cartStore.js';

// 1. ADIM: Router'dan güncel URL bilgilerini alıyoruz.
const route = useRoute();
const cartStore = useCartStore();

// 2. ADIM: URL'deki 'id' parametresini kullanarak doğru ürünü buluyoruz.
const product = computed(() => {
  // route.params.id, URL'deki :id kısmını bize verir (örn: "3")
  // URL'den gelen id her zaman metin ('3') olduğu için onu parseInt() ile sayıya (3) çeviriyoruz.
  // Çünkü JSON dosyamızdaki id'ler sayı.
  return productsData.find(p => p.id === parseInt(route.params.id));
});
</script>

<template>
  <div class="product-detail-view">
    <div v-if="product" class="product-container">
      <div class="product-image-wrapper">
        <img :src="product.imageUrl" :alt="product.name" class="product-image" />
      </div>
      <div class="product-info">
        <h1 class="product-name">{{ product.name }}</h1>
        <p class="product-artist">by {{ product.artist }}</p>
        <p class="product-price">{{ product.price }} EUR</p>
        <button @click="cartStore.addToCart(product)" class="add-to-cart-button">Add to Cart</button>
        <div class="product-description">
          <p>This is a high quality print on the finest paper. Perfect for your home or office. Frame not included.</p>
        </div>
      </div>
    </div>
    <div v-else class="not-found">
      <h1>Ürün bulunamadı.</h1>
      <RouterLink to="/">Ana sayfaya dön</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.product-detail-view {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
}

.product-container {
  display: flex;
  gap: 2rem;
}

.product-image-wrapper {
  flex: 1; /* Resim alanının genişlemesini sağlar */
}

.product-image {
  width: 100%;
  height: auto;
  border: 1px solid #eee;
}

.product-info {
  flex: 1; /* Bilgi alanının genişlemesini sağlar */
  display: flex;
  flex-direction: column;
}

.product-name {
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.product-artist {
  font-size: 1.2rem;
  color: #555;
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.product-price {
  font-size: 2rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 1.5rem;
}

.add-to-cart-button {
  background-color: #333;
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: flex-start; /* Butonun tüm genişliği kaplamasını engeller */
  margin-bottom: 2rem;
}

.add-to-cart-button:hover {
  background-color: #555;
}

.not-found {
  text-align: center;
  padding: 4rem;
}
</style>