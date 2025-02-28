import OrangeButton from "../OrangeButton";

const CartCheckoutDetails = () => {
  return (
    <>
      <div className="mb-3 w-full flex justify-between">
        <div>Total:</div>
        <div>Rs. 0</div>
      </div>
      <button className="w-[342px] h-12">
        <OrangeButton>
          Rs.2,400 Min. to checkout
        </OrangeButton>
      </button>
    </>
  );
};

export default CartCheckoutDetails;
