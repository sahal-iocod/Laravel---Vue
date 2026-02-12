<template>
  <Link :href="route('listings.index')">Listings</Link>&nbsp;

  <Link :href="route('listings.create')">New Listing</Link>

  <div v-if="flashSuccess" class="success">
    {{ flashSuccess }}
  </div>

  <slot />
</template>
<script setup>
import { Link } from '@inertiajs/vue3'
import { computed } from 'vue'
import { usePage } from '@inertiajs/vue3'
const page = usePage()
const flashSuccess = computed(
  ()=> page.props.flash.success,
)

</script>


<style scoped>
.success {
    background-color: green;
    color: white;
}

</style>
