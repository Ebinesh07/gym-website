import SportsAcademyComponent from "../components/SportsAcademy/SportsAcademy";
import "./SportsAcademy.css";
import heroBanner from "../assets/Sportsimages/sports-banner.jpg";
import { FaArrowRight, FaPlay } from "react-icons/fa";

import silambam from "../assets/Sportsimages/silambam.png";
import archery from "../assets/Sportsimages/archery.png";
import karate from "../assets/Sportsimages/karate.png";
import cricket from "../assets/Sportsimages/cricket.png";
import athletics from "../assets/Sportsimages/athletics.png";
import badminton from "../assets/Sportsimages/badminton.png";
import athleteGroup from "../assets/Sportsimages/athlete-group.png"

import academyImage from "../assets/Sportsimages/academy.jpg";
import Navbar from "../components/Navbar/Navbar";
import TopBar from "../components/TopBar/TopBar";

function SportsAcademy() {

    const sports = [

{
id:1,
title:"Cricket",
image:cricket,
description:"Professional batting, bowling and match strategy training."
},

{
id:2,
title:"Archery",
image:archery,
description:"Improve focus, balance and accuracy with certified coaches."
},

{
id:3,
title:"Silambam",
image:silambam,
description:"Traditional martial art that builds strength and discipline."
},

{
id:4,
title:"Karate",
image:karate,
description:"Develop confidence, self-defense and physical fitness."
},

{
id:5,
title:"Athletics",
image:athletics,
description:"Running, endurance and speed development programs."
},

{
id:6,
title:"Badminton",
image:badminton,
description:"Professional shuttle coaching with tournament practice."
}

];
  return (

    <>

  
 {/*=========================================
 HERO SECTION V2
=========================================*/}

<section
    className="sports-hero"
    style={{ backgroundImage: `url(${heroBanner})` }}
>

    <div className="hero-overlay"></div>

    <div className="hero-container">

        {/* LEFT */}

        <div className="hero-left">

            <span className="hero-badge">

                PROFESSIONAL SPORTS ACADEMY

            </span>

            <h1>

                BUILD

                <span> CHAMPIONS</span>

                <br />

                CREATE

                <span> FUTURES</span>

            </h1>

            <p>

                Experience world-class coaching, modern sports infrastructure,
                and professional athlete development programs designed to
                unlock your true potential.

            </p>

            <div className="hero-buttons">

                <button className="primary-btn">

                    Join Academy

                    <FaArrowRight />

                </button>

                <button className="secondary-btn">

                    <FaPlay />

                    Watch Video

                </button>

            </div>

            <div className="hero-stats">

                <div className="stat">

                    <h2>500+</h2>

                    <span>Students</span>

                </div>

                <div className="stat">

                    <h2>15+</h2>

                    <span>Sports</span>

                </div>

                <div className="stat">

                    <h2>50+</h2>

                    <span>Expert Coaches</span>

                </div>

            </div>

        </div>

        {/* RIGHT */}

        <div className="hero-right">
            {/* <img src={athleteGroup} alt="Athletes" /> */}
        </div>

    </div>

</section>




        {/* <SportsAcademyComponent /> */}

    {/*=========================================
 SPORTS PROGRAMS
=========================================*/}

<section className="sports-programs">

    <div className="sports-heading">

        <span>OUR SPORTS</span>

        <h2>

            Explore Our

            <span> Sports Programs</span>

        </h2>

        <p>

            Professional coaching designed to develop skills,
            confidence and championship-level performance.

        </p>

    </div>

    <div className="sports-grid">

        {sports.map((sport)=>{

            const className = sport.title.toLowerCase();

            return(

                <div
                    className={`sport-card ${className}`}
                    key={sport.id}
                >

                    <div className="sport-image">

                        <img
                            src={sport.image}
                            alt={sport.title}
                        />

                    </div>

                    <div className="sport-info">

                        <h3>

                            {sport.title}

                        </h3>

                        <p>

                            {sport.description}

                        </p>

                        <button>

                            Learn More

                            <FaArrowRight/>

                        </button>

                    </div>

                </div>

            )

        })}

    </div>

</section>

<section className="academy-about">

    <div className="academy-wrapper">

        {/* LEFT */}

        <div className="academy-content">

            <span>

                WHY CHOOSE US

            </span>

            <h2>

                Become The Athlete
                <br/>

                <strong>You've Always Dreamed Of</strong>

            </h2>

            <p>

                Our academy combines expert coaching,
                world-class infrastructure and scientific
                athlete development to help every student
                achieve their maximum potential.

            </p>

            <div className="academy-features">

                <div>

                    ✔ Certified Coaches

                </div>

                <div>

                    ✔ Modern Infrastructure

                </div>

                <div>

                    ✔ Individual Athlete Tracking

                </div>

                <div>

                    ✔ National Tournament Exposure

                </div>

                <div>

                    ✔ Fitness & Nutrition

                </div>

                <div>

                    ✔ Performance Analytics

                </div>

            </div>

            <button>

                Join Academy

                <FaArrowRight/>

            </button>

        </div>

        {/* RIGHT */}

        <div className="academy-image">

            <img

            src={academyImage}

            alt="academy"

            />

            <div className="experience-box">

                <h2>

                    15+

                </h2>

                <span>

                    Years Experience

                </span>

            </div>

        </div>

    </div>

</section>
    </>
);
}

export default SportsAcademy;