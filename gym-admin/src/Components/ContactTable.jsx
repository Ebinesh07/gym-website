import "bootstrap-icons/font/bootstrap-icons.css";

const ContactTable = () => {
  const contacts = [
    {
      id: 1,
      name: "Rahul Kumar",
      phone: "9876543210",
      email: "rahul@gmail.com",
      subject: "Membership",
      date: "20 Jul 2026",
      status: "New",
    },
    {
      id: 2,
      name: "Priya Sharma",
      phone: "9123456780",
      email: "priya@gmail.com",
      subject: "Personal Training",
      date: "20 Jul 2026",
      status: "Replied",
    },
    {
      id: 3,
      name: "Arun Kumar",
      phone: "9988776655",
      email: "arun@gmail.com",
      subject: "Gym Timing",
      date: "19 Jul 2026",
      status: "New",
    },
    {
      id: 4,
      name: "Deepak",
      phone: "9786543210",
      email: "deepak@gmail.com",
      subject: "Sports Academy",
      date: "19 Jul 2026",
      status: "Replied",
    },
    {
      id: 5,
      name: "Vijay",
      phone: "9876501234",
      email: "vijay@gmail.com",
      subject: "Fees Details",
      date: "18 Jul 2026",
      status: "New",
    },
  ];

  return (
    <section className="bg-white rounded-2xl shadow border border-gray-200 mt-10">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 p-6 border-b">

        <div>

          <h2 className="text-2xl font-black">
            Contact Enquiries
          </h2>

          <p className="text-gray-500">
            Messages received from the Contact Form
          </p>

        </div>

        <div className="flex gap-3 w-full lg:w-auto">

          <div className="relative flex-1">

            <i className="bi bi-search absolute left-4 top-3.5 text-gray-400"></i>

            <input
              type="text"
              placeholder="Search..."
              className="w-full lg:w-72 border rounded-lg py-3 pl-11 pr-4 outline-none focus:border-red-600"
            />

          </div>

          <button className="bg-red-600 hover:bg-red-700 text-white px-5 rounded-lg">
            <i className="bi bi-funnel-fill"></i>
          </button>

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full min-w-[1000px]">

          <thead className="bg-gray-100">

            <tr>

              <th className="px-6 py-4 text-left">Name</th>

              <th className="px-6 py-4 text-left">Phone</th>

              <th className="px-6 py-4 text-left">Email</th>

              <th className="px-6 py-4 text-left">Subject</th>

              <th className="px-6 py-4 text-left">Date</th>

              <th className="px-6 py-4 text-left">Status</th>

              <th className="px-6 py-4 text-center">Action</th>

            </tr>

          </thead>

          <tbody>

            {contacts.map((item) => (

              <tr
                key={item.id}
                className="border-b hover:bg-red-50 duration-200"
              >

                <td className="px-6 py-5 font-semibold">
                  {item.name}
                </td>

                <td className="px-6 py-5">
                  {item.phone}
                </td>

                <td className="px-6 py-5">
                  {item.email}
                </td>

                <td className="px-6 py-5">
                  {item.subject}
                </td>

                <td className="px-6 py-5">
                  {item.date}
                </td>

                <td className="px-6 py-5">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      item.status === "Replied"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-center gap-3">

                    <button className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white duration-300">
                      <i className="bi bi-eye-fill"></i>
                    </button>

                    <button className="w-10 h-10 rounded-lg bg-green-100 text-green-600 hover:bg-green-600 hover:text-white duration-300">
                      <i className="bi bi-reply-fill"></i>
                    </button>

                    <button className="w-10 h-10 rounded-lg bg-red-100 text-red-600 hover:bg-red-600 hover:text-white duration-300">
                      <i className="bi bi-trash-fill"></i>
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Footer */}

      <div className="flex justify-between items-center p-5 border-t">

        <p className="text-gray-500">
          Showing 1 - 5 of 5 enquiries
        </p>

        <div className="flex gap-2">

          <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
            Previous
          </button>

          <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
            1
          </button>

          <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
            Next
          </button>

        </div>

      </div>

    </section>
  );
};

export default ContactTable;