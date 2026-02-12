<script setup>
import { ref } from 'vue'

const emit = defineEmits(['formSubmit'])

const text = ref('')

function handleSubmit() {
  emit('formSubmit', text.value)
  empty()
}

function empty() {
  text.value = ''
}
</script>

<template>
  <form @submit.prevent="handleSubmit()">
    <input type="text" placeholder="What next?" autofocus v-model="text" />
    <button :disabled="!text">Add</button>
  </form>
</template>
