<script setup lang="ts">
import type { VillaItem } from "@/types";

defineProps<{ villa: VillaItem }>();
</script>

<template>
  <div class="flex flex-col gap-1 text-center">
    <h2 class="text-xl text-sky-500">{{ villa?.name }}</h2>
    <span><b>Città:</b> {{ villa?.location }}</span>
    <span>
      <b>Prezzo:</b>
      {{
        Intl.NumberFormat("it-IT", {
          style: "currency",
          currency: "EUR",
        }).format(villa?.price)
      }}
    </span>
    <span>
      <b>Capacità:</b>
      {{ villa?.capacity }}
    </span>
    <span>
      <b>Servizi:</b>
      {{ villa?.facilities }}
    </span>
  </div>
</template>
