import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">

      <div className="max-w-[1700px] mx-auto px-5 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          {/* ================= Left ================= */}

          <div className="flex items-center gap-5">

            {/* Logo */}

            <Link to="/dashboard" className="flex items-center gap-3">

              <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center">

                <i className="bi bi-barbell text-white text-2xl"></i>

              </div>

              <div>

                <h2 className="text-3xl font-black tracking-wider text-red-600">
                  OCHRÉ
                </h2>

                <p className="text-xs tracking-[4px] text-gray-600 uppercase">
                  Fitness Center
                </p>

              </div>

            </Link>

          </div>

          {/* ================= Right ================= */}

          <div className="flex items-center gap-6">

            {/* Notification */}

            <button className="relative w-11 h-11 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white duration-300 flex items-center justify-center">

              <i className="bi bi-bell text-xl"></i>

              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] flex items-center justify-center">
                3
              </span>

            </button>

            {/* Admin */}

            <div className="flex items-center gap-3 cursor-pointer">

              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Admin"
                className="w-11 h-11 rounded-full object-cover border-2 border-red-600"
              />

              <div className="hidden md:block">

                <h4 className="font-semibold">
                  Admin
                </h4>

                <p className="text-sm text-gray-500">
                  Super Admin
                </p>

              </div>

              <i className="bi bi-chevron-down"></i>

            </div>

            {/* Logout */}

            <Link
              to="/login"
              className="
                flex
                items-center
                gap-2
                bg-red-600
                hover:bg-red-700
                text-white
                px-5
                py-3
                rounded-lg
                font-semibold
                duration-300
              "
            >
              <i className="bi bi-box-arrow-right"></i>

              Logout
            </Link>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;