<template>
  <div class="flex justify-between items-center px-4">
    <router-link to="/products">
      <h1 class="text-6xl text-gray-700">FooterWear</h1>
    </router-link>
    <router-link to="/cart"
      ><div class="">
        <Button>Shopping Cart</Button>
      </div></router-link
    >
  </div>
</template>
<script setup>
import Button from "./Button.vue";
</script>
