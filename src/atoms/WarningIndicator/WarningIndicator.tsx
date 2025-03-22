import cn from 'classnames'

import { IconWarning } from '@/assets'

interface IWarningIndicator {
  label: string
  className?: string
}

export const WarningIndicator = ({ label, className }: IWarningIndicator) => {
  return (
    <div
      className={cn(
        'flex items-center gap-2.5 rounded-lg bg-slate-900 p-2.5 text-orange',
        className
      )}
    >
      <IconWarning size={18} />
      <span className="text-sm font-semibold">{label}</span>
    </div>
  )
}
