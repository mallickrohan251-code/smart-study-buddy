import type { LucideIcon } from 'lucide-react'

type FeatureCardProps = {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <li className="group flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-colors dark:bg-card/60 dark:shadow-none hover:border-accent/40 hover:bg-card">
      <span className="flex size-11 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
        <Icon className="size-5" aria-hidden="true" strokeWidth={1.75} />
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold tracking-tight text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{description}</p>
      </div>
    </li>
  )
}
