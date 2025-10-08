<script setup>
// Bu bileşenin dışarıdan hangi bilgileri alacağını tanımlıyoruz.
// Buna "props" denir.
defineProps({
  name: String,
  artist: String,
  price: Number,
  imageUrl: String
});
</script>

<template>
  <div class="product-card">
    <img :src="imageUrl" :alt="name" class="product-image" />
    <h3 class="product-name">{{ name }}</h3>
    <p class="product-artist">{{ artist }}</p>
    <p class="product-price">{{ price }} EUR</p>
  </div>
</template>

<style scoped>
/* 'scoped' kelimesi, bu stillerin sadece bu bileşeni etkilemesini sağlar. */
.product-card {
  border: 1px solid #f0f0f0;
  text-align: left;
  padding: 10px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
}

.product-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  aspect-ratio: 1 / 1.4; /* Resimlerin orantılı durmasını sağlar */
  object-fit: cover;
  background-color: #f9f9f9;
}

.product-name {
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 0.25rem;
}

.product-artist {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0;
  margin-bottom: 0.75rem;
}

.product-price {
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0;
}
</style>