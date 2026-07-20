import "bootstrap-icons/font/bootstrap-icons.css";

const StatsCards = () => {
  const cards = [
    {
      title: "Total Registrations",
      value: "38",
      growth: "+12 this week",
      icon: "bi-card-checklist",
      bg: "bg-pink-500",
      text: "text-green-600",
    },
    {
      title: "Total Contact Enquiries",
      value: "24",
      growth: "+8 this week",
      icon: "bi-people-fill",
      bg: "bg-blue-600",
      text: "text-green-600",
    },
    {
      title: "Today's Registrations",
      value: "5",
      growth: "+2 today",
      icon: "bi-calendar-event-fill",
      bg: "bg-orange-500",
      text: "text-green-600",
    },
    {
      title: "Today's Enquiries",
      value: "3",
      growth: "+1 today",
      icon: "bi-chat-dots-fill",
      bg: "bg-emerald-500",
      text: "text-green-600",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card, index) => (
        <div
          key={index}
          className="
            bg-white
            rounded-2xl
            shadow-sm
            border
            border-gray-200
            p-6
            hover:shadow-lg
            duration-300
          "
        >

          <div className="flex items-center gap-5">

            {/* Icon */}

            <div
              className={`
                ${card.bg}
                w-18
                h-18
                rounded-2xl
                flex
                items-center
                justify-center
                shadow-lg
              `}
            >
              <i
                className={`bi ${card.icon} text-white text-3xl`}
              ></i>
            </div>

            {/* Content */}

            <div>

              <p className="text-gray-500 text-sm font-medium">
                {card.title}
              </p>

              <h2 className="text-4xl font-black mt-1">
                {card.value}
              </h2>

              <p className={`${card.text} text-sm font-semibold mt-2`}>
                {card.growth}
              </p>

            </div>

          </div>

        </div>
      ))}

    </section>
  );
};

export default StatsCards;