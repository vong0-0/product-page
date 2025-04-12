import { useState } from "react";
import ProductCarousel from "./ProductCarousel";
import QuantitySelector from "./QuantitySelector";
import ProductImageLightbox from "./ProductImageLightbox";
const productData = {
  productId: Math.random().toString().substring(2, 8),
  productImages: [
    "image-product-1.jpg",
    "image-product-2.jpg",
    "image-product-3.jpg",
    "image-product-4.jpg",
  ],
  productThumbnails: [
    "image-product-1-thumbnail.jpg",
    "image-product-2-thumbnail.jpg",
    "image-product-3-thumbnail.jpg",
    "image-product-4-thumbnail.jpg",
  ],
  productBrand: "sneaker company",
  productName: "fall limited edition sneakers",
  productDescription: "These low-profile sneakers are your perfect casual wear companion. Featureing a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 250,
  discountPercent: 50,
};

export default function Product(){
  return(
    <div className="max-w-[500px] md:max-w-none mx-auto md:mx-0">
      <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto items-center gap-4 ml:gap-16 relative">
        <ProductDisplay
          productImages={productData.productImages}
          productThumbnails={productData.productThumbnails}
        />
        <ProductInfo 
          productImage={productData.productImages[0]}
          productBrand={productData.productBrand}
          productName={productData.productName}
          productDescription={productData.productDescription}
          price={productData.price}
          discountPercent={productData.discountPercent}
        />
      </div>
    </div>
  )
}

function ProductDisplay({ productImages, productThumbnails }){
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [openLightbox, setOpenLightbox] = useState(false);
  return(
    <div> 
      <div className="md:hidden">
        <ProductCarousel 
          productImages={productImages}
        />
      </div>
      <div className="hidden md:flex flex-col gap-4">
        <div className={`${openLightbox ? "opacity-100 visible" : "opacity-0 invisible"} transition-all duration-300`}>
          <ProductImageLightbox 
            productImages={productImages}
            productThumbnails={productThumbnails}
            setOpenLightbox={setOpenLightbox}
          />
        </div>
        <button
          className="rounded-2xl overflow-hidden"
          aria-label="Open lightbox"
          onClick={() => setOpenLightbox(true)}
        >
          <img src={`assets/images/${productImages[currentImgIndex]}`} alt={`Product image ${currentImgIndex + 1}`} />
        </button>
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
  )
}

function ProductInfo({ productImage, productBrand, productName, productDescription, price, discountPercent }){
  const [quantity, setQuantity] = useState(0);
  const discountPrice = (price * (1 - discountPercent / 100));

  return(
    <div className="w-11/12 mx-auto md:w-11/12 md:mx-auto">
      <div className="flex flex-col gap-4 ml:gap-8 items-start">
        <p className="uppercase tracking-widest text-dark-grayish-blue font-bold text-sm md:text-base">{productBrand}</p>
        <h1 className="text-4xl font-bold capitalize">{productName}</h1>
        <p className="text-sm md:text-base text-dark-grayish-blue leading-6">{productDescription}</p>
        <div className="w-full flex ml:flex-col items-center ml:items-start justify-between">
          <div className="flex items-center gap-4">
            <p className="text-2xl font-bold tracking-wider">{`$${discountPrice.toFixed(2)}`}</p>
            <div
              className="px-2 bg-black text-white rounded-md font-bold"
              aria-label={`${discountPercent.toFixed(2)}% off`}
            >
              {`${discountPercent}%`}
            </div>
          </div>
          <p
            className="line-through text-dark-grayish-blue font-bold"
            aria-label={`Original price: $${price}`}
          >
            {`$${price.toFixed(2)}`}
          </p>
        </div>
        <QuantitySelector
          quantity={quantity}
          setQuantity={setQuantity}
          productName={productName}
          currentPrice={discountPrice}
          productImage={productImage}
        />
      </div>
    </div>
  )
}