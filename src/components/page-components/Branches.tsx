// components/page-components/Branches.tsx
import Image from 'next/image'
import { CarouselItem } from '@/lib/types'

interface GridGalleryProps {
  data: CarouselItem[]
  className?: string
  title?: string
  description?: string
}

const Branches = ({ data, className = '', title, description }: GridGalleryProps) => {
  
  return (
    <div className={`w-full py-4 ${className}`}>
      
      {/* Header */}
      {(title || description) && (
        <div className="text-center">
          {title && (
            <h2 className="text-4xl font-bold prompt-r text-teal-500 mb-2">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-gray-600">{description}</p>
          )}
        </div>
      )}

      {/* ✅ Single Image Container - 16:9 */}
      {/* ✅ Full Width 16:9 Image */}
{/* ✅ Mobile padding, Desktop full width */}
<div className="w-full px-4 md:px-0">
  <div className="aspect-video relative overflow-hidden rounded-lg md:rounded-none shadow-lg">
    <Image 
      src={data[0]?.image}
      alt={data[0]?.title || 'Branch Image'}
      fill
      className="object-cover"
    />
  </div>
</div>
    </div>
  )
}

export default Branches