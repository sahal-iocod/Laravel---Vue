<template>
  <div v-for="listing in listings" :key="listing.id">
    <Link :href="route('listings.show', listing.id)">
      <ListingAddress :listing="listing" />
    </Link>
    <div>
      <Link :href="`/listings/${listing.id}/edit`">Edit</Link>
    </div>
    <div>
      <Link :href="`/listings/${listing.id}`" method="DELETE">Delete</Link>
    </div>
  </div>
</template>

<script setup>
import ListingAddress from '@/Components/ListingAddress.vue'
import { Link } from '@inertiajs/vue3'
defineProps({
  listings: Array,
})
</script>
