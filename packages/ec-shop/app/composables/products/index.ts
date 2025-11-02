export const useProducts = () => {
  const products = ref([
    {
      id: 1,
      name: 'Product 1',
      description: 'This is a great product',
      price: 29.99,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Another amazing product',
      price: 49.99,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'You will love this',
      price: 19.99,
    },
  ])

  return {
    products,
  }
}
