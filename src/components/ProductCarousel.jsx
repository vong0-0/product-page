import { useState } from "react";

export default function ProductCarousel({ productImages }){
  const [currentIndext, setCurrent] = useState(0);

  function shiftSlide(dir){
    setCurrent(prev => prev + dir);
  }
    
  return(
    <div className="h-[300px] relative">
      <div className="h-full relative overflow-hidden">
        <div
          className={`absolute left-0 top-0 flex w-fit h-full transition-all duration-300`}
          style={{ transform: `translateX(${-1 * currentIndext * 100}%)` }}
        >
          {productImages.map((productImage) => (
            <div
              key={productImage}
              className="h-full grow-0 shrink-0 basis-full"
            >
              <img className="w-full h-full object-cover" src={`assets/images/${productImage}`} alt="" />
            </div>
          ))}
        </div>
      </div>
      <button 
        className={`absolute top-1/2 left-[2%] -translate-y-1/2 w-10 h-10 bg-white justify-center items-center rounded-full shadow-lg hover:scale-125 transition-all duration-300`}
        style={{ display: currentIndext <= 0 ? "none" : "flex" }}
        aria-label="Previous image button"
        onClick={() => shiftSlide(-1)}
      >
        <img src="assets/images/icon-previous.svg" alt="" />
      </button>
      <button
        className="absolute top-1/2 right-[2%] -translate-y-1/2 w-10 h-10 bg-white flex justify-center items-center rounded-full shadow-lg hover:scale-125 transition-all duration-300"
        style={{ display: currentIndext >= productImages.length - 1 ? "none" : "flex" }}
        aria-label="Next image button"
        onClick={() => shiftSlide(1)}
      >
        <img src="assets/images/icon-next.svg" alt="" />
      </button>
    </div>
  )
}