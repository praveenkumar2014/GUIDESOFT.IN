import type { CatalogCourse } from './courseCatalog'

export type ThemeforestVisual = {
  id: string
  url: string
  sourceUrl: string
  label: string
  position?: string
}

// Preview images are served from Envato's ThemeForest asset CDN. Keep the
// source item URL beside each asset so these can be replaced with licensed
// downloads whenever the production ThemeForest license is available.
export const themeforestVisuals = {
  floraCreative: {
    id: 'flora-creative',
    url: 'https://s3.envato.com/files/653016769/03_screenshot.jpg',
    sourceUrl: 'https://themeforest.net/item/flora-responsive-creative-wordpress-theme/12038776',
    label: 'Creative agency',
    position: 'center 28%',
  },
  floraLaptop: {
    id: 'flora-laptop',
    url: 'https://s3.envato.com/files/653016769/04_screenshot.jpg',
    sourceUrl: 'https://themeforest.net/item/flora-responsive-creative-wordpress-theme/12038776',
    label: 'Creative studio',
    position: 'center center',
  },
  floraYellow: {
    id: 'flora-yellow',
    url: 'https://s3.envato.com/files/653016769/05_screenshot.jpg',
    sourceUrl: 'https://themeforest.net/item/flora-responsive-creative-wordpress-theme/12038776',
    label: 'Visual direction',
    position: 'center 22%',
  },
  floraPortfolio: {
    id: 'flora-portfolio',
    url: 'https://s3.envato.com/files/653016769/07_screenshot.jpg',
    sourceUrl: 'https://themeforest.net/item/flora-responsive-creative-wordpress-theme/12038776',
    label: 'Portfolio system',
    position: 'center 32%',
  },
  floraGrid: {
    id: 'flora-grid',
    url: 'https://s3.envato.com/files/653016769/06_screenshot.jpg',
    sourceUrl: 'https://themeforest.net/item/flora-responsive-creative-wordpress-theme/12038776',
    label: 'Visual portfolio',
    position: 'center center',
  },
  aieroChatbot: {
    id: 'aiero-chatbot',
    url: 'https://s3.envato.com/files/729523167/ThemePreview/04_Home%20Chatbot.jpg',
    sourceUrl: 'https://themeforest.net/item/aiero-ai-agency-technology-wordpress-theme/56753053',
    label: 'AI interface',
    position: 'center 22%',
  },
  aieroTechnology: {
    id: 'aiero-technology',
    url: 'https://s3.envato.com/files/816795221/ThemePreview/01_Home_Modern%20technology.jpg',
    sourceUrl: 'https://themeforest.net/item/aiero-ai-agency-technology-wordpress-theme/56753053',
    label: 'Modern technology',
    position: 'center 25%',
  },
  aieroNeural: {
    id: 'aiero-neural',
    url: 'https://s3.envato.com/files/781318144/ThemePreview/02_Home_Neural%20networks.jpg',
    sourceUrl: 'https://themeforest.net/item/aiero-ai-agency-technology-wordpress-theme/56753053',
    label: 'Neural networks',
    position: 'center 24%',
  },
  aieroSolutions: {
    id: 'aiero-solutions',
    url: 'https://s3.envato.com/files/781318144/ThemePreview/03_Home_AI%20Solutions.jpg',
    sourceUrl: 'https://themeforest.net/item/aiero-ai-agency-technology-wordpress-theme/56753053',
    label: 'AI solutions',
    position: 'center 23%',
  },
  neurosAgency: {
    id: 'neuros-agency',
    url: 'https://s3.envato.com/files/810728906/ThemePreview/03_Home_AI%20Agency_design.jpg',
    sourceUrl: 'https://themeforest.net/item/neuros-ai-agency-technology-wordpress-theme/52246267',
    label: 'AI agency',
    position: 'center 25%',
  },
  neurosIntelligence: {
    id: 'neuros-intelligence',
    url: 'https://s3.envato.com/files/810728906/ThemePreview/01_Home_Artificial%20intellegance_design.jpg',
    sourceUrl: 'https://themeforest.net/item/neuros-ai-agency-technology-wordpress-theme/52246267',
    label: 'Artificial intelligence',
    position: 'center 24%',
  },
  neurosNetworks: {
    id: 'neuros-networks',
    url: 'https://s3.envato.com/files/731710899/ThemePreview/02_Home_Neural%20networks_design.jpg',
    sourceUrl: 'https://themeforest.net/item/neuros-ai-agency-technology-wordpress-theme/52246267',
    label: 'Networked ideas',
    position: 'center 23%',
  },
  vimatoCreative: {
    id: 'vimato-creative',
    url: 'https://s3.envato.com/files/656019235/Screenshots/04_home_03.jpg',
    sourceUrl: 'https://themeforest.net/item/vimato-ai-image-video-animation-generator-figma-template/60383881',
    label: 'Creative generation',
    position: 'center 22%',
  },
  zexEditorial: {
    id: 'zex-editorial',
    url: 'https://s3.envato.com/files/464024356/07_Blog%20Details.jpg',
    sourceUrl: 'https://themeforest.net/item/zex-ai-image-generate-website-figma-template/47730793',
    label: 'Image generation',
    position: 'center 26%',
  },
  zexPricing: {
    id: 'zex-pricing',
    url: 'https://s3.envato.com/files/464024356/04_Pricing.jpg',
    sourceUrl: 'https://themeforest.net/item/zex-ai-image-generate-website-figma-template/47730793',
    label: 'Creative platform',
    position: 'center 24%',
  },
  cynicAgency: {
    id: 'cynic-agency',
    url: 'https://camo.envatousercontent.com/8808eadefd38b91bc0d499ca516569db30f59aeb/68747470733a2f2f6e65772e6178696c7468656d65732e636f6d2f7468656d65732f70726f6a6563742d7265736f75726365732f63796e69632f68746d6c2f6465736372697074696f6e2f68746d6c2d706167652d6c6973742d312e382e6a7067',
    sourceUrl: 'https://themeforest.net/item/digital-agency-html-template/20268873',
    label: 'Digital agency',
    position: 'center 28%',
  },
} satisfies Record<string, ThemeforestVisual>

export const pageVisuals: Record<string, ThemeforestVisual> = {
  home: themeforestVisuals.floraCreative,
  courses: themeforestVisuals.neurosAgency,
  careerAcademy: themeforestVisuals.aieroTechnology,
  role: themeforestVisuals.neurosIntelligence,
  browse: themeforestVisuals.floraLaptop,
  category: themeforestVisuals.floraPortfolio,
  certificates: themeforestVisuals.aieroSolutions,
  degrees: themeforestVisuals.aieroChatbot,
  certification: themeforestVisuals.zexEditorial,
  skills: themeforestVisuals.aieroNeural,
  openSource: themeforestVisuals.floraGrid,
  download: themeforestVisuals.cynicAgency,
  studio: themeforestVisuals.vimatoCreative,
  learn: themeforestVisuals.neurosNetworks,
  about: themeforestVisuals.floraYellow,
  contact: themeforestVisuals.zexPricing,
  login: themeforestVisuals.aieroChatbot,
  dashboard: themeforestVisuals.aieroSolutions,
}

function stableHash(value: string) {
  return Array.from(value).reduce((hash, character) => ((hash * 31) + character.charCodeAt(0)) >>> 0, 7)
}

export function visualForCourse(course: CatalogCourse, index = 0) {
  const visuals = Object.values(themeforestVisuals)
  return visuals[stableHash(`${course.id}:${index}`) % visuals.length]
}
