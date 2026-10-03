import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#E4E0E1] h-16 rounded-md mb-3">
      <div className="flex justify-between items-center h-full p-2">
        <div className="p-2 bg-slate-800 text-white rounded-lg">
          <Link className="text-white" href="/">
            POSTO!!!
          </Link>
        </div>
        <div>
          <div className="p-2 bg-slate-800 text-white rounded-lg">
            <Link className="text-white" href="/">
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
