import { ref } from 'vue'
import { defineStore } from 'pinia'

import * as api from '../../services/api'

export const useListStore = defineStore('list', () => {
  const tasks = ref([])

  async function fetch() {
    tasks.value = await api.fetchTasks()
  }

  async function add(value) {
    tasks.value.push({ id: 'temp', text: value })

    try {
      const createdTask = await api.addTask(value)
      const index = tasks.value.length - 1
      tasks.value[index] = createdTask
    } catch {
      tasks.value.pop()
    }
  }

  async function toggle(index) {
    const task = tasks.value[index]
    task.completed = !task.completed

    try {
      const body = { completed: task.completed }
      await api.updateTask(task.id, body)
    } catch {
      task.completed = !task.completed
    }
  }

  async function remove(index) {
    const task = tasks.value[index]
    const [removedTask] = tasks.value.splice(index, 1)

    try {
      await api.removeTask(task.id)
    } catch {
      tasks.value.splice(index, 0, removedTask)
    }
  }

  return { tasks, fetch, add, toggle, remove }
})
