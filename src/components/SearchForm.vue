<script setup lang="ts">
import { useVillaStore } from "@/stores";
import VillaFilters from "./VillaFilters.vue";
import VillaSort from "./VillaSort.vue";

const emit = defineEmits<{
  (event: "searchVillas"): void;
}>();

const onSubmit = () => {
  emit("searchVillas");
};

const { resetFilters } = useVillaStore();
const onReset = () => {
  resetFilters();
  emit("searchVillas");
};
</script>

<template>
  <form
    @submit.prevent="onSubmit"
    @reset="onReset"
    class="flex gap-8 m-[1rem] flex-wrap"
  >
    <VillaFilters />
    <VillaSort />

    <div class="flex justify-between w-[100%]">
      <button
        type="reset"
        class="rounded-full bg-sky-300 text-white px-[1rem] pt-[0.25rem] pb-[0.5rem] text-xl"
      >
        Reset
      </button>
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
