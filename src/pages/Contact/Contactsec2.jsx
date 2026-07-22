import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

const Contactsec2 = () => {

    const [formData, setFormData] = useState({
  name: "",
  mobile: "",
  email: "",
  subject: "",
  message: "",
});

const [errors, setErrors] = useState({});

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });
};

const validateForm = () => {
  let newErrors = {};

  // Name Validation
  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }

  // Mobile Validation
  if (!formData.mobile.trim()) {
    newErrors.mobile = "Mobile number is required";
  } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
    newErrors.mobile = "Enter a valid 10 digit mobile number";
  }

  // Email Validation
  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
  ) {
    newErrors.email = "Enter a valid email address";
  }

  // Subject Validation
  if (!formData.subject.trim()) {
    newErrors.subject = "Subject is required";
  }

  // Message Validation
  if (!formData.message.trim()) {
    newErrors.message = "Message is required";
  } else if (formData.message.length < 10) {
    newErrors.message = "Message should contain at least 10 characters";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (validateForm()) {
    alert("Message sent successfully!");

    console.log(formData);

    setFormData({
      name: "",
      mobile: "",
      email: "",
      subject: "",
      message: "",
    });

    setErrors({});
  }
};

  return (
    <section className="bg-[#f5f5f5] py-10  lg:py-20">
      <div className="max-w-10xl sm:px-6 lg:px-8 ">

        <div className="grid lg:grid-cols-[2fr_1fr] rounded-[24px] overflow-hidden shadow-2xl">

          {/* ================= LEFT SIDE ================= */}
          <div className="bg-white px-5 py-5  sm:px-8 lg:px-12  lg:py-10 ">

            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-black">
                SEND US A{" "}
                <span className="text-red-600">MESSAGE</span>
              </h2>

              <div className="w-20 h-[4px] bg-red-600 mt-4 rounded-full"></div>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>

              {/* Name + Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Name */}
                <div className="relative">
                  <i className="bi bi-person absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none"></i>

                  <input
                    type="text"
                    placeholder="Your Name"
                     value={formData.name}
  onChange={handleChange}
                    className="
                      w-full
                      h-14
                      border border-gray-300
                      rounded-lg
                      pl-16
                      pr-4
                      text-gray-700
                      placeholder:text-gray-400
                      focus:outline-none
                      focus:border-red-600
                      focus:ring-2
                      focus:ring-red-100
                      transition-all duration-300
                      my-2 px-5
                    "
                  />

                  {errors.name && (
  <p className="text-red-500 text-sm mt-1">
    {errors.name}
  </p>
)}
                </div>

                {/* Mobile */}
                <div className="relative">
                  <i className="bi bi-telephone absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none"></i>

                  <input
                    type="text"
                    placeholder="Mobile Number"
                     value={formData.mobile}
  onChange={handleChange}
                    className="
                      w-full
                      h-14
                      border border-gray-300
                      rounded-lg
                      pl-16
                      pr-4
                      text-gray-700
                      placeholder:text-gray-400
                      focus:outline-none
                      focus:border-red-600
                      focus:ring-2
                      focus:ring-red-100
                      transition-all duration-300
                      my-3 px-5
                    "
                  />
                  {errors.mobile && (
  <p className="text-red-500 text-sm mt-1">
    {errors.mobile}
  </p>
)}
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <i className="bi bi-envelope absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none"></i>

                <input
                  type="email"
                  placeholder="Email Address"
                   value={formData.email}
  onChange={handleChange}
                  className="
                    w-full
                    h-14
                    border border-gray-300
                    rounded-lg
                    pl-16
                    pr-4
                    text-gray-700
                    placeholder:text-gray-400
                    focus:outline-none
                    focus:border-red-600
                    focus:ring-2
                    focus:ring-red-100
                    transition-all duration-300
                    my-3 px-5
                  "
                />
                {errors.email && (
  <p className="text-red-500 text-sm mt-1">
    {errors.email}
  </p>
)}
              </div>

              {/* Subject */}
              <div className="relative">
                <i className="bi bi-file-earmark-text absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none"></i>

                <input
                  type="text"
                  placeholder="Subject"
                   value={formData.subject}
  onChange={handleChange}
                  className="
                    w-full
                    h-14
                    border border-gray-300
                    rounded-lg
                    pl-16
                    pr-4
                    text-gray-700
                    placeholder:text-gray-400
                    focus:outline-none
                    focus:border-red-600
                    focus:ring-2
                    focus:ring-red-100
                    transition-all duration-300
                    my-3 px-5
                    ${error.subject ? 'border-red-500' :}
                  "
                />
                {errors.subject && (
  <p className="text-red-500 text-sm mt-1">
    {errors.subject}
  </p>
)}
              </div>

              {/* Message */}
              <div className="relative">
                <i className="bi bi-pencil absolute left-5 top-6 text-gray-400 text-xl pointer-events-none"></i>

                <textarea
                  rows="8"
                  placeholder="Your Message"
                  name="message"
                   value={formData.message}
  onChange={handleChange}
                  className="
                    w-full
                
                    border border-gray-300
                    rounded-lg
                    pl-16
                    pt-3
                    pr-5
                    text-gray-700
                    placeholder:text-gray-400
                    resize-none
                    focus:outline-none
                    focus:border-red-600
                    focus:ring-2
                    focus:ring-red-100
                    transition-all duration-300
                    my-3 px-5
                  "
                ></textarea>
                {errors.message && (
  <p className="text-red-500 text-sm mt-1">
    {errors.message}
  </p>
)}
              </div>

              {/* Button */}
              <button
              type="submit"
                className="
                  w-full
                  h-14
                  bg-red-600
                  hover:bg-black
                  text-white
                  font-bold
                  text-lg
                  uppercase
                  rounded-lg
                  transition-all duration-300
                  flex
                  items-center
                  justify-center
                  gap-4
                "
              >
                SEND MESSAGE
                <i className="bi bi-send-fill text-lg"></i>
              </button>

            </form>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="bg-black text-white px-4 py-5 my-3 ">

            <h2 className="text-3xl font-black uppercase">
              CONTACT{" "}
              <span className="text-red-600">INFORMATION</span>
            </h2>

            <div className="w-20 h-[4px] bg-red-600 mt-3 mb-10  rounded-full"></div>

            <div className="space-y-8 mt-3">

              {/* Address */}
              <div className="flex gap-5 border-b border-gray-800 pb-6">
                <div className="min-w-[40px] h-[40px] rounded-full bg-red-600 flex items-center justify-center text-2xl">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>

                <div>
                  <h3 className="font-bold text-xl uppercase">ADDRESS</h3>

                  <p className="text-gray-300 mt-2 leading-7">
                    OCHRE FITNESS CENTRE: 702b Pandian complex first floor,ganagiri road Sivakasi
TamilNadu - 626123
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5 border-b border-gray-800 pb-6 ">
                <div className="min-w-[40px] h-[40px] rounded-full bg-red-600 flex items-center justify-center text-2xl">
                  <i className="bi bi-telephone-fill"></i>
                </div>

                <div>
                  <h3 className="font-bold text-xl uppercase">PHONE</h3>

                  <p className="text-gray-300 mt-2 leading-7">
                    +91 95788 52900
                    <br />
                    +91 73730 87272
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5 border-b border-gray-800 pb-6">
                <div className="min-w-[40px] h-[40px] rounded-full bg-red-600 flex items-center justify-center text-2xl">
                  <i className="bi bi-envelope-fill"></i>
                </div>

                <div>
                  <h3 className="font-bold text-xl uppercase">EMAIL</h3>

                  <p className="text-gray-300 mt-2">
                   Siva.Murugan24@gmail.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-5 border-b border-gray-800 pb-6">
                <div className="min-w-[40px] h-[40px] rounded-full bg-red-600 flex items-center justify-center text-2xl">
                  <i className="bi bi-clock-fill"></i>
                </div>

                <div>
                  <h3 className="font-bold text-xl uppercase">
                    OPENING HOURS
                  </h3>

                  <p className="text-gray-300 mt-2 leading-7">
                    Mon - Sat : 5:30 AM - 10:00 PM
                    <br />
                    Sunday : 6:00 AM - 12:00 PM
                  </p>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-5 mt-4">
                <div className="min-w-[40px] h-[40px] rounded-full bg-red-600 flex items-center justify-center text-2xl">
                  <i className="bi bi-people-fill"></i>
                </div>

                <div className="p-3">
                  <h3 className="font-bold text-xl uppercase mb-4">
                    FOLLOW US
                  </h3>

                  <div className="flex gap-4 text-2xl ">
                    <a href="facebook link"><i className="bi bi-whatsapp hover:text-red-600 cursor-pointer duration-300 "> </i></a>
                    <a href="https://www.instagram.com/ochrefitnesscentre?utm_source=qr"><i className="bi bi-instagram hover:text-red-600 cursor-pointer duration-300"></i> </a>
                    <a href="https://youtube.com/@ochrefitnesscentresivakasi6017?si=LyqlXWtvBnTAYvXV"><i className="bi bi-youtube hover:text-red-600 cursor-pointer duration-300"></i> </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contactsec2;