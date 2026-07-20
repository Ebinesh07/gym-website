import React, { useState } from "react";
import "./CTA.css";

import athlete from "../../assets/Sportsimages/cta-athlete.png";

import {
  FaArrowRight,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaDumbbell,
  FaRegClock,
} from "react-icons/fa";

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    membership: "",
    goal: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    let newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Minimum 3 characters";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid Email";
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10 digit number";
    }

    // Membership
    if (!formData.membership) {
      newErrors.membership = "Please select membership";
    }

    // Goal
    if (!formData.goal.trim()) {
      newErrors.goal = "Please enter your fitness goal";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log(formData);

      alert("Form Submitted Successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        membership: "",
        goal: "",
      });

      setErrors({});
    }
  };

  return (
    <section className="cta">
      <div className="cta-container">
        {/* LEFT */}

        <div className="cta-left">
          <span className="cta-tag">
            START YOUR FITNESS JOURNEY
          </span>

          <h2>
            Become The <span>Strongest</span> Version Of Yourself
          </h2>

          <p>
            Train with certified coaches, world-class equipment,
            personalized workout plans and achieve your dream
            fitness transformation.
          </p>

          <div className="cta-features">
            <div>
              <FaDumbbell />
              <span>Modern Equipment</span>
            </div>

            <div>
              <FaUser />
              <span>Certified Trainers</span>
            </div>

            <div>
              <FaRegClock />
              <span>Flexible Timings</span>
            </div>

            <div>
              <FaDumbbell />
              <span>Personal Coaching</span>
            </div>
          </div>

          <img
            src={athlete}
            alt="Gym Athlete"
            className="cta-athlete"
          />
        </div>

        {/* RIGHT */}

        <div className="cta-right">
          <span className="form-title">
            JOIN OUR GYM
          </span>

          <h3>
            Book Your <span>Free Trial</span>
          </h3>

          <p>
            Fill out the form and our team will contact you shortly.
          </p>

          <form
            className="cta-form"
            onSubmit={handleSubmit}
          >
            {/* NAME */}

            <div className="form-group">
              <FaUser className="input-icon" />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>Full Name</label>

              {errors.name && (
                <small className="error">
                  {errors.name}
                </small>
              )}
            </div>

            {/* EMAIL */}

            <div className="form-group">
              <FaEnvelope className="input-icon" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Email Address</label>

              {errors.email && (
                <small className="error">
                  {errors.email}
                </small>
              )}
            </div>

            {/* PHONE */}

            <div className="form-group">
              <FaPhoneAlt className="input-icon" />

              <input
                type="text"
                name="phone"
                maxLength={10}
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <label>Phone Number</label>

              {errors.phone && (
                <small className="error">
                  {errors.phone}
                </small>
              )}
            </div>

            {/* MEMBERSHIP */}

            <div className="form-group">
              <FaDumbbell className="input-icon" />

              <select
                name="membership"
                value={formData.membership}
                onChange={handleChange}
                required
              >
                <option value=""></option>
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Half Yearly</option>
                <option>Yearly</option>
              </select>

              <label>Membership</label>

              {errors.membership && (
                <small className="error">
                  {errors.membership}
                </small>
              )}
            </div>

            {/* GOAL */}

            <div className="form-group textarea">
              <textarea
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                required
              />

              <label>Fitness Goal</label>

              {errors.goal && (
                <small className="error">
                  {errors.goal}
                </small>
              )}
            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="cta-btn"
            >
              <span>Book Free Trial</span>

              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;