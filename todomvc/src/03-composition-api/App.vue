<script setup>
import { ref, computed, onMounted, onUpdated } from 'vue'

import AppFooter from './AppFooter.vue'
import AppForm from './AppForm.vue'
import AppHeader from './AppHeader.vue'
import AppList from './AppList.vue'

// form logic
const text = ref('')

function handleChange(value) {
  text.value = value
}

function handleSubmit() {
  add()
  emptyText()
}

function emptyText() {
  text.value = ''
}

// list logic
const tasks = ref([
  { id: 1, text: 'Learn Vue', completed: true },
  { id: 2, text: 'Look for a job', completed: false },
  { id: 3, text: 'Forget everything' },
])

const filteredTasks = computed(() => {
  if (selectedFilter.value === 'Active') return activeTasks.value
  if (selectedFilter.value === 'Completed') return completedTasks.value
  return tasks.value
})

function add() {
  const maxId = tasks.value.length ? tasks.value[tasks.value.length - 1].id : 0
  tasks.value.push({ id: maxId + 1, text: text.value })
}

function toggle(index) {
  const task = tasks.value[index]
  task.completed = !task.completed
}

function remove(index) {
  tasks.value.splice(index, 1)
}

// filter logic
const selectedFilter = ref('All')

const activeTasks = computed(() => tasks.value.filter((task) => !task.completed))
const completedTasks = computed(() => tasks.value.filter((task) => task.completed))
const tasksLeft = computed(() => activeTasks.value.length)
const isClearCompletedShown = computed(() => completedTasks.value.length)

function setFilter(value) {
  selectedFilter.value = value
}

function clearCompleted() {
  tasks.value = tasks.value.filter((task) => !task.completed)
  selectedFilter.value = 'All'
}

// lifecycle methods

onMounted(() => {
  console.log('App mounted!')
})

onUpdated(() => {
  console.log('App updated!')
})
</script>

<template>
  <AppHeader name="Matteo Antony" />

  <AppForm :text="text" @inputChange="handleChange" @formSubmit="handleSubmit" />

  <AppList :tasks="filteredTasks" @spanClick="toggle" @buttonClick="remove" />

  <AppFooter
    :tasksLeft="tasksLeft"
    :selectedFilter="selectedFilter"
    :isClearCompletedShown="isClearCompletedShown"
    @filterClick="setFilter"
    @clearClick="clearCompleted"
  />
</template>
