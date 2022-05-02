import { RadioGroup } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/outline'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { withPage } from '../components/hoc'
import Pagination from '../components/Pagination'
import QuickView from '../components/QuickView'
  
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const products = [
  {
    id: 1,
    name: 'Mac Mini',
    company: 'Apple Inc',
    company_id: 1,
    spec: 'Processor. 6-Core. 3.0GHz 6-core Intel Core i5; Turbo Boost up to 4.1GHz; 9MB',
    price: '$3200.00',
    quantity: 1,
    lease: {
      from: new Date('2020-01-20').toISOString(),
      end: new Date('2022-08-12').toISOString(),
    },
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRMhoakm8vcnxx9rWX3BwDpq3j-Bp31M4iIQ&usqp=CAU',
    metadata: {
      colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
      ],
      rams: [
        { name: '16', inStock: true },
        { name: '32', inStock: true },
        { name: '64', inStock: false },
      ],
    }
  },
  {
    id: 1,
    name: 'Mac Mini',
    company: 'Apple Inc',
    company_id: 1,
    spec: 'Processor. 6-Core. 3.0GHz 6-core Intel Core i5; Turbo Boost up to 4.1GHz; 9MB',
    price: '$3200.00',
    quantity: 1,
    lease: {
      from: new Date('2020-01-20').toISOString(),
      end: new Date('2022-08-12').toISOString(),
    },
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRMhoakm8vcnxx9rWX3BwDpq3j-Bp31M4iIQ&usqp=CAU',
    metadata: {
      colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
      ],
      rams: [
        { name: '16', inStock: true },
        { name: '32', inStock: true },
        { name: '64', inStock: false },
      ],
    }
  },
  {
    id: 1,
    name: 'Mac Mini',
    company: 'Apple Inc',
    company_id: 1,
    spec: 'Processor. 6-Core. 3.0GHz 6-core Intel Core i5; Turbo Boost up to 4.1GHz; 9MB',
    price: '$3200.00',
    quantity: 1,
    lease: {
      from: new Date('2020-01-20').toISOString(),
      end: new Date('2022-08-12').toISOString(),
    },
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRMhoakm8vcnxx9rWX3BwDpq3j-Bp31M4iIQ&usqp=CAU',
    metadata: {
      colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
      ],
      rams: [
        { name: '16', inStock: true },
        { name: '32', inStock: true },
        { name: '64', inStock: false },
      ],
    }
  },
  {
    id: 2,
    name: 'Macbook Pro 13inch',
    company: 'Apple Inc',
    company_id: 1,
    spec: 'Processor. 6-Core. 3.0GHz 6-core Intel Core i5; Turbo Boost up to 4.1GHz; 9MB',
    price: '$2131.00',
    quantity: 1,
    lease: {
      from: new Date(),
      end: new Date(),
    },
    imageSrc: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HP9U2_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1625860817000',
    metadata: {
      colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
      ],
      rams: [
        { name: '16', inStock: true },
        { name: '32', inStock: true },
        { name: '64', inStock: false },
      ],
    }
  },
  // More products...
]
const Lease: NextPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [selectedColor, setSelectedColor] = useState(selectedProduct?.metadata?.colors[0])
  const [selectedSize, setSelectedSize] = useState(selectedProduct?.metadata?.rams[2])
  const [subscribed, setSub] = useState(null)

  useEffect(() => {
    setSelectedColor(selectedProduct)
    setSelectedSize(selectedProduct)
  }, [selectedProduct])

  const handleSubscribe = (product) => setSub(product)
  
  return (
    <div className="d-flex flex-col">
      {selectedProduct && <QuickView selectedProduct={selectedProduct}>
        <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                    <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                      <img src={selectedProduct.imageSrc} alt="" className="object-center object-cover" />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{selectedProduct.name}</h2>

                      <section aria-labelledby="information-heading" className="mt-2">
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <p className="text-2xl text-gray-900">{selectedProduct.price}</p>

                        {/* Reviews */}
                        <div className="mt-6">
                          <h4 className="sr-only">Reviews</h4>
                          <div className="flex items-center">
                            <div className="flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    selectedProduct.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <p className="sr-only">{selectedProduct.rating} out of 5 stars</p>
                            <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                              {selectedProduct.quality} 
                            </a>
                          </div>
                        </div>
                      </section>

                      <section aria-labelledby="options-heading" className="mt-10">
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>

                        <div>
                          {/* Colors */}
                          <div>
                            <h4 className="text-sm text-gray-900 font-medium">Color</h4>

                            <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                              <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                              <div className="flex items-center space-x-3">
                                {selectedProduct?.metadata?.colors.map((color) => (
                                  <RadioGroup.Option
                                    key={color.name}
                                    value={color}
                                    className={({ active, checked }) =>
                                      classNames(
                                        color.selectedClass,
                                        active && checked ? 'ring ring-offset-1' : '',
                                        !active && checked ? 'ring-2' : '',
                                        '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                      )
                                    }
                                  >
                                    <RadioGroup.Label as="p" className="sr-only">
                                      {color.name}
                                    </RadioGroup.Label>
                                    <span
                                      aria-hidden="true"
                                      className={classNames(
                                        color.class,
                                        'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                      )}
                                    />
                                  </RadioGroup.Option>
                                ))}
                              </div>
                            </RadioGroup>
                          </div>

                          {/* Sizes */}
                          <div className="mt-10">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm text-gray-900 font-medium">Size</h4>
                              {/* <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                Size guide
                              </a> */}
                            </div>

                            <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                              <RadioGroup.Label className="sr-only">Choose a ram</RadioGroup.Label>
                              <div className="grid grid-cols-4 gap-4">
                                {selectedProduct?.metadata?.rams.map((ram) => (
                                  <RadioGroup.Option
                                    key={ram.name}
                                    value={ram}
                                    disabled={!ram.inStock}
                                    className={({ active }) =>
                                      classNames(
                                        ram.inStock
                                          ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                          : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                        active ? 'ring-2 ring-indigo-500' : '',
                                        'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                      )
                                    }
                                  >
                                    {({ active, checked }) => (
                                      <>
                                        <RadioGroup.Label as="p">{ram.name}</RadioGroup.Label>
                                        {ram.inStock ? (
                                          <div
                                            className={classNames(
                                              active ? 'border' : 'border-2',
                                              checked ? 'border-indigo-500' : 'border-transparent',
                                              'absolute -inset-px rounded-md pointer-events-none'
                                            )}
                                            aria-hidden="true"
                                          />
                                        ) : (
                                          <div
                                            aria-hidden="true"
                                            className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                                          >
                                            <svg
                                              className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                              viewBox="0 0 100 100"
                                              preserveAspectRatio="none"
                                              stroke="currentColor"
                                            >
                                              <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                            </svg>
                                          </div>
                                        )}
                                      </>
                                    )}
                                  </RadioGroup.Option>
                                ))}
                              </div>
                            </RadioGroup>
                          </div>

                          {subscribed?.id === selectedProduct?.id ? (
                            <div>
                              <button
                             
                             className="mt-6 w-full bg-green-500 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                             onClick={() => handleSubscribe(selectedProduct)}
                           >
                             Leased
                           </button>
                           <button
                             
                            className="mt-2 w-full bg-yellow-500 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                            onClick={() => handleSubscribe(null)}
                          >
                            Cancel
                          </button>
                              </div>
                          ) : (<button
                             
                            className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() => handleSubscribe(selectedProduct)}
                          >
                            Checkout on lease
                          </button>)}

                        </div>
                      </section>
                    </div>
        </div>
      </QuickView>
}
      <ul role="list" className="-my-6 divide-y divide-gray-200 mb-8">
        {products.map((product) => (
          <li key={product.id} className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={product.imageSrc}
                alt={product.name}
                className="h-full w-full object-cover object-center"
                width="100%"
                height="100%"
                onClick={() => setSelectedProduct(product)}
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <a onClick={(e) => {
                      e.preventDefault();
                      setSelectedProduct(product)
                    }}> {product.name} </a>
                  </h3>
                  <p className="ml-4">{product.price}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">{product.company}</p>
                <p className="mt-1 text-sm text-gray-500">{product.spec}</p>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500">Qty {product.quantity}</p>

                <div className="flex flex-row">
                  <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500 mr-4">
                  Available
                   {/* from {new Date(product.lease.from).toDateString()} */}
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Pagination />
    </div>
  )
}

export default withPage(Lease, {
  page: {
    title: 'Available for lease',
    subtitle: 'Discover all kind of equipments available for lease'
  }
})