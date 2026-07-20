import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import signupImg from "../../assets/singup.png";


    const Signup = () => {
        const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <section className="min-h-screen bg-[#111111] flex items-center justify-center py-10 px-4">

      <div className="w-full max-w-7xl bg-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}

        <div className="relative hidden lg:block">

          <img
            src={signupImg}
            alt="Gym"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Content */}
          <div className="absolute inset-0 p-12 flex flex-col justify-between">

            <div>

              <div className="flex items-center gap-3">

                <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center">

                  <i className="bi bi-barbell text-white text-2xl"></i>

                </div>

                <div>

                  <h1 className="text-5xl font-black tracking-widest text-red-600">
                    OCHRÉ
                  </h1>

                  <p className="text-white tracking-[5px] text-sm">
                    FITNESS CENTRE
                  </p>

                </div>

              </div>

              <h2 className="text-white text-6xl font-black uppercase leading-tight mt-20">
                ADMIN
                <br />
                <span className="text-red-600">
                  SIGN UP
                </span>
              </h2>

              <p className="text-gray-300 text-lg leading-8 mt-8">
                Create your administrator account to manage
                registrations, contact enquiries and members
                of OCHRÉ Fitness Centre.
              </p>

            </div>

            {/* Bottom Features */}

            <div className="space-y-7">

              <div className="flex gap-4">

                <i className="bi bi-shield-check text-red-600 text-3xl"></i>

                <div>

                  <h3 className="text-white text-xl font-bold">
                    Secure Access
                  </h3>

                  <p className="text-gray-400">
                    Only authorized administrators can login.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <i className="bi bi-people-fill text-red-600 text-3xl"></i>

                <div>

                  <h3 className="text-white text-xl font-bold">
                    Manage Members
                  </h3>

                  <p className="text-gray-400">
                    View all registrations and memberships.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <i className="bi bi-envelope-fill text-red-600 text-3xl"></i>

                <div>

                  <h3 className="text-white text-xl font-bold">
                    Contact Requests
                  </h3>

                  <p className="text-gray-400">
                    Monitor and reply to customer enquiries.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="p-8 lg:p-14">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-4xl font-black">
                Create
                <span className="text-red-600">
                  {" "}Admin Account
                </span>
              </h2>

              <p className="text-gray-500 mt-2">
                Fill in your details to create your account.
              </p>

            </div>

            <Link
  to="/login"
  className="text-red-600 font-semibold hover:underline"
>
  Login
</Link>

          </div>

          {/* ================= FORM STARTS HERE ================= */}

          <form className="mt-10 space-y-6">

            {/* Part 2 Starts Here */}

            {/* ================= PERSONAL INFORMATION ================= */}

<div className="grid md:grid-cols-2 gap-6">

  {/* Full Name */}
  <div>
    <label className="block mb-2 font-semibold text-gray-700">
      Full Name
    </label>

    <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:border-red-600 transition">

      <i className="bi bi-person-fill text-red-600 text-xl mr-3"></i>

      <input
        type="text"
        placeholder="Enter full name"
        className="w-full outline-none bg-transparent"
      />

    </div>
  </div>

  {/* Email */}
  <div>
    <label className="block mb-2 font-semibold text-gray-700">
      Email Address
    </label>

    <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:border-red-600 transition">

      <i className="bi bi-envelope-fill text-red-600 text-xl mr-3"></i>

      <input
        type="email"
        placeholder="Enter email"
        className="w-full outline-none bg-transparent"
      />

    </div>
  </div>

  {/* Username */}
  <div>
    <label className="block mb-2 font-semibold text-gray-700">
      Username
    </label>

    <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:border-red-600 transition">

      <i className="bi bi-person-badge-fill text-red-600 text-xl mr-3"></i>

      <input
        type="text"
        placeholder="Create username"
        className="w-full outline-none bg-transparent"
      />

    </div>
  </div>

  {/* Phone */}
  <div>
    <label className="block mb-2 font-semibold text-gray-700">
      Phone Number
    </label>

    <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:border-red-600 transition">

      <i className="bi bi-telephone-fill text-red-600 text-xl mr-3"></i>

      <input
        type="tel"
        placeholder="+91 98765 43210"
        className="w-full outline-none bg-transparent"
      />

    </div>
  </div>

