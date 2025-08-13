'use client'
import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'
import { YouTubeShort } from '@/lib/types'


interface VideoReviewComponentProps {
  videos: YouTubeShort[]
  options?: EmblaOptionsType
}

const VideoReviewComponent = ({ videos, options }: VideoReviewComponentProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    skipSnaps: false,
    dragFree: false,
    containScroll: 'trimSnaps',
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

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative w-full py-8">
      
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold prompt-r text-gray-800 mb-2">
        รีวิวบ้านตัวอย่างบางส่วน
        </h2>
        <p className="text-gray-600">ดูวิดีโอสั้นของบ้านตัวอย่างบางส่วน</p>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 ml-4">
          {videos.map((video, index) => (
            <div 
              key={video.id} 
              className={`flex-[0_0_280px] md:flex-[0_0_320px] transition-all duration-300 ${
                index === currentIndex ? 'scale-105' : 'scale-95 opacity-70'
              }`}
            >
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[9/16]">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}?autoplay=0&mute=1&controls=1&rel=0&showinfo=0&modestbranding=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-bold prompt-r text-sm mb-1">
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="text-gray-300 text-xs line-clamp-2">
                      {video.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
      >
        ←
      </button>
      
      <button 
        onClick={scrollNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
      >
        →
      </button>

      <div className="flex justify-center mt-6 gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-teal-500 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>

      <div className="text-center mt-4">
        <span className="text-sm text-gray-600">
          {currentIndex + 1} / {videos.length}
        </span>
      </div>
    </div>
  )
}

export default VideoReviewComponent