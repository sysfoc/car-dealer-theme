import ProductCard from "@/app/ui/ProductCard"; 

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  previousPrice: number;
  sold:number;
  reviews: number;
  offerEndTime: string | undefined,
  itemsLeft: string | number | undefined
}

const Index = () => {
  const products: Product[] = [
    {
      id: 1,
      title: "Product 1",
      description: "Experience high-quality sound with noise cancellation and up to 24 hours of battery life in a sleek, comfortable design.",
      price: 9.99,
      previousPrice: 19.99, // Previous price for comparison
      image: "/images.jpg",
      rating: 4.5,
      sold: 12.2, // Number of items sold
      reviews: 150, // Number of reviews
      offerEndTime: "2025-02-07T00:00:00",
      itemsLeft: 30
    },
    {
        id: 2,
        title: "Product 2",
        description: "Track your steps, heart rate, and sleep patterns with a stylish smartwatch that syncs seamlessly with your phone.",
        price: 19.99,
        previousPrice: 29.99, // Previous price for comparison
        image: "/images.jpg",
        rating: 5,
        sold: 5, // Number of items sold
        reviews: 150, // Number of reviews
        offerEndTime: undefined,
        itemsLeft: 19
    },
    {
        id: 3,
        title: "Product 3",
        description: "Designed for all-day comfort with adjustable lumbar support, breathable mesh, and a reclining function.",
        price: 29.99,
        previousPrice: 49.99, // Previous price for comparison
        image: "/images.jpg",
        rating: 3.4,
        sold: 10, // Number of items sold
        reviews: 150, // Number of reviews
        offerEndTime:"2025-02-08T00:00:00",
        itemsLeft: undefined
    },
    {
        id: 4,
        title: "Product 4",
        description: "Keep your drinks hot or cold for hours with this leak-proof, eco-friendly, and durable bottle.",
        price: 59.99,
        previousPrice: 79.99, // Previous price for comparison
        image: "/images.jpg",
        rating: 4.0,
        sold: 50, // Number of items sold
        reviews: 350, // Number of reviews
        offerEndTime:undefined,
        itemsLeft: "Almost Sold Out"
    },
    {
        id: 5,
        title: "Product 5",
        description: "Enjoy crystal-clear visuals, vibrant colors, and built-in streaming apps for an immersive viewing experience.",
        price: 19.99,
        previousPrice: 49.99, // Previous price for comparison
        image: "/images.jpg",
        rating: 3.0,
        sold: 40, // Number of items sold
        reviews: 90, // Number of reviews
        offerEndTime: "2025-02-10T00:00:00",
        itemsLeft: 49
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Index;



// 33px is the distance between all the individual product Cards
// isy km kr k 18px krna ha as on temu.