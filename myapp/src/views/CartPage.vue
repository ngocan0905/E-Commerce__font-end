<template>
  <div class="flex justify-center">
    <div class="">
      <h1 class="text-5xl py-4 text-center">Shopping cart</h1>
      <div class="font-semibold text-gray-700">
        <div
          v-for="product in cartItems"
          :key="product.id"
          class="flex items-center px-16 border-b-gray-700 border-2 border-white"
        >
          <div>
            <img :src="product.imageUrl" alt="" />
            <div>{{ product.name }}</div>
            <div>${{ product.price }}</div>
          </div>

          <div class="ml-10"><Button>Remove </Button></div>
        </div>
      </div>
      <div class="flex flex-col">
        <h3 class="text-center">Total : ${{ totalPrice }}</h3>
        <Button>Proceed to checkout</Button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { cartItems } from "@/fake-data";
import { computed } from "vue";
import Button from "@/components/Button.vue";

const products = cartItems;
const totalPrice = computed(() =>
  products.reduce((s, product) => s + Number(product.price), 0)
);
</script>
