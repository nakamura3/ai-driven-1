import type { Filter } from '../types'

const LABELS: Record<Filter, string> = {
  all: 'すべて',
  active: '未完了',
  completed: '完了',
}

interface Props {
  current: Filter
  onChange: (f: Filter) => void
  activeCount: number
  completedCount: number
  onClearCompleted: () => void
}

export function TodoFilter({ current, onChange, activeCount, completedCount, onClearCompleted }: Props) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> 件残っています
      </span>
      <ul className="filters">
        {(Object.keys(LABELS) as Filter[]).map(f => (
          <li key={f}>
            <button className={current === f ? 'selected' : ''} onClick={() => onChange(f)}>
              {LABELS[f]}
            </button>
          </li>
        ))}
      </ul>
      {completedCount > 0 ? (
        <button className="clear-completed" onClick={onClearCompleted}>
          完了済みを削除
        </button>
      ) : (
        <span className="clear-placeholder" />
      )}
    </footer>
  )
}
