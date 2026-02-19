import { createPinia } from 'pinia'
import { setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useListStore } from './list'

describe('useListStore', () => {
  beforeEach(async () => {
    setActivePinia(createPinia())
  })

  it('starts with default tasks', () => {
    const store = useListStore()

    expect(store.tasks).toHaveLength(3)
  })

  it('adds a task', () => {
    const store = useListStore()

    store.add('New task')

    // expect(tasks.value).toHaveLength(4)
    // expect(tasks.value.at(-1).text).toBe('New task')

    expect(store.tasks).toEqual([
      { id: 1, text: 'Learn Vue', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
      { id: 4, text: 'New task' },
    ])

    // snapshot testing
    // expect(tasks.value).toMatchSnapshot()
  })

  it('toggles completion', () => {
    const store = useListStore()
    const initial = store.tasks[1].completed

    store.toggle(1)

    expect(store.tasks[1].completed).toBe(!initial)
  })

  it('removes a task', () => {
    const store = useListStore()

    store.remove(0)

    expect(store.tasks).toHaveLength(2)
  })
})
