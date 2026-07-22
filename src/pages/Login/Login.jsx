import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import loginImg from "../../Asserts/login.png"; // Your workout image

const Login = () => {
    const navigate = useNavigate();

const [showPassword, setShowPassword] = useState(false);

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [loading, setLoading] = useState(false);

const handleLogin = (e) => {
  e.preventDefault();

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  setLoading(true);

  setTimeout(() => {
    setLoading(false);

    alert("Login Successful!");

    navigate("/dashboard");
  }, 1500);
};

  return (
    <section className="min-h-screen bg-[#111111] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}

        <div className="relative hidden lg:block">

          <img
            src={loginImg}
            alt="Gym"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-black/70"></div>

          {/* Content */}

          <div className="absolute inset-0 p-12 flex flex-col justify-between">

            <div>

              {/* Logo */}

              <div className="flex items-center gap-4">

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

              <h2 className="text-6xl font-black uppercase text-white leading-tight mt-20">
                ADMIN
                <br />
                <span className="text-red-600">
                  LOGIN
                </span>
              </h2>

              <p className="text-gray-300 text-lg leading-8 mt-8">
                Login to access your dashboard,
                manage members, registrations,
                contact enquiries and gym activities.
              </p>

            </div>

            {/* Bottom Features */}

            <div className="space-y-7">

              <div className="flex gap-4">

                <i className="bi bi-speedometer2 text-red-600 text-3xl"></i>

                <div>

                  <h3 className="text-white text-xl font-bold">
                    Dashboard Access
                  </h3>

                  <p className="text-gray-400">
                    Monitor gym activity in real-time.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <i className="bi bi-people-fill text-red-600 text-3xl"></i>

                <div>

                  <h3 className="text-white text-xl font-bold">
                    Member Management
                  </h3>

                  <p className="text-gray-400">
                    Manage registrations and memberships.
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
                    View all customer enquiries instantly.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="p-8 lg:p-14">

          <div>

            <h2 className="text-4xl font-black">
              Welcome
              <span className="text-red-600">
                {" "}Back
              </span>
            </h2>

            <p className="text-gray-500 mt-2">
              Sign in to your admin account.
            </p>

          </div>

          {/* Form starts here */}

          <form
  onSubmit={handleLogin}
  className="mt-10 space-y-6"
>

            {/* Part 2 */}
            {/* ================= EMAIL ================= */}

<div>

  <label className="block mb-2 font-semibold text-gray-700">
    Email Address
  </label>

  <div className="flex items-center h-14 border border-gray-300 rounded-xl px-4 focus-within:border-red-600 transition-all">

    <i className="bi bi-envelope-fill text-red-600 text-xl mr-3"></i>

   <input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full outline-none bg-transparent"
/>

  </div>

</div>

{/* ================= PASSWORD ================= */}

<div>

  <label className="block mb-2 font-semibold text-gray-700">
    Password
  </label>

  <div className="flex items-center h-14 border border-gray-300 rounded-xl px-4 focus-within:border-red-600 transition-all">

    <i className="bi bi-lock-fill text-red-600 text-xl mr-3"></i>

    <input
  type={showPassword ? "text" : "password"}
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full outline-none bg-transparent"
/>

<button
  type="button"
  onClick={() => setShowPassword(!showPassword)}
  className="text-gray-500 hover:text-red-600"
>
  <i
    className={`bi ${
      showPassword
        ? "bi-eye-slash-fill"
        : "bi-eye-fill"
    } text-lg`}
  ></i>
</button>

  </div>

</div>

{/* ================= REMEMBER & FORGOT ================= */}

<div className="flex items-center justify-between">

  <label className="flex items-center gap-2 cursor-pointer">

    <input
      type="checkbox"
      className="accent-red-600 w-4 h-4"
    />

    <span className="text-gray-600">
      Remember Me
    </span>

  </label>

  <Link
    to="/forgot-password"
    className="text-red-600 font-semibold hover:underline"
  >
    Forgot Password?
  </Link>

</div>
{/* ================= LOGIN BUTTON ================= */}

<button
  type="submit"
  disabled={loading}
  className="
    w-full
    h-14
    rounded-xl
    bg-red-600
    hover:bg-red-700
    text-white
    font-bold
    uppercase
    tracking-wider
    text-lg
    transition-all
    duration-300
    flex
    justify-center
    items-center
    gap-3
    disabled:opacity-70
  "
>
  {loading ? (
    <>
      <i className="bi bi-arrow-repeat animate-spin"></i>
      Logging In...
    </>
  ) : (
    <>
      <i className="bi bi-box-arrow-in-right"></i>
      Login
    </>
  )}
</button>

{/* ================= DIVIDER ================= */}

<div className="flex items-center gap-4">

  <div className="flex-1 h-[1px] bg-gray-300"></div>

  <span className="text-gray-500 font-medium">
    OR
  </span>

  <div className="flex-1 h-[1px] bg-gray-300"></div>

</div>

{/* ================= CREATE ACCOUNT ================= */}

<div className="text-center">

  <p className="text-gray-600">
    Don't have an Admin Account?
  </p>

<Link
  to="/signup"
  className="
    inline-flex
    items-center
    gap-2
    mt-4
    px-8
    py-3
    border-2
    border-red-600
    rounded-xl
    font-bold
    text-red-600
    hover:bg-red-600
    hover:text-white
    transition-all
  "
>
  <i className="bi bi-person-plus-fill"></i>
  Create Account
</Link>

</div>

{/* ================= FOOTER ================= */}

<div className="pt-8 text-center border-t border-gray-200">

  <p className="text-sm text-gray-500">
    © 2026 OCHRÉ Fitness Centre
  </p>

  <p className="text-sm mt-2">
    Designed & Developed by{" "}
    <span className="font-bold text-red-600">
      WEBNIQO
    </span>
  </p>

</div>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Login;