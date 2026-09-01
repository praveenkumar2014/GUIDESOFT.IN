import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
  type ReactNode,
  type RefObject,
} from 'react'
import gsLogo from './assets/gslogo.png'
import logoDark from './assets/logodark.png'
import logoLight from './assets/logolight.png'
import { Button, Icon, ProgressBar, StatusPill, type IconName } from './components/ui'
import { PosterArt, type PosterAccent } from './components/PosterArt'
import {
  catalogStats,
  courseCatalog,
  courseCategories,
  createTranscriptCoursePrompt,
  flagshipPrograms,
  type CatalogCourse,
} from './data/courseCatalog'
import {
  careerRoles,
  certificationPrep,
  certificateTracks,
  degreePathways,
  exploreCategories,
  openSourceLabs,
  trendingSkills,
  type CareerRole,
  type ExploreCategory,
} from './data/learningCatalog'
import './App.css'

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID as
  | string
  | undefined
const verifyTokenUrl = import.meta.env.VITE_BACKEND_VERIFY_TOKEN_URL as
  | string
  | undefined
const logoutTokenUrl = import.meta.env.VITE_BACKEND_LOGOUT_TOKEN_URL as
  | string
  | undefined
const electronDownloadUrl = import.meta.env.VITE_ELECTRON_DOWNLOAD_URL as
  | string
  | undefined
const desktopDownloadUrl = import.meta.env.VITE_DESKTOP_APP_URL as
  | string
  | undefined
const androidDownloadUrl = import.meta.env.VITE_ANDROID_APP_URL as
  | string
  | undefined
const iosDownloadUrl = import.meta.env.VITE_IOS_APP_URL as
  | string
  | undefined
const googleScriptSrc = 'https://accounts.google.com/gsi/client'
const dashboardPath = '/dashboard'

type AuthUser = {
  id: string
  email: string
}

type Route = 'home' | 'courses' | 'about' | 'contact' | 'studio' | 'learn' | 'login' | 'dashboard' | 'career-academy' | 'role' | 'browse' | 'category' | 'certificates' | 'degrees' | 'skills' | 'certification' | 'open-source' | 'download'

type LearningProgress = {
  activeLesson: number
  completedLessons: number[]
}

type GoogleCredentialResponse = {
  credential: string
  select_by?: string
}

type GoogleCredentialClaims = {
  sub?: unknown
  email?: unknown
}

type GoogleIdentityServices = {
  accounts: {
    id: {
      initialize: (options: {
        client_id: string
        callback: (response: GoogleCredentialResponse) => void
        auto_select?: boolean
        cancel_on_tap_outside?: boolean
      }) => void
      renderButton: (
        parent: HTMLElement,
        options: {
          theme: 'outline' | 'filled_blue' | 'filled_black'
          size: 'large' | 'medium' | 'small'
          text: 'signin_with' | 'signup_with' | 'continue_with' | 'signin'
          shape: 'rectangular' | 'pill' | 'circle' | 'square'
          width?: number
          logo_alignment?: 'left' | 'center'
        },
      ) => void
    }
  }
}

declare global {
  interface Window {
    google?: GoogleIdentityServices
  }
}

const navItems: Array<{ label: string; path: string; route: Route }> = [
  { label: 'Learning paths', path: '/courses', route: 'courses' },
  { label: 'Learn online', path: '/learn', route: 'learn' },
  { label: 'AI Studio', path: '/studio', route: 'studio' },
  { label: 'About', path: '/about', route: 'about' },
]

const featuredCourseTitles = ['Generative AI', 'Figma + AI', 'MERN + AI']
const featuredCourses = featuredCourseTitles
  .map((title) => courseCatalog.find((course) => course.title === title))
  .filter((course): course is CatalogCourse => Boolean(course))

const homeCollections = {
  popular: featuredCourses,
  ai: courseCatalog.filter((course) => course.categoryId === 'ai--generative-ai').slice(0, 3),
  career: courseCatalog.filter((course) => course.categoryId === 'career--industry-programs').slice(0, 3),
}

const homeCategories = courseCategories.slice(0, 8).map((category) => ({
  ...category,
  courseCount: courseCatalog.filter((course) => course.categoryId === category.id).length,
}))

const backendCoursesUrl = (import.meta.env.VITE_BACKEND_COURSE_URL as string | undefined) ?? 'http://localhost:8000/api/courses/'

function normalizeCourseItem(value: Partial<CatalogCourse> & Record<string, unknown>): CatalogCourse | null {
  if (!value || typeof value !== 'object') return null
  const id = typeof value.id === 'string' ? value.id : ''
  const title = typeof value.title === 'string' ? value.title : ''
  const categoryId = typeof value.categoryId === 'string' ? value.categoryId : 'career--industry-programs'
  const category = typeof value.category === 'string' ? value.category : 'Career & Industry Programs'
  if (!id || !title) return null
  return { id, title, categoryId, category, icon: typeof value.icon === 'string' ? value.icon : '📚' }
}

async function fetchDynamicCourses(): Promise<CatalogCourse[]> {
  try {
    const response = await fetch(backendCoursesUrl)
    if (!response.ok) return courseCatalog
    const payload = await response.json() as unknown
    const entries = Array.isArray(payload) ? payload : Array.isArray((payload as { items?: unknown })?.items) ? (payload as { items: unknown[] }).items : []
    const normalized = entries
      .map((item) => normalizeCourseItem(item as Partial<CatalogCourse> & Record<string, unknown>))
      .filter((item): item is CatalogCourse => Boolean(item))
    return normalized.length ? normalized : courseCatalog
  } catch {
    return courseCatalog
  }
}

const learningProgressKey = (courseId: string) => `learning_progress_${courseId}`

function readLearningProgress(courseId: string): LearningProgress {
  try {
    const stored = localStorage.getItem(learningProgressKey(courseId))
    if (!stored) return { activeLesson: 0, completedLessons: [] }
    const parsed = JSON.parse(stored) as Partial<LearningProgress>
    return {
      activeLesson: typeof parsed.activeLesson === 'number' ? parsed.activeLesson : 0,
      completedLessons: Array.isArray(parsed.completedLessons)
        ? parsed.completedLessons.filter((lesson): lesson is number => typeof lesson === 'number')
        : [],
    }
  } catch {
    return { activeLesson: 0, completedLessons: [] }
  }
}

function useRevealOnScroll(route?: Route) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!elements.length) return

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [route])
}

function courseAccent(course: CatalogCourse): PosterAccent {
  if (course.category.includes('UX')) return 'gold'
  if (course.category.includes('Full-Stack')) return 'coral'
  const accents: PosterAccent[] = ['green', 'blue', 'gold', 'coral']
  const score = course.title.split('').reduce((total, character) => total + character.charCodeAt(0), 0)
  return accents[score % accents.length]
}

const categoryIconMap: Record<string, IconName> = {
  'ai--generative-ai': 'ai',
  'ux-ui--product-design': 'design',
  'full-stack-development': 'code',
  'frontend-development': 'layout',
  'python--backend': 'python',
  'mobile-app-development': 'mobile',
  'cloud-computing': 'cloud',
  'devops--infrastructure': 'settings',
  'data-science--analytics': 'chart',
  'machine-learning': 'ai',
  'database--data-engineering': 'database',
  cybersecurity: 'security',
  networking: 'network',
  'linux--systems': 'terminal',
  'blockchain--web3': 'blocks',
  'ar--vr--spatial-computing': 'box',
  'digital-marketing': 'megaphone',
  'content--creative-ai': 'spark',
  'business--entrepreneurship': 'briefcase',
  'enterprise--professional': 'briefcase',
  'testing--quality': 'flask',
  'no-code--low-code': 'blocks',
  'developer-tools--ai-coding': 'tools',
  'career--industry-programs': 'school',
}

function iconForCategory(categoryId: string): IconName {
  return categoryIconMap[categoryId] ?? 'layers'
}

function CourseIcon({ categoryId, size = 18 }: { categoryId: string; size?: number }) {
  return <Icon name={iconForCategory(categoryId)} size={size} />
}

function courseBlurb(course: CatalogCourse) {
  const blurbs: Record<string, string> = {
    'ai--generative-ai': `Move from model concepts to prompts, evaluation, and a workflow you can use with ${course.title}.`,
    'ux-ui--product-design': `Learn the decisions behind clear interfaces, from user needs to useful prototypes in ${course.title}.`,
    'full-stack-development': `Connect frontend, backend, data, and deployment into one working product with ${course.title}.`,
    'frontend-development': `Build responsive interfaces with a sharper eye for structure, interaction, and detail in ${course.title}.`,
    'python--backend': `Write readable scripts, services, and automations that solve a real problem using ${course.title}.`,
    'cloud-computing': `Understand the moving parts behind reliable, deployable digital products in ${course.title}.`,
    'career--industry-programs': `A focused professional path with a practical outcome and a clear place to begin with ${course.title}.`,
  }
  return blurbs[course.categoryId] ?? `A practical path with clear concepts, guided practice, and a project to finish for ${course.title}.`
}

function courseMatchesTerms(course: CatalogCourse, terms: string[]) {
  const searchText = `${course.title} ${course.category}`.toLowerCase()
  return terms.some((term) => searchText.includes(term.toLowerCase()))
}

function coursesForRole(role: CareerRole) {
  const matches = courseCatalog.filter((course) => courseMatchesTerms(course, role.focusTerms))
  return matches.length ? matches.slice(0, 6) : courseCatalog.filter((course) => course.categoryId === 'career--industry-programs').slice(0, 6)
}

function coursesForCategory(category: ExploreCategory) {
  const directMatches = courseCatalog.filter((course) => course.categoryId === category.courseCategoryId)
  const relatedMatches = courseCatalog.filter((course) => courseMatchesTerms(course, category.focusTerms))
  return [...directMatches, ...relatedMatches.filter((course) => !directMatches.some((direct) => direct.id === course.id))].slice(0, 8)
}

