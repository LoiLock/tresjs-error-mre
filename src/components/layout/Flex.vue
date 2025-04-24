<script setup lang="ts">
type GlobalValues = 'initial' | 'inherit' | 'revert' | 'revert-layer' | 'unset';

type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse' | `${GlobalValues}`;
type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse' | `${GlobalValues}`;
type FlexJustifyContent = 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'normal' | `${GlobalValues}`;
type AlignItems = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'normal' | 'stretch' | 'baseline' | 'first baseline' | 'last baseline' | 'safe center' | 'unsafe center' | `${GlobalValues}`;

const {
  fill = false,
  inline = false,
  asTag = 'div'
} = defineProps<{
  fill?: boolean;
  inline?: boolean;
  direction?: FlexDirection;
  justifyContent?: FlexJustifyContent;
  alignItems?: AlignItems;
  placeItems?: FlexJustifyContent;
  gap?: GlobalValues | number | 'xs';
  wrap?: FlexWrap;
  asTag?: keyof HTMLElementTagNameMap;
}>();

</script>

<template>
  <component
    :is="asTag"
    class="flex-wrapper"
    :class="{
      'flex-wrapper--inline': inline,
      'flex-wrapper--flex-direction': !!direction,
      'flex-wrapper--flex-wrap': !!wrap,
      'flex-wrapper--gap': !!gap,
      'flex-wrapper--place-items': !!placeItems,
      'flex-wrapper--align-items': !!alignItems,
      'flex-wrapper--justify-content': !!justifyContent
    }"
    :style="{
      width: fill ? '100%' : undefined,
      ...(direction && { '--flex-direction': direction }),
      ...(wrap && { '--flex-wrap': wrap }),
      ...(gap && { '--gap': `var(--spacer-${gap})` }),
      ...(placeItems && { '--place-items': placeItems }),
      ...(alignItems && { '--align-items': alignItems }),
      ...(justifyContent && { '--justify-content': justifyContent }),
    }"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
.flex-wrapper {
  display: flex;

  &--flex-direction {
    flex-direction: var(--flex-direction, initial);
  }

  &--flex-wrap {
    flex-wrap: var(--flex-wrap, initial);
  }

  &--gap {
    gap: var(--gap, initial);
  }

  &--place-items {
    place-items: var(--place-items, initial);
  }

  &--align-items {
    align-items: var(--align-items, initial);
  }

  &--justify-content {
    justify-content: var(--justify-content, initial);
  }

  &--inline {
    display: inline-flex;
  }
}
</style>
