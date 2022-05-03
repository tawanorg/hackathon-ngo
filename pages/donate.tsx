import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { withPage } from '../components/hoc'
import Pagination from '../components/Pagination'
import QuickView from '../components/QuickView'
import { products as leasedProducts } from '../utils/constants'
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
const Lease: NextPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [products, setProducts] = useState([])
  const [submittedDonation, setSubmittedDonation] = useState(null)
  const [selectItem, setSelectItem] = useState(null)
  const [isSubmit, setSubmit] = useState(null)
  
  useEffect(() => {
    async function getNgo() {
      const result  = await (await fetch('https://apex.oracle.com/pls/apex/sdg17_1/testlab/NGO')).json()
      setProducts(result.items)
    }
    getNgo()
  }, [])
  // Your details has been sent to the NGO. Someone will get back  to you
   
  return (
    <div className="d-flex flex-col">
      <QuickView selectedProduct={selectedProduct}>
         
         {submittedDonation?.ngo_id === selectedProduct?.ngo_id ? (
           <div className="d-flex flex-row justify-center w-full py-4">
             <h3 className="text-lg mb-6">Select an item you like to donate</h3>
            <ul role="list" className="-my-6 divide-y divide-gray-200 mb-8">
              {leasedProducts.map((product) => (
                <div key={product.id} 
                className={classNames(
                  selectItem?.id === product?.id ? 'bg-yellow-200' : null,
                  'flex py-2 px-4 hover:bg-yellow-200 rounded mb-2'
                )}

                  onClick={() => setSelectItem(product)}>
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
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
                    </div>
                  </div>
                </div>
              ))}
            </ul> 
              <div>
                <h3 className="mb-4">Your personal detail</h3>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
 
                    <div className="col-span-6">
                      <label htmlFor="tel" className="block text-sm font-medium text-gray-700">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        name="tel"
                        id="tel"
                        autoComplete="tel"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                     
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                {isSubmit?.ngo_id === selectedProduct?.ngo_id ? (
                  <span>Your details has been sent to the NGO. Someone will get back  to you</span>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => setSubmit(selectedProduct)}
                  >
                    Submit
                  </button>
                )}
                </div>
              </div>
            </div>
           </div>
         ) : (
         <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
          <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
            <img src="https://www.mymovingreviews.com/images/static-maps/static-map.php?center=Level%209%2C%20440%20Collins%20StreetMelbourne,Victoria&zoom=12&size=620x300&maptype=roadmap&markers=icon:http%3A%2F%2Fwww%2Emymovingreviews%2Ecom%2Fimages%2Fmmrpin%2Epng%7Cshadow:true%7CLevel%209%2C%20440%20Collins%20StreetMelbourne,Victoria&sensor=false&visual_refresh=true&key=AIzaSyCFEGjaoZtuJwPI-0HBJQXHcJ1ElEN8btI" alt="" className="object-center object-cover" />
          </div>
          <div className="sm:col-span-8 lg:col-span-7">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{selectedProduct.ngo_name}</h2>

            <section aria-labelledby="information-heading" className="mt-2">
              <p className="text-2xl text-gray-900">{selectedProduct.ngo_address}</p>
            </section>

            <section aria-labelledby="options-heading" className="mt-4">
                <button
                  type="submit"
                  className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => setSubmittedDonation(selectedProduct)}
                >
                  Donate
                </button> 
            </section>
          </div>
        </div>
         )}
         
      </QuickView>
      <ul role="list" className="-my-6 divide-y divide-gray-200 mb-8">
        {products.map((product) => (
          <li key={product.ngo_id} className="flex py-6">
            <div className="flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <a onClick={(e) => {
                      e.preventDefault();
                      setSelectedProduct(product)
                    }}> {product.ngo_name} </a>
                  </h3>
                </div>
                <p className="mt-1 text-sm text-gray-500">{product.ngo_address}</p>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm mt-2">
                <div className="flex flex-row">
                  <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500 mr-4" onClick={(e) => {
                      e.preventDefault();
                      setSelectedProduct(product)
                    }}>
                  Submit
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
    title: 'Donate',
    subtitle: 'Donate your equipments to NGO'
  }
})