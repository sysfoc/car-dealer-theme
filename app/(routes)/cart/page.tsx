import Breadcrumb from "@/app/ui/Breadcrumb";
import CartDetails from "@/app/ui/Cart/CartDetails";
import CartItemsSection from "@/app/ui/Cart/CartItemsSection";

const cartBreadcrumbLinks = [
  {title: "Home", link: "/"},
  {title: "Cart", link: "/cart"},
]

const page = () => {
  return (
    <div>
      <h1 aria-label="Shopping cart"></h1>
      {/* BreadCrumbs */}
      <Breadcrumb links={cartBreadcrumbLinks}/>
      {/* Cart Section */}
      <div className="flex justify-between">
        {/* Left side: cart items */}
        <CartItemsSection />
        {/* Right side: cart details */}
        <CartDetails/>
      </div>
    </div>
  );
};

export default page;
