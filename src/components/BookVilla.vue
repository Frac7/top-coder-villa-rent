<script setup lang="ts">
import { ref, Teleport } from "vue";

const open = ref(false);
const onClose = () => {
  open.value = false;
};

const onBook = () => {
  open.value = true;
};
</script>

<template>
  <button
    class="self-center rounded-full bg-sky-300 text-white px-[1rem] pt-[0.25rem] pb-[0.5rem] text-md my-[1rem] max-w-[50%]"
    @click="onBook"
  >
    Prenota
  </button>
  <Teleport to="body">
    <div v-if="open" class="modal modal__overlay">
      <div class="flex flex-col modal modal__body">
        <span class="text-center text-xl">Prenotazione confermata!</span>
        <button
          @click="onClose"
          class="self-center rounded-full bg-sky-700 text-white px-[1rem] pt-[0.25rem] pb-[0.5rem] text-md my-[1rem]"
        >
          OK
        </button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  z-index: 999;
  display: flex;
  place-content: center;
  &__overlay {
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  &__body {
    top: 40%;
    left: 40%;
    background-color: white;
    width: 300px;
    padding: 1rem;
  }
}
</style>