function routeForPath(pathname: string): Route {
  const cleanPathname = pathname.split('?')[0].split('#')[0]
  if (cleanPathname.startsWith('/career-academy/roles/')) return 'role'
  if (cleanPathname === '/career-academy') return 'career-academy'
  if (cleanPathname.startsWith('/browse/')) return 'category'
  if (cleanPathname === '/browse') return 'browse'
  if (cleanPathname === '/certificates') return 'certificates'
  if (cleanPathname === '/degrees') return 'degrees'
  if (cleanPathname === '/skills') return 'skills'
  if (cleanPathname === '/certification-prep') return 'certification'
  if (cleanPathname === '/open-source') return 'open-source'
  if (cleanPathname === '/download') return 'download'
  if (cleanPathname === '/courses') return 'courses'
  if (cleanPathname === '/about') return 'about'
  if (cleanPathname === '/contact') return 'contact'
  if (cleanPathname === '/studio') return 'studio'
  if (cleanPathname === '/learn') return 'learn'
  if (cleanPathname === '/login') return 'login'
  if (cleanPathname === dashboardPath) return 'dashboard'
  return 'home'
}

function loadGoogleIdentityServices() {
  if (window.google?.accounts.id) {
    return Promise.resolve()
  }

  return new Promise<void>((resolve, reject) => {
    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${googleScriptSrc}"]`,
    )

    if (!script) {
      script = document.createElement('script')
      script.src = googleScriptSrc
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }

    script.addEventListener('load', () => resolve(), { once: true })
    script.addEventListener(
      'error',
      () => reject(new Error('Google Identity Services could not be loaded.')),
      { once: true },
    )
  })
}

function readStoredUser(): AuthUser | null {
  try {
    const storedUser = sessionStorage.getItem('auth_user')
    if (!storedUser) return null

    const parsedUser = JSON.parse(storedUser) as Partial<AuthUser>
    if (
      typeof parsedUser.id === 'string' &&
      typeof parsedUser.email === 'string'
    ) {
      return { id: parsedUser.id, email: parsedUser.email }
    }
  } catch {
    sessionStorage.removeItem('auth_user')
  }

  return null
}

function decodeGoogleCredential(credential: string): AuthUser {
  const encodedPayload = credential.split('.')[1]
  if (!encodedPayload) {
    throw new Error('Google returned an invalid credential.')
  }

  const paddedPayload = encodedPayload.padEnd(
    encodedPayload.length + ((4 - (encodedPayload.length % 4)) % 4),
    '=',
  )
  const binaryPayload = atob(
    paddedPayload.replace(/-/g, '+').replace(/_/g, '/'),
  )
  const bytes = Uint8Array.from(binaryPayload, (character) =>
    character.charCodeAt(0),
  )
  const claims = JSON.parse(
    new TextDecoder().decode(bytes),
  ) as GoogleCredentialClaims

  if (typeof claims.sub !== 'string' || typeof claims.email !== 'string') {
    throw new Error('Google did not return the required user details.')
  }

  return { id: claims.sub, email: claims.email }
}

