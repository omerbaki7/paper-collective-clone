<script setup>
// Sayfalar arasında geçişi yönetecek olan ana bileşeni içeri aktarıyoruz.
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>

<style>
/* 'scoped' olmadan yazılan stiller projedeki tüm sayfaları etkiler.
  Buraya genel reset veya temel font ayarlarımızı koyabiliriz.
*/
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: #fdfdfd;
  color: #333;
}
</style>