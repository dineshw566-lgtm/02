import { useEffect, useRef, useState } from "react"
import { CalendarDays, Check, X } from "lucide-react"
import logo from "../assets/logo.png"
import logoMark from "../assets/logo-mark.png"
import FoldText from "./FoldText"

const initial = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  service: "Comprehensive eye test",
}

export default function AppointmentModal({ open, onClose }) {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle")
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!open) return
    document.body.classList.add("modal-open")
    setTimeout(() => dialogRef.current?.focus(), 0)
    const close = (event) => event.key === "Escape" && onClose()
    window.addEventListener("keydown", close)
    return () => {
      document.body.classList.remove("modal-open")
      window.removeEventListener("keydown", close)
    }
  }, [open, onClose])

  if (!open) return null
  const update = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value })
  const submit = (event) => {
    event.preventDefault()
    const next = {}
    if (form.name.trim().length < 2) next.name = "Please enter your name."
    if (!/^[+\d][\d\s-]{7,}$/.test(form.phone))
      next.phone = "Enter a valid phone number."
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Enter a valid email."
    if (!form.date) next.date = "Choose a preferred date."
    if (!form.time) next.time = "Choose a preferred time."
    setErrors(next)
    if (Object.keys(next).length) return
    setStatus("loading")
    setTimeout(() => setStatus("success"), 700)
  }

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <section
        className="modal appointment-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="appointment-title"
        tabIndex="-1"
        ref={dialogRef}
      >
        <button
          className="icon-button modal-close"
          onClick={onClose}
          aria-label="Close appointment form"
        >
          <X />
        </button>
        {status === "success" ? (
          <div className="success-state">
            <img
              src={logoMark}
              alt="VIZHEN PLUS OPTICS"
              className="success-brand-mark"
            />
            <span className="success-icon">
              <Check />
            </span>
            <p className="eyebrow">Request received</p>
            <h2 id="appointment-title">
              <FoldText
                text="Your visit starts here."
                trigger="mount"
                splitBy="word"
                hinge="top"
              />
            </h2>
            <p>
              Our care team will contact you to verify the store, time and
              appointment details before your visit.
            </p>
            <button className="button button-dark" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="modal-brand-badge">
              <img src={logo} alt="VIZHEN PLUS OPTICS" className="modal-logo" />
            </div>
            <div className="modal-heading">
              <CalendarDays />
              <div>
                <p className="eyebrow">Personal eye care</p>
                <h2 id="appointment-title">
                  <FoldText
                    text="Book an appointment"
                    trigger="mount"
                    splitBy="word"
                    hinge="top"
                  />
                </h2>
              </div>
            </div>
            <p className="modal-intro">
              Tell us what works for you. A team member will confirm the final
              time by phone.
            </p>
            <form className="form-grid" onSubmit={submit} noValidate>
              {[
                ["name", "Name", "text", "Your full name"],
                ["phone", "Phone", "tel", "+91"],
                ["email", "Email (optional)", "email", "you@example.com"],
                ["date", "Preferred date", "date", ""],
                ["time", "Preferred time", "time", ""],
              ].map(([name, label, type, placeholder]) => (
                <label className="field" key={name}>
                  {label}
                  <input
                    name={name}
                    type={type}
                    value={form[name]}
                    onChange={update}
                    placeholder={placeholder}
                    min={
                      name === "date"
                        ? new Date().toISOString().split("T")[0]
                        : undefined
                    }
                    aria-invalid={!!errors[name]}
                  />
                  {errors[name] && (
                    <span className="field-error">{errors[name]}</span>
                  )}
                </label>
              ))}
              <label className="field field-wide">
                Service
                <select name="service" value={form.service} onChange={update}>
                  {[
                    "Comprehensive eye test",
                    "Frame consultation",
                    "Prescription lens advice",
                    "Kids eye care",
                    "Progressive lens fitting",
                  ].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <button
                className="button button-accent field-wide"
                disabled={status === "loading"}
              >
                {status === "loading"
                  ? "Sending request…"
                  : "Request appointment"}
              </button>
            </form>
          </>
        )}
      </section>
    </div>
  )
}
