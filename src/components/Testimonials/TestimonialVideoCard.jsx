import { useEffect, useRef, useState } from "react"
import { Eye, Pause, Play, Volume2, VolumeX, Video } from "lucide-react"

export default function TestimonialVideoCard({
  item,
  isActive,
  offset,
  onClick,
}) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Handle play/pause sync when card becomes active or inactive
  useEffect(() => {
    const video = videoRef.current
    if (!video || hasError) return

    if (isActive) {
      video.muted = isMuted
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay with sound or codec fallback
            setIsPlaying(false)
          })
      }
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }, [isActive, isMuted, hasError])

  const togglePlay = (e) => {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
      setIsPlaying(false)
    } else {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    }
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return
    const nextMuted = !isMuted
    video.muted = nextMuted
    setIsMuted(nextMuted)
  }

  const handleVideoError = () => {
    setHasError(true)
    setIsLoading(false)
    setIsPlaying(false)
  }

  const handleLoadedData = () => {
    setIsLoading(false)
    setHasError(false)
  }

  return (
    <article
      className={`testimonial-video-card ${
        isActive ? "active" : ""
      } offset-${offset}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onClick()
        }
      }}
      aria-label={`${item.customerName || "Customer"} testimonial video`}
    >
      <div className="testimonial-card-inner">
        {/* VIEW COUNT BADGE (Top-Left) */}
        {item.views && (
          <div
            className="testimonial-views-badge"
            aria-label={`${item.views} views`}
          >
            <Eye size={12} strokeWidth={2.2} />
            <span>{item.views}</span>
          </div>
        )}

        {/* MUTE / AUDIO TOGGLE (Top-Right, Active Card Only) */}
        {isActive && !hasError && (
          <button
            type="button"
            className="testimonial-audio-btn"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        )}

        {/* HTML5 REAL VIDEO ELEMENT */}
        {!hasError ? (
          <video
            ref={videoRef}
            src={item.videoUrl}
            poster={item.poster || undefined}
            playsInline
            muted={isMuted}
            loop
            preload="metadata"
            className="testimonial-video-player"
            onLoadedData={handleLoadedData}
            onError={handleVideoError}
          />
        ) : (
          /* ELEGANT FALLBACK STATE WHEN LOCAL VIDEO ASSET IS PENDING */
          <div className="testimonial-fallback-state">
            <div className="testimonial-fallback-icon">
              <Video size={28} strokeWidth={1.5} />
            </div>
            <p className="testimonial-fallback-name">{item.customerName}</p>
            <span className="testimonial-fallback-label">{item.title}</span>
            <small className="testimonial-fallback-hint">
              Drop 9:16 video in <code>{item.videoUrl}</code>
            </small>
          </div>
        )}

        {/* ACTIVE CARD PLAY / PAUSE BUTTON OVERLAY */}
        {isActive && !hasError && (
          <button
            type="button"
            className={`testimonial-play-btn ${
              isPlaying ? "playing" : "paused"
            }`}
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause size={18} />
            ) : (
              <Play size={18} className="play-triangle" />
            )}
          </button>
        )}

        {/* BOTTOM STORY OVERLAY */}
        <div className="testimonial-card-overlay">
          <div className="testimonial-customer-info">
            <h4 className="testimonial-customer-name">{item.customerName}</h4>
            <p className="testimonial-customer-title">{item.title}</p>
            {item.caption && (
              <p className="testimonial-customer-caption">
                &ldquo;{item.caption}&rdquo;
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
