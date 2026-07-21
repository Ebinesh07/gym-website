import "./SportsAcademy.css";

import {
  FaFutbol,
  FaBasketballBall,
  FaTableTennis,
  FaRunning,
  FaArrowRight,
  FaShieldAlt,
} from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";

import football from "../../assets/sportscomponent/football.jpg";
import basketball from "../../assets/sportscomponent/basketball.jpg";
import cricket from "../../assets/sportscomponent/cricket.jpg";
import badminton from "../../assets/sportscomponent/badminton.jpg";
import athletics from "../../assets/sportscomponent/athletics.jpg";

const academy = [
  {
    title: "Football Academy",
    image: football,
    icon: <FaFutbol />,
  },
  {
    title: "Basketball Academy",
    image: basketball,
    icon: <FaBasketballBall />,
  },
  {
    title: "Cricket Academy",
    image: cricket,
    icon: <GiCricketBat />,
  },
  {
    title: "Badminton Academy",
    image: badminton,
    icon: <FaTableTennis />,
  },
  {
    title: "Athletics Academy",
    image: athletics,
    icon: <FaRunning />,
  },
];

function SportsAcademy() {
  return (
    <section className="academy">

      <div className="academy-heading">

        <span className="academy-tag">
  OCHRE SPORTS ACADEMY
</span>

<h2>
  Discover Your Sport. Build Your Future.
</h2>

<p>
  From football and basketball to cricket, badminton and athletics,
  experience world-class coaching, modern facilities and professional
  training programs designed for every athlete.
</p>

      </div>

      <div className="academy-grid">

        {academy.map((item, index) => (

          <div
            className="academy-card"
            key={index}
          >

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="academy-overlay">

              <div className="academy-icon">

                {item.icon}

              </div>

              <h3>

                {item.title}

              </h3>

              <button>

                Learn More

                <FaArrowRight />

              </button>

            </div>

          </div>

        ))}

        <div className="academy-cta">

          <span className="cta-ball">
            ⚽
          </span>

          <h3>
            OCHRE
            <br />
            FOOTBALL
            <br />
            ACADEMY
          </h3>

          <ul>

            <li>Football Training</li>

            <li>Basketball Coaching</li>
            <li>Cricket Academy</li>
            <li>Badminton & Athletics</li>

          </ul>

          <button>

            Explore Academy

            <FaArrowRight />

          </button>

        </div>

      </div>

    </section>
  );
}

export default SportsAcademy;