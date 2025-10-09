<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import ProductCard from '../components/ProductCard.vue';
import productsData from '../data/products.json';

// Router'dan güncel yol (URL) bilgilerini almak için useRoute'u kullanıyoruz.
const route = useRoute();

// Hangi ürünlerin gösterileceğini hesaplayan 'computed' bir değişken oluşturuyoruz.
// Bu değişken, URL değiştikçe otomatik olarak yeniden hesaplanır.
const filteredProducts = computed(() => {
  // Eğer URL'de 'categoryName' diye bir parametre varsa...
  if (route.params.categoryName) {
    // ... productsData dizisini filtrele ve sadece kategorisi URL'deki kategoriyle eşleşen ürünleri döndür.
    return productsData.filter(product => product.category === route.params.categoryName);
  } else {
    // ...eğer URL'de bir kategori yoksa (yani ana sayfadaysak), tüm ürünleri döndür.
    return productsData;
  }
});

// Sayfa başlığını da URL'ye göre dinamik hale getiriyoruz.
const pageTitle = computed(() => {
  if (route.params.categoryName) {
    return route.params.categoryName; // Kategori adını başlık yap
  } else {
    return 'All Posters'; // Ana sayfadaysa bu başlığı kullan
  }
});
</script>

<template>
  <div class="home-view">
    <h1 class="page-title">{{ pageTitle }}</h1>
    
    <div class="product-grid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :id="product.id"  
        :name="product.name"
        :artist="product.artist"
        :price="product.price"
        :imageUrl="product.imageUrl"
      />
    </div>
  </div>
</template>

<style scoped>
/* Stil kısmı aynı kalabilir, burada bir değişiklik yok */
.home-view {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
.page-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}
</style>