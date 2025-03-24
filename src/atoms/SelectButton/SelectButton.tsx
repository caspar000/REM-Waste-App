import cn from 'classnames'

interface ISelectButton {
  children: React.ReactNode
  className?: string
  selected?: boolean
  onClick?: () => void
}

export const SelectButton = ({
  children,
  className,
  selected,
  onClick
}: ISelectButton) => {
  return (
    <button
      className={cn(
        'rounded-md border-0 p-3.5 text-base font-semibold text-white outline-0 hover:cursor-pointer',
        selected && 'bg-blue-500 hover:bg-blue-700 active:bg-blue-800',
        !selected && 'bg-slate-600 hover:bg-slate-550 active:bg-slate-600',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
