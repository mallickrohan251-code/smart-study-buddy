import { GettingStarted } from '@/components/onboarding/getting-started'

export default function Page() {
  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.14_280/0.12),transparent_70%)]"
      />
      <GettingStarted />
    </main>
  )
}
