<script setup lang="ts">
import '@tresjs/leches/styles';

import { OrbitControls } from '@tresjs/cientos';
import { TresCanvas } from '@tresjs/core';

import OrbitalCamera from '@/components/tresjs/OrbitalCamera.vue';

function onControlChange(e: unknown) {
  console.info(e);
}
</script>

<template>
  <div class="globe-view">

    <TresCanvas class="globe-canvas">
      <OrbitalCamera
        :lat="52"
        :lng="5"
        :distance="1.5"
      />

      <TresAmbientLight :intensity="0.05" />

      <OrbitControls
        :zoom-speed=".25"
        :min-distance="1.15"
        :rotate-speed=".5"
        :max-distance="5"
        @change="onControlChange"
      />
    </TresCanvas>
  </div>
</template>

<style scoped lang="scss">
.globe-view {
  inset: 0;
  width: 100%;
  height: 100%;
}

.globe-canvas {
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: opacity var(--transition-duration-snail) ease;
  transition-delay: 2s;

  &--loaded {
    opacity: 1;
  }
}
</style>
