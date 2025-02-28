interface Product {
  id: number;
  title: string;
  discountDaysRemaining: number | undefined;
  description: string;
  price: number;
  image: string;
  rating: number;
  previousPrice: number;
  sold: number;
  reviews: number;
  offerEndTime: string;
  itemsLeft: string | number | undefined;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Product 1",
    discountDaysRemaining: undefined,
    description:
      "Experience high-quality sound with noise cancellation and up to 24 hours of battery life in a sleek, comfortable design.",
    price: 9.99,
    previousPrice: 19.99, // Previous price for comparison
    image: "/images/productPicture.jpg",
    rating: 4.5,
    sold: 12.2, // Number of items sold
    reviews: 2150, // Number of reviews
    offerEndTime: "2025-04-24T00:00:00",
    itemsLeft: 30,
  },
  {
    id: 2,
    title: "Product 2",
    discountDaysRemaining: 4,
    description:
      "Track your steps, heart rate, and sleep patterns with a stylish smartwatch that syncs seamlessly with your phone.",
    price: 19.99,
    previousPrice: 29.99, // Previous price for comparison
    image: "/images/productPicture.jpg",
    rating: 4.34,
    sold: 5, // Number of items sold
    reviews: 150, // Number of reviews
    offerEndTime: "2025-04-26T00:00:00",
    itemsLeft: 19,
  },
  {
    id: 3,
    title: "Product 3",
    discountDaysRemaining: undefined,
    description:
      "Designed for all-day comfort with adjustable lumbar support, breathable mesh, and a reclining function.",
    price: 29.99,
    previousPrice: 49.99, // Previous price for comparison
    image: "/images/productPicture.jpg",
    rating: 3.5,
    sold: 10, // Number of items sold
    reviews: 150, // Number of reviews
    offerEndTime: "2025-04-26T00:00:00",
    itemsLeft: undefined,
  },
  {
    id: 4,
    title: "Product 4",
    discountDaysRemaining: undefined,
    description:
      "Keep your drinks hot or cold for hours with this leak-proof, eco-friendly, and durable bottle.",
    price: 59.99,
    previousPrice: 79.99, // Previous price for comparison
    image: "/images/productPicture.jpg",
    rating: 3.0,
    sold: 50, // Number of items sold
    reviews: 350, // Number of reviews
    offerEndTime: "2025-04-25T00:00:00",
    itemsLeft: "Almost Sold Out",
  },
  {
    id: 5,
    title: "Product 5",
    discountDaysRemaining: 4,
    description:
      "Enjoy crystal-clear visuals, vibrant colors, and built-in streaming apps for an immersive viewing experience.",
    price: 19.99,
    previousPrice: 49.99, // Previous price for comparison
    image: "/images/productPicture.jpg",
    rating: 4.5,
    sold: 11, // Number of items sold
    reviews: 990, // Number of reviews
    offerEndTime: "2025-04-22T00:00:00",
    itemsLeft: "Sold Out",
  },
  {
    id: 6,
    title: "Product 5",
    discountDaysRemaining: 3,
    description:
      "Stay hydrated with this durable stainless steel water bottle. It keeps your drinks cold for 24 hours and hot for 12, thanks to its double-wall insulation. The leak-proof lid and ergonomic design make it easy to carry anywhere.",
    price: 69.99,
    previousPrice: 79.99, // Previous price for comparison
    image: "/images/productPicture.jpg",
    rating: 4.3,
    sold: 50, // Number of items sold
    reviews: 150, // Number of reviews
    offerEndTime: "2025-04-22T00:00:00",
    itemsLeft: 99,
  },
  {
    id: 7,
    title: "Product 5",
    discountDaysRemaining: undefined,
    description:
      "Illuminate your workspace with this adjustable LED desk lamp. It offers customizable brightness levels and a flicker-free design, making it perfect for reading or studying. The sleek, modern design complements any desk setup.",
    price: 19.99,
    previousPrice: 49.99, // Previous price for comparison
    image: "/images/productPicture.jpg",
    rating: 3.0,
    sold: 40, // Number of items sold
    reviews: 90, // Number of reviews
    offerEndTime: "2025-04-23T00:00:00",
    itemsLeft: 49,
  },
  {
    id: 8,
    title: "Product 5",
    discountDaysRemaining: 2,
    description:
      "Track your health and stay connected with this feature-packed smartwatch. It monitors heart rate, steps, and sleep patterns, and syncs seamlessly with your phone for notifications. Water-resistant and stylish, it's built for daily use.",
    price: 19.99,
    previousPrice: 49.99, // Previous price for comparison
    image: "/images/productPicture.jpg",
    rating: 5.0,
    sold: 20, // Number of items sold
    reviews: 1000, // Number of reviews
    offerEndTime: "2025-04-21T00:00:00",
    itemsLeft: 89,
  },
  {
    id: 9,
    title: "Product 5",
    discountDaysRemaining: 3,
    description:
      "Take your music anywhere with this portable Bluetooth speaker. With high-quality audio and a rugged design, it's ideal for outdoor adventures. Enjoy up to 12 hours of continuous playback and a reliable Bluetooth connection.",
    price: 19.99,
    previousPrice: 49.99, // Previous price for comparison
    image: "/images/productPicture.jpg",
    rating: 3.0,
    sold: 20, // Number of items sold
    reviews: 100, // Number of reviews
    offerEndTime: "2025-04-20T00:00:00",
    itemsLeft: 5,
  },
  {
    id: 10,
    title: "Product 5",
    discountDaysRemaining: 4,
    description:
      "Experience crystal-clear sound with these sleek wireless earbuds. Equipped with noise-cancellation technology, they offer up to 8 hours of playtime on a single charge and are sweat-resistant, perfect for workouts.",
    price: 79.99,
    previousPrice: 99.99, // Previous price for comparison
    image: "/images/productPicture.jpg",
    rating: 4.5,
    sold: 60, // Number of items sold
    reviews: 290, // Number of reviews
    offerEndTime: "2025-04-27T00:00:00",
    itemsLeft: 19,
  },
  {
    id: 11,
    title: "Stainless Steel Air Fryer",
    discountDaysRemaining: 5,
    description: "Healthy cooking made easy with 360° rapid air technology",
    price: 89.99,
    previousPrice: 129.99,
    image: "/images/productPicture.jpg",
    rating: 4.7,
    sold: 230,
    reviews: 1450,
    offerEndTime: "2025-04-01T00:00:00",
    itemsLeft: 18,
  },
  {
    id: 12,
    title: "4K Action Camera with Gimbal",
    discountDaysRemaining: undefined,
    description: "Capture smooth footage with built-in image stabilization",
    price: 199.99,
    previousPrice: 249.99,
    image: "/images/productPicture.jpg",
    rating: 4.8,
    sold: 89,
    reviews: 670,
    offerEndTime: "2025-04-28T00:00:00",
    itemsLeft: "Low Stock",
  },
  {
    id: 13,
    title: "Electric Standing Desk",
    discountDaysRemaining: 7,
    description: "Height-adjustable workstation with memory presets",
    price: 299.99,
    previousPrice: 399.99,
    image: "/images/productPicture.jpg",
    rating: 4.6,
    sold: 45,
    reviews: 890,
    offerEndTime: "2025-04-05T00:00:00",
    itemsLeft: 12,
  },
  {
    id: 14,
    title: "Smart LED Floor Lamp",
    discountDaysRemaining: 3,
    description: "Voice-controlled lighting with 16 million colors",
    price: 59.99,
    previousPrice: 79.99,
    image: "/images/productPicture.jpg",
    rating: 4.4,
    sold: 210,
    reviews: 450,
    offerEndTime: "2025-04-25T00:00:00",
    itemsLeft: 27,
  },
  {
    id: 15,
    title: "Wireless Security Camera System",
    discountDaysRemaining: undefined,
    description: "3-camera kit with night vision and motion detection",
    price: 149.99,
    previousPrice: 199.99,
    image: "/images/productPicture.jpg",
    rating: 4.3,
    sold: 156,
    reviews: 780,
    offerEndTime: "2025-04-02T00:00:00",
    itemsLeft: 9,
  },
  {
    id: 16,
    title: "Premium Espresso Machine",
    discountDaysRemaining: 6,
    description: "15-bar pressure system with milk frother",
    price: 399.99,
    previousPrice: 499.99,
    image: "/images/productPicture.jpg",
    rating: 4.9,
    sold: 78,
    reviews: 430,
    offerEndTime: "2025-04-04T00:00:00",
    itemsLeft: 5,
  },
  {
    id: 17,
    title: "Foldable Electric Scooter",
    discountDaysRemaining: 2,
    description: "25km range with 30km/h top speed",
    price: 349.99,
    previousPrice: 449.99,
    image: "/images/productPicture.jpg",
    rating: 4.5,
    sold: 134,
    reviews: 920,
    offerEndTime: "2025-04-23T00:00:00",
    itemsLeft: "Almost Sold Out",
  },
  {
    id: 18,
    title: "Professional Blender Set",
    discountDaysRemaining: 4,
    description: "2000W motor with 8 preset programs",
    price: 159.99,
    previousPrice: 199.99,
    image: "/images/productPicture.jpg",
    rating: 4.7,
    sold: 290,
    reviews: 1560,
    offerEndTime: "2025-04-27T00:00:00",
    itemsLeft: 32,
  },
  {
    id: 19,
    title: "Ergonomic Gaming Chair",
    discountDaysRemaining: undefined,
    description: "Reclining seat with lumbar support and headrest",
    price: 229.99,
    previousPrice: 299.99,
    image: "/images/productPicture.jpg",
    rating: 4.6,
    sold: 89,
    reviews: 670,
    offerEndTime: "2025-04-01T00:00:00",
    itemsLeft: 15,
  },
  {
    id: 20,
    title: "Solar Power Bank",
    discountDaysRemaining: 5,
    description: "20000mAh capacity with waterproof design",
    price: 39.99,
    previousPrice: 59.99,
    image: "/images/productPicture.jpg",
    rating: 4.2,
    sold: 450,
    reviews: 2300,
    offerEndTime: "2025-04-26T00:00:00",
    itemsLeft: 42,
  },
  {
    id: 21,
    title: "Smart Door Lock",
    discountDaysRemaining: 3,
    description: "Keyless entry with fingerprint and app control",
    price: 129.99,
    previousPrice: 179.99,
    image: "/images/productPicture.jpg",
    rating: 4.4,
    sold: 67,
    reviews: 340,
    offerEndTime: "2025-04-24T00:00:00",
    itemsLeft: 8,
  },
  {
    id: 22,
    title: "Wireless Charging Desk Pad",
    discountDaysRemaining: undefined,
    description: "Qi-enabled charging surface for multiple devices",
    price: 49.99,
    previousPrice: 69.99,
    image: "/images/productPicture.jpg",
    rating: 4.1,
    sold: 230,
    reviews: 890,
    offerEndTime: "2025-04-03T00:00:00",
    itemsLeft: 50,
  },
  {
    id: 23,
    title: "4K Ultra Short Throw Projector",
    discountDaysRemaining: 7,
    description: '120" image from just 12 inches away',
    price: 1499.99,
    previousPrice: 1999.99,
    image: "/images/productPicture.jpg",
    rating: 4.9,
    sold: 28,
    reviews: 150,
    offerEndTime: "2025-04-06T00:00:00",
    itemsLeft: 3,
  },
  {
    id: 24,
    title: "Robot Vacuum with Mop",
    discountDaysRemaining: 4,
    description: "Lidar navigation and self-emptying base",
    price: 299.99,
    previousPrice: 399.99,
    image: "/images/productPicture.jpg",
    rating: 4.7,
    sold: 190,
    reviews: 1340,
    offerEndTime: "2025-04-28T00:00:00",
    itemsLeft: 22,
  },
  {
    id: 25,
    title: "Electric Massage Gun",
    discountDaysRemaining: 2,
    description: "Deep tissue percussion therapy with 6 attachments",
    price: 89.99,
    previousPrice: 129.99,
    image: "/images/productPicture.jpg",
    rating: 4.6,
    sold: 450,
    reviews: 2300,
    offerEndTime: "2025-04-23T00:00:00",
    itemsLeft: "Sold Out",
  },
];
