import { useEffect } from "react"

export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = `${title} | VIZHEN PLUS OPTICS`
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement("meta")
      meta.name = "description"
      document.head.appendChild(meta)
    }
    meta.content = description
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [title, description])
}
