import { ArrowLeft } from "lucide-react"
import { Link } from "react-router"
import usePageMeta from "../hooks/usePageMeta"
import logo from "../assets/logo.png"
import FoldText from "../components/FoldText"

export default function NotFoundPage() {
  usePageMeta("Page Not Found", "The page you requested could not be found.")
  return (
    <section className="not-found">
      <img src={logo} alt="VIZHEN PLUS OPTICS" className="not-found-logo" />
      <p className="eyebrow">Error 404</p>
      <h1>
        <FoldText
          text="That view is out of frame."
          trigger="mount"
          splitBy="char"
          hinge="top"
        />
      </h1>
      <p>
        The page may have moved, but the collection is right where you left it.
      </p>
      <Link className="button button-dark" to="/">
        <ArrowLeft /> Return home
      </Link>
    </section>
  )
}
