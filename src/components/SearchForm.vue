<script setup lang="ts">
import VillaFilters from "./VillaFilters.vue";
import VillaSort from "./VillaSort.vue";

const emit = defineEmits<{
  (event: "searchVillas"): void;
}>();

const onSubmit = () => {
  emit("searchVillas");
};
</script>

<template>
  <form @submit.prevent="onSubmit" class="flex gap-8 m-[1rem] flex-wrap">
    <VillaFilters />
    <VillaSort />

    <div class="flex justify-end w-[100%]">
      <button
        type="submit"
        class="rounded-full bg-sky-700 text-white px-[1rem] pt-[0.25rem] pb-[0.5rem] text-xl"
      >
        Cerca
      </button>
    </div>
  </form>
</template>

<style scoped></style>
