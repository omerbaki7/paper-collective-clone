<script setup>
defineProps({
  id: Number, // <-- ID'Yİ PROP OLARAK ALMAK İÇİN BUNU EKLE
  name: String,
  artist: String,
  price: Number,
  imageUrl: String
});
</script>

<template>
  <RouterLink :to="`/product/${id}`" class="product-link">
    <div class="product-card">
      <img :src="imageUrl" :alt="name" class="product-image" />
      <h3 class="product-name">{{ name }}</h3>
      <p class="product-artist">{{ artist }}</p>
      <p class="product-price">{{ price }} EUR</p>
    </div>
  </RouterLink>
</template>

<style scoped>
/* RouterLink'in altı çizili mavi link gibi görünmesini engellemek için: */
.product-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.product-card {
  border: 1px solid #f0f0f0;
  text-align: left;
  padding: 10px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  height: 100%;
}

.product-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* !!! BÜTÜN SORUNU ÇÖZEN EKSİK KISIM BURASI !!! */
.product-image {
  width: 100%; /* Resmin, kartın genişliğine uymasını sağlar */
  aspect-ratio: 1 / 1.4;
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