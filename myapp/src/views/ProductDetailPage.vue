<template>
  <div class="flex justify-center items-center" v-if="data">
    <div
      class="block md:grid grid-cols-3 max-w-screen-lg border-2 py-8 px-4 rounded-lg"
    >
      <div class="overflow-hidden">
        <img
          :src="data.imageUrl"
          alt=""
          class="w-full hover:scale-110 object-cover px-4"
        />
      </div>
      <div
        class="col-span-2 border-l-2 p-2 bg-gradient-to-r from-gray-300 to-white border-l-gray-500"
      >
        <div class="font-semibold text-5xl">{{ data.name }}</div>
        <div class="text-3xl">{{ data.averageRating }}</div>
        <div class="text-3xl">${{ data.price }}</div>
        <div>{{ data.description }}</div>
        <Button>Add to cart</Button>
      </div>
    </div>
  </div>
  <NotFoundPage v-else />
</template>
<script setup>
import { products } from "@/fake-data";
import { useRoute } from "vue-router";
import Button from "@/components/Button.vue";
import NotFoundPage from "./NotFoundPage.vue";
const route = useRoute();
const data = products.find((p) => p.id === route.params.id);
</script>
