const ShimmerSkeleton: React.FC = () => (
  <div className="w-[185px] h-[270px] md:w-[223px] md:h-[300px]  flex flex-col items-center font-sans">
    <div className="shimmer rounded-md w-[185px] h-[185px] md:w-[223px] md:h-[220px]"></div>
    <div className="mt-2 shimmer rounded-full w-3/4 h-4"></div>
    <div className="mt-1 shimmer rounded-full w-1/2 h-4"></div>
    <div className="mt-1 shimmer rounded-full w-1/3 h-4"></div>
  </div>
);

export default ShimmerSkeleton;


// shadow-lg