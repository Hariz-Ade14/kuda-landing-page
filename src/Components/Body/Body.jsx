// import React from 'react';
// import "./Body.css";
// import logo from "../../assets/download.jpeg";
// import appStore from "../../assets/appstore.jpg";
// import playStore from "../../assets/googleplay.jpg";
// import kuda from "../../assets/kuda.png";
// import hello from "../../assets/hello.png";
// import coinjar from "../../assets/coinjar.png";
// import debitcard from "../../assets/debit-card.avif";
// import acct from "../../assets/acct.jpeg";
// import card from "../../assets/makers_kb2-scaled.jpg";
// import {FaCreditCard,FaArrowRight} from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from 'react';


// function Body() {
//      useEffect(() => {
//           AOS.init();
//      },[]);
//   return (
//     <div className='conatiner-fluid Body mt-5'>
//           <div className='d-flex align-items-center justify-content-between m-5 row'>
//               <div className='col-12 col-sm-6 p-0'>
//                    <h1 className='pt-5'>The money App for Africans.</h1>
//                    <p className='mkft mt-2'>Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</p>  
//                    <div className="images w-100 p-0 m-0 d-flex align-items-center justify-content">
//                        <img src={appStore} className='appstore' height={"50px"} alt="" />
//                        <img src={playStore} className='mx-1 playstore' height={"50px"} alt="" />
//                    </div>
//               </div>
             
//               <img src={logo} className='col-12 col-sm-6 p-0 m-0' height={"500px"} alt="logo" />
//           </div>
          
//           <div data-aos="fade-up"  className='content row my-5 mx-3 d-flex align-items-center justify-content-center'>
//                <div className='col-11 col-sm-3 bg-white p-4 m-4 shadow'>
//                     <p>Enjoy cashless payment options online and offline.</p>

//                </div>
//                <div className='col-11 col-sm-3 bg-white p-4 m-4 shadow'>
//                     <p>Enjoy cashless payment options online and offline.</p>
//                </div>
//                <div className='col-11 col-sm-3 bg-white p-4 m-4 shadow'>
//                     <p>Pay your essential bills and buy gift cards easily.</p>
//                </div>
//                <div className='col-11 col-sm-4 bg-white p-4 m-4 shadow'>
//                     <p>Get 25 free transfers to Nigerian banks every month.</p>
//                </div>
//                <div className='col-11 col-sm-4 bg-white p-4 m-4 shadow'>
//                     <p>Save money automatically any time you spend.</p>
//                </div>
//           </div>

//           <div className="content-2 row mx-3 d-flex align-items-center justify-content-center">
//                <div className='col-12 col-sm-5 p-5'>
//                    <h1>
//                     Your phone + <br/>our app + <br/>a debit card = <br/> a simpler life.
//                    </h1>
//                    <p className='details'>We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves.</p>
                   
//                    <p>
//                      <a href='/' className='link'>Open an account in minutes<FaArrowRight className='mx-2'/></a>
//                    </p>
//                </div>
//                <img src={debitcard} width className='col-12 col-sm-5 p-0 m-0' height={"500px"} alt="logo" />
//           </div>


//           <div className="content-2 row mx-3 d-flex align-items-center justify-content-center">        
//                <img src={kuda} width className='col-12 col-sm-5 p-0 m-0' height={"500px"} alt="logo" />
//                <div className='col-12 col-sm-5 p-5'>
//                    <h1>
//                        It’s your money, we just help you manage it.
//                    </h1>
//                    <p>Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that.</p>
                 
//                </div>
//           </div>
//           <div className="content-2 row mx-3 d-flex align-items-center justify-content-center">        
//                <div className='col-12 col-sm-5 p-5'>
//                    <h1>
//                    Save money as you spend it, seriously.
//                    </h1>
//                    <p>You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow.</p>
                   
//                    <p>
//                      <a href='/' className='link'>See all your savings<FaArrowRight className='mx-2'/></a>
//                    </p>
//                </div>
//                <img src={acct} width className='col-12 col-sm-5 p-0 m-0' height={"500px"} alt="logo" />
//           </div>
//           <div className="content-2 row mx-3 d-flex align-items-center justify-content-center">        
//                <img src={card} width className='col-12 col-sm-5 p-0 m-0' height={"500px"} alt="logo" />
               
//                <div className='col-12 col-sm-5 p-5'>
//                    <h1>
//                    Turn off access, turn on safety.
//                    </h1>
//                    <p>Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try..</p>
                   
//                    <p>
//                      <a href='/' className='link'>Learn more about cards<FaArrowRight className='mx-2'/></a>
//                    </p>
//                </div>
//           </div>
//           <div className="content-2 row mx-3 d-flex align-items-center justify-content-center">        
//                <div className='col-12 col-sm-5 p-5'>
//                    <h1>
//                      We’re always happy to help you.
//                    </h1>
//                    <p>You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy.</p>
                   
