const Footer = () => {
  return (
    <footer className="mt-10 bg-white border border-gray-200 rounded-2xl shadow-sm">

      <div className="px-6 py-5 flex flex-col lg:flex-row justify-between items-center gap-4">

        {/* Left */}

        <div>

          <h2 className="text-2xl font-black text-red-600 tracking-wider">
            OCHRÉ
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Fitness Centre Admin Dashboard
          </p>

        </div>

        {/* Center */}

        <div className="flex items-center gap-6 text-gray-500 text-sm">

          <span className="flex items-center gap-2">
            <i className="bi bi-calendar-check-fill text-red-600"></i>
            2026
          </span>

          <span className="flex items-center gap-2">
            <i className="bi bi-shield-check text-green-600"></i>
            Secure Admin Panel
          </span>

        </div>

        {/* Right */}

        <div className="text-center lg:text-right">

          <p className="text-gray-600 text-sm">
            Designed & Developed by
          </p>

          <h3 className="font-bold text-red-600 tracking-wide">
            WEBNIQO
          </h3>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-200 py-4 text-center">

        <p className="text-gray-500 text-sm">
          © 2026 OCHRÉ Fitness Centre. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;