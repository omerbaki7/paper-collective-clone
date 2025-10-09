<script setup>
import { RouterLink } from 'vue-router';
import { useCartStore } from '../stores/cartStore.js';

const cartStore = useCartStore();
</script>

<template>
  <header class="navbar">
    <RouterLink to="/" class="logo">Paper Collective Clone</RouterLink>
    <nav>
      <RouterLink to="/cart" class="nav-link">
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
}
.nav-link, .logo {
  text-decoration: none;
  color: #333;
}
</style>