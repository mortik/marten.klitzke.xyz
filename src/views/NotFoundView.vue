<template>
  <main class="bg-cover bg-top sm:bg-top background-image-404">
    <div
      class="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8"
    >
      <p
        class="text-base transition-colors duration-500 text-gray-900 dark:text-gray-400 text-opacity-50"
      >
        404
      </p>
      <h1
        class="mt-2 text-4xl tracking-tight transition-colors duration-500 text-gray-900 dark:text-gray-300 sm:text-5xl"
      >
        Uh oh! I think you’re lost.
      </h1>
      <p
        class="mt-2 text-lg font-medium transition-colors duration-500 text-gray-900 dark:text-gray-400 text-opacity-50"
      >
        It looks like the page you’re looking for doesn't exist.
      </p>
      <div class="mt-6">
        <router-link
          :to="{ name: 'home' }"
          class="inline-flex items-center rounded-md border border-transparent bg-gray-400 dark:bg-gray-300 bg-opacity-75 px-4 py-2 text-sm font-medium text-black text-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
        >
          Go back home
        </router-link>
      </div>
    </div>
  </main>
</template>
