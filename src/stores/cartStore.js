import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

// 'cart' adında bir store tanımlıyoruz.
export const useCartStore = defineStore('cart', () => {
  // === STATE ===
  // State, depoladığımız veridir. Sepetteki ürünleri bir dizide tutacağız.
  const items = ref([]); // ref() ile reaktif bir değişken oluşturuyoruz.

  // === GETTERS ===
  // Getters, state'ten bilgi hesaplayan fonksiyonlardır.
  // Sepetteki toplam ürün sayısını hesaplar.
  const cartItemCount = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0);
  });

  // Sepetin toplam fiyatını hesaplar.
  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  });

  // === ACTIONS ===
  // Actions, state'i değiştiren fonksiyonlardır.
  // Sepete ürün ekleyen fonksiyon.
  function addToCart(product) {
    // Gelen ürün sepette zaten var mı diye kontrol et.
    const existingItem = items.value.find(item => item.id === product.id);

    if (existingItem) {
      // Eğer varsa, sadece miktarını 1 artır.
      existingItem.quantity++;
    } else {
      // Eğer yoksa, ürünü listeye 1 miktarıyla ekle.
      items.value.push({ ...product, quantity: 1 });
    }
  }

  // State, getters ve actions'ı dışarıya açıyoruz ki bileşenlerimiz kullanabilsin.
  return {
    items,
    cartItemCount,
    totalPrice,
    addToCart
  };
});