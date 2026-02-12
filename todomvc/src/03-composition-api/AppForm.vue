<script setup>
defineProps(['text'])
const emit = defineEmits(['formSubmit', 'inputChange'])
</script>

<template>
  <form @submit.prevent="emit('formSubmit')">
    <input
      type="text"
      placeholder="What next?"
      autofocus
      :value="text"
      @input="emit('inputChange', $event.target.value)"
    />
    <button :disabled="!text">Add</button>
  </form>
</template>
