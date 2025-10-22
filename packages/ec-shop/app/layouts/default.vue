<template>
  <div>
    <header>
      <nav class="bg-gray-800 text-white p-4">
        <div class="container mx-auto flex justify-between items-center">
          <NuxtLink to="/" class="text-xl font-bold"> EC Shop </NuxtLink>
          <div class="space-x-4">
            <NuxtLink to="/" class="hover:text-gray-300"> Home </NuxtLink>
            <NuxtLink to="/products" class="hover:text-gray-300"> Products </NuxtLink>
            <NuxtLink to="/cart" class="hover:text-gray-300"> Cart </NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <main class="container mx-auto p-4">
      <slot />
    </main>

    <footer class="bg-gray-800 text-white p-4 mt-8">
      <div class="container mx-auto text-center">
        <p>&copy; 2025 EC Shop. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
