import { GettingStarted } from '@/components/onboarding/getting-started'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Page() {
  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,oklch(0.55_0.2_277/0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.14_280/0.12),transparent_70%)]"
      />
      <div className="absolute right-4 top-4 z-10 md:right-6 md:top-6">
        <ThemeToggle />
      </div>
      <GettingStarted />
    </main>
  )
}
