<script setup>
import { useForm } from './form'

const emit = defineEmits(['formSubmit'])

const { text, empty } = useForm()

function handleSubmit() {
  emit('formSubmit', text.value)
  empty()
}
</script>

<template>
  <form @submit.prevent="handleSubmit()">
    <input type="text" placeholder="What next?" autofocus v-model="text" />
    <button :disabled="!text">Add</button>
  </form>
</template>
