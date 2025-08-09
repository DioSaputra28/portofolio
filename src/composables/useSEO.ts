// SEO Management Composable

interface SEOData {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  ogType?: string
  canonicalUrl?: string
}

export function useSEO() {
  const updateSEO = (data: SEOData) => {
    // Update title
    document.title = data.title
    
    // Update meta description
    updateMetaTag('name', 'description', data.description)
    
    // Update keywords if provided
    if (data.keywords) {
      updateMetaTag('name', 'keywords', data.keywords)
    }
    
    // Update Open Graph tags
    updateMetaTag('property', 'og:title', data.title)
    updateMetaTag('property', 'og:description', data.description)
    updateMetaTag('property', 'og:type', data.ogType || 'website')
    
    if (data.ogImage) {
      updateMetaTag('property', 'og:image', data.ogImage)
    }
    
    // Update Twitter tags
    updateMetaTag('property', 'twitter:title', data.title)
    updateMetaTag('property', 'twitter:description', data.description)
    
    if (data.ogImage) {
      updateMetaTag('property', 'twitter:image', data.ogImage)
    }
    
    // Update canonical URL
    if (data.canonicalUrl) {
      updateCanonicalUrl(data.canonicalUrl)
    }
  }
  
  const updateMetaTag = (attribute: string, name: string, content: string) => {
    let element = document.querySelector(`meta[${attribute}="${name}"]`)
    
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attribute, name)
      document.head.appendChild(element)
    }
    
    element.setAttribute('content', content)
  }
  
  const updateCanonicalUrl = (url: string) => {
    let canonical = document.querySelector('link[rel="canonical"]')
    
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    
    canonical.setAttribute('href', url)
  }
  
  const addStructuredData = (data: any) => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
  }
  
  return {
    updateSEO,
    addStructuredData
  }
}