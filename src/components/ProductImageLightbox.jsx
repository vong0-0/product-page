import { X } from "lucide-react"
import { useState } from "react"

export default function ProductImageLightbox({ productImages, productThumbnails, setOpenLightbox }){
  const [currentImgIndex, setCurrentImgIndex] = useState(0)
  return(
    <div className="bg-[rgba(0,0,0,0.75)] fixed left-0 top-0 w-full h-screen z-50">
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <div className="relative max-w-[450px]">
          <button
            className="absolute right-0 top-[-8%] text-white hover:text-orange transition-colors duration-300"
            aria-label="Close lightbox"
            onClick={() => setOpenLightbox(false)}
          >
            <X size={25} />
          </button>
          <div className="w-full h-[355px] mb-4 rounded-xl overflow-hidden">
            <img src={`assets/images/${productImages[currentImgIndex]}`} alt="" />
          </div>
          <ul className="flex gap-4" role="list">
            {productThumbnails.map((pt, index) => (
              <li 
                key={pt}
                className={`rounded-lg overflow-hidden border-2 border-solid ${currentImgIndex === index ? "border-orange" : "border-transparent"}`}
              >
                <button
                  className="h-full"
                  onClick={() => setCurrentImgIndex(index)}
                  aria-label={`Show image ${index + 1}`}
                  aria-pressed={currentImgIndex === index}  
                >
                  <img className={`h-full ${currentImgIndex === index ? "opacity-50" : "opacity-100"} hover:opacity-50 transition-opacity duration-300`} src={`assets/images/${pt}`} alt={`Product thumbnail image ${index + 1}`} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}