<script setup lang="ts">
import type { VillaItemProps } from "@/types";
const props = defineProps<VillaItemProps>();
</script>

<template>
  <div>
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
    </div>
  </div>
</template>

<style scoped></style>
