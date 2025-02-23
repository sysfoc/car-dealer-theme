const CartCheckoutDetails = () => {
  return (
    <>
      <div className="mb-3 flex justify-between">
        <div>Total:</div>
        <div>Rs. 0</div>
      </div>
      <button
        className="bg-orange-500 text-white w-11/12 h-12 
          rounded-full flex items-center justify-center
          hover:scale-[1.01] hover:bg-orange-400 mt-6 mb-4 mx-auto
            "
      >
        Rs.2,400 Min. to checkout
      </button>
    </>
  );
};

export default CartCheckoutDetails;
