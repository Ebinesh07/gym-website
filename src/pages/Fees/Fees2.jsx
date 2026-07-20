import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Fees2 = () => {
  const navigate = useNavigate();

  const plans = [
    {
      title: "LADIES",
      icon: "bi-person-fill",
      price: "₹2,000",
      color: "bg-red-600",
      button: "bg-red-600 hover:bg-red-700",
      iconColor: "text-red-600",
      features: [
        "Access to Gym",
        "Cardio & Strength Training",
        "Steam & Locker Facility",
        "Diet & Nutrition Guidance",
        "Wi-Fi Access",
      ],
    },
    {
      title: "GENTS",
      icon: "bi-person-fill",
      price: "₹2,500",
      color: "bg-black",
      button: "bg-black hover:bg-gray-800",
      iconColor: "text-gray-700",
      features: [
        "Access to Gym",
        "Cardio & Strength Training",
        "Steam & Locker Facility",
        "Diet & Nutrition Guidance",
        "Wi-Fi Access",
      ],
    },
    {
      title: "COUPLES",
      icon: "bi-people-fill",
      price: "₹3,000",
      color: "bg-red-500",
      button: "bg-red-600 hover:bg-red-700",
      iconColor: "text-red-600",
      badge: true,
      subtitle: "(HUSBAND & WIFE)",
      features: [
        "Access to Gym",
        "Cardio & Strength Training",
        "Steam & Locker Facility",
        "Diet & Nutrition Guidance",
        "Wi-Fi Access",
      ],
    },
    {
      title: "STUDENTS",
      icon: "bi-mortarboard-fill",
      price: "₹1,700",
      color: "bg-green-700",
      button: "bg-green-700 hover:bg-green-800",
      iconColor: "text-green-700",
      features: [
        "Access to Gym",
        "Basic Training",
        "Steam & Locker Facility",
        "Diet Guidance",
        "Wi-Fi Access",
      ],
    },
    {
      title: "FAMILY",
      icon: "bi-people-fill",
      price: "₹6,000",
      color: "bg-purple-700",
      button: "bg-purple-700 hover:bg-purple-800",
      iconColor: "text-purple-700",
      subtitle: "(3 PERSON)",
      features: [
        "Access to Gym",
        "Cardio & Strength Training",
        "Steam & Locker Facility",
        "Diet & Nutrition Guidance",
        "Wi-Fi Access",
      ],
    },
  ];

  return (
    <section className="bg-white py-5 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-3">
            <div className="w-12 h-[2px] bg-red-600"></div>

            <h2 className="text-4xl font-black uppercase">
              Membership
              <span className="text-red-600"> Plans</span>
            </h2>

            <div className="w-12 h-[2px] bg-red-600"></div>
          </div>

          <p className="text-gray-500">
            Choose the plan that suits your fitness journey
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

          {plans.map((plan, index) => (
            <div
              key={index}
             className="
group
border border-gray-200
rounded-xl
overflow-hidden
bg-white
relative
shadow-md
transition-all
duration-500
hover:-translate-y-4
hover:shadow-2xl
hover:scale-105
hover:border-red-500
cursor-pointer
">
              

              {/* Header */}
              <div className={`${plan.color} text-white p-4 text-center `}>
                <i className={`bi ${plan.icon} text-5xl mb-3 block`}></i>

                <h3 className="font-black text-2xl">
                  {plan.title}
                </h3>

                {plan.subtitle && (
                  <p className="text-xs mt-1">
                    {plan.subtitle}
                  </p>
                )}
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-gray-400 text-sm uppercase text-center">
                  Starting From
                </p>

                <h2 className={`text-5xl font-black mt-3 text-center ${plan.iconColor}`}>
                  {plan.price}
                </h2>

                <p className="text-center text-gray-500 mt-1">
                  / Month
                </p>

                <div className="mt-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <i className={`bi bi-check-circle-fill ${plan.iconColor}`}></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
       <button
  onClick={() => navigate("/register")}
  className={`
    w-full
    mt-3
    py-3
    rounded-lg
    text-white
    font-bold
    uppercase
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-lg
    ${plan.button}
  `}
>
  Join Now
</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Fees2;