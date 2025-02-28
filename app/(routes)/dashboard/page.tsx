import { TbLayoutDashboard } from "react-icons/tb";

const page = () => {
  return (
    <section className="w-full h-full flex items-center justify-center">
      <div className="text-center text-gray-400">
        <TbLayoutDashboard className="mx-auto" size={80}/>
        <h2 className="font-semibold text-black">Welcome to Dashboard</h2>
        <p className="text-sm">Select an option from sidebar to continue</p>
      </div>
    </section>
  );
};

export default page;
