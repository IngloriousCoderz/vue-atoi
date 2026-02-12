<script>
import AppFooter from './AppFooter.vue'
import AppForm from './AppForm.vue'
import AppHeader from './AppHeader.vue'
import AppList from './AppList.vue'

export default {
  components: { AppHeader, AppForm, AppList, AppFooter },

  data() {
    return {
      // form data
      text: '',

      // list data
      tasks: [
        { id: 1, text: 'Learn Vue', completed: true },
        { id: 2, text: 'Look for a job', completed: false },
        { id: 3, text: 'Forget everything' },
      ],

      // filter data
      selectedFilter: 'All',
    }
  },

  computed: {
    // filter computed data
    activeTasks() {
      return this.tasks.filter((task) => !task.completed)
    },

    completedTasks() {
      return this.tasks.filter((task) => task.completed)
    },

    tasksLeft() {
      return this.activeTasks.length
    },

    isClearCompletedShown() {
      return this.completedTasks.length
    },

    // list computed data
    filteredTasks() {
      if (this.selectedFilter === 'Active') return this.activeTasks
      if (this.selectedFilter === 'Completed') return this.completedTasks
      return this.tasks
    },
  },

  methods: {
    // form methods
    handleChange(value) {
      this.text = value
    },

    handleSubmit() {
      this.add()
      this.emptyText()
    },

    emptyText() {
      this.text = ''
    },

    // list methods
    add() {
      const maxId = this.tasks.length ? this.tasks[this.tasks.length - 1].id : 0
      this.tasks.push({ id: maxId + 1, text: this.text })
    },

    toggle(index) {
      const task = this.tasks[index]
      task.completed = !task.completed
    },

    remove(index) {
      this.tasks.splice(index, 1)
    },

    // filter methods
    setFilter(value) {
      this.selectedFilter = value
    },

    clearCompleted() {
      this.completedTasks.forEach((_, index) => {
        this.remove(index)
      })
      this.selectedFilter = 'All'
    },
  },

  mounted() {
    console.log('App mounted!')
  },

  updated() {
    console.log('App updated!')
  },
}
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
