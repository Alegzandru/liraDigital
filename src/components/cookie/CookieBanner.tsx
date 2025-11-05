'use client'

import { Cookie, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const COOKIE_NAME = 'cookie_consent'
type Consent = 'accepted' | 'rejected' | null

export default function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null)

  useEffect(() => {
    const stored = window.localStorage.getItem(COOKIE_NAME) as Consent
    if (stored === 'accepted' || stored === 'rejected') {
      setConsent(stored)
    }
  }, [])

  const handleChoice = (value: Consent) => {
    window.localStorage.setItem(COOKIE_NAME, value!)
    setConsent(value)
  }

  if (consent !== null) {
    return null
  }

  return (
    <div className="fixed bottom-0 right-0 md:m-10 z-50 flex-col items-center rounded-xl bg-ui-cookieBg backdrop-blur-md px-4 py-3 text-sm text-gray-100 shadow-lg border border-white/10 animate-slide-up">
      <section className="flex gap-3 mb-2 items-center">
        <Cookie className="w-5 h-5 text-yellow-400 flex-shrink-0" />
        <p className="max-w-[240px]">
          By using our website you agree to our{' '}
          <Link
            href="/cookie-policy"
            className="underline hover:text-white transition-colors"
          >
            cookie policy
          </Link>
          .
        </p>
        <button
          onClick={() => handleChoice('rejected')}
          className="p-1 text-gray-400 transition"
          aria-label="Close"
        >
          <X size={14} />
        </button>
      </section>
      <div className="flex justify-end gap-8 mr-8">
        <button
          onClick={() => handleChoice('rejected')}
          className="rounded-md border px-2 py-1 text-xs transition"
        >
          Reject
        </button>
        <button
          onClick={() => handleChoice('accepted')}
          className="rounded-md bg-white text-black px-2 py-1 text-xs bg-ui-success transition"
        >
          Accept
        </button>
      </div>
    </div>
  )
}
