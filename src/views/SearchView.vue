<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import ProductCard from '../components/ProductCard.vue';
import productsData from '../data/products.json';

const route = useRoute();

// URL'den arama terimini alıyoruz (örn: /search?q=Life adresindeki 'Life' kelimesi)
const searchQuery = computed(() => route.query.q || '');

// Arama terimine göre ürünleri filtreliyoruz
const searchedProducts = computed(() => {
  if (!searchQuery.value) {
    return []; // Arama boşsa hiçbir şey gösterme
  }
  // Arama terimini küçük harfe çevirip, ürün adı veya sanatçı adında (küçük harfe çevrilmiş)
  // bu terimi içeren ürünleri bul
  const lowerCaseQuery = searchQuery.value.toLowerCase();
  return productsData.filter(product => 
    product.name.toLowerCase().includes(lowerCaseQuery) ||
    product.artist.toLowerCase().includes(lowerCaseQuery)
  );
});
</script>

<template>
  <div class="search-view">
    <h1 class="page-title">Arama Sonuçları: "{{ searchQuery }}"</h1>
    
    <div v-if="searchedProducts.length > 0" class="product-grid">
      <ProductCard
        v-for="product in searchedProducts"
        :key="product.id"
        :id="product.id"  
        :name="product.name"
        :artist="product.artist"
        :price="product.price"
        :imageUrl="product.imageUrl"
      />
    </div>

    <div v-else class="no-results">
      <p>Aramanızla eşleşen ürün bulunamadı.</p>
    </div>
  </div>
</template>

<style scoped>
/* HomeView ile aynı stilleri kullanabiliriz */
.search-view { padding: 2rem; max-width: 1200px; margin: 0 auto; }
.page-title { text-align: center; margin-bottom: 2rem; }
.product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem; }
.no-results { text-align: center; padding: 3rem; font-size: 1.2rem; }
</style>