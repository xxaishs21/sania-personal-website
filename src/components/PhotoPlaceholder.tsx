
import { useState } from 'react'

type PhotoPlaceholderProps = {
  src: string
  alt: string
  icon: string
  label: string
  className?: string
}

export default function PhotoPlaceholder({
  src,
  alt,
  icon,
  label,
  className = '',
}: PhotoPlaceholderProps) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <div className={`about-photo-placeholder ${className}`}>
      {!loaded && (
        <div className="photo-fallback">
          <span className="about-placeholder-icon" aria-hidden="true">
            {icon}
          </span>
          <span className="about-placeholder-label">{label}</span>
        </div>
      )}

      {!failed && (
        <img
          src={src}
          alt={alt}
          className={`photo-image ${loaded ? 'photo-image-loaded' : ''}`}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}
