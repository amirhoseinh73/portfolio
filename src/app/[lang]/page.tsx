import { ReadGlobalData } from "@/helpers/fileHandler"
import LanguageDropDown from "./components/LanguageDropDown"
import { getDictionary } from "../dictionaries"

type HomeArgs = {
  params: {
    lang: AvailableLanguages
  }
}

export default async function Home({ params: { lang: curLocale } }: HomeArgs) {
  const data = await ReadGlobalData()
  const dict = await getDictionary(curLocale)

  return (
    <>
      <header className="bg-slate-900 py-2">
        <div className="flex justify-between items-center container mx-auto">
          <h1 translate="no" className="text-lg p-1">
            {data.title}
          </h1>

          <LanguageDropDown curLocale={curLocale} />
        </div>
      </header>
      <main className="p-2">{dict.summary}</main>
    </>
  )
}
