<template>
  <Link href="/">Main page</Link>
  <Link href="/show">Show page</Link>

  <div> the page is with a timer {{ timer }}</div>

  <slot />
</template>
<script setup>
import { Link } from '@inertiajs/vue3'

import { ref } from 'vue'


const timer = ref(0)

setInterval(()=>timer.value++,1000)

</script>
