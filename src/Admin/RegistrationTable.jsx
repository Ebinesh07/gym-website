import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const RegistrationTable = () => {
  const [search, setSearch] = useState("");

  const registrations = [
    {
      id: 1,
      name: "Arun Kumar",
      phone: "9876543210",
      email: "arunkumar@gmail.com",
      plan: "Gents",
      duration: "3 Months",
      submitted: "20 Jul 2026, 10:30 AM",
    },
    {
      id: 2,
      name: "Priya Sharma",
      phone: "8765432109",
      email: "priyasharma@gmail.com",
      plan: "Ladies",
      duration: "1 Month",
      submitted: "20 Jul 2026, 09:15 AM",
    },
    {
      id: 3,
      name: "Ravi Teja",
      phone: "9658741236",
      email: "raviteja@gmail.com",
      plan: "Students",
      duration: "6 Months",
      submitted: "19 Jul 2026, 08:45 PM",
    },
    {
      id: 4,
      name: "Karthik R",
      phone: "7894561230",
      email: "karthik.r@gmail.com",
      plan: "Family",
      duration: "12 Months",
      submitted: "19 Jul 2026, 07:20 PM",
    },
    {
      id: 5,
      name: "Sanjay V",
      phone: "7412589630",
      email: "sanjayv@gmail.com",
      plan: "Gents",
      duration: "3 Months",
      submitted: "18 Jul 2026, 06:10 PM",
    },
  ];

  const filteredRegistrations = registrations.filter((item) => {
    const value = search.toLowerCase();

    return (
      item.name.toLowerCase().includes(value) ||
      item.phone.includes(value) ||
      item.email.toLowerCase().includes(value)
    );
  });

  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-5">

      {/* ================= HEADER ================= */}

      <div className="px-4 py-3 flex flex-col md:flex-row md:items-center justify-between gap-3">

        <h2 className="text-[16px] md:text-[17px] font-bold text-gray-900">
          Registration Form Submissions
        </h2>

        <div className="flex items-center gap-2 w-full md:w-auto">

          {/* Search */}

          <div className="relative flex-1 md:w-[330px]">

            <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, phone or email..."
              className="
                w-full
                h-9
                pl-9
                pr-3
                border
                border-gray-300
                rounded-md
                text-[12px]
                text-gray-700
                outline-none
                focus:border-red-500
                focus:ring-1
                focus:ring-red-100
              "
            />

          </div>

          {/* Filter */}

          <button
            type="button"
            className="
              w-9
              h-9
              flex
              items-center
              justify-center
              border
              border-gray-300
              rounded-md
              text-gray-600
              hover:text-red-600
              hover:border-red-500
              transition
            "
          >
            <i className="bi bi-funnel text-sm"></i>
          </button>

        </div>

      </div>

      {/* ================= TABLE ================= */}

      <div className="px-4 overflow-x-auto">

        <table className="w-full min-w-[1000px] border-collapse">

          <thead>

            <tr className="bg-gray-50 border-y border-gray-200">

              <th className="px-3 py-2 text-left text-[11px] font-bold text-gray-800">
                #
              </th>

              <th className="px-3 py-2 text-left text-[11px] font-bold text-gray-800">
                Name
              </th>

              <th className="px-3 py-2 text-left text-[11px] font-bold text-gray-800">
                Phone
              </th>

              <th className="px-3 py-2 text-left text-[11px] font-bold text-gray-800">
                Email
              </th>

              <th className="px-3 py-2 text-left text-[11px] font-bold text-gray-800">
                Membership Plan
              </th>

              <th className="px-3 py-2 text-left text-[11px] font-bold text-gray-800">
                Duration
              </th>

              <th className="px-3 py-2 text-left text-[11px] font-bold text-gray-800">
                Submitted On
              </th>

              <th className="px-3 py-2 text-center text-[11px] font-bold text-gray-800">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredRegistrations.map((item) => (

              <tr
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >

                <td className="px-3 py-2 text-[11px] text-gray-800">
                  {item.id}
                </td>

                <td className="px-3 py-2 text-[11px] text-gray-800">
                  {item.name}
                </td>

                <td className="px-3 py-2 text-[11px] text-gray-800">
                  {item.phone}
                </td>

                <td className="px-3 py-2 text-[11px] text-gray-800">
                  {item.email}
                </td>

                <td className="px-3 py-2 text-[11px] text-gray-800">
                  {item.plan}
                </td>

                <td className="px-3 py-2 text-[11px] text-gray-800">
                  {item.duration}
                </td>

                <td className="px-3 py-2 text-[11px] text-gray-800 whitespace-nowrap">
                  {item.submitted}
                </td>

                {/* View only */}

                <td className="px-3 py-2 text-center">

                  <button
                    type="button"
                    className="
                      w-9
                      h-7
                      border
                      border-gray-300
                      rounded-md
                      inline-flex
                      items-center
                      justify-center
                      text-gray-700
                      hover:border-red-500
                      hover:text-red-600
                      transition
                    "
                  >
                    <i className="bi bi-eye text-sm"></i>
                  </button>

                </td>

              </tr>

            ))}

            {filteredRegistrations.length === 0 && (

              <tr>

                <td
                  colSpan="8"
                  className="py-8 text-center text-sm text-gray-500"
                >
                  No registrations found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

      {/* ================= BOTTOM ================= */}

      <div className="
        px-4
        py-3
        flex
        flex-col
        sm:flex-row
        sm:items-center
        justify-between
        gap-3
      ">

        <p className="text-[11px] text-gray-500">
          Showing 1 to 5 of 38 entries
        </p>

        {/* Pagination */}

        <div className="flex items-center gap-2">

          <button className="w-8 h-8 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-100">
            <i className="bi bi-chevron-left text-xs"></i>
          </button>

          <button className="w-8 h-8 rounded-md bg-red-600 text-white text-xs font-semibold">
            1
          </button>

          <button className="w-8 h-8 border border-gray-300 rounded-md text-xs hover:bg-gray-100">
            2
          </button>

          <button className="w-8 h-8 border border-gray-300 rounded-md text-xs hover:bg-gray-100">
            3
          </button>

          <button className="w-8 h-8 border border-gray-300 rounded-md text-xs hover:bg-gray-100">
            ...
          </button>

          <button className="w-8 h-8 border border-gray-300 rounded-md text-xs hover:bg-gray-100">
            8
          </button>

          <button className="w-8 h-8 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-100">
            <i className="bi bi-chevron-right text-xs"></i>
          </button>

        </div>

      </div>

    </section>
  );
};

export default RegistrationTable;