function SiteHeader({
  route,
  user,
  onNavigate,
}: {
  route: Route
  user: AuthUser | null
  onNavigate: (path: string) => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [exploreOpen, setExploreOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const exploreRef = useRef<HTMLDivElement>(null)

  const goTo = (path: string) => {
    setMenuOpen(false)
    setExploreOpen(false)
    onNavigate(path)
  }

  useEffect(() => {
    if (!exploreOpen) return

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!exploreRef.current?.contains(event.target as Node)) setExploreOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExploreOpen(false)
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [exploreOpen])

  useEffect(() => {
    if (!menuOpen) return

    const closeOnOutsideClick = (event: PointerEvent) => {
      const target = event.target as Node
      const header = document.querySelector('.site-header')
      if (header && !header.contains(target)) {
        setMenuOpen(false)
      }
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const query = searchQuery.trim()
    goTo(`/courses${query ? `?q=${encodeURIComponent(query)}` : ''}`)
  }

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a
          className="site-logo-link"
          href="/"
          onClick={(event) => {
            event.preventDefault()
            goTo('/')
          }}
        >
          <img className="site-logo" src={logoDark} alt="GuideSoft" />
        </a>

        <div className="header-explore" ref={exploreRef}>
          <button className={`header-explore-button${exploreOpen ? ' is-open' : ''}`} type="button" aria-expanded={exploreOpen} aria-haspopup="menu" onClick={() => setExploreOpen((open) => !open)}>
            <Icon name="layers" size={16} />
            Explore courses
            <Icon name="chevron-down" size={14} />
          </button>
          {exploreOpen && <div className="course-mega-menu" role="menu" aria-label="Explore courses menu">
            <div className="course-menu-main">
              <div className="course-menu-heading"><p className="course-menu-kicker">Browse the catalog</p><h2>Find your next direction.</h2><p>Explore focused courses, career programs, and project-led online learning.</p><button className="course-menu-view-all" type="button" onClick={() => goTo('/courses')}>View all courses <Icon name="arrow-up-right" size={15} /></button></div>
              <div className="course-menu-categories">{courseCategories.slice(0, 6).map((category) => <button className="course-menu-category" role="menuitem" type="button" key={category.id} onClick={() => goTo(`/courses?category=${encodeURIComponent(category.id)}`)}><span className="course-menu-category-icon"><CourseIcon categoryId={category.id} size={17} /></span><span><strong>{category.title}</strong><small>{courseCatalog.filter((course) => course.categoryId === category.id).length} courses</small></span><Icon name="arrow-up-right" size={15} /></button>)}</div>
            </div>
            <aside className="course-menu-side"><p className="course-menu-kicker">Start here</p>{featuredCourses.slice(0, 2).map((course) => <button className="course-menu-featured" role="menuitem" type="button" key={course.id} onClick={() => goTo(`/learn?course=${encodeURIComponent(course.id)}`)}><span><CourseIcon categoryId={course.categoryId} size={15} /></span><span><strong>{course.title}</strong><small>{course.category}</small></span><Icon name="arrow-up-right" size={14} /></button>)}<div className="course-menu-page-links"><button type="button" onClick={() => goTo('/learn')}><Icon name="play" size={14} /> Learn online</button><button type="button" onClick={() => goTo('/career-academy')}><Icon name="school" size={14} /> Career academy</button><button type="button" onClick={() => goTo('/browse')}><Icon name="layers" size={14} /> Explore categories</button><button type="button" onClick={() => goTo('/certificates')}><Icon name="badge" size={14} /> Certificates</button><button type="button" onClick={() => goTo('/studio')}><Icon name="spark" size={14} /> AI Course Studio</button></div></aside>
          </div>}
        </div>

        <form className="header-search" onSubmit={submitSearch}>
          <Icon name="search" size={17} />
          <input aria-label="Search GuideSoft courses" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="What do you want to learn?" />
        </form>

        <button
          className="mobile-menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
        </button>

        <nav className={`site-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <button className="mobile-explore-link" type="button" aria-expanded={exploreOpen} onClick={() => setExploreOpen((open) => !open)}>Explore courses <Icon name="chevron-down" size={14} /></button>
          {navItems.map((item) => (
            <a
              key={item.route}
              href={item.path}
              className={route === item.route ? 'is-active' : undefined}
              aria-current={route === item.route ? 'page' : undefined}
              onClick={(event) => {
                event.preventDefault()
                goTo(item.path)
              }}
            >
              {item.label}
            </a>
          ))}
          <button
            className="header-cta"
            type="button"
            onClick={() => goTo(user ? dashboardPath : '/login')}
          >
            {user ? 'My workspace' : 'Sign in'}
            <Icon name="arrow-up-right" size={15} />
          </button>
        </nav>
      </div>
    </header>
  )
}

function MobileBottomNav({
  route,
  user,
  onNavigate,
}: {
  route: Route
  user: AuthUser | null
  onNavigate: (path: string) => void
}) {
  const items: Array<{ label: string; path: string; icon: IconName; active: boolean }> = [
    { label: 'Home', path: '/', icon: 'home', active: route === 'home' },
    { label: 'Learn', path: '/courses', icon: 'layers', active: route === 'courses' || route === 'learn' },
    { label: 'Studio', path: '/studio', icon: 'spark', active: route === 'studio' },
    { label: 'Browse', path: '/browse', icon: 'search', active: route === 'browse' || route === 'category' },
    { label: user ? 'Account' : 'Sign in', path: user ? dashboardPath : '/login', icon: 'user', active: route === 'dashboard' || route === 'login' },
  ]

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile app navigation">
      {items.map((item) => (
        <button
          className={item.active ? 'is-active' : undefined}
          type="button"
          key={item.label}
          aria-current={item.active ? 'page' : undefined}
          onClick={() => onNavigate(item.path)}
        >
          <Icon name={item.icon} size={19} />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  )
}

function MarketingFooter({ user, onNavigate }: { user: AuthUser | null; onNavigate: (path: string) => void }) {
  return (
    <footer className="marketing-footer">
      <div className="footer-wrap">
        <div className="footer-lead">
          <div>
            <p className="footer-kicker">GuideSoft learning system</p>
            <h2>Make your next<br /><em>move useful.</em></h2>
            <p className="footer-lede">Practical technology learning for people building a sharper future.</p>
          </div>
          <button className="footer-primary-link" type="button" onClick={() => onNavigate('/login')}>
            Enter workspace <Icon name="arrow-up-right" size={16} />
          </button>
        </div>
        <div className="footer-navigation">
          <div className="footer-brand-column">
            <img className="footer-logo" src={logoLight} alt="GuideSoft" />
            <p>Learn real technology.<br />Build real skills.</p>
          </div>
          <div className="footer-link-group">
            <p>Explore</p>
            <button type="button" onClick={() => onNavigate('/courses')}>All courses</button>
            <button type="button" onClick={() => onNavigate('/career-academy')}>Career academy</button>
            <button type="button" onClick={() => onNavigate('/browse')}>Explore categories</button>
            <button type="button" onClick={() => onNavigate('/skills')}>Trending skills</button>
            <button type="button" onClick={() => onNavigate('/courses?category=ai--generative-ai')}>AI &amp; generative AI</button>
          </div>
          <div className="footer-link-group">
            <p>Learn</p>
            <button type="button" onClick={() => onNavigate('/learn')}>Learning room</button>
            <button type="button" onClick={() => onNavigate('/studio')}>AI Course Studio</button>
            <button type="button" onClick={() => onNavigate('/certificates')}>Professional certificates</button>
            <button type="button" onClick={() => onNavigate('/degrees')}>Online degrees</button>
            <button type="button" onClick={() => onNavigate('/certification-prep')}>Certification prep</button>
            <button type="button" onClick={() => onNavigate('/about')}>Our approach</button>
          </div>
          <div className="footer-link-group">
            <p>Workspace</p>
            <button type="button" onClick={() => onNavigate('/login')}>Sign in</button>
            <button type="button" onClick={() => onNavigate(user ? dashboardPath : '/login')}>My dashboard</button>
            <button type="button" onClick={() => onNavigate('/open-source')}>Open-source lab</button>
            <button type="button" onClick={() => onNavigate('/download')}>Get the GuideSoft app</button>
            <button type="button" onClick={() => onNavigate('/contact')}>Talk to GuideSoft</button>
            <a href="https://www.linkedin.com/company/guidesoft-it-solutions-trainings" target="_blank" rel="noreferrer">LinkedIn <Icon name="arrow-up-right" size={13} /></a>
            <a href="https://guidesoftcourse.blogspot.com/" target="_blank" rel="noreferrer">GuideSoft updates <Icon name="arrow-up-right" size={13} /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 GuideSoft IT Solutions and Training Center</span>
          <div><a href="#privacy">Privacy</a><a href="#terms">Terms</a><span>Made for deliberate progress.</span></div>
        </div>
      </div>
    </footer>
  )
}

function MarketingFrame({
  route,
  user,
  onNavigate,
  children,
}: {
  route: Route
  user: AuthUser | null
  onNavigate: (path: string) => void
  children: ReactNode
}) {
  useRevealOnScroll(route)

  return (
    <div className="marketing-site">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader route={route} user={user} onNavigate={onNavigate} />
      {children}
      <MarketingFooter user={user} onNavigate={onNavigate} />
      <MobileBottomNav route={route} user={user} onNavigate={onNavigate} />
    </div>
  )
}

function LandingPage({
  route,
  user,
  onNavigate,
}: {
  route: Route
  user: AuthUser | null
  onNavigate: (path: string) => void
}) {
  const [activeCollection, setActiveCollection] = useState<keyof typeof homeCollections>('popular')
  const [heroQuery, setHeroQuery] = useState('')
  const [goal, setGoal] = useState<'career' | 'ai' | 'build'>('career')
  const goalContentByKey = {
    career: {
      label: 'Start my career',
      title: 'A clear first step into technology.',
      copy: 'Start with a focused path, build practical evidence, and keep your next move visible.',
      course: homeCollections.career[0] ?? featuredCourses[0],
    },
    ai: {
      label: 'Build with AI',
      title: 'Use AI without losing the thinking.',
      copy: 'Understand what the tools are doing, then turn them into workflows, products, and repeatable skills.',
      course: homeCollections.ai[0] ?? featuredCourses[0],
    },
    build: {
      label: 'Make something real',
      title: 'Move from curiosity to a working project.',
      copy: 'Pair structured lessons with practice checkpoints and a project you can explain with confidence.',
      course: featuredCourses[1] ?? featuredCourses[0],
    },
  }
  const goalContent = goalContentByKey[goal]

  return (
    <MarketingFrame route={route} user={user} onNavigate={onNavigate}>
      <main id="main-content" className="marketplace-home">
        <section className="market-hero" data-reveal>
          <div className="section-shell market-hero-grid">
            <div className="market-hero-copy">
              <p className="section-kicker"><span /> GuideSoft / Learning for what is next</p>
              <h1>Learn skills that help you <em>move.</em></h1>
              <p className="market-hero-lede">Build practical technology skills through focused courses, project checkpoints, and one workspace that keeps your next step visible.</p>
              <form className="market-search" onSubmit={(event) => { event.preventDefault(); onNavigate(`/courses${heroQuery.trim() ? `?q=${encodeURIComponent(heroQuery.trim())}` : ''}`) }}>
                <Icon name="search" size={19} />
                <input aria-label="What do you want to learn?" value={heroQuery} onChange={(event) => setHeroQuery(event.target.value)} placeholder="What do you want to learn?" />
                <button type="submit">Search <Icon name="arrow-right" size={15} /></button>
              </form>
              <div className="market-quick-search"><span>Try:</span><button type="button" onClick={() => { setHeroQuery('Generative AI'); onNavigate('/courses?q=Generative%20AI') }}>Generative AI</button><button type="button" onClick={() => { setHeroQuery('Python'); onNavigate('/courses?q=Python') }}>Python</button><button type="button" onClick={() => { setHeroQuery('UX'); onNavigate('/courses?q=UX') }}>UX/UI</button></div>
              <div className="market-hero-actions"><Button className="button-primary" type="button" icon="arrow-up-right" onClick={() => onNavigate('/courses')}>Explore courses</Button><button className="button-text" type="button" onClick={() => onNavigate(user ? dashboardPath : '/login')}>{user ? 'Open my workspace' : 'Join the workspace'} <Icon name="arrow-right" size={16} /></button></div>
              <div className="market-page-links" aria-label="Explore GuideSoft pages"><span>Go directly to</span><button type="button" onClick={() => onNavigate('/courses')}>Courses</button><button type="button" onClick={() => onNavigate('/learn')}>Learn online</button><button type="button" onClick={() => onNavigate('/studio')}>AI Studio</button></div>
            </div>
            <div className="market-hero-stage" aria-label="GuideSoft learning workspace preview" role="img">
              <div className="market-orbit market-orbit-one" /><div className="market-orbit market-orbit-two" />
              <div className="market-learning-card"><PosterArt course={goalContent.course ?? courseCatalog[0]} index={1} accent="green" compact /><div className="market-learning-card-header"><span className="market-brand-dot"><img src={gsLogo} alt="" /></span><span>Learning room</span><StatusPill tone="success">Live</StatusPill></div><div className="market-learning-card-body"><p>Next best step</p><h2>{goalContent.course?.title ?? 'Find your next course'}</h2><small>{goalContent.course?.category ?? 'GuideSoft catalog'}</small><div className="market-progress-label"><span>Starter path</span><strong>24%</strong></div><div className="market-progress"><i /></div><button type="button" onClick={() => goalContent.course && onNavigate(`/learn?course=${encodeURIComponent(goalContent.course.id)}`)}>Open learning path <Icon name="arrow-up-right" size={15} /></button></div></div>
              <div className="market-floating-note market-floating-note-top"><span><Icon name="spark" size={15} /></span><div><strong>{catalogStats.totalCourses} ways to start</strong><small>Choose a direction, not a dead end.</small></div></div>
              <div className="market-floating-note market-floating-note-bottom"><span><Icon name="check" size={15} /></span><div><strong>Project-led learning</strong><small>Make progress you can show.</small></div></div>
            </div>
          </div>
        </section>

        <section className="market-proof-band" data-reveal><div className="section-shell market-proof-inner"><span>One learning system</span><strong>Explore</strong><Icon name="arrow-right" size={14} /><strong>Practice</strong><Icon name="arrow-right" size={14} /><strong>Build</strong><Icon name="arrow-right" size={14} /><strong>Grow</strong><span>{catalogStats.totalCourses} courses · {catalogStats.totalCategories} directions</span></div></section>

        <section className="marketplace-section section-shell" data-reveal>
          <div className="market-section-heading"><div><p className="section-kicker"><span /> Explore courses</p><h2>Explore learning that<br /><em>fits your ambition.</em></h2></div><button className="button-text" type="button" onClick={() => onNavigate('/courses')}>View all courses <Icon name="arrow-up-right" size={16} /></button></div>
          <div className="collection-tabs" role="tablist" aria-label="Course collections"><button role="tab" aria-selected={activeCollection === 'popular'} className={activeCollection === 'popular' ? 'is-active' : ''} type="button" onClick={() => setActiveCollection('popular')}>Most popular</button><button role="tab" aria-selected={activeCollection === 'ai'} className={activeCollection === 'ai' ? 'is-active' : ''} type="button" onClick={() => setActiveCollection('ai')}>AI picks</button><button role="tab" aria-selected={activeCollection === 'career'} className={activeCollection === 'career' ? 'is-active' : ''} type="button" onClick={() => setActiveCollection('career')}>Career paths</button></div>
          <div className="market-course-grid">{homeCollections[activeCollection].map((course, index) => <article className={`market-course-card market-course-card-${courseAccent(course)}`} key={course.id} style={{ '--delay': `${index * 90}ms` } as CSSProperties}><PosterArt course={course} index={index + 1} accent={courseAccent(course)} compact /><div className="market-course-card-body"><div className="market-course-card-top"><span className="market-course-icon"><CourseIcon categoryId={course.categoryId} size={20} /></span><StatusPill>{activeCollection === 'career' ? 'Career program' : 'Online course'}</StatusPill></div><p className="market-course-category">{course.category}</p><h3>{course.title}</h3><p className="market-course-description">{courseBlurb(course)}</p><div className="market-course-meta"><span><Icon name="clock" size={14} /> Self-paced</span><span><Icon name="layers" size={14} /> 4 lessons</span></div><button className="market-course-link" type="button" onClick={() => onNavigate(`/learn?course=${encodeURIComponent(course.id)}`)}>Start learning <Icon name="arrow-up-right" size={15} /></button></div></article>)}</div>
        </section>

        <section className="market-categories-section" data-reveal><div className="section-shell"><div className="market-section-heading"><div><p className="section-kicker"><span /> Explore by category</p><h2>Find a place<br /><em>to begin.</em></h2></div><p>Start with the area that feels closest to the work, questions, or future you have in mind.</p></div><div className="market-category-grid">{homeCategories.map((category) => <button className="market-category-card" key={category.id} type="button" onClick={() => onNavigate(`/courses?category=${encodeURIComponent(category.id)}`)}><span className="market-category-icon"><CourseIcon categoryId={category.id} size={19} /></span><span><strong>{category.title}</strong><small>{category.courseCount} courses</small></span><Icon name="arrow-up-right" size={16} /></button>)}</div></div></section>

        <section className="market-goal-section section-shell" data-reveal><div className="market-goal-panel"><div className="market-goal-copy"><p className="section-kicker"><span /> What brings you here?</p><h2>Learning is easier when the next step has a <em>shape.</em></h2><p>Choose the kind of momentum you want today. GuideSoft will point you toward a real place to begin.</p><div className="goal-tabs" role="tablist">{(['career', 'ai', 'build'] as const).map((goalKey) => <button key={goalKey} className={goal === goalKey ? 'is-active' : ''} role="tab" aria-selected={goal === goalKey} type="button" onClick={() => setGoal(goalKey)}>{goalContentByKey[goalKey].label}</button>)}</div></div><div className="market-goal-result"><span className="market-goal-number">0{goal === 'career' ? '1' : goal === 'ai' ? '2' : '3'}</span><h3>{goalContent.title}</h3><p>{goalContent.copy}</p>{goalContent.course && <button type="button" onClick={() => onNavigate(`/learn?course=${encodeURIComponent(goalContent.course.id)}`)}>Start with {goalContent.course.title} <Icon name="arrow-up-right" size={15} /></button>}</div></div></section>

        <section className="market-trust-section" data-reveal><div className="section-shell market-trust-grid"><div><p className="section-kicker"><span /> Why GuideSoft</p><h2>Built for people who want to <em>make progress.</em></h2><p>Clear paths. Useful practice. A workspace that stays human while your skills get sharper.</p><button className="button-primary" type="button" onClick={() => onNavigate('/about')}>See our approach <Icon name="arrow-up-right" size={16} /></button></div><div className="market-trust-list"><div><span>01</span><div><strong>Practice, not passive watching</strong><p>Short lessons connect to checkpoints and project work.</p></div></div><div><span>02</span><div><strong>One place to keep going</strong><p>Move from the catalog to your learning room without losing the thread.</p></div></div><div><span>03</span><div><strong>Make your own curriculum</strong><p>Use AI Course Studio to turn transcripts into structured course briefs.</p></div></div></div></div></section>

        <section className="market-cta section-shell" data-reveal><div className="market-cta-card"><div><p className="section-kicker"><span /> Ready when you are</p><h2>Give your next idea<br /><em>somewhere to go.</em></h2></div><button className="button-light" type="button" onClick={() => onNavigate(user ? dashboardPath : '/login')}>{user ? 'Open my workspace' : 'Join for free'} <Icon name="arrow-up-right" size={16} /></button></div></section>
      </main>
    </MarketingFrame>
  )
}

function CoursesPage({
  route,
  user,
  onNavigate,
}: {
  route: Route
  user: AuthUser | null
  onNavigate: (path: string) => void
}) {
  const initialParams = new URLSearchParams(window.location.search)
  const catalogSearchRef = useRef<HTMLInputElement>(null)
  const [catalogCourses, setCatalogCourses] = useState<CatalogCourse[]>(courseCatalog)
  const [query, setQuery] = useState(initialParams.get('q') ?? '')
  const [selectedCategory, setSelectedCategory] = useState(initialParams.get('category') ?? 'all')
  const [sortMode, setSortMode] = useState<'relevance' | 'az'>('relevance')
  const [visibleCount, setVisibleCount] = useState(12)

  useEffect(() => {
    let ignore = false
    const loadCourses = async () => {
      const nextCourses = await fetchDynamicCourses()
      if (!ignore) setCatalogCourses(nextCourses)
    }

    void loadCourses()
    return () => {
      ignore = true
    }
  }, [])

  useEffect(() => {
    const focusSearch = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        catalogSearchRef.current?.focus()
      }
    }
    window.addEventListener('keydown', focusSearch)
    return () => window.removeEventListener('keydown', focusSearch)
  }, [])

  const shareCourse = (course: CatalogCourse) => {
    const shareText = `I’m exploring ${course.title} on GuideSoft. ${courseBlurb(course)} #GuideSoft #${course.category.replace(/\s+/g, '')} #Learning`
    const shareUrl = `${window.location.origin}/learn?course=${encodeURIComponent(course.id)}`
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`

    const shareTargets = {
      whatsapp: whatsappUrl,
      facebook: facebookUrl,
      instagram: whatsappUrl,
    }

    if (navigator.share) {
      navigator.share({
        title: course.title,
        text: shareText,
        url: shareUrl,
      }).catch(() => {
        const target = shareTargets.whatsapp
        window.open(target, '_blank', 'noopener,noreferrer')
      })
      return
    }

    window.open(shareTargets.whatsapp, '_blank', 'noopener,noreferrer')
  }

  const normalizedQuery = query.trim().toLowerCase()
  const filteredCourses = catalogCourses.filter((course) => {
    const matchesCategory = selectedCategory === 'all' || course.categoryId === selectedCategory
    const matchesQuery = !normalizedQuery || `${course.title} ${course.category}`.toLowerCase().includes(normalizedQuery)
    return matchesCategory && matchesQuery
  })
  const sortedCourses = sortMode === 'az'
    ? [...filteredCourses].sort((first, second) => first.title.localeCompare(second.title))
    : filteredCourses
  const visibleCourses = sortedCourses.slice(0, visibleCount)

  const updateQuery = (nextQuery: string) => {
    setQuery(nextQuery)
    setVisibleCount(12)
  }

  const updateCategory = (nextCategory: string) => {
    setSelectedCategory(nextCategory)
    setVisibleCount(12)
  }

  const clearFilters = () => {
    setQuery('')
    setSelectedCategory('all')
    setSortMode('relevance')
    setVisibleCount(12)
  }

  return (
    <MarketingFrame route={route} user={user} onNavigate={onNavigate}>
      <main id="main-content" className="inner-page section-shell" data-reveal>
        <section className="inner-hero">
          <p className="section-kicker"><span /> GuideSoft catalog</p>
          <h1>Find the skill<br /><em>you need next.</em></h1>
          <p>{catalogStats.totalCourses} courses across {catalogStats.totalCategories} categories. Search by outcome, technology, or direction and open a focused online learning path.</p>
          <div className="catalog-hero-meta"><span><strong>{catalogStats.totalCourses}</strong> courses</span><span><strong>{catalogStats.totalCategories}</strong> directions</span><span><strong>Online</strong> project paths</span></div>
        </section>
        <section className="catalog-controls" aria-label="Course catalog filters">
          <label className="catalog-search"><Icon name="search" size={18} /><input ref={catalogSearchRef} aria-label="Search courses, tools, or categories" value={query} onChange={(event) => updateQuery(event.target.value)} placeholder="Search courses, tools, or categories" /><span className="catalog-search-shortcut">⌘ K</span></label>
          <label className="catalog-sort"><span>Sort by</span><select aria-label="Sort courses" value={sortMode} onChange={(event) => { setSortMode(event.target.value as 'relevance' | 'az'); setVisibleCount(12) }}><option value="relevance">Recommended</option><option value="az">A–Z</option></select><Icon name="chevron-down" size={14} /></label>
        </section>
        <div className="catalog-result-bar"><p className="catalog-result-count">{filteredCourses.length === catalogStats.totalCourses ? 'All courses' : `${filteredCourses.length} matching courses`}</p>{(query || selectedCategory !== 'all' || sortMode !== 'relevance') && <button type="button" onClick={clearFilters}>Clear filters <Icon name="close" size={14} /></button>}</div>
        <section className="catalog-layout" aria-label="GuideSoft learning tracks">
          <aside className="catalog-sidebar">
            <div className="catalog-sidebar-card">
              <div className="catalog-sidebar-heading"><p className="section-kicker"><span /> Browse by focus</p><span>{courseCategories.length}</span></div>
              <div className="catalog-category-list">
                <button className={selectedCategory === 'all' ? 'is-selected' : ''} type="button" onClick={() => updateCategory('all')}><span><Icon name="layers" size={16} /> All courses</span><b>{catalogCourses.length}</b></button>
                {courseCategories.map((category) => <button className={selectedCategory === category.id ? 'is-selected' : ''} type="button" key={category.id} onClick={() => updateCategory(category.id)}><span><CourseIcon categoryId={category.id} size={16} /> {category.title}</span><b>{catalogCourses.filter((course) => course.categoryId === category.id).length}</b></button>)}
              </div>
            </div>
            <div className="catalog-sidebar-callout"><span><Icon name="spark" size={17} /></span><strong>Have source material?</strong><p>Turn a transcript into a structured course brief in AI Studio.</p><button type="button" onClick={() => onNavigate('/studio')}>Open AI Studio <Icon name="arrow-up-right" size={14} /></button></div>
          </aside>
          <div className="catalog-results">
            <div className="catalog-results-heading"><div><p className="section-kicker"><span /> Learning paths</p><h2>{selectedCategory === 'all' ? 'Choose your next useful skill.' : courseCategories.find((category) => category.id === selectedCategory)?.title}</h2></div><span className="catalog-results-number">{visibleCourses.length} / {filteredCourses.length}</span></div>
            <div className="course-card-grid">
              {visibleCourses.map((course, index) => (
                <article className={`catalog-course-card catalog-course-card-${courseAccent(course)}`} key={course.id} data-reveal>
                  <PosterArt course={course} index={index + 1} accent={courseAccent(course)} compact />
                  <div className="catalog-course-content"><div className="catalog-course-meta"><span><CourseIcon categoryId={course.categoryId} size={13} /> {course.category}</span><span>Online</span></div><h3>{course.title}</h3><p>{courseBlurb(course)}</p><div className="catalog-course-footer"><span><Icon name="clock" size={14} /> Self-paced</span><span><Icon name="layers" size={14} /> 4-part path</span></div><div className="catalog-course-actions"><button type="button" onClick={() => onNavigate(`/learn?course=${encodeURIComponent(course.id)}`)}>Open course <Icon name="arrow-up-right" size={15} /></button><button type="button" className="catalog-share-button" onClick={() => shareCourse(course)}>Share <Icon name="arrow-up-right" size={15} /></button></div></div>
                </article>
              ))}
            </div>
            {visibleCourses.length < filteredCourses.length && <button className="load-more-button" type="button" onClick={() => setVisibleCount((count) => count + 12)}>Load more courses <span>{filteredCourses.length - visibleCourses.length} remaining</span><Icon name="arrow-down" size={16} /></button>}
          </div>
        </section>
        {filteredCourses.length === 0 && <div className="empty-catalog"><img src={gsLogo} alt="" /><h2>No exact match yet.</h2><p>Try a broader search or let the AI Course Studio turn a transcript into a new draft.</p><button className="button-primary" type="button" onClick={() => onNavigate('/studio')}>Open AI Course Studio <Icon name="arrow-up-right" size={16} /></button></div>}
        <section className="course-bottom-note"><img src={gsLogo} alt="" /><p>Not sure where to start? <button type="button" onClick={() => onNavigate('/contact')}>Talk through your next step <Icon name="arrow-up-right" size={14} /></button></p></section>
      </main>
    </MarketingFrame>
  )
}

function DiscoveryCourseCard({ course, onNavigate, index = 0 }: { course: CatalogCourse; onNavigate: (path: string) => void; index?: number }) {
  return (
    <article className={`discovery-course-card discovery-course-card-${courseAccent(course)}`}>
      <PosterArt course={course} index={index + 1} accent={courseAccent(course)} compact />
      <div className="discovery-course-body"><p>{course.category}</p><h3>{course.title}</h3><p className="discovery-course-copy">{courseBlurb(course)}</p><div className="discovery-course-meta"><span><Icon name="clock" size={13} /> Self-paced</span><span><Icon name="layers" size={13} /> 4-part path</span></div><button type="button" onClick={() => onNavigate(`/learn?course=${encodeURIComponent(course.id)}`)}>Open course <Icon name="arrow-up-right" size={14} /></button></div>
    </article>
  )
}

function CareerAcademyPage({ route, user, onNavigate }: { route: Route; user: AuthUser | null; onNavigate: (path: string) => void }) {
  return (
    <MarketingFrame route={route} user={user} onNavigate={onNavigate}>
      <main id="main-content" className="discovery-page section-shell">
        <section className="discovery-hero" data-reveal><div><p className="section-kicker"><span /> Career academy</p><h1>Choose the work you want to <em>grow into.</em></h1><p>Explore role-based learning paths built around the skills, projects, and decisions behind modern technology work.</p><div className="discovery-actions"><button className="button-primary" type="button" onClick={() => document.getElementById('role-grid')?.scrollIntoView({ behavior: 'smooth' })}>Explore roles <Icon name="arrow-down" size={15} /></button><button className="button-text" type="button" onClick={() => onNavigate('/courses')}>Browse every course <Icon name="arrow-up-right" size={15} /></button></div></div><div className="discovery-hero-panel"><span className="discovery-panel-label">Role paths</span><strong>10</strong><p>Start from the work you want to do, then build the skills to earn your next opportunity.</p><div className="discovery-panel-list"><span>Understand the role</span><span>Build the toolkit</span><span>Make evidence</span></div></div></section>
        <section id="role-grid" className="discovery-section" data-reveal><div className="discovery-section-heading"><div><p className="section-kicker"><span /> Explore roles</p><h2>Find your next<br /><em>professional direction.</em></h2></div><p>Every path is a starting point, not a promise. Choose the work that interests you and let the curriculum make the first step concrete.</p></div><div className="role-card-grid">{careerRoles.map((role, index) => <button className="role-card" key={role.id} type="button" onClick={() => onNavigate(`/career-academy/roles/${role.id}`)}><span className="role-card-index">{String(index + 1).padStart(2, '0')}</span><span className="role-card-icon"><Icon name={role.icon} size={21} /></span><strong>{role.title}</strong><p>{role.description}</p><span className="role-card-link">View role path <Icon name="arrow-up-right" size={14} /></span></button>)}</div></section>
        <section className="discovery-band" data-reveal><div><p className="section-kicker"><span /> A better starting point</p><h2>Don’t search by job title alone. Search by the work you want to <em>practice.</em></h2></div><div className="discovery-band-points"><span><Icon name="check" size={15} /> Role context</span><span><Icon name="check" size={15} /> Practical projects</span><span><Icon name="check" size={15} /> Visible progress</span></div></section>
      </main>
    </MarketingFrame>
  )
}

function RolePage({ route, user, onNavigate }: { route: Route; user: AuthUser | null; onNavigate: (path: string) => void }) {
  const roleId = window.location.pathname.split('/').filter(Boolean).pop() ?? ''
  const role = careerRoles.find((item) => item.id === roleId) ?? careerRoles[0]
  const roleCourses = coursesForRole(role)
  return (
    <MarketingFrame route={route} user={user} onNavigate={onNavigate}>
      <main id="main-content" className="discovery-page section-shell">
        <div className="discovery-breadcrumb"><button type="button" onClick={() => onNavigate('/career-academy')}><Icon name="arrow-left" size={14} /> Career academy</button><span>/</span><span>{role.title}</span></div>
        <section className="role-detail-hero" data-reveal><div><span className="role-detail-icon"><Icon name={role.icon} size={26} /></span><p className="section-kicker"><span /> Role path</p><h1>Build toward<br /><em>{role.title}.</em></h1><p>{role.description}</p><button className="button-primary" type="button" onClick={() => roleCourses[0] && onNavigate(`/learn?course=${encodeURIComponent(roleCourses[0].id)}`)}>Start the path <Icon name="arrow-up-right" size={15} /></button></div><div className="role-outcome-card"><span>Path outcome</span><strong>{role.outcome}</strong><div className="role-skill-list">{role.skills.map((skill) => <span key={skill}><Icon name="check" size={13} /> {skill}</span>)}</div></div></section>
        <section className="discovery-section role-course-section" data-reveal><div className="discovery-section-heading"><div><p className="section-kicker"><span /> Recommended learning</p><h2>A focused set of<br /><em>ways to begin.</em></h2></div><p>These GuideSoft courses are selected from the catalog for the themes behind this role. Keep the path flexible as your interests sharpen.</p></div><div className="discovery-course-grid">{roleCourses.map((course, index) => <DiscoveryCourseCard key={course.id} course={course} index={index} onNavigate={onNavigate} />)}</div></section>
      </main>
    </MarketingFrame>
  )
}

function BrowsePage({ route, user, onNavigate }: { route: Route; user: AuthUser | null; onNavigate: (path: string) => void }) {
  return (
    <MarketingFrame route={route} user={user} onNavigate={onNavigate}>
      <main id="main-content" className="discovery-page section-shell">
        <section className="discovery-hero discovery-hero-compact" data-reveal><div><p className="section-kicker"><span /> Explore categories</p><h1>Find the subject that makes you <em>curious.</em></h1><p>Browse GuideSoft by the area of work or study you want to understand next.</p></div><div className="discovery-hero-stat"><strong>{exploreCategories.length}</strong><span>learning areas<br />to explore</span></div></section>
        <section className="discovery-section" data-reveal><div className="category-discovery-grid">{exploreCategories.map((category) => <button className="category-discovery-card" key={category.id} type="button" onClick={() => onNavigate(`/browse/${category.id}`)}><span className="category-discovery-icon"><Icon name={category.icon} size={21} /></span><span><strong>{category.title}</strong><p>{category.description}</p><small>{coursesForCategory(category).length}+ relevant courses <Icon name="arrow-up-right" size={13} /></small></span></button>)}</div></section>
        <section className="discovery-inline-cta" data-reveal><div><p className="section-kicker"><span /> Can’t decide?</p><h2>Start with a role and let the work guide you.</h2></div><button className="button-primary" type="button" onClick={() => onNavigate('/career-academy')}>Explore career paths <Icon name="arrow-up-right" size={15} /></button></section>
      </main>
    </MarketingFrame>
  )
}

function CategoryPage({ route, user, onNavigate }: { route: Route; user: AuthUser | null; onNavigate: (path: string) => void }) {
  const categoryId = window.location.pathname.split('/').filter(Boolean).pop() ?? ''
  const category = exploreCategories.find((item) => item.id === categoryId) ?? exploreCategories[0]
  const courses = coursesForCategory(category)
  return (
    <MarketingFrame route={route} user={user} onNavigate={onNavigate}>
      <main id="main-content" className="discovery-page section-shell">
        <div className="discovery-breadcrumb"><button type="button" onClick={() => onNavigate('/browse')}><Icon name="arrow-left" size={14} /> Categories</button><span>/</span><span>{category.title}</span></div>
        <section className="category-detail-hero" data-reveal><div><span className="role-detail-icon"><Icon name={category.icon} size={26} /></span><p className="section-kicker"><span /> Category guide</p><h1>Learn through<br /><em>{category.title}.</em></h1><p>{category.description} Choose a course, make a small project, and keep your next question visible.</p></div><div className="category-detail-aside"><strong>{courses.length}+</strong><span>starting points<br />from the catalog</span><button type="button" onClick={() => onNavigate(`/courses?category=${encodeURIComponent(category.courseCategoryId)}`)}>See the full catalog <Icon name="arrow-up-right" size={14} /></button></div></section>
        <section className="discovery-section" data-reveal><div className="discovery-section-heading"><div><p className="section-kicker"><span /> Recommended courses</p><h2>Build a little<br /><em>momentum.</em></h2></div><p>Short, practical routes to help you decide what to go deeper on.</p></div><div className="discovery-course-grid">{courses.map((course, index) => <DiscoveryCourseCard key={course.id} course={course} index={index} onNavigate={onNavigate} />)}</div></section>
      </main>
    </MarketingFrame>
  )
}

function PathwaysPage({ route, user, onNavigate, kind }: { route: Route; user: AuthUser | null; onNavigate: (path: string) => void; kind: 'certificates' | 'degrees' | 'certification' }) {
  const config = {
    certificates: { kicker: 'Professional certificates', title: 'Earn proof of work, not just another completion screen.', copy: 'Focused programs that help you connect learning to the projects, decisions, and language used in real teams.', paths: certificateTracks },
    degrees: { kicker: 'Online degrees', title: 'Study with more depth while keeping your direction visible.', copy: 'Explore flexible academic pathways for building foundations, specialization, and long-term professional range.', paths: degreePathways },
    certification: { kicker: 'Certification preparation', title: 'Prepare with context, practice, and a plan you can actually follow.', copy: 'Use certification objectives as a map for building understanding—not a substitute for it.', paths: certificationPrep },
  }[kind]
  return (
    <MarketingFrame route={route} user={user} onNavigate={onNavigate}>
      <main id="main-content" className="discovery-page section-shell">
        <section className="discovery-hero" data-reveal><div><p className="section-kicker"><span /> {config.kicker}</p><h1>{config.title}</h1><p>{config.copy}</p><div className="discovery-actions"><button className="button-primary" type="button" onClick={() => document.getElementById('pathway-grid')?.scrollIntoView({ behavior: 'smooth' })}>Explore pathways <Icon name="arrow-down" size={15} /></button><button className="button-text" type="button" onClick={() => onNavigate('/courses')}>Browse courses <Icon name="arrow-up-right" size={15} /></button></div></div><div className="discovery-hero-panel"><span className="discovery-panel-label">GuideSoft principle</span><strong>Learn<br />with context.</strong><p>Every pathway should give the new concept somewhere useful to land.</p></div></section>
        <section id="pathway-grid" className="discovery-section" data-reveal><div className="pathway-grid">{config.paths.map((path) => <article className="pathway-card" key={path.id}><span className="pathway-card-icon"><Icon name={path.icon} size={20} /></span><p>{path.eyebrow}</p><h2>{path.title}</h2><p className="pathway-card-copy">{path.description}</p><div className="pathway-topics">{path.topics.map((topic) => <span key={topic}>{topic}</span>)}</div><strong className="pathway-outcome">{path.outcome}</strong><button className="button-text" type="button" onClick={() => onNavigate('/courses')}>Find a starting course <Icon name="arrow-up-right" size={14} /></button></article>)}</div></section>
      </main>
    </MarketingFrame>
  )
}

function SkillsPage({ route, user, onNavigate }: { route: Route; user: AuthUser | null; onNavigate: (path: string) => void }) {
  const skillCourses = courseCatalog.filter((course) => trendingSkills.some((skill) => course.title.toLowerCase().includes(skill.query.toLowerCase()))).slice(0, 8)
  return (
    <MarketingFrame route={route} user={user} onNavigate={onNavigate}>
      <main id="main-content" className="discovery-page section-shell">
        <section className="discovery-hero discovery-hero-compact" data-reveal><div><p className="section-kicker"><span /> Trending skills</p><h1>Start with a skill. Build from <em>there.</em></h1><p>Use these high-signal topics as doorways into the catalog, then follow the questions that emerge.</p></div><div className="discovery-hero-stat"><strong>{trendingSkills.length}</strong><span>popular skills<br />to explore now</span></div></section>
        <section className="skill-cloud-section" data-reveal><div className="skill-cloud-heading"><p className="section-kicker"><span /> Explore a skill</p><h2>What do you want to make <em>easier?</em></h2></div><div className="skill-cloud">{trendingSkills.map((skill) => <button key={skill.id} type="button" onClick={() => onNavigate(`/courses?q=${encodeURIComponent(skill.query)}`)}><Icon name={skill.icon} size={17} /> {skill.title}<Icon name="arrow-up-right" size={13} /></button>)}</div></section>
        <section className="discovery-section" data-reveal><div className="discovery-section-heading"><div><p className="section-kicker"><span /> Course picks</p><h2>Useful starting<br /><em>points.</em></h2></div><p>Begin with a short path, then choose the depth that matches your goal.</p></div><div className="discovery-course-grid">{skillCourses.map((course, index) => <DiscoveryCourseCard key={course.id} course={course} index={index} onNavigate={onNavigate} />)}</div></section>
      </main>
    </MarketingFrame>
  )
}

function OpenSourcePage({ route, user, onNavigate }: { route: Route; user: AuthUser | null; onNavigate: (path: string) => void }) {
  return (
    <MarketingFrame route={route} user={user} onNavigate={onNavigate}>
      <main id="main-content" className="discovery-page section-shell">
        <section className="discovery-hero discovery-hero-compact" data-reveal><div><p className="section-kicker"><span /> Open-source learning lab</p><h1>Learn how the tools behind learning are <em>built.</em></h1><p>Original GuideSoft labs that use public open-source projects as architecture references for CMS, LMS, accessibility, telemetry, and multi-tenant learning systems.</p></div><div className="discovery-hero-stat"><strong>{openSourceLabs.length}</strong><span>public projects<br />to study</span></div></section>
        <section className="opensource-grid" data-reveal>{openSourceLabs.map((lab) => <article className="opensource-card" key={lab.id}><span className="opensource-icon"><Icon name={lab.icon} size={20} /></span><p>{lab.eyebrow}</p><h2>{lab.title}</h2><p className="opensource-copy">{lab.description}</p><div className="opensource-meta"><span>{lab.license}</span>{lab.stack.map((item) => <span key={item}>{item}</span>)}</div><a href={lab.githubUrl} target="_blank" rel="noreferrer">Study on GitHub <Icon name="arrow-up-right" size={14} /></a></article>)}</section>
        <section className="discovery-inline-cta" data-reveal><div><p className="section-kicker"><span /> Build your own</p><h2>Have a transcript or project idea? Shape it in AI Studio.</h2></div><button className="button-primary" type="button" onClick={() => onNavigate('/studio')}>Open AI Studio <Icon name="arrow-up-right" size={15} /></button></section>
      </main>
    </MarketingFrame>
  )
}

type DownloadPlatform = 'ios' | 'android' | 'desktop'

function detectDownloadPlatform(): DownloadPlatform {
  const userAgent = window.navigator.userAgent.toLowerCase()
  if (/iphone|ipad|ipod/.test(userAgent)) return 'ios'
  if (/android/.test(userAgent)) return 'android'
  return 'desktop'
}

function DownloadPage({ route, user, onNavigate }: { route: Route; user: AuthUser | null; onNavigate: (path: string) => void }) {
  const [platform] = useState<DownloadPlatform>(detectDownloadPlatform)
  const [autoStarted, setAutoStarted] = useState(false)
  const autoDownload = new URLSearchParams(window.location.search).get('auto') !== '0'
  const recommendedUrl = platform === 'ios'
    ? iosDownloadUrl
    : platform === 'android'
      ? androidDownloadUrl
      : electronDownloadUrl ?? desktopDownloadUrl
  const recommendedLabel = platform === 'ios' ? 'Open the App Store' : platform === 'android' ? 'Open Google Play' : 'Download for desktop'

  useEffect(() => {
    if (!autoDownload || !recommendedUrl) return
    const redirectTimer = window.setTimeout(() => {
      setAutoStarted(true)
      window.location.assign(recommendedUrl)
    }, 850)
    return () => window.clearTimeout(redirectTimer)
  }, [autoDownload, recommendedUrl])

  const options = [
    { label: 'Desktop app', detail: 'Electron for macOS, Windows, or Linux', url: electronDownloadUrl ?? desktopDownloadUrl, icon: 'terminal' as IconName },
    { label: 'Android app', detail: 'Google Play or a signed APK', url: androidDownloadUrl, icon: 'mobile' as IconName },
    { label: 'iPhone & iPad', detail: 'App Store distribution', url: iosDownloadUrl, icon: 'mobile' as IconName },
  ]

  return (
    <MarketingFrame route={route} user={user} onNavigate={onNavigate}>
      <main id="main-content" className="download-page section-shell">
        <section className="download-hero" data-reveal>
          <div className="download-hero-copy">
            <img className="download-brand-mark" src={gsLogo} alt="GuideSoft" />
            <p className="section-kicker"><span /> GuideSoft everywhere</p>
            <h1>Keep learning<br /><em>close at hand.</em></h1>
            <p>Use the GuideSoft workspace on the device that fits your day. Your browser app, desktop app, and mobile experience share the same calm learning system.</p>
            <div className="download-hero-actions">
              {recommendedUrl ? <a className="button-primary" href={recommendedUrl}>{autoStarted ? 'Opening download…' : recommendedLabel} <Icon name="arrow-down" size={16} /></a> : <button className="button-primary" type="button" onClick={() => document.getElementById('download-options')?.scrollIntoView({ behavior: 'smooth' })}>Choose your platform <Icon name="arrow-down" size={16} /></button>}
              <button className="button-text" type="button" onClick={() => onNavigate('/courses')}>Continue in browser <Icon name="arrow-right" size={16} /></button>
            </div>
            <p className="download-note">{recommendedUrl ? `Detected platform: ${platform === 'desktop' ? 'desktop' : platform}. Download will start automatically.` : 'App links are ready to connect. Add your release URLs to the Vite environment to enable automatic downloads.'}</p>
          </div>
          <div className="download-device-stage" aria-hidden="true">
            <div className="download-device-desktop"><div className="download-device-top"><span /><span /><span /><b>GUIDESOFT / WORKSPACE</b></div><div className="download-device-screen"><div className="download-screen-sidebar"><i /><i /><i /><i /></div><div className="download-screen-main"><small>YOUR NEXT BEST STEP</small><strong>Make something<br />you can show.</strong><span /><span /><span /></div></div></div>
            <div className="download-device-phone"><i /><b>GuideSoft</b><strong>Learn what<br />is next.</strong><span /><span /><span /><em>Open learning room ↗</em></div>
          </div>
        </section>
        <section id="download-options" className="download-options" data-reveal>
          <div className="download-section-heading"><div><p className="section-kicker"><span /> Choose a build</p><h2>One brand.<br /><em>Every screen.</em></h2></div><p>When the app URLs are present, the page selects the right build from the device user agent and sends the visitor straight to it.</p></div>
          <div className="download-option-grid">
            {options.map((option) => <article className={`download-option-card${option.url ? ' is-ready' : ''}`} key={option.label}><span className="download-option-icon"><Icon name={option.icon} size={20} /></span><p>{option.url ? 'Ready to install' : 'Release URL needed'}</p><h3>{option.label}</h3><span className="download-option-detail">{option.detail}</span>{option.url ? <a href={option.url}>Get this build <Icon name="arrow-up-right" size={14} /></a> : <button type="button" onClick={() => onNavigate('/contact')}>Talk to GuideSoft <Icon name="arrow-up-right" size={14} /></button>}</article>)}
          </div>
        </section>
      </main>
    </MarketingFrame>
  )
}

function StudioPage({
  route,
  user,
  onNavigate,
}: {
  route: Route
  user: AuthUser | null
  onNavigate: (path: string) => void
}) {
  const [selectedCourseId, setSelectedCourseId] = useState(courseCatalog[0]?.id ?? '')
  const [transcript, setTranscript] = useState('')
  const [prompt, setPrompt] = useState('')
  const [copied, setCopied] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [copyError, setCopyError] = useState('')
  const selectedCourse = courseCatalog.find((course) => course.id === selectedCourseId) ?? courseCatalog[0]

  const generatePrompt = () => {
    if (!selectedCourse) return
    setIsGenerating(true)
    window.setTimeout(() => {
      setPrompt(createTranscriptCoursePrompt(selectedCourse, transcript))
      setCopied(false)
      setCopyError('')
      setIsGenerating(false)
    }, 260)
  }

  const copyPrompt = async () => {
    if (!prompt) return
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      setCopyError('')
    } catch {
      setCopyError('Copy is unavailable in this browser. Select the prompt text manually.')
    }
  }

  const useSampleTranscript = () => {
    setTranscript('Today we are breaking down how a modern team moves from a rough idea to a useful digital product. We will define the user problem, sketch the first flow, build a small working version, and review what we learned before shipping the next iteration.')
    setPrompt('')
    setCopied(false)
  }

  return (
    <MarketingFrame route={route} user={user} onNavigate={onNavigate}>
      <main id="main-content" className="inner-page studio-page section-shell" data-reveal>
        <section className="inner-hero studio-hero">
          <p className="section-kicker"><span /> AI course studio</p>
          <h1>Turn a transcript<br /><em>into a learning path.</em></h1>
          <p>Choose a catalog course, paste a transcript, and create a structured prompt for an AI course architect. Keep the source human; let the system handle the structure.</p>
        </section>
        <section className="studio-layout">
          <div className="studio-panel studio-input-panel">
            <div className="studio-panel-heading"><span className="studio-index">01</span><div><p>Source material</p><h2>Set the brief</h2></div></div>
            <label className="studio-field"><span>Course to generate</span><select aria-label="Choose a course to generate" value={selectedCourseId} onChange={(event) => setSelectedCourseId(event.target.value)}>{courseCatalog.map((course) => <option value={course.id} key={course.id}>{course.title} · {course.category}</option>)}</select></label>
            <label className="studio-field"><span>Transcript or lesson notes <small>{transcript.length} characters</small></span><textarea value={transcript} onChange={(event) => setTranscript(event.target.value)} placeholder="Paste a lecture transcript, workshop notes, or a rough lesson plan here…" /></label>
            <div className="studio-input-actions"><button className="studio-sample-button" type="button" onClick={useSampleTranscript}>Use sample transcript</button><span>Works with lectures, workshops, or lesson notes.</span></div>
            <button className="button-primary studio-generate-button" type="button" onClick={generatePrompt} disabled={isGenerating}>{isGenerating ? 'Structuring the brief…' : 'Generate course prompt'} <Icon name="spark" size={16} /></button>
            <p className="studio-helper"><Icon name="lock" size={14} /> The prompt preserves meaning, flags missing information, creates modules, adds checkpoints, and avoids invented claims.</p>
          </div>
          <div className="studio-panel studio-output-panel">
            <div className="studio-panel-heading"><span className="studio-index">02</span><div><p>Structured output</p><h2>Prompt ready</h2></div><StatusPill tone={prompt ? 'success' : 'neutral'}>{prompt ? 'Ready' : 'Waiting'}</StatusPill><button className="copy-prompt" type="button" onClick={copyPrompt} disabled={!prompt}>{copied ? 'Copied' : 'Copy prompt'}</button></div>
            {prompt ? <pre className="prompt-output">{prompt}</pre> : <div className="prompt-empty"><img src={gsLogo} alt="" /><h3>Your course blueprint starts here.</h3><p>Generate a prompt to see the CMS-ready course schema and content rules.</p></div>}
            {copyError && <p className="studio-copy-error" role="status">{copyError}</p>}
          </div>
        </section>
        <section className="studio-programs"><div><p className="section-kicker"><span /> Program builder</p><h2>Compose flagship paths from the catalog.</h2></div><div className="program-chip-list">{flagshipPrograms.slice(0, 8).map((program) => <span key={program}>{program}</span>)}</div></section>
      </main>
    </MarketingFrame>
  )
}

function LearningHubPage({
  route,
  user,
  onNavigate,
}: {
  route: Route
  user: AuthUser | null
  onNavigate: (path: string) => void
}) {
  const params = new URLSearchParams(window.location.search)
  const requestedCourse = params.get('course')
  const course = courseCatalog.find((item) => item.id === requestedCourse) ?? courseCatalog[0]
  const lessons = ['Orientation & outcomes', 'Core concepts', 'Guided practice', 'Applied project checkpoint']
  const [progress, setProgress] = useState<LearningProgress>(() => course ? readLearningProgress(course.id) : { activeLesson: 0, completedLessons: [] })

  if (!course) return null

  const activeLesson = Math.min(progress.activeLesson, lessons.length - 1)
  const progressPercentage = Math.round((progress.completedLessons.length / lessons.length) * 100)

  const updateProgress = (nextProgress: LearningProgress) => {
    setProgress(nextProgress)
    localStorage.setItem(learningProgressKey(course.id), JSON.stringify(nextProgress))
  }

  const markLessonComplete = () => {
    const completedLessons = progress.completedLessons.includes(activeLesson)
      ? progress.completedLessons
      : [...progress.completedLessons, activeLesson].sort((a, b) => a - b)
    updateProgress({
      activeLesson: Math.min(activeLesson + 1, lessons.length - 1),
      completedLessons,
    })
  }

  return (
    <MarketingFrame route={route} user={user} onNavigate={onNavigate}>
      <main id="main-content" className="learning-page section-shell" data-reveal>
        <div className="learning-breadcrumb"><button type="button" onClick={() => onNavigate('/courses')}><Icon name="arrow-left" size={14} /> Catalog</button><span>/</span><span>{course.category}</span></div>
        <section className="learning-hero"><div><p className="section-kicker"><span /> Online learning workspace</p><h1>{course.title}</h1><p>{courseBlurb(course)} Learn through short lessons, practice checkpoints, and a project you can make your own.</p><div className="learning-tags"><span><CourseIcon categoryId={course.categoryId} size={14} /> {course.category}</span><span><Icon name="clock" size={14} /> 4-part path</span><span><Icon name="layers" size={14} /> Project path</span></div></div><div className="learning-progress-card"><span>Course progress</span><strong>{progressPercentage}%</strong><ProgressBar value={progressPercentage} label={`${progressPercentage}% of ${course.title} complete`} /><small>{progressPercentage === 100 ? 'Path complete' : progress.completedLessons.length ? `${progress.completedLessons.length} of ${lessons.length} lessons complete` : 'Start with lesson one'}</small></div></section>
        <section className="learning-body"><div className="lesson-list"><div className="lesson-list-heading"><p className="section-kicker"><span /> Curriculum</p><span>{lessons.length} lessons</span></div>{lessons.map((lesson, index) => <button className={`${activeLesson === index ? 'lesson-item is-active' : 'lesson-item'}${progress.completedLessons.includes(index) ? ' is-complete' : ''}`} type="button" key={lesson} onClick={() => updateProgress({ ...progress, activeLesson: index })}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{lesson}</strong><small>{index === 0 ? '5 min · Start here' : '12 min · Guided lesson'}</small></div><b>{progress.completedLessons.includes(index) ? <Icon name="check" size={15} /> : <Icon name="arrow-right" size={15} />}</b></button>)}</div><div className="lesson-view"><span className="lesson-status">Lesson {activeLesson + 1} of {lessons.length}</span><h2>{lessons[activeLesson]}</h2><p>Master {course.title} with interactive lessons, hands-on practice, and real-world projects.</p><div className="lesson-meta"><span><Icon name="play" size={14} /> Guided lesson</span><span><Icon name="clock" size={14} /> {activeLesson === 0 ? '5 min' : '12 min'}</span><span><Icon name="check" size={14} /> Save progress</span></div><div className="lesson-placeholder"><span><Icon name="play" size={17} /></span><div><strong>Learning player ready</strong><small>Connect this view to your headless CMS lesson body or video provider.</small></div></div><div className="lesson-view-actions"><button className="button-primary" type="button" onClick={markLessonComplete} disabled={progress.completedLessons.includes(activeLesson) && activeLesson === lessons.length - 1}>{progress.completedLessons.includes(activeLesson) ? activeLesson === lessons.length - 1 ? 'Course complete' : 'Continue to next lesson' : 'Mark lesson complete'} <Icon name="arrow-right" size={16} /></button>{!user && <button className="button-text" type="button" onClick={() => onNavigate('/login')}>Sign in to sync progress <Icon name="lock" size={14} /></button>}</div></div></section>
      </main>
    </MarketingFrame>
  )
}

function AboutPage({
  route,
  user,
  onNavigate,
}: {
  route: Route
  user: AuthUser | null
  onNavigate: (path: string) => void
}) {
  return (
    <MarketingFrame route={route} user={user} onNavigate={onNavigate}>
      <main id="main-content" className="inner-page about-page section-shell">
        <section className="inner-hero about-hero">
          <p className="section-kicker"><span /> Our approach</p>
          <h1>Learning should feel<br /><em>like momentum.</em></h1>
          <p>GuideSoft brings together practical technology learning and the kind of support that helps people keep showing up.</p>
        </section>
        <section className="about-story" data-reveal>
          <div className="story-statement"><span>“</span><h2>Build the skill.<br />Keep the curiosity.</h2></div>
          <div className="story-copy"><p>Technology changes quickly. The answer is not to chase every new thing—it is to develop strong foundations, practice deliberately, and learn how to learn.</p><p>That is the thinking behind our tracks: clear fundamentals, useful tools, and work that gives every new concept a place to land.</p><button className="button-primary" type="button" onClick={() => onNavigate('/courses')}>Find your track <Icon name="arrow-up-right" size={16} /></button></div>
        </section>
        <section className="values-grid" data-reveal>
          <article><span>01</span><h3>Practical by default</h3><p>Every concept should connect to something you can try, make, or explain.</p></article>
          <article><span>02</span><h3>Human in the loop</h3><p>Progress is easier when questions are welcome and the path feels visible.</p></article>
          <article><span>03</span><h3>Built for the long run</h3><p>A strong foundation keeps paying off as your tools and ambitions evolve.</p></article>
        </section>
      </main>
    </MarketingFrame>
  )
}

function ContactPage({
  route,
  user,
  onNavigate,
}: {
  route: Route
  user: AuthUser | null
  onNavigate: (path: string) => void
}) {
  return (
    <MarketingFrame route={route} user={user} onNavigate={onNavigate}>
      <main id="main-content" className="inner-page contact-page section-shell">
        <section className="inner-hero contact-hero">
          <p className="section-kicker"><span /> Start a conversation</p>
          <h1>Good questions are<br /><em>good momentum.</em></h1>
          <p>Tell us what you want to learn, build, or change next. We will help you find the right place to begin.</p>
        </section>
        <section className="contact-grid" data-reveal>
          <div className="contact-card contact-card-primary"><img src={gsLogo} alt="" /><p>Ready to learn?</p><h2>Enter the workspace<br />and take the first step.</h2><button className="button-light" type="button" onClick={() => onNavigate('/login')}>Sign in with Google <Icon name="arrow-up-right" size={16} /></button></div>
          <div className="contact-card contact-card-secondary"><p className="section-kicker"><span /> Keep exploring</p><h2>Find GuideSoft<br /><em>in the real world.</em></h2><p>Follow the latest learning updates, course notes, and opportunities from the GuideSoft community.</p><a className="external-link" href="https://guidesoftcourse.blogspot.com/" target="_blank" rel="noreferrer">Visit the GuideSoft updates page <Icon name="arrow-up-right" size={14} /></a></div>
        </section>
      </main>
    </MarketingFrame>
  )
}

function Dashboard({
  user,
  isLoggingOut,
  onLogout,
  onNavigate,
}: {
  user: AuthUser
  isLoggingOut: boolean
  onLogout: () => void
  onNavigate: (path: string) => void
}) {
  const firstName = user.email.split('@')[0]?.split(/[._-]/)[0] ?? 'learner'
  const initials = user.email.slice(0, 1).toUpperCase()

  return (
    <main id="main-content" className="dashboard-page">
      <section className="dashboard-shell" aria-labelledby="dashboard-title">
        <header className="dashboard-header">
          <div className="brand-lockup"><img className="dashboard-logo" src={logoDark} alt="GuideSoft" /></div>
          <nav className="dashboard-nav" aria-label="Workspace navigation"><button type="button" onClick={() => onNavigate('/courses')}>Catalog</button><button type="button" onClick={() => onNavigate('/studio')}>AI Studio</button><button type="button" onClick={() => onNavigate('/learn')}>Learn</button></nav>
          <div className="dashboard-actions"><span className="account-status"><span className="status-dot" /> Authenticated</span><button className="logout-button" type="button" onClick={onLogout} disabled={isLoggingOut}>{isLoggingOut ? 'Signing out…' : 'Log out'}</button></div>
        </header>
        <div className="dashboard-intro"><div><p className="eyebrow">Your workspace</p><h1 id="dashboard-title">Welcome back, <em>{firstName}.</em></h1><p>Your learning space is ready for the next small, useful step.</p></div><div className="dashboard-avatar" aria-hidden="true">{initials}</div></div>
        <div className="dashboard-stats"><article><span><Icon name="layers" size={16} /></span><strong>{catalogStats.totalCourses}</strong><small>courses available</small></article><article><span><Icon name="spark" size={16} /></span><strong>{catalogStats.totalCategories}</strong><small>directions to explore</small></article><article><span><Icon name="lock" size={16} /></span><strong>Secure</strong><small>Google verified access</small></article></div>
        <section className="dashboard-next-step"><div><p className="eyebrow">Next best step</p><h2>Choose a path that gives your curiosity somewhere to go.</h2><p>Start with a focused course, build from a transcript, or continue in the learning room.</p></div><div className="dashboard-quick-actions"><button type="button" onClick={() => onNavigate('/courses')}><span><Icon name="layers" size={18} /></span><strong>Browse courses</strong><Icon name="arrow-up-right" size={15} /></button><button type="button" onClick={() => onNavigate('/studio')}><span><Icon name="spark" size={18} /></span><strong>Open AI Studio</strong><Icon name="arrow-up-right" size={15} /></button></div></section>
        <section className="profile-section"><div className="profile-section-heading"><div><p className="eyebrow">Account details</p><h2>Identity & access</h2></div><StatusPill tone="success"><Icon name="check" size={13} /> Verified</StatusPill></div><div className="profile-grid"><article className="profile-detail"><span className="detail-label">User ID</span><strong>{user.id}</strong><small>Google account identifier</small></article><article className="profile-detail"><span className="detail-label">Email address</span><strong>{user.email}</strong><small>Verified Google email</small></article></div></section>
      </section>
      <p className="footer-note">Simple access. Secure by design.</p>
      <MobileBottomNav route="dashboard" user={user} onNavigate={onNavigate} />
    </main>
  )
}

function LoginPage({
  googleButtonRef,
  status,
  error,
}: {
  googleButtonRef: RefObject<HTMLDivElement | null>
  status: string
  error: string
}) {
  return (
    <main className="auth-layout">
      <section className="auth-brand-panel" aria-label="GuideSoft introduction">
        <div className="brand-panel-glow brand-panel-glow-one" /><div className="brand-panel-glow brand-panel-glow-two" />
        <div className="brand-panel-content"><img className="auth-logo-light" src={logoLight} alt="GuideSoft IT Solutions and Training Center" /><div className="brand-message"><p className="brand-kicker">Your next chapter starts here</p><h2>Build skills that move you forward.</h2><p>Access your learning workspace, projects, and career journey with one secure sign-in.</p></div><div className="brand-highlights"><div><strong>01</strong><span>Industry-ready learning</span></div><div><strong>02</strong><span>Hands-on project experience</span></div><div><strong>03</strong><span>Support for your next step</span></div></div></div>
        <div className="brand-panel-footer"><img src={gsLogo} alt="" /><span>Learn real technology. Build real skills.</span></div>
      </section>
      <section className="auth-form-panel" aria-labelledby="login-title"><div className="auth-form-wrap"><img className="auth-logo-dark" src={logoDark} alt="GuideSoft" /><div className="login-card"><img className="auth-mark" src={gsLogo} alt="" /><p className="eyebrow">Secure sign in</p><h1 id="login-title">Welcome back</h1><p className="subtitle">Sign in to continue to your GuideSoft workspace.</p><div ref={googleButtonRef} className="google-button" aria-label="Sign in with Google" />{status && <p className="status-message" role="status" aria-live="polite">{status}</p>}{error && <p className="error-message" role="alert">{error}</p>}<div className="auth-trust-row"><span><Icon name="lock" size={14} /> Secure access</span><span><Icon name="check" size={14} /> Verified identity</span></div><p className="terms">By continuing, you agree to our <a href="#terms">Terms of Service</a>{' '}and <a href="#privacy">Privacy Policy</a>.</p></div><p className="form-footer">© 2026 GuideSoft IT Solutions and Training Center</p></div></section>
    </main>
  )
}

function App() {
  const googleButtonRef = useRef<HTMLDivElement>(null)
  const [route, setRoute] = useState<Route>(() => routeForPath(window.location.pathname))
  const [user, setUser] = useState<AuthUser | null>(readStoredUser)
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const navigate = (path: string) => {
    window.history.pushState({}, '', path)
    setRoute(routeForPath(path))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      if (logoutTokenUrl) await fetch(logoutTokenUrl, { method: 'POST', credentials: 'include' })
    } finally {
      sessionStorage.removeItem('auth_user')
      sessionStorage.removeItem('access_token')
      window.history.pushState({}, '', '/')
      setRoute('home')
      setUser(null)
      setIsLoggingOut(false)
    }
  }

  const handleGoogleCredential = async (response: GoogleCredentialResponse) => {
    if (!verifyTokenUrl) { setError('Google sign-in succeeded, but token verification is not configured.'); return }
    setError('')
    setStatus('Signing you in…')
    try {
      const verificationResponse = await fetch(verifyTokenUrl, { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token: response.credential }) })
      if (!verificationResponse.ok) throw new Error('Google sign-in could not be verified.')
      const tokenResponse = await verificationResponse.json() as { access_token?: unknown }
      if (typeof tokenResponse.access_token !== 'string') throw new Error('The authentication response did not include an access token.')
      const signedInUser = decodeGoogleCredential(response.credential)
      sessionStorage.setItem('access_token', tokenResponse.access_token)
      sessionStorage.setItem('auth_user', JSON.stringify(signedInUser))
      window.history.pushState({}, '', dashboardPath)
      setRoute('dashboard')
      setStatus('')
      setUser(signedInUser)
    } catch (verificationError) {
      setStatus('')
      setError(verificationError instanceof Error ? verificationError.message : 'Google sign-in could not be completed.')
    }
  }

  useEffect(() => {
    const handleHistoryChange = () => setRoute(routeForPath(window.location.pathname))
    window.addEventListener('popstate', handleHistoryChange)
    return () => window.removeEventListener('popstate', handleHistoryChange)
  }, [])

  useEffect(() => {
    if (route !== 'login' || user) return
    let mounted = true
    const buttonElement = googleButtonRef.current
    const renderGoogleButton = async () => {
      if (!googleClientId) { setError('Google sign-in is not configured yet.'); return }
      try {
        await loadGoogleIdentityServices()
        if (!mounted || !buttonElement || !window.google) return
        window.google.accounts.id.initialize({ client_id: googleClientId, callback: handleGoogleCredential, auto_select: false, cancel_on_tap_outside: true })
        buttonElement.replaceChildren()
        window.google.accounts.id.renderButton(buttonElement, { theme: 'outline', size: 'large', text: 'signin_with', shape: 'rectangular', width: 338, logo_alignment: 'left' })
      } catch (loadError) {
        if (mounted) setError(loadError instanceof Error ? loadError.message : 'Unable to load Google sign-in.')
      }
    }
    void renderGoogleButton()
    return () => { mounted = false; buttonElement?.replaceChildren() }
  }, [route, user])

  if (user && route === 'dashboard') return <Dashboard user={user} isLoggingOut={isLoggingOut} onLogout={handleLogout} onNavigate={navigate} />
  if (route === 'login') return <LoginPage googleButtonRef={googleButtonRef} status={status} error={error} />
  if (route === 'career-academy') return <CareerAcademyPage route={route} user={user} onNavigate={navigate} />
  if (route === 'role') return <RolePage route={route} user={user} onNavigate={navigate} />
  if (route === 'browse') return <BrowsePage route={route} user={user} onNavigate={navigate} />
  if (route === 'category') return <CategoryPage route={route} user={user} onNavigate={navigate} />
  if (route === 'certificates') return <PathwaysPage route={route} user={user} onNavigate={navigate} kind="certificates" />
  if (route === 'degrees') return <PathwaysPage route={route} user={user} onNavigate={navigate} kind="degrees" />
  if (route === 'skills') return <SkillsPage route={route} user={user} onNavigate={navigate} />
  if (route === 'certification') return <PathwaysPage route={route} user={user} onNavigate={navigate} kind="certification" />
  if (route === 'open-source') return <OpenSourcePage route={route} user={user} onNavigate={navigate} />
  if (route === 'download') return <DownloadPage route={route} user={user} onNavigate={navigate} />
  if (route === 'courses') return <CoursesPage route={route} user={user} onNavigate={navigate} />
  if (route === 'studio') return <StudioPage route={route} user={user} onNavigate={navigate} />
  if (route === 'learn') return <LearningHubPage route={route} user={user} onNavigate={navigate} />
  if (route === 'about') return <AboutPage route={route} user={user} onNavigate={navigate} />
  if (route === 'contact') return <ContactPage route={route} user={user} onNavigate={navigate} />
  return <LandingPage route={route} user={user} onNavigate={navigate} />
}

export default App
