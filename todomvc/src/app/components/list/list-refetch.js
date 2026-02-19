import { ref } from 'vue'
import { defineStore } from 'pinia'

import * as api from '../../services/api'

export const useListStore = defineStore('list', () => {
  const tasks = ref([])

  async function fetch() {
    tasks.value = await api.fetchTasks()
  }

  async function add(value) {
    await api.addTask(value)

    fetch()
  }

  async function toggle(index) {
    const task = tasks.value[index]

    await api.updateTask(task.id, { completed: !task.completed })

    fetch()
  }

  async function remove(index) {
    const task = tasks.value[index]

    await api.removeTask(task.id)

    fetch()
  }

  return { tasks, fetch, add, toggle, remove }
})
