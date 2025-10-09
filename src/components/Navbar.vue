<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { useCartStore } from '../stores/cartStore.js';
import productsData from '../data/products.json';
import { computed, ref } from 'vue';

const cartStore = useCartStore();
const categories = computed(() => [...new Set(productsData.map(p => p.category))]);

// ARAMA MANTIĞI
const searchQuery = ref('');
const router = useRouter();

function handleSearch() {
  if (searchQuery.value.trim() !== '') {
    router.push({ name: 'search', query: { q: searchQuery.value } });
    searchQuery.value = ''; // Aramadan sonra kutuyu temizle (isteğe bağlı)
  }
}
</script>

<template>
  <header class="navbar">
    
    <!-- SOL TARAF -->
    <div class="navbar-left">
      <RouterLink to="/" class="logo">Paper Collective Clone</RouterLink>
      <nav class="main-nav">
        <div class="dropdown-container">
          <RouterLink to="/" class="nav-link">Art Prints</RouterLink>
          <div class="dropdown-content">
            <div class="dropdown-section">
              <h4>Categories</h4>
              <RouterLink 
                v-for="category in categories" 
                :key="category" 
                :to="`/category/${category}`" 
                class="dropdown-link">
                {{ category }}
              </RouterLink>
              <RouterLink to="/" class="dropdown-link">All</RouterLink>
            </div>
            <div class="dropdown-section">
              <h4>Themes</h4>
              <a href="#" class="dropdown-link">Floral</a>
              <a href="#" class="dropdown-link">Colorful</a>
            </div>
          </div>
        </div>
        <a href="#" class="nav-link">News</a>
        <a href="#" class="nav-link">Inspiration</a>
      </nav>
    </div>

    <!-- SAĞ TARAF -->
    <div class="navbar-right">
      <form @submit.prevent="handleSearch" class="search-form">
        <input type="text" v-model="searchQuery" placeholder="Search products..." class="search-input">
        <button type="submit" class="search-button">
          <!-- Büyüteç ikonu için SVG kullandık -->
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
      </form>

      <RouterLink to="/cart" class="nav-link cart-link">
        Sepet ({{ cartStore.cartItemCount }})
      </RouterLink>
    </div>

  </header>
</template>

<style scoped>
.navbar { display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; background-color: #fff; border-bottom: 1px solid #eee; }
.navbar-left, .navbar-right { display: flex; align-items: center; gap: 2rem; }
.logo { font-weight: bold; font-size: 1.5rem; text-decoration: none; color: #333; }
.main-nav { display: flex; align-items: center; gap: 1.5rem; }
.nav-link { text-decoration: none; color: #333; font-size: 1rem; transition: color 0.3s ease; padding: 0.5rem 0; }
.nav-link:hover { color: #888; }
.cart-link { padding: 0.5rem 1rem; border: 1px solid #ddd; border-radius: 20px; }

/* AÇILIR MENÜ STİLLERİ */
.dropdown-container { position: relative; }
.dropdown-content { display: none; position: absolute; top: 100%; left: -2rem; background-color: white; min-width: 600px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1); z-index: 1; padding: 1rem 2rem; border-top: 2px solid #333; flex-direction: row; gap: 3rem; }
.dropdown-container:hover .dropdown-content { display: flex; }
.dropdown-section h4 { margin-top: 0; margin-bottom: 1rem; color: #888; font-size: 0.9rem; }
.dropdown-link { display: block; color: #333; text-decoration: none; padding: 0.5rem 0; }
.dropdown-link:hover { color: #000; font-weight: bold; }

/* ARAMA KUTUSU STİLLERİ */
.search-form { display: flex; align-items: center; border: 1px solid #ddd; border-radius: 20px; overflow: hidden; }
.search-input { border: none; outline: none; padding: 0.5rem 1rem; font-size: 0.9rem; }
.search-button { border: none; background: none; cursor: pointer; padding: 0.5rem; display: flex; align-items: center; }
</style>