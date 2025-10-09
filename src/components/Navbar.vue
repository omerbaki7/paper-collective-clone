<script setup>
import { RouterLink } from 'vue-router';
import { useCartStore } from '../stores/cartStore.js';

const cartStore = useCartStore();
</script>

<template>
  <header class="navbar">
    <RouterLink to="/" class="logo">Paper Collective Clone</RouterLink>
    <nav class="main-nav">
      <RouterLink to="/category/Photography" class="nav-link">Photography</RouterLink>
      <RouterLink to="/category/Paintings" class="nav-link">Paintings</RouterLink>
      
      <RouterLink to="/cart" class="nav-link cart-link">
        Sepet ({{ cartStore.cartItemCount }})
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}

.logo {
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
  color: #333;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem; /* Linkler arası boşluk */
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #888;
}

.cart-link {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>