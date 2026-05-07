import { useTodos } from './hooks/useTodos'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { TodoFilter } from './components/TodoFilter'
import './App.css'

export default function App() {
  const {
    todos,
    allTodos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    toggleAll,
    activeCount,
    completedCount,
  } = useTodos()

  const hasTodos = allTodos.length > 0
  const allCompleted = hasTodos && allTodos.every(t => t.completed)

  return (
    <div className="app">
      <h1>todos</h1>
      <div className="todoapp">
        <TodoInput
          onAdd={addTodo}
          onToggleAll={toggleAll}
          allCompleted={allCompleted}
          hasTodos={hasTodos}
        />
        {hasTodos && (
          <>
            <TodoList
              todos={todos}
              filter={filter}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
            <TodoFilter
              current={filter}
              onChange={setFilter}
              activeCount={activeCount}
              completedCount={completedCount}
              onClearCompleted={clearCompleted}
            />
          </>
        )}
      </div>
    </div>
  )
}
