import gsLogo from '../assets/gslogo.png'
import type { CatalogCourse } from '../data/courseCatalog'

export type PosterAccent = 'green' | 'gold' | 'coral' | 'blue'

type PosterArtProps = {
  course: CatalogCourse
  index?: number
  accent?: PosterAccent
  compact?: boolean
}

export function PosterArt({ course, index = 1, accent = 'green', compact = false }: PosterArtProps) {
  return (
    <div
      className={`course-poster course-poster-${accent}${compact ? ' is-compact' : ''}`}
      role="img"
      aria-label={`${course.title} GuideSoft course poster`}
    >
      <span className="course-poster-noise" />
      <span className="course-poster-grid" />
      <div className="course-poster-topline">
        <span className="course-poster-brand"><img src={gsLogo} alt="" /> GUIDESOFT</span>
        <span>{String(index).padStart(2, '0')}</span>
      </div>
      <div className="course-poster-copy">
        <span className="course-poster-eyebrow">{course.category}</span>
        <strong>{course.title}</strong>
      </div>
      <div className="course-poster-scene" aria-hidden="true">
        <span className="poster-orbit poster-orbit-one" />
        <span className="poster-orbit poster-orbit-two" />
        <div className="poster-window">
          <div className="poster-window-bar"><i /><i /><i /><span>COURSE.EXE</span></div>
          <div className="poster-window-body">
            <div className="poster-window-sidebar"><b /><b /><b /><b /></div>
            <div className="poster-window-content">
              <span className="poster-ui-label">Learning path</span>
              <div className="poster-ui-heading"><b /><b /></div>
              <div className="poster-ui-chart"><i /><i /><i /><i /><i /><i /></div>
              <div className="poster-ui-row"><b /><b /><b /></div>
            </div>
          </div>
        </div>
        <div className="poster-phone">
          <span className="poster-phone-notch" />
          <div className="poster-phone-header"><span>Live</span><i /></div>
          <div className="poster-phone-orb"><img src={gsLogo} alt="" /></div>
          <div className="poster-phone-lines"><i /><i /><i /></div>
          <div className="poster-phone-button"><span>Start</span><b>{course.icon}</b></div>
        </div>
      </div>
      <div className="course-poster-bottomline">
        <span>{course.category}</span>
        <span>GUIDESOFT / 2026</span>
      </div>
    </div>
  )
}
