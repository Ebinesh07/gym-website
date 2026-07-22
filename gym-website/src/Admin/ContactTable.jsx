import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const ContactTable = () => {
  const [search, setSearch] = useState("");

  const contacts = [
    {
      id: 1,
      name: "Rahul Verma",
      phone: "9876543210",
      email: "rahulv@gmail.com",
      message: "I need information about personal training.",
      submitted: "20 Jul 2026, 11:20 AM",
    },
    {
      id: 2,
      name: "Anjali Mehta",
      phone: "8765432109",
      email: "anjali.m@gmail.com",
      message: "Membership details please.",
      submitted: "20 Jul 2026, 10:05 AM",
    },
    {
      id: 3,
      name: "Vikram Singh",
      phone: "9658741236",
      email: "vikram.s@gmail.com",
      message: "Timing and fees details.",
      submitted: "19 Jul 2026, 09:50 PM",
    },
    {
      id: 4,
      name: "Pooja Sharma",
      phone: "7894561230",
      email: "pooja.s@gmail.com",
      message: "Do you have diet plans?",
      submitted: "19 Jul 2026, 08:40 PM",
    },
    {
      id: 5,
      name: "Meera Iyer",
      phone: "7412589630",
      email: "meera.iyer@gmail.com",
      message: "Women's batch timing?",
      submitted: "18 Jul 2026, 07:30 PM",
    },
  ];

  // Search
  const filteredContacts = contacts.filter((item) => {
    const value = search.toLowerCase();

    return (
      item.name.toLowerCase().includes(value) ||
      item.phone.includes(value) ||
      item.email.toLowerCase().includes(value)
    );
  });

  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

      {/* ================= HEADER ================= */}

      <div className="px-4 py-3 flex flex-col md:flex-row md:items-center justify-between gap-3">

        <h2 className="text-[16px] md:text-[17px] font-bold text-gray-900">
          Contact Form Submissions
        </h2>

        <div className="flex items-center gap-2 w-full md:w-auto">

          {/* Search */}

          <div className="relative flex-1 md:w-[330px]">

            <i
              className="
                bi bi-search
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-gray-400
                text-sm
              "
            ></i>

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

          {/* TABLE HEAD */}

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
                Message
              </th>

              <th className="px-3 py-2 text-left text-[11px] font-bold text-gray-800">
                Submitted On
              </th>

              <th className="px-3 py-2 text-center text-[11px] font-bold text-gray-800">
                Action
              </th>

            </tr>

          </thead>

          {/* TABLE BODY */}

          <tbody>

            {filteredContacts.map((item) => (

              <tr
                key={item.id}
                className="
                  border-b
                  border-gray-200
                  hover:bg-gray-50
                  transition
                "
              >

                {/* ID */}

                <td className="px-3 py-2 text-[11px] text-gray-800">
                  {item.id}
                </td>

                {/* Name */}

                <td className="px-3 py-2 text-[11px] text-gray-800">
                  {item.name}
                </td>

                {/* Phone */}

                <td className="px-3 py-2 text-[11px] text-gray-800">
                  {item.phone}
                </td>

                {/* Email */}

                <td className="px-3 py-2 text-[11px] text-gray-800">
                  {item.email}
                </td>

                {/* Message */}

                <td className="px-3 py-2 text-[11px] text-gray-800">
                  {item.message}
                </td>

                {/* Submitted Date */}

                <td className="px-3 py-2 text-[11px] text-gray-800 whitespace-nowrap">
                  {item.submitted}
                </td>

                {/* Action */}

                <td className="px-3 py-2 text-center">

                  <button
                    type="button"
                    title="View enquiry"
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

            {/* NO RESULTS */}

            {filteredContacts.length === 0 && (

              <tr>

                <td
                  colSpan="7"
                  className="py-8 text-center text-sm text-gray-500"
                >
                  No contact enquiries found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

      {/* ================= FOOTER ================= */}

      <div
        className="
          px-4
          py-3
          flex
          flex-col
          sm:flex-row
          sm:items-center
          justify-between
          gap-3
        "
      >

        <p className="text-[11px] text-gray-500">
          Showing 1 to 5 of 24 entries
        </p>

        {/* Pagination */}

        <div className="flex items-center gap-2">

          {/* Previous */}

          <button
            type="button"
            className="
              w-8
              h-8
              border
              border-gray-300
              rounded-md
              text-gray-500
              hover:bg-gray-100
            "
          >
            <i className="bi bi-chevron-left text-xs"></i>
          </button>

          {/* Page 1 */}

          <button
            type="button"
            className="
              w-8
              h-8
              rounded-md
              bg-red-600
              text-white
              text-xs
              font-semibold
            "
          >
            1
          </button>

          {/* Page 2 */}

          <button
            type="button"
            className="
              w-8
              h-8
              border
              border-gray-300
              rounded-md
              text-xs
              hover:bg-gray-100
            "
          >
            2
          </button>

          {/* Page 3 */}

          <button
            type="button"
            className="
              w-8
              h-8
              border
              border-gray-300
              rounded-md
              text-xs
              hover:bg-gray-100
            "
          >
            3
          </button>

          {/* Dots */}

          <button
            type="button"
            className="
              w-8
              h-8
              border
              border-gray-300
              rounded-md
              text-xs
            "
          >
            ...
          </button>

          {/* Page 5 */}

          <button
            type="button"
            className="
              w-8
              h-8
              border
              border-gray-300
              rounded-md
              text-xs
              hover:bg-gray-100
            "
          >
            5
          </button>

          {/* Next */}

          <button
            type="button"
            className="
              w-8
              h-8
              border
              border-gray-300
              rounded-md
              text-gray-500
              hover:bg-gray-100
            "
          >
            <i className="bi bi-chevron-right text-xs"></i>
          </button>

        </div>

      </div>

    </section>
  );
};

export default ContactTable;