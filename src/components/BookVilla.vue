<script setup lang="ts">
const props = defineProps<{ villa: string }>();

const onBook = () => {
  props.villa;
};
</script>

<template>
  <button
    class="self-center rounded-full bg-sky-500 text-white px-[1rem] pt-[0.25rem] pb-[0.5rem] text-md my-[1rem] max-w-[50%]"
    @click="onBook"
  >
    Prenota
  </button>
  <!-- TODO: Handle book -->
</template>
