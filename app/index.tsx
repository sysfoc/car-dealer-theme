import ProductCard from "./ui/ProductCard"; 

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
  offerEndTime: string | undefined
}

const Index = () => {
  const products: Product[] = [
    {
      id: 1,
      title: "Product 1",
      description: "Product description",
      price: 9.99,
      previousPrice: 19.99, // Previous price for comparison
      image: "/images.jpg",
      rating: 4.5,
      sold: 12.2, // Number of items sold
      reviews: 150, // Number of reviews
      offerEndTime: "2025-01-16T00:00:00"
    },
    {
        id: 2,
        title: "Product 2",
        description: "Product description",
        price: 19.99,
        previousPrice: 29.99, // Previous price for comparison
        image: "/images.jpg",
        rating: 5,
        sold: 5, // Number of items sold
        reviews: 150, // Number of reviews
        offerEndTime: undefined
    },
    {
        id: 3,
        title: "Product 3",
        description: "Product description",
        price: 29.99,
        previousPrice: 49.99, // Previous price for comparison
        image: "/images.jpg",
        rating: 3.4,
        sold: 10, // Number of items sold
        reviews: 150, // Number of reviews
        offerEndTime:"2025-01-16T00:00:00",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Index;
