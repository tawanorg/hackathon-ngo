export const products = [
  {
    id: 1,
    name: 'Mac Mini',
    company: 'Apple Inc',
    company_id: 1,
    spec: 'Processor. 6-Core. 3.0GHz 6-core Intel Core i5; Turbo Boost up to 4.1GHz; 9MB',
    price: '$200.00',
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
    name: 'Mac Mini',
    company: 'Apple Inc',
    company_id: 1,
    spec: 'Processor. 6-Core. 3.0GHz 6-core Intel Core i5; Turbo Boost up to 4.1GHz; 9MB',
    price: '$300.00',
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
    id: 3,
    name: 'Macbook Pro 13inch',
    company: 'Apple Inc',
    company_id: 1,
    spec: 'Processor. 6-Core. 3.0GHz 6-core Intel Core i5; Turbo Boost up to 4.1GHz; 9MB',
    price: '$150.00',
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