<script setup lang="ts">
import type { TresControl } from '@tresjs/core';
import { extend, useTresContext } from '@tresjs/core';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ref } from 'vue';

extend({ OrbitControls });

const { camera, renderer } = useTresContext();

const controls = ref<TresControl>();

</script>

<template>
  <TresOrbitControls
    v-if="renderer && camera"
    ref="controls"
    :args="[camera, renderer?.domElement]"
  />
</template>
