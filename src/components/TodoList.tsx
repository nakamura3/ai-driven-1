import type { Todo, Filter } from '../types'
import { TodoItem } from './TodoItem'

interface Props {
  todos: Todo[]
  filter: Filter
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onEdit: (id: string, text: string) => void
}

export function TodoList({ todos, filter, onToggle, onDelete, onEdit }: Props) {
  return (
    <section className="main">
      <ul className="todo-list">
        {todos.length === 0 ? (
          <li className="todo-empty">
            {filter === 'active' && '未完了のタスクはありません'}
            {filter === 'completed' && '完了済みのタスクはありません'}
          </li>
        ) : (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        )}
      </ul>
    </section>
  )
}
