'use client'
import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'
import { CarouselItem } from '@/lib/types'
import Image from 'next/image'

interface CarouselProps {
  data: CarouselItem[]
  options?: EmblaOptionsType
}

const Carousel = ({ data, options }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    axis: 'y',
    align: 'start',
    duration: 1000,
    ...options
  })

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrentIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
        emblaApi.off('select', onSelect)
      }
    }, [emblaApi, onSelect])

  // const scrollPrev = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollPrev()
  // }, [emblaApi])

  // const scrollNext = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollNext()
  // }, [emblaApi])

  const convertBulletsToArray = (bulletObjects: any[]): string[] => {
    return bulletObjects.map(obj => Object.values(obj)[0] as string)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
      {/* ฝั่งซ้าย - Carousel */}
      <div className="relative">
      <div 
  className="overflow-hidden rounded-lg h-80 md:h-96 lg:h-[500px]" 
  ref={emblaRef}
>
  <div className="flex flex-col h-full -mx-4">
    {data.map((item) => (
      <div key={item.id} className="flex-[0_0_100%] min-h-0 flex items-center justify-center p-4">
        <div className="w-full max-w-sm aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
          <Image 
            src={item.image}
            alt={`Product ${item.title}`}
            fill
            className="object-contain" 
          />
        </div>
      </div>
    ))}
  </div>
</div>

<div className="absolute left-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
  {data.map((_, index) => (
    <button
      key={index}
      className={`w-2 h-6 md:w-3 md:h-8 rounded-full transition-colors ${
        index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
      }`}
      onClick={() => emblaApi?.scrollTo(index)}
    />
  ))}
</div>
</div>

      {/* ฝั่งขวา - Product Details */}
      <div className="space-y-6">
        <div className="space-y-3">
        <h3 className="text-xl font-bold prompt-r text-gray-900 mb-4">
            {data[currentIndex]?.title}
          </h3>
          
          {data[currentIndex] && convertBulletsToArray(data[currentIndex].description).map((desc, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
              <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel