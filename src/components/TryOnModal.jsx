import { useEffect, useRef, useState } from "react"
import { Camera, CameraOff, RefreshCw, ShieldCheck, X } from "lucide-react"
import FoldText from "./FoldText"

export default function TryOnModal({ product, onClose }) {
  const [state, setState] = useState("intro")
  const [message, setMessage] = useState("")
  const videoRef = useRef(null)
  const streamRef = useRef(null)

  const stop = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop())
    streamRef.current = null
  }
  useEffect(() => () => stop(), [])
  useEffect(() => {
    if (state === "live" && videoRef.current && streamRef.current) {
      videoRef.current.srcObject = streamRef.current
      videoRef.current
        .play()
        .catch(() => setMessage("Tap the preview to start your camera."))
    }
  }, [state])

  const start = async () => {
    setState("requesting")
    setMessage("")
    if (!navigator.mediaDevices?.getUserMedia) {
      setState("unavailable")
      return
    }
    try {
      streamRef.current = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 1280 } },
        audio: false,
      })
      setState("live")
    } catch (error) {
      setState(error.name === "NotAllowedError" ? "denied" : "unavailable")
    }
  }

  const close = () => {
    stop()
    onClose()
  }
  return (
    <div className="modal-backdrop">
      <section
        className="modal try-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="try-title"
      >
        <button
          className="icon-button modal-close"
          onClick={close}
          aria-label="Close virtual try-on"
        >
          <X />
        </button>
        {state === "live" ? (
          <div className="camera-stage">
            <video
              ref={videoRef}
              muted
              playsInline
              onClick={() => videoRef.current?.play()}
            />
            <div className="frame-overlay" aria-hidden="true">
              <span />
              <i />
              <span />
            </div>
            <div className="camera-status">
              <span className="live-dot" /> Live preview · manual frame
              placement
            </div>
            <div className="camera-footer">
              <strong>{product.name}</strong>
              <button className="button button-light" onClick={close}>
                Close preview
              </button>
            </div>
          </div>
        ) : (
          <div className="try-content">
            <div className="try-icon">
              {state === "denied" || state === "unavailable" ? (
                <CameraOff />
              ) : (
                <Camera />
              )}
            </div>
            <p className="eyebrow">Virtual try-on</p>
            <h2 id="try-title">
              <FoldText
                key={state}
                text={
                  state === "intro"
                    ? `See ${product.name} on you`
                    : state === "requesting"
                      ? "Opening your camera…"
                      : "Camera access needed"
                }
                trigger="mount"
                splitBy="word"
                hinge="top"
              />
            </h2>
            {state === "intro" && (
              <p>
                Your camera stays on this device and is never recorded. This
                preview uses a fixed frame overlay; face tracking can be added
                later.
              </p>
            )}
            {state === "denied" && (
              <p>
                Camera permission was denied. Allow camera access in your
                browser settings, then retry.
              </p>
            )}
            {state === "unavailable" && (
              <p>
                A camera could not be opened on this device. You can still
                explore the full frame details.
              </p>
            )}
            {message && <p>{message}</p>}
            <div className="privacy-note">
              <ShieldCheck /> Private, local camera preview
            </div>
            {state !== "requesting" && (
              <button className="button button-accent" onClick={start}>
                {state === "intro" ? <Camera /> : <RefreshCw />}
                {state === "intro" ? "Allow camera" : "Try again"}
              </button>
            )}
          </div>
        )}
      </section>
    </div>
  )
}
