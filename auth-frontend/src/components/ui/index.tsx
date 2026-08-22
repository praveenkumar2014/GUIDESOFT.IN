import type { ButtonHTMLAttributes, ReactNode, SVGProps } from 'react'

export type IconName =
  | 'ai'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-down'
  | 'arrow-up-right'
  | 'badge'
  | 'blocks'
  | 'briefcase'
  | 'box'
  | 'chart'
  | 'check'
  | 'chevron-down'
  | 'clock'
  | 'cloud'
  | 'code'
  | 'close'
  | 'database'
  | 'design'
  | 'flask'
  | 'home'
  | 'layers'
  | 'layout'
  | 'lock'
  | 'megaphone'
  | 'menu'
  | 'mobile'
  | 'network'
  | 'play'
  | 'python'
  | 'search'
  | 'school'
  | 'security'
  | 'settings'
  | 'spark'
  | 'terminal'
  | 'tools'
  | 'user'

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName
  size?: number
}

const iconPaths: Record<IconName, ReactNode> = {
  ai: <><path d="M8 8.5h8a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3Z" /><path d="M9 8.5V6m6 2.5V6M8 5h8M3 12H2m20 0h-1M8 12h.01M16 12h.01M9 17.5v2m6-2v2" /></>,
  'arrow-left': <path d="M20 12H5m6 6-6-6 6-6" />,
  'arrow-right': <path d="M4 12h15m-6-6 6 6-6 6" />,
  'arrow-down': <path d="M12 4v15m-6-6 6 6 6-6" />,
  'arrow-up-right': <path d="m6 18 12-12m-8 0h8v8" />,
  badge: <><path d="m12 3 2.2 1.3 2.5-.1 1.2 2.2 2.1 1.3-.4 2.5.9 2.3-1.8 1.8-.4 2.5-2.4.5-1.9 1.6-2.1-1.2-2.5.1-1.2-2.2-2.1-1.3.4-2.5-.9-2.3 1.8-1.8.4-2.5 2.4-.5L12 3Z" /><path d="m9 12 2 2 4-4" /></>,
  blocks: <><rect x="4" y="4" width="7" height="7" rx="1" /><rect x="13" y="4" width="7" height="7" rx="1" /><rect x="4" y="13" width="7" height="7" rx="1" /><rect x="13" y="13" width="7" height="7" rx="1" /></>,
  box: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4 7.5 8 4.5 8-4.5M12 12v9" /></>,
  briefcase: <><rect x="4" y="7" width="16" height="12" rx="2" /><path d="M9 7V5h6v2M4 12h16m-9 0v2h2v-2" /></>,
  chart: <><path d="M4 19V5m0 14h16" /><path d="m7 15 3-4 3 2 5-6" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  'chevron-down': <path d="m6 9 6 6 6-6" />,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.5 2" /></>,
  cloud: <path d="M7.5 18h9a4.5 4.5 0 0 0 .8-8.9A5.5 5.5 0 0 0 6.8 10 4 4 0 0 0 7.5 18Z" />,
  code: <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  database: <><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6m-14 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></>,
  design: <><path d="m5 16-1 4 4-1L19 8l-3-3L5 16Z" /><path d="m14 6 3 3M5 20h14" /></>,
  flask: <><path d="M9 3h6m-5 0v6l-5.5 8.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-3.5L14 9V3" /><path d="M7.2 16h9.6" /></>,
  home: <><path d="m3.5 10.5 8.5-7 8.5 7" /><path d="M5.5 9.5V20h13V9.5M9 20v-5h6v5" /></>,
  layers: <><path d="m12 4 8 4-8 4-8-4 8-4Z" /><path d="m4 12 8 4 8-4M4 16l8 4 8-4" /></>,
  layout: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 9h16M10 9v11" /></>,
  lock: <><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  megaphone: <><path d="m4 11 11-5v12L4 13v-2Z" /><path d="M15 9h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3M6 14l1 5h3l-1-4" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  mobile: <><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M10 6h4m-2 12h.01" /></>,
  network: <><circle cx="5" cy="12" r="2.5" /><circle cx="19" cy="6" r="2.5" /><circle cx="19" cy="18" r="2.5" /><path d="m7.3 11 9.3-4m-9.3 6 9.3 4" /></>,
  play: <path d="m9 6 9 6-9 6V6Z" />,
  python: <><path d="M12 3c-4 0-4 2-4 3.5V8h4v1H6c-2 0-3 1-3 4s1 4 3 4h2v-2.5C8 13 9 12 11 12h3c2 0 3-1 3-3V6c0-2-2-3-5-3Z" /><path d="M12 21c4 0 4-2 4-3.5V16h-4v-1h6c2 0 3-1 3-4s-1-4-3-4h-2v2.5C16 11 15 12 13 12h-3c-2 0-3 1-3 3v3c0 2 2 3 5 3Z" /></>,
  search: <><circle cx="10.8" cy="10.8" r="6.5" /><path d="m16 16 4 4" /></>,
  school: <><path d="m3 9 9-5 9 5-9 5-9-5Z" /><path d="M6 11.5V16c3 2 9 2 12 0v-4.5M21 9v6" /></>,
  security: <path d="M12 3 19 6v5c0 4.5-3 7.5-7 10-4-2.5-7-5.5-7-10V6l7-3Z" />,
  settings: <><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" /><path d="m19 13 .1-1-.1-1 2-1.5-2-3.4-2.4 1a8 8 0 0 0-1.7-1L14.5 3h-5L9 6.1a8 8 0 0 0-1.7 1l-2.4-1-2 3.4L5 11a8 8 0 0 0 0 2l-2.1 1.5 2 3.4 2.4-1a8 8 0 0 0 1.7 1L9.5 21h5l.5-3.1a8 8 0 0 0 1.7-1l2.4 1 2-3.4L19 13Z" /></>,
  spark: <path d="m12 3 1.65 5.35L19 10l-5.35 1.65L12 17l-1.65-5.35L5 10l5.35-1.65L12 3Zm6 12 .7 2.3L21 18l-2.3.7L18 21l-.7-2.3L15 18l2.3-.7L18 15Z" />,
  terminal: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m7 9 3 3-3 3m5 0h4" /></>,
  tools: <><path d="m14 6 4-3 3 3-3 4M4 20l8.5-8.5M7 4l4 4m-6 5 4 4" /><path d="M14 6a5 5 0 0 0 6 6l-5 5-6-6 5-5Z" /></>,
  user: <><circle cx="12" cy="8" r="3.5" /><path d="M5.5 20a6.5 6.5 0 0 1 13 0" /></>,
}

export function Icon({ name, size = 18, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {iconPaths[name]}
    </svg>
  )
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  icon?: IconName
  iconPosition?: 'leading' | 'trailing'
  tone?: 'primary' | 'secondary' | 'ghost'
}

export function Button({
  children,
  className = '',
  icon,
  iconPosition = 'trailing',
  tone = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button className={`ui-button ui-button-${tone} ${className}`.trim()} {...props}>
      {icon && iconPosition === 'leading' && <Icon name={icon} size={16} />}
      <span>{children}</span>
      {icon && iconPosition === 'trailing' && <Icon name={icon} size={16} />}
    </button>
  )
}

export function StatusPill({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'neutral' | 'success' | 'gold' }) {
  return <span className={`status-pill status-pill-${tone}`}>{children}</span>
}

export function ProgressBar({ value, label }: { value: number; label?: string }) {
  const boundedValue = Math.min(100, Math.max(0, value))
  return <div className="ui-progress" aria-label={label ?? `${boundedValue}% complete`} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={boundedValue}><i style={{ width: `${boundedValue}%` }} /></div>
}
