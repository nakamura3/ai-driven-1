import { useState } from 'react'

interface Props {
  onAdd: (text: string) => void
  onToggleAll: () => void
  allCompleted: boolean
  hasTodos: boolean
}

export function TodoInput({ onAdd, onToggleAll, allCompleted, hasTodos }: Props) {
  const [value, setValue] = useState('')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onAdd(value)
      setValue('')
    }
  }

  return (
    <div className="input-row">
      <button
        className={`toggle-all${hasTodos ? '' : ' hidden'}${allCompleted ? ' active' : ''}`}
        onClick={onToggleAll}
        aria-label="すべて完了"
      >
        ❯
      </button>
      <input
        className="new-todo"
        type="text"
        placeholder="タスクを入力してください"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    </div>
  )
}
