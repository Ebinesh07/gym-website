import "bootstrap-icons/font/bootstrap-icons.css";
import shaker from '../../Asserts/f2.jpeg';

const Fees3 = () => {
  const tableData = [
    {
      icon: "bi-person",
      color: "text-pink-600",
      plan: "LADIES",
      sub: "",
      prices: ["₹ 2,000", "₹ 5,000", "₹ 9,000", "₹ 15,000"],
    },
    {
      icon: "bi-person",
      color: "text-blue-600",
      plan: "GENTS",
      sub: "",
      prices: ["₹ 2,500", "₹ 6,000", "₹ 12,000", "₹ 18,000"],
    },
    {
      icon: "bi-people",
      color: "text-red-700",
      plan: "COUPLES",
      sub: "(H&W)",
      prices: ["₹ 3,000", "₹ 8,000", "₹ 16,000", "₹ 21,000"],
    },
    {
      icon: "bi-mortarboard",
      color: "text-green-700",
      plan: "STUDENTS",
      sub: "",
      prices: ["₹ 1,700", "₹ 4,500", "₹ 9,000", "₹ 15,000"],
    },
    {
      icon: "bi-people-fill",
      color: "text-purple-700",
      plan: "FAMILY",
      sub: "(3 PERSON)",
      prices: ["₹ 6,000", "₹ 16,000", "₹ 30,000", "₹ 40,000"],
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-2">

        <div className="grid lg:grid-cols-4 gap-4">

          {/* TABLE */}

          <div className="lg:col-span-3 overflow-x-auto">

            <table className="w-full border border-gray-300 border-collapse mt-4 ">

              <thead>

                <tr className="bg-[#111] text-white">

                  <th className="border border-gray-700 py-3 px-2 text-left text-lg font-bold uppercase">
                    Plan Duration
                  </th>

                  <th className="border border-gray-700 py-3 px-2 text-lg font-bold uppercase">
                    1 Month
                  </th>

                  <th className="border border-gray-700 py-3 px-2 text-lg font-bold uppercase">
                    3 Months
                  </th>

                  <th className="border border-gray-700 py-3 px-2 text-lg font-bold uppercase">
                    6 Months
                  </th>

                  <th className="border border-gray-700 py-3 px-2 text-lg font-bold uppercase">
                    12 Months
                  </th>

                </tr>

              </thead>

              <tbody>

                {tableData.map((item, index) => (

                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition"
                  >

                    <td className="border border-gray-300 py-2 px-2">

                      <div className="flex items-center gap-3">

                        <i
                          className={`bi ${item.icon} text-3xl ${item.color}`}
                        ></i>

                        <div>

                          <h3
                            className={`font-bold text-xl ${item.color}`}
                          >
                            {item.plan}
                          </h3>

                          {item.sub && (
                            <p className="text-sm">
                              {item.sub}
                            </p>
                          )}

                        </div>

                      </div>

                    </td>

                    {item.prices.map((price, i) => (

                      <td
                        key={i}
                        className="border border-gray-300 text-center font-bold text-xl py-3"
                      >
                        {price}
                      </td>

                    ))}

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* Membership Benefits Box goes here in Part 2 */}

          {/* MEMBERSHIP BENEFITS */}

<div
  className="
    bg-[#111]
    rounded-xl
    overflow-hidden
    shadow-lg
    h-fit
    flex
    p-1
    flex-col
    justify-between
  "
>

  {/* Heading */}

  <div className="p-4">

    <h2 className="text-3xl font-black uppercase text-white mb-6">
      Membership
      <span className="text-red-600"> Benefits</span>
    </h2>

    <div className="space-y-4">

      <div className="flex items-center gap-3 text-white">
        <i className="bi bi-clipboard2-check text-gray-300"></i>
        <span>Free Fitness Assessment</span>
      </div>

      <div className="flex items-center gap-3 text-white">
        <i className="bi bi-people text-gray-300"></i>
        <span>Personalized Workout Plan</span>
      </div>

      <div className="flex items-center gap-3 text-white">
        <i className="bi bi-journal-check text-gray-300"></i>
        <span>Diet & Nutrition Guidance</span>
      </div>

      <div className="flex items-center gap-3 text-white">
        <i className="bi bi-graph-up-arrow text-gray-300"></i>
        <span>Regular Progress Tracking</span>
      </div>

      <div className="flex items-center gap-3 text-white">
        <i className="bi bi-headset text-gray-300"></i>
        <span>Priority Support</span>
      </div>

      <div className="flex items-center gap-3 text-white">
        <i className="bi bi-building text-gray-300"></i>
        <span>Access to All Facilities</span>
      </div>

      <div className="flex items-center gap-3 text-white">
        <i className="bi bi-cup-straw text-gray-300"></i>
        <span>
          365 Days Energy Drink Complimentary
          <br />
          <small>(One per day)</small>
        </span>
      </div>

    </div>

  </div>

  {/* Bottom Image */}

  <div className="p-2 ">

    <img
      src={shaker}
      alt="Membership Benefits"
      className="w-full h-44 object-cover"
    />

  </div>

</div>

        </div>

      </div>
    </section>
  );
};

export default Fees3;