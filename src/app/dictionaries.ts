import "server-only"

const dictionaries = {
  "en-US": () => import("../dictionaries/en.json").then(module => module.default),
  "de-DE": () => import("../dictionaries/de.json").then(module => module.default),
  "fa-IR": () => import("../dictionaries/fa.json").then(module => module.default),
}

export const getDictionary = async (locale: AvailableLanguages) => dictionaries[locale]()