</div>

{/* ================= ADDRESS ================= */}

<div>

  <label className="block mb-2 font-semibold text-gray-700">
    Address
  </label>

  <div className="flex items-start border border-gray-300 rounded-xl p-4 focus-within:border-red-600 transition">

    <i className="bi bi-geo-alt-fill text-red-600 text-xl mr-3 mt-1"></i>

    <textarea
      rows="3"
      placeholder="Enter address..."
      className="w-full outline-none resize-none"
    ></textarea>

  </div>

</div>
{/* ================= PASSWORD SECTION ================= */}

<div className="grid md:grid-cols-2 gap-6">

  {/* Password */}
  <div>

    <label className="block mb-2 font-semibold text-gray-700">
      Password
    </label>

    <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:border-red-600 transition">

      <i className="bi bi-lock-fill text-red-600 text-xl mr-3"></i>

    <input
  type={showPassword ? "text" : "password"}
  placeholder="Create Password"
  className="w-full outline-none bg-transparent"
/>

<i
  className={`bi ${
    showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"
  } text-gray-500 cursor-pointer hover:text-red-600`}
  onClick={() => setShowPassword(!showPassword)}
></i>
    </div>

  </div>

  {/* Confirm Password */}

  <div>

    <label className="block mb-2 font-semibold text-gray-700">
      Confirm Password
    </label>

    <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:border-red-600 transition">

      <i className="bi bi-shield-lock-fill text-red-600 text-xl mr-3"></i>
<input
  type={showConfirmPassword ? "text" : "password"}
  placeholder="Confirm Password"
  className="w-full outline-none bg-transparent"
/>

<i
  className={`bi ${
    showConfirmPassword ? "bi-eye-slash-fill" : "bi-eye-fill"
  } text-gray-500 cursor-pointer hover:text-red-600`}
  onClick={() =>
    setShowConfirmPassword(!showConfirmPassword)
  }
></i>

    </div>

  </div>

</div>

{/* ================= ADMIN ROLE ================= */}

<div>

  <label className="block mb-2 font-semibold text-gray-700">
    Admin Role
  </label>

  <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:border-red-600 transition">

    <i className="bi bi-person-workspace text-red-600 text-xl mr-3"></i>

    <select
      className="w-full outline-none bg-transparent cursor-pointer"
      defaultValue=""
    >
      <option value="" disabled>
        Select Admin Role
      </option>

      <option>Admin</option>

      <option>Super Admin</option>

    </select>

  </div>

</div>

{/* ================= TERMS ================= */}

<div className="flex items-start gap-3">

  <input
    type="checkbox"
    className="mt-1 accent-red-600"
  />

  <p className="text-gray-600 text-sm leading-6">
    I agree to the
    <span className="text-red-600 font-semibold cursor-pointer">
      {" "}Terms & Conditions
    </span>
    {" "}and{" "}
    <span className="text-red-600 font-semibold cursor-pointer">
      Privacy Policy
    </span>
  </p>

</div>

{/* ================= SUBMIT BUTTON ================= */}

<button
  type="submit"
className="
w-full
bg-red-600
hover:bg-red-700
text-white
py-4
rounded-xl
font-bold
uppercase
tracking-wider
transition-all
duration-300
hover:shadow-xl
hover:scale-[1.02]
"
>
  <i className="bi bi-person-plus-fill mr-2"></i>
  Create Admin Account
</button>

{/* ================= LOGIN LINK ================= */}

<div className="text-center">

  <p className="text-gray-600">

    Already have an account?

<Link
  to="/login"
  className="text-red-600 font-semibold hover:underline"
>
  Login
</Link>

  </p>

</div>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Signup;