<script setup>
import { useCartStore } from '../stores/cartStore.js';
import { RouterLink } from 'vue-router';

const cartStore = useCartStore();
</script>

<template>
  <div class="cart-view">
    <h1 class="page-title">Sepetim</h1>

    <div v-if="cartStore.cartItemCount === 0" class="cart-empty">
      <p>Sepetiniz boş.</p>
      <RouterLink to="/">Alışverişe Başla</RouterLink>
    </div>

    <div v-else class="cart-content">
      <div class="cart-items">
        <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
          <img :src="item.imageUrl" :alt="item.name" class="item-image" />
          <div class="item-details">
            <h2 class="item-name">{{ item.name }}</h2>
            <p class="item-artist">{{ item.artist }}</p>
          </div>
          <div class="item-quantity">
            Adet: {{ item.quantity }}
          </div>
          <div class="item-price">
            {{ (item.price * item.quantity).toFixed(2) }} EUR
          </div>
        </div>
      </div>
      <div class="cart-summary">
        <h2>Sipariş Özeti</h2>
        <div class="summary-line">
          <span>Toplam Tutar:</span>
          <span>{{ cartStore.totalPrice }} EUR</span>
        </div>
        <button class="checkout-button">Ödemeye Geç</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-view { max-width: 1000px; margin: 2rem auto; padding: 2rem; }
.page-title { text-align: center; margin-bottom: 2rem; }
.cart-empty { text-align: center; padding: 3rem; }
.cart-item { display: flex; align-items: center; gap: 1.5rem; border-bottom: 1px solid #eee; padding: 1.5rem 0; }
.item-image { width: 100px; height: auto; }
.item-details { flex-grow: 1; }
.item-name, .item-artist { margin: 0; }
.item-name { font-size: 1.2rem; }
.item-artist { color: #666; }
.item-price { font-weight: bold; font-size: 1.2rem; }
.cart-summary { margin-top: 2rem; border-top: 2px solid #333; padding-top: 1.5rem; text-align: right; }
.summary-line { display: flex; justify-content: space-between; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; }
.checkout-button { background-color: #333; color: white; border: none; padding: 1rem 2rem; font-size: 1.2rem; cursor: pointer; }
</style>