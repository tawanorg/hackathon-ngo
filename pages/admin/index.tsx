import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import withPageAdmin from '../../components/hoc/withPageAdmin'
import QuickView from '../../components/QuickView'
  
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
 
const Lease: NextPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [products, setProducts] = useState([])
  const [isLoading, setLoading] = useState(false)
 
  useEffect(() => {
   async function getProducts() {
    setLoading(true)
     const result = await (await fetch('https://apex.oracle.com/pls/apex/sdg17_1/testlab/Products')).json()
     setProducts(result.items)
     setLoading(false)
   }
   getProducts()
  }, [])
 
    console.log('selectedProduct', selectedProduct)
  return (
    <div className="d-flex flex-col">
      {selectedProduct && <QuickView selectedProduct={selectedProduct}>
        <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                    <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                      <img src={selectedProduct.imagesrc} alt="" className="object-center object-cover" />
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
                            <h4 className="text-sm text-gray-900 font-medium">Color : {selectedProduct.colour}</h4>
                            <div className="my-4" />
                            <h4 className="text-sm text-gray-900 font-medium">Spec : {selectedProduct?.spec}</h4>
                            <div className="my-4" />
                            {selectedProduct?.recycleDetail &&<h4 className="text-sm text-gray-900 font-medium">Recycle detail : {selectedProduct?.recycleDetail}</h4>}
                          </div>
 
                        </div>
                      </section>
                    </div>
        </div>
      </QuickView>
      }

      {isLoading && <div>Loading...please wait</div>}
      <ul role="list" className="-my-6 divide-y divide-gray-200 mb-8">
        {products.map((product) => (
          <li key={product.id} className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={product.imagesrc}

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
                  {product.lease_available}
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul> 
    </div>
  )
}

export default withPageAdmin(Lease, {
  page: {
    title: 'Inventory',
    subtitle: ''
  }
})