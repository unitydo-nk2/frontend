<script setup></script>

<template>
  <div>
    <NavBar class="drop-shadow-xl" />
    <main class="flex flex-col min-h-screen">
    <slot></slot>
    </main>
    <LayOutFooter class="mt-auto"/>
  </div>
</template>

<style></style>
