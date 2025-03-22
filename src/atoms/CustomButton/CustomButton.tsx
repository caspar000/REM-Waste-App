import cn from 'classnames'

interface ICustomButton {
  id?: string
  primary?: boolean
  secondary?: boolean
  children: React.ReactNode
  className?: string
}

export const CustomButton = ({
  id,
  primary,
  secondary,
  children,
  className
}: ICustomButton) => {
  return (
    <button
      id={id}
      className={cn(
        'rounded-md border-0 p-3.5 text-base font-semibold text-white outline-0 hover:cursor-pointer',
        primary && 'bg-blue-500 hover:bg-blue-700 active:bg-blue-800',
        secondary && 'bg-slate-600 hover:bg-slate-550 active:bg-slate-600',
        className
      )}
    >
      {children}
    </button>
  )
}
