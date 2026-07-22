
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer
      className="pt-20 border-t py-4"
      style={{
        backgroundColor: "var(--bg-dark)",
        borderColor: "rgba(255,255,255,0.08)",
        color: "var(--text-color)",
      }}
    >
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 text-center lg:text-left">

        {/* Logo Section */}
        <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div
              className="text-5xl"
              style={{ color: "var(--primary-color)" }}
            >
              <i className="bi bi-barbell"></i>
            </div>

            <div>
              <h2
                className="text-4xl font-bold tracking-[6px]"
                style={{ color: "var(--primary-color)" }}
              >
                OCHRÉ
              </h2>

              <p
                className="text-sm tracking-[5px]"
                style={{ color: "var(--white)" }}
              >
                FITNESS CENTRE
              </p>
            </div>
          </div>

          {/* Since */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mt-6">
            <div
              className="w-12 h-[2px]"
              style={{ backgroundColor: "var(--primary-color)" }}
            />

            <span
              className="font-semibold"
              style={{ color: "var(--primary-color)" }}
            >
              SINCE 2012
            </span>

            <div
              className="w-12 h-[2px]"
              style={{ backgroundColor: "var(--primary-color)" }}
            />
          </div>

          <p className="mt-8 leading-8 max-w-md mx-auto lg:mx-0">
            We build champions on the field and in life through training,
            discipline, dedication and determination.
          </p>
                      {/* Follow Us */}
            <div className="pt-6">
              <h4
                className="font-bold mb-4 uppercase"
                style={{ color: "var(--white)" }}
              >
                Follow Us
              </h4>

              <div className="flex justify-center lg:justify-start gap-4">
                {[
                  {
                    icon: "whatsapp",
                    link: "https://facebook.com",
                  },
                  {
                    icon: "instagram",
                    link: "https://www.instagram.com/ochrefitnesscentre?utm_source=qr",
                  },
                  {
                    icon: "youtube",
                    link: "https://youtube.com/@ochrefitnesscentresivakasi6017?si=LyqlXWtvBnTAYvXV",
                  },
                ].map((social) => (
                  <a
                    key={social.icon}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-12 h-12
                      rounded-full
                      flex items-center justify-center
                      border
                      transition-all duration-300
                      hover:scale-110
                    "
                    style={{
                      borderColor: "var(--primary-color)",
                      color: "var(--white)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--primary-color)";
                      e.currentTarget.style.boxShadow =
                        "0 0 20px rgba(193,18,31,.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <i className={`bi bi-${social.icon} text-lg`} />
                  </a>
                ))}
              </div>
            </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center lg:items-start">
          <h3
            className="text-xl font-bold uppercase"
            style={{ color: "var(--white)" }}
          >
            Quick Links
          </h3>

          <div
            className="w-12 h-1 mt-3 mb-8 rounded"
            style={{ backgroundColor: "var(--primary-color)" }}
          />

          <ul className="space-y-4">
            <li><Link to="/" className="hover:text-red-500 duration-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-500 duration-300">About Us</Link></li>
            <li><Link to="/gym" className="hover:text-red-500 duration-300">Gym</Link></li>
            <li><Link to="/sports-academy" className="hover:text-red-500 duration-300">Sports Academy</Link></li>
            <li><Link to="/gallery" className="hover:text-red-500 duration-300">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-red-500 duration-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* Programs */}
        <div className="flex flex-col items-center lg:items-start">
          <h3
            className="text-xl font-bold uppercase"
            style={{ color: "var(--white)" }}
          >
            Programs
          </h3>

          <div
            className="w-12 h-1 mt-3 mb-8 rounded"
            style={{ backgroundColor: "var(--primary-color)" }}
          />

          <ul className="space-y-4">
            <li>Weight Training</li>
            <li>Cardio Fitness</li>
            <li>CrossFit</li>
            <li>Yoga</li>
            <li>Sports Academy</li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div className="flex flex-col items-center lg:items-start px-2 w-full">
          <h3
            className="text-xl font-bold uppercase"
            style={{ color: "var(--white)" }}
          >
            Contact Us
          </h3>

          <div
            className="w-12 h-1 mt-3 mb-8 rounded"
            style={{ backgroundColor: "var(--primary-color)" }}
          />

          <div className="space-y-5 w-full">

            <div className="flex gap-4 ">
              <i
                className="bi bi-geo-alt-fill text-xl mt-1"
                style={{ color: "var(--primary-color)" }}
              />
              <p className="break-words">
  OCHRE FITNESS CENTRE: 702B Pandian Complex,
  First Floor, Ganagiri Road,
  Sivakasi, Tamil Nadu - 626123
</p>
            </div>

            <div className="flex gap-4">
              <i
                className="bi bi-telephone-fill text-xl"
                style={{ color: "var(--primary-color)" }}
              />
              <p className="break-words">
  +91 95788 52900
  <br />
  +91 73730 87272
</p>
            </div>

            <div className="flex gap-4">
              <i
                className="bi bi-envelope-fill text-xl"
                style={{ color: "var(--primary-color)" }}
              />
              <p className="break-words">
  Siva.Murugan24@gmail.com
</p>
            </div>

            <div className="flex gap-4 items-start">
              <i
                className="bi bi-clock-fill text-xl"
                style={{ color: "var(--primary-color)" }}
              />
              <div>
                <p>Mon - Sat : 5:30 AM - 10:00 PM</p>
                <p>Sun : 6:00 AM - 12:00 PM</p>
              </div>
            </div>



          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div
        className="border-t mt-16 py-6 text-center px-4"
        style={{
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <p style={{ color: "var(--text-color)" }}>
          © 2026 OCHRÉ Fitness Centre. All Rights Reserved.
        </p>

        <p className="mt-3 text-sm">
          <span style={{ color: "var(--text-color)" }}>
            Designed & Developed by{" "}
          </span>

          <span
            className="font-bold tracking-wider"
            style={{ color: "var(--primary-color)" }}
          >
            WEBNIQO
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;