export default function OrangeButton({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative   
        font-semibold text-sm 
        w-full h-full min-h-5 max-h-14 max-w-96 min-w-40
        mx-auto
        rounded-full 
        flex items-center justify-center
        bg-orange-500 text-white
        hover:scale-[1.01] hover:bg-orange-400
        "
    >
      {children}
    </div>
  );
}
