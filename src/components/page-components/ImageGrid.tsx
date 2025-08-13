// components/MasonryInstallationGallery.tsx
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const ImageGrid = ({ className = '' }) => {
  const [randomImages, setRandomImages] = useState<string[]>([])

  const allImages = [
    '/installation/installation-1.jpg',
    '/installation/installation-2.jpg',
    '/installation/installation-3.jpg',
    '/installation/installation-4.jpg',
    '/installation/installation-5.jpg',
    '/installation/installation-6.jpg',
    '/installation/installation-7.jpg',
    '/installation/installation-8.jpg',
    '/installation/installation-9.jpg',
    '/installation/installation-10.jpg',
    '/installation/installation-11.jpg',
    '/installation/installation-12.jpg',
    '/installation/installation-13.jpg',
    '/installation/installation-14.jpg',
    '/installation/installation-15.jpg',
    '/installation/installation-16.jpg',
    '/installation/installation-17.jpg',
    '/installation/installation-18.jpg',
    '/installation/installation-19.jpg',
    '/installation/installation-20.jpg',
    '/installation/installation-21.jpg',
    '/installation/installation-22.jpg',
    '/installation/installation-23.jpg',
    '/installation/installation-24.jpg'
  ]

  useEffect(() => {
    const shuffled = [...allImages].sort(() => 0.5 - Math.random())
    setRandomImages(shuffled.slice(0, 12))
  }, [])

  return (
    <div className={`w-full py-8 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold prompt-r text-gray-800 mb-2">
          ผลงานการติดตั้ง
        </h2>
        {/* <p className="text-gray-600">ชมผลงานการติดตั้งจากลูกค้าจริง</p> */}
      </div>

      {/* Masonry Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {randomImages.map((imageSrc, index) => (
          <div 
            key={`${imageSrc}-${index}`}
            className="break-inside-avoid mb-4"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
              <Image
                src={imageSrc}
                alt={`Installation ${index + 1}`}
                width={300}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGrid