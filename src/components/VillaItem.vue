<script setup lang="ts">
import router from "@/router";
import type { VillaItemProps } from "@/types";
const props = defineProps<VillaItemProps>();

const showDetail = () => {
  router.push(`/villas/${props.id}`);
};
</script>

<template>
  <div @click="showDetail">
    <img :src="props.image" />
    <div>
      <span>Città: {{ props.location }}</span>
      <span>
        Prezzo:
        {{
          Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "EUR",
          }).format(props.price)
        }}
      </span>
      <span>
        Capacità:
        {{ props.capacity }}
      </span>
      <span>
        Servizi:
        {{ props.facilities }}
      </span>
      <button>Prenota</button>
    </div>
  </div>
</template>

<style scoped></style>
