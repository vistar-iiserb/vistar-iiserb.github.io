"use client"

import Image from "next/image"

interface CarouselProps {
  direction: "up" | "down"
  images: Array<{ src: string; alt: string }>
}

function Carousel({ direction, images }: CarouselProps) {
  return (
    <div className="w-full h-screen overflow-hidden bg-gray-50 dark:bg-zinc-800">
      <div className="relative h-full">
        <div className={`flex flex-col gap-4 p-4 ${direction === "up" ? "animate-scroll-up" : "animate-scroll-down"}`}>
          {/* First set of images */}
          {images.map((image, index) => (
            <div key={`first-${index}`} className="flex-shrink-0">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
          {/* Duplicate set for infinite loop */}
          {images.map((image, index) => (
            <div key={`second-${index}`} className="flex-shrink-0">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Component() {
  const imageSet1 = [
    { src: "/parallax/5.png", alt: "Nature 1" },
    { src: "/parallax/3.png", alt: "Nature 2" },
    { src: "/parallax/8.png", alt: "Nature 3" },
    { src: "/parallax/1.png", alt: "Nature 4" },
    // { src: "/parallax/1.png", alt: "Nature 5" },
    // { src: "/parallax/1.png", alt: "Nature 6" },
  ]

  const imageSet2 = [
    { src: "/parallax/3.png", alt: "City 1" },
    { src: "/parallax/1.png", alt: "City 2" },
    { src: "/parallax/4.png", alt: "City 3" },
    // { src: "/parallax/8.png", alt: "City 4" },
    // { src: "/parallax/3.png", alt: "City 5" },
    // { src: "/parallax/1.png", alt: "City 6" },
  ]

  const imageSet3 = [
    { src: "/parallax/9.png", alt: "Abstract 1" },
    { src: "/parallax/6.png", alt: "Abstract 2" },
    { src: "/parallax/8.png", alt: "Abstract 3" },
    { src: "/parallax/10.png", alt: "Abstract 4" },
    // { src: "/parallax/1.png", alt: "Abstract 5" },
    // { src: "/parallax/1.png", alt: "Abstract 6" },
  ]

  const imageSet4 = [
    { src: "/parallax/5.png", alt: "Portrait 1" },
    { src: "/parallax/8.png", alt: "Portrait 2" },
    { src: "/parallax/1.png", alt: "Portrait 3" },
    { src: "/parallax/1.png", alt: "Portrait 4" },
    // { src: "/parallax/1.png", alt: "Portrait 5" },
    // { src: "/parallax/1.png", alt: "Portrait 6" },
  ]

  const imageSet5 = [
    { src: "/parallax/1.png", alt: "Landscape 1" },
    { src: "/parallax/1.png", alt: "Landscape 2" },
    { src: "/parallax/1.png", alt: "Landscape 3" },
    { src: "/parallax/1.png", alt: "Landscape 4" },
    // { src: "/parallax/1.png", alt: "Landscape 5" },
    // { src: "/parallax/1.png", alt: "Landscape 6" },
  ]

  const imageSet6 = [
    { src: "/placeholder.svg?height=300&width=400", alt: "Art 1" },
    { src: "/placeholder.svg?height=340&width=400", alt: "Art 2" },
    { src: "/placeholder.svg?height=260&width=400", alt: "Art 3" },
    { src: "/placeholder.svg?height=320&width=400", alt: "Art 4" },
    { src: "/placeholder.svg?height=290&width=400", alt: "Art 5" },
    { src: "/placeholder.svg?height=310&width=400", alt: "Art 6" },
  ]

  const carousels = [
    { images: imageSet1, direction: "down" as const }, // Carousel 1 (odd) - down
    { images: imageSet2, direction: "up" as const }, // Carousel 2 (even) - up
    { images: imageSet3, direction: "down" as const }, // Carousel 3 (odd) - down
    { images: imageSet4, direction: "up" as const }, // Carousel 4 (even) - up
    // { images: imageSet5, direction: "down" as const }, // Carousel 5 (odd) - down
    // { images: imageSet6, direction: "up" as const }, // Carousel 6 (even) - up
  ]

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 relative">
        <div className="absolute w-full h-full top-0 left-0  dark:bg-[radial-gradient(_#e6646500,_#000000_85%)] z-10"></div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {carousels.map((carousel, index) => (
          <div key={index} className="w-full max-w-sm">
            <Carousel direction={carousel.direction} images={carousel.images} />
          </div>
        ))}
      </div>
{/* 
      <style jsx>{`
        @keyframes scroll-down {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        @keyframes scroll-up {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        .animate-scroll-down {
          animation: scroll-down 25s linear infinite;
        }
        
        .animate-scroll-up {
          animation: scroll-up 25s linear infinite;
        }
      `}</style> */}
    </div>
  )
}
