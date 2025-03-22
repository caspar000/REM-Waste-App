import cn from 'classnames'

interface IKeyValueIndicator {
  label: string
  value: string | number
  className?: string
}

export const KeyValueIndicator = ({
  label,
  value,
  className
}: IKeyValueIndicator) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between rounded-lg bg-slate-800 p-2.5',
        className
      )}
    >
      <span className="text-sm font-medium text-slate-300">{label}</span>
      <span className="text-sm font-bold text-white">{value}</span>
    </div>
  )
}
