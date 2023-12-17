"use client"

import { locales } from "@/helpers/config"
import Link from "next/link"
import { useState } from "react"

type Args = {
  curLocale: AvailableLanguages
}

export default function LanguageDropDown({ curLocale }: Args) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(prevState => !prevState)}>{curLocale}</button>

      {isOpen && (
        <ul className="absolute bg-slate-700 px-1 py-1 top-full w-24 right-0 text-center rounded-md">
          {locales?.map(locale => {
            if (locale === curLocale) return
            return (
              <li key={locale} id={locale} className="my-2">
                <Link href={{ pathname: locale }} locale={locale}>
                  {locale}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
