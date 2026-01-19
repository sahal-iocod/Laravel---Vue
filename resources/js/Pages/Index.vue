<template>
  <div>
    <div>Show</div>
    <div>{{ message }}</div>
  </div>
</template>

<script setup>
defineProps({ 'message': String })
</script>