//                    <p>
//                      <a href='/' className='link'>Get help<FaArrowRight className='mx-2'/></a>
//                    </p>
//                </div>
//                <img src={hello} width className='col-12 col-sm-5 p-0 m-0' height={"400px"} alt="logo" />
//           </div>
//           <div className="content-2 row mb-5 mx-3 d-flex align-items-center justify-content-center">        
//             <img src={coinjar} className='coinjar col-12 col-sm-5 mx-5 p-5 m-0' alt="logo" />
//                <div className='col-12 col-sm-5 mx-5 p-5'>
//                    <h1>
//                    Fees as clear as glass.
//                    </h1>
//                    <p>We’re serious about free banking, and we will never, ever charge you for anything without your consent.</p>
                   
//                    <p>
//                      <a href='/' className='link'>See all your fees<FaArrowRight className='mx-2'/></a>
//                    </p>
//                </div>
//           </div>

//           <h2 className='text-center' style={{fontWeight: "bold",color: "rgb(72, 3, 104)"}}>Don’t just take our word for it</h2>
//     </div>
//   )
// }

// export default Body;

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, DialogPanel, Radio, RadioGroup, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
// import "headlessui"
// import { TransitionEvent } from 'react'

const product = {
  name: 'Basic Tee 6-Pack ',
  price: '$192',
  rating: 3.9,
  reviewCount: 117,
  href: '#',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
  imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: true },
    { name: 'XXXL', inStock: false },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <Transition show={open}>
      <Dialog className="relative z-10" onClose={setOpen}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <DialogPanel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                      <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>

                      <section aria-labelledby="information-heading" className="mt-2">
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <p className="text-2xl text-gray-900">{product.price}</p>

                        {/* Reviews */}
                        <div className="mt-6">
                          <h4 className="sr-only">Reviews</h4>
                          <div className="flex items-center">
                            <div className="flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <p className="sr-only">{product.rating} out of 5 stars</p>
                            <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                              {product.reviewCount} reviews
                            </a>
                          </div>
                        </div>
                      </section>

                      <section aria-labelledby="options-heading" className="mt-10">
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>

                        <form>
                          {/* Colors */}
                          <fieldset aria-label="Choose a color">
                            <legend className="text-sm font-medium text-gray-900">Color</legend>

                            <RadioGroup
                              value={selectedColor}
                              onChange={setSelectedColor}
                              className="mt-4 flex items-center space-x-3"
                            >
                              {product.colors.map((color) => (
                                <Radio
                                  key={color.name}
                                  value={color}
                                  aria-label={color.name}
                                  className={({ focus, checked }) =>
                                    classNames(
                                      color.selectedClass,
                                      focus && checked ? 'ring ring-offset-1' : '',
                                      !focus && checked ? 'ring-2' : '',
                                      'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                    )
                                  }
                                >
                                  <span
                                    aria-hidden="true"
                                    className={classNames(
                                      color.class,
                                      'h-8 w-8 rounded-full border border-black border-opacity-10'
                                    )}
                                  />
                                </Radio>
                              ))}
                            </RadioGroup>
                          </fieldset>

                          {/* Sizes */}
                          <fieldset className="mt-10" aria-label="Choose a size">
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-medium text-gray-900">Size</div>
                              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                Size guide
                              </a>
                            </div>

                            <RadioGroup
                              value={selectedSize}
                              onChange={setSelectedSize}
                              className="mt-4 grid grid-cols-4 gap-4"
                            >
                              {product.sizes.map((size) => (
                                <Radio
                                  key={size.name}
                                  value={size}
                                  disabled={!size.inStock}
                                  className={({ focus }) =>
                                    classNames(
                                      size.inStock
                                        ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                        : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                      focus ? 'ring-2 ring-indigo-500' : '',
                                      'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                    )
                                  }
                                >
                                  {({ checked, focus }) => (
                                    <>
                                      <span>{size.name}</span>
                                      {size.inStock ? (
                                        <span
                                          className={classNames(
                                            checked ? 'border-indigo-500' : 'border-transparent',
                                            focus ? 'border' : 'border-2',
                                            'pointer-events-none absolute -inset-px rounded-md'
                                          )}
                                          aria-hidden="true"
                                        />
                                      ) : (
                                        <span
                                          aria-hidden="true"
                                          className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                        >
                                          <svg
                                            className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                            viewBox="0 0 100 100"
                                            preserveAspectRatio="none"
                                            stroke="currentColor"
                                          >
                                            <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                          </svg>
                                        </span>
                                      )}
                                    </>
                                  )}
                                </Radio>
                              ))}
                            </RadioGroup>
                          </fieldset>

                          <button
                            type="submit"
                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Add to bag
                          </button>
                        </form>
                      </section>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
