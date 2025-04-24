<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView class="page-wrapper" />
</template>

<!-- TODO: Enforce the order of these attributes, first `lang` and `scoped` last -->
<style lang="scss" scoped>
.page-wrapper {
  flex: 1;
  background-color: #000;
}
</style>
