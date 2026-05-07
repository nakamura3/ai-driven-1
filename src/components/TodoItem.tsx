import { useState, useRef, useEffect } from 'react'
import type { Todo } from '../types'

interface Props {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onEdit: (id: string, text: string) => void
}

export function TodoItem({ todo, onToggle, onDelete, onEdit }: Props) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [editing])

  const startEdit = () => {
    setDraft(todo.text)
    setEditing(true)
  }

  const commit = () => {
    onEdit(todo.id, draft)
    setEditing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') commit()
    if (e.key === 'Escape') setEditing(false)
  }

  return (
    <li className={`todo-item${todo.completed ? ' completed' : ''}${editing ? ' editing' : ''}`}>
      <div className="checkbox-wrap">
        <input
          type="checkbox"
          id={`cb-${todo.id}`}
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <label htmlFor={`cb-${todo.id}`} aria-label="完了にする" />
      </div>
      <span className="todo-label" onDoubleClick={startEdit}>
        {todo.text}
      </span>
      <button className="destroy" onClick={() => onDelete(todo.id)} aria-label="削除">
        ×
      </button>
      {editing && (
        <input
          ref={inputRef}
          className="edit"
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onBlur={commit}
          onKeyDown={handleKeyDown}
        />
      )}
    </li>
  )
}
