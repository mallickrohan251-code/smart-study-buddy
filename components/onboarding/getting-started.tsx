import Link from 'next/link'
import { ArrowRight, BookOpen, Sparkles, Target, GraduationCap } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { FeatureCard } from './feature-card'

const features = [
  {
    icon: BookOpen,
    title: 'Academic Core',
    description:
      'Semester-wise notes, organized study materials, and previous year exam questions.',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Tools',
    description:
      'Instant lecture summaries, customized active recall quiz generators, and automated question banks.',
  },
  {
    icon: Target,
    title: 'Growth & Focus',
    description:
      'Integrated career roadmaps, student goal planners, and an embedded native Pomodoro focus timer.',
  },
]

export function GettingStarted() {
  return (
    <section
      aria-labelledby="welcome-title"
      className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-20 md:py-28"
    >
      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground">
        <GraduationCap className="size-3.5 text-accent" aria-hidden="true" />
        Getting Started
      </span>

      <header className="flex max-w-2xl flex-col items-center gap-4 text-center">
        <h1
          id="welcome-title"
          className="text-4xl font-semibold tracking-tight text-foreground text-balance md:text-5xl"
        >
          Welcome to Smart Study Buddy!
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
          The centralized learning and career companion for the modern student.
        </p>
      </header>

      <ul className="mt-14 grid w-full grid-cols-1 gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </ul>

      <div className="mt-14 flex flex-col items-center gap-4">
        <Link
          href="/signup"
          className={cn(
            buttonVariants({ size: 'lg' }),
            'h-12 gap-2 rounded-lg px-8 text-base font-semibold shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_30px_-8px_rgba(167,139,250,0.45)]',
          )}
        >
          Get Started
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
        <p className="text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-medium text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </section>
  )
}
