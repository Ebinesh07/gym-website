import "bootstrap-icons/font/bootstrap-icons.css";

import f1 from '../../Asserts/f1.png'

const Fees1 = () => {
  const features = [
    {
      icon: "bi-shield-check",
      text: "NO JOINING FEE",
    },
    {
      icon: "bi-calendar-check",
      text: "FLEXIBLE PLANS",
    },
    {
      icon: "bi-people-fill",
      text: "EXPERT TRAINERS",
    },
    {
      icon: "bi-gear-fill",
      text: "PREMIUM FACILITIES",
    },
  ];

  return (
    <section className="bg-black py-16 overflow-hidden ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 items-center gap-12">

          {/* LEFT CONTENT */}
          <div>

            <h1 className="text-4xl md:text-6xl font-black uppercase leading-tight text-white">
              BEST FACILITIES.
              <br />
              <span className="text-red-600">
                AFFORDABLE PRICES.
              </span>
              <br />
              GREAT RESULTS.
            </h1>

            <p className="text-gray-300 text-lg mt-8 leading-8 max-w-xl">
              Choose the membership that fits your goals and start your
              transformation journey with Ochré Fitness Center.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-6 mt-10">

              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <div className="w-14 h-14 rounded-full border-2 border-red-600 flex items-center justify-center text-red-600 text-2xl">
                    <i className={`bi ${item.icon}`}></i>
                  </div>

                  <h3 className="text-white font-bold text-sm md:text-base">
                    {item.text}
                  </h3>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mb-5">

            <img
              src={f1}
              alt="img"
              className="w-full h-[650px] object-cover rounded-3xl"
            />

            {/* OFFER CARD */}
            <div
              className="
                absolute
                right-5
                top-10
                bg-black/95
                border-2
                border-gray-700
                rounded-2xl
                p-2
                mb-5
                
                w-[280px]
                text-center
                shadow-2xl
              "
            >
              <div className="bg-red-600 text-white text-sm font-bold py-2 rounded-full uppercase">
                Limited Time Offer
              </div>

              <h3 className="text-white text-3xl font-black mt-6 uppercase">
                Upto
              </h3>

              <h1 className="text-white text-8xl font-black leading-none mt-2">
                20 % OFF
           
              </h1>

             

              <p className="text-white font-semibold mt-3 uppercase">
                On Yearly Plans
              </p>

              <button
                className="
                  w-full
                  bg-red-600
                  hover:bg-gray-700
                  text-white
                  font-bold
                  py-3
                  rounded-3
                  mt-4 
                  
                  uppercase
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                Join Now
                <i className="bi bi-arrow-right"></i>
              </button>

              
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Fees1;