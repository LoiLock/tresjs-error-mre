<script setup lang="ts">
import { Vector3 } from 'three';

import { cartesianFromLatLng } from '@/utils/coordinates';

const lat = defineModel<number>('lat', { required: true });
const lng = defineModel<number>('lng', { required: true });
const distance = defineModel<number>('distance', { required: true });

const initialCameraPosition = cartesianFromLatLng(lat.value, lng.value, distance.value);

const cameraVec3 = new Vector3(...initialCameraPosition);

</script>

<template>
  <TresPerspectiveCamera
    :position="cameraVec3"
  />
</template>
