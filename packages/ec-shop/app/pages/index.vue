<script setup lang="ts">
const featuredProducts = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a great product',
    price: 29.99,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Another amazing product',
    price: 49.99,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'You will love this',
    price: 19.99,
  },
]
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-6">Welcome to EC Shop</h1>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Featured Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="product in featuredProducts" :key="product.id" class="border rounded-lg p-4 shadow-md">
          <div class="bg-gray-200 h-48 mb-4 rounded flex items-center justify-center">
            <span class="text-gray-500">Product Image</span>
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
          <p class="text-gray-600 mb-2">{{ product.description }}</p>
          <div class="flex justify-between items-center">
            <span class="text-lg font-bold">${{ product.price }}</span>
            <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
