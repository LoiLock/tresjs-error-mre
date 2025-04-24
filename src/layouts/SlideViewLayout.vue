<script setup lang="ts">
import { useCycleList, useIntervalFn } from '@vueuse/core';
import { watch } from 'vue';

import Flex from '@/components/layout/Flex.vue';
import router from '@/router';

const { state, next } = useCycleList([
  'dashboard',
  'globe'
] as const);

watch(state, (slide) => {
  router.push({
    name: slide
  });
});

const {} = useIntervalFn(() => {
  next();
}, 10000000);

</script>

<template>
  <Flex direction="column">
    <Flex
      as-tag="nav"
      class="navbar"
      :gap="4"
    >
      <RouterLink to="globe">
        Globe
      </RouterLink>

      <RouterLink to="sprint">
        Sprint
      </RouterLink>
    </Flex>

    <Flex
      as-tag="section"
      class="body"
      direction="column"
    >
      <Flex
        direction="column"
        class="slide-view"
      >
        <RouterView
          v-slot="{Component}"
          class="slide-view__content"
        >
          <transition
            name="slide-fade"
            mode="out-in"
          >
            <component :is="Component" />
          </transition>
        </RouterView>
      </Flex>
    </Flex>
  </Flex>
</template>

<style scoped lang="scss">
.navbar {
  height: var(--size-8);
  background-color: var(--color-white);
}

.body {
  flex: 1;
}

.slide-view {
  position: relative;
  flex: 1;
  overflow: hidden;

  &__content {
    flex: 1;
  }
}

.slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, .5, .8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
