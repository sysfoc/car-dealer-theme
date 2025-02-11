import ProductCard from "@/app/ui/Product Card/ProductCard"; 

interface Product {
  id: number; 
  title: string;
  discountDaysRemaining: number | undefined;
  description: string;
  price: number;
  image: string;
  rating: number;
  previousPrice: number;
  sold:number;
  reviews: number;
  offerEndTime: string,
  itemsLeft: string | number | undefined,
}

const Index = () => {
 const products: Product[] = [
    {
      id: 1,
      title: "Product 1",
      discountDaysRemaining: undefined,
      description: "Experience high-quality sound with noise cancellation and up to 24 hours of battery life in a sleek, comfortable design.",
      price: 9.99,
      previousPrice: 19.99, // Previous price for comparison
      image: "/images.jpg",
      rating: 4.5,
      sold: 12.2, // Number of items sold
      reviews: 2150, // Number of reviews
      offerEndTime: "2025-02-12T00:00:00",
      itemsLeft: 30,
    },
    {
        id: 2,
        title: "Product 2",
        discountDaysRemaining: 4,
        description: "Track your steps, heart rate, and sleep patterns with a stylish smartwatch that syncs seamlessly with your phone.",
        price: 19.99,
        previousPrice: 29.99, // Previous price for comparison
        image: "/images.jpg",
        rating: 4.3,
        sold: 5, // Number of items sold
        reviews: 150, // Number of reviews
        offerEndTime: "2025-02-14T00:00:00",
        itemsLeft: 19
    },
    {
        id: 3,
        title: "Product 3",
        discountDaysRemaining: undefined,
        description: "Designed for all-day comfort with adjustable lumbar support, breathable mesh, and a reclining function.",
        price: 29.99,
        previousPrice: 49.99, // Previous price for comparison
        image: "/images.jpg",
        rating: 3.5,
        sold: 10, // Number of items sold
        reviews: 150, // Number of reviews
        offerEndTime:"2025-02-18T00:00:00",
        itemsLeft: undefined
    },
    {
        id: 4,
        title: "Product 4",
        discountDaysRemaining: undefined,
        description: "Keep your drinks hot or cold for hours with this leak-proof, eco-friendly, and durable bottle.",
        price: 59.99,
        previousPrice: 79.99, // Previous price for comparison
        image: "/images.jpg",
        rating: 3.0,
        sold: 50, // Number of items sold
        reviews: 350, // Number of reviews
        offerEndTime: "2025-02-12T00:00:00",
        itemsLeft: "Almost Sold Out"
    },
    {
        id: 5,
        title: "Product 5",
        discountDaysRemaining: 4,
        description: "Enjoy crystal-clear visuals, vibrant colors, and built-in streaming apps for an immersive viewing experience.",
        price: 19.99,
        previousPrice: 49.99, // Previous price for comparison
        image: "/images.jpg",
        rating: 4.5,
        sold: 11, // Number of items sold
        reviews: 990, // Number of reviews
        offerEndTime: "2025-02-12T00:00:00",
        itemsLeft: "Sold Out"
    },
    {
        id: 6,
        title: "Product 5",
        discountDaysRemaining: 3,
        description: "Stay hydrated with this durable stainless steel water bottle. It keeps your drinks cold for 24 hours and hot for 12, thanks to its double-wall insulation. The leak-proof lid and ergonomic design make it easy to carry anywhere.",
        price: 69.99,
        previousPrice: 79.99, // Previous price for comparison
        image: "/images.jpg",
        rating: 4.3,
        sold: 50, // Number of items sold
        reviews: 150, // Number of reviews
        offerEndTime: "2025-02-12T00:00:00",
        itemsLeft: 99
    },
    {
        id: 7,
        title: "Product 5",
        discountDaysRemaining: undefined,
        description: "Illuminate your workspace with this adjustable LED desk lamp. It offers customizable brightness levels and a flicker-free design, making it perfect for reading or studying. The sleek, modern design complements any desk setup.",
        price: 19.99,
        previousPrice: 49.99, // Previous price for comparison
        image: "/images.jpg",
        rating: 3.0,
        sold: 40, // Number of items sold
        reviews: 90, // Number of reviews
        offerEndTime: "2025-02-11T00:00:00",
        itemsLeft: 49
    },
    {
        id: 8,
        title: "Product 5",
        discountDaysRemaining: 2,
        description: "Track your health and stay connected with this feature-packed smartwatch. It monitors heart rate, steps, and sleep patterns, and syncs seamlessly with your phone for notifications. Water-resistant and stylish, it's built for daily use.",
        price: 19.99,
        previousPrice: 49.99, // Previous price for comparison
        image: "/images.jpg",
        rating: 5.0,
        sold: 20, // Number of items sold
        reviews: 1000, // Number of reviews
        offerEndTime: "2025-02-11T00:00:00",
        itemsLeft: 89
    },
    {
        id: 9,
        title: "Product 5",
        discountDaysRemaining: 3,
        description: "Take your music anywhere with this portable Bluetooth speaker. With high-quality audio and a rugged design, it's ideal for outdoor adventures. Enjoy up to 12 hours of continuous playback and a reliable Bluetooth connection.",
        price: 19.99,
        previousPrice: 49.99, // Previous price for comparison
        image: "/images.jpg",
        rating: 3.0,
        sold: 20, // Number of items sold
        reviews: 100, // Number of reviews
        offerEndTime: "2025-02-11T00:00:00",
        itemsLeft: 5
    },
    {
        id: 10,
        title: "Product 5",
        discountDaysRemaining: 4,
        description: "Experience crystal-clear sound with these sleek wireless earbuds. Equipped with noise-cancellation technology, they offer up to 8 hours of playtime on a single charge and are sweat-resistant, perfect for workouts.",
        price: 79.99,
        previousPrice: 99.99, // Previous price for comparison
        image: "/images.jpg",
        rating: 4.5,
        sold: 60, // Number of items sold
        reviews: 290, // Number of reviews
        offerEndTime: "2025-02-11T00:00:00",
        itemsLeft: 19
    },
  ];

  return (
    <div className="w-full overflow-x-auto scrollbar-hidden">
  <div className="flex flex-nowrap gap-6">
    {products.map((product) => (
      <div className="flex-shrink-0" key={product.id}>
        <ProductCard product={product} />
      </div>
    ))}
  </div>
 
</div>
  );
};

export default Index;

