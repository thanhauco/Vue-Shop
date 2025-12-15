import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Product, ProductFilter } from '../types';

export const useProductStore = defineStore('products', () => {
  const products = ref<Product[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Mock Data Seeding (simulating API)
  const seedProducts = () => {
    products.value = [
      {
        id: '1',
        name: 'Nebula X-1 Headphones',
        description: 'Noise-cancelling wireless headphones with deep bass and crystal clear highs.',
        price: 299.00,
        category: 'Audio',
        image: '/images/products/headphones.webp', // We will generate this
        rating: 4.8,
        stock: 15
      },
      {
        id: '2',
        name: 'Orion Smart Watch',
        description: 'Advanced fitness tracking, health monitoring, and seamless connectivity.',
        price: 199.50,
        category: 'Wearables',
        image: '/images/products/watch.webp',
        rating: 4.5,
        stock: 42
      },
      {
        id: '3',
        name: 'Galaxy Book Pro',
        description: 'Ultra-thin, high-performance laptop for creatives and professionals.',
        price: 1299.00,
        category: 'Computers',
        image: '/images/products/laptop.webp',
        rating: 4.9,
        stock: 5
      },
      {
        id: '4',
        name: 'Stellar Speaker Mini',
        description: 'Portable bluetooth speaker with 360-degree sound.',
        price: 89.99,
        category: 'Audio',
        image: '/images/products/speaker.webp',
        rating: 4.3,
        stock: 100
      },
       {
        id: '5',
        name: 'Cosmos VR Headset',
        description: 'Next-gen virtual reality experience with 8K resolution.',
        price: 599.00,
        category: 'Gaming',
        image: '/images/products/vr.webp',
        rating: 4.7,
        stock: 8
      }
    ];
  };

  const fetchProducts = async () => {
    loading.value = true;
    error.value = null;
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      if (products.value.length === 0) {
        seedProducts();
      }
    } catch (err) {
      error.value = 'Failed to load products';
    } finally {
      loading.value = false;
    }
  };

  const getProductById = (id: string) => {
    return products.value.find(p => p.id === id);
  };

  const filterProducts = (filter: ProductFilter) => {
    return products.value.filter(p => {
      const matchCategory = filter.category ? p.category === filter.category : true;
      const matchSearch = filter.search ? p.name.toLowerCase().includes(filter.search.toLowerCase()) : true;
      return matchCategory && matchSearch;
    });
  };

  return {
    products,
    loading,
    error,
    fetchProducts,
    getProductById,
    filterProducts
  };
});
