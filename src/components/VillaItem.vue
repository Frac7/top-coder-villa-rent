<script setup lang="ts">
import type { VillaItemProps } from "@/types";
const props = defineProps<VillaItemProps>();
</script>

<template>
  <div>
    <img :src="props.image" />
    <div>
      <span>Location: {{ props.location }}</span>
      <span>
        Price:
        {{
          Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "EUR",
          }).format(props.price)
        }}
      </span>
      <span>
        Capacity:
        {{ props.capacity }}
      </span>
      <span>
        Facilities:
        {{ props.facilities }}
      </span>
    </div>
  </div>
</template>

<style scoped></style>
