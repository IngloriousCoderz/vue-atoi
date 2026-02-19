import { ref } from 'vue'

const tasks = ref([
  { id: 1, text: 'Learn Vue', completed: true },
  { id: 2, text: 'Look for a job', completed: false },
  { id: 3, text: 'Forget everything' },
])

export function useList() {
  function add(value) {
    const maxId = tasks.value.length ? tasks.value[tasks.value.length - 1].id : 0
    tasks.value.push({ id: maxId + 1, text: value })
  }

  function toggle(index) {
    const task = tasks.value[index]
    task.completed = !task.completed
  }

  function remove(index) {
    tasks.value.splice(index, 1)
  }

  return { tasks, add, toggle, remove }
}
