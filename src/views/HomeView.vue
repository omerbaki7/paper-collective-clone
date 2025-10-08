<script setup>
import ProductCard from '../components/ProductCard.vue';
import productsData from '../data/products.json';
</script>

<template>
  <div class="home-view">
    <h1 class="page-title">All Posters</h1>
    
    <div class="product-grid">
      <ProductCard
        v-for="product in productsData"
        :key="product.id"
        :name="product.name"
        :artist="product.artist"
        :price="product.price"
        :imageUrl="product.imageUrl"
      />
    </div>
  </div>
</template>

<style scoped>
.home-view {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
}

/* !!! VE KONTROL EDİLECEK DİĞER KISIM BU STİL KODU !!! */
/* Bu kural, içindeki elemanları bir ızgara (grid) şeklinde dizer. */
.product-grid {
  display: grid;
  /* Her sütunun en az 280px olmasını ve boşluğa göre sığabildiği kadar sütun eklemesini söyler */
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem; /* Kartlar arasındaki boşluk */
}
</style>