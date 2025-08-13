// lib/types.ts

// ✅ Base interface
interface BaseItem {
  id: number
  title: string
  image: string
}

// ✅ สำหรับ Gallery (ง่ายๆ)
interface GalleryItem extends BaseItem {
  subtitle?: string
  category?: string
}

// ✅ สำหรับ Carousel (มี bullet points)
interface CarouselItem extends BaseItem {
  description: BulletPoint[]
}

// ✅ สำหรับ general purpose
interface ProductItem extends BaseItem {
  description?: string
  price?: number
  category?: string
  features?: string[]
}

interface BulletPoint {
  bullet1?: string
  bullet2?: string
  bullet3?: string
  bullet4?: string
  bullet5?: string
  bullet6?: string
  bullet7?: string
  bullet8?: string
  bullet9?: string
  bullet10?: string
}


  interface YouTubeShort {
    id: number
    videoId: string
    title: string
    description?: string
  }
  interface BranchLocation {
    id: number
    name: string
    address: string
    coordinates?: { lat: number; lng: number }
    phone?: string
    email?: string
    hours?: string
    image?: string
    description?: string
  }
  
  
  export type { BulletPoint, CarouselItem, YouTubeShort, BranchLocation }