import "./Hero.css";
import heroDesktop from "../../assets/hero-bg.jpg";
import heroMobile from "../../assets/hero-mobile.jpg";
import { useEffect, useState,Link } from "react";
import { useNavigate } from "react-router-dom";


function Hero() {
    
    const navigate = useNavigate();

    const [heroImage, setHeroImage] = useState(heroDesktop);

    useEffect(() => {

        const changeImage = () => {

            if (window.innerWidth <= 992) {

                setHeroImage(heroMobile);

            } else {

                setHeroImage(heroDesktop);

            }

        };

        changeImage();

        window.addEventListener("resize", changeImage);

        return () => {

            window.removeEventListener("resize", changeImage);

        };

    }, []);

    return (

        <section
            className="hero"
            style={{
                backgroundImage: `url(${heroImage})`
            }}
        >

            {/* Overlay */}
            <div className="hero-overlay"></div>

            {/* Premium Glow */}
            <div className="hero-glow"></div>

            {/* Hero Container */}
            <div className="hero-container">

                {/* Left Content */}
                <div className="hero-content">

                    <span className="hero-tag">
                        WELCOME TO NEXTGOAL FITNESS
                    </span>

                    <h1>
                        STRONG BODIES.
                        <br />
                        <span>STRONG MINDS.</span>
                        <br />
                        BETTER LIVES.
                    </h1>

                    <p>
                        Transform your body, build confidence and achieve your
                        best version with expert training and world-class equipment.
                    </p>

                    <div className="hero-buttons">

                        <Link to="/cta" className="join-btn">
  JOIN NOW
  <i className="bi bi-arrow-right"></i>
</Link>
                        <Link to="/cta" className="join-btn">
  Book Free Trial
  <i className="bi bi-arrow-right"></i>
</Link>

                        <button className="secondary-btn">
                            
                        </button>

                        {/* <button className="secondary-btn">
                            
                        </button> */}

                    </div>

                </div>

                {/* Offer Card */}
                <div className="offer-card">

                    <div className="shine"></div>

                    <span className="offer-badge">
                        LIMITED TIME OFFER
                    </span>

                    <h3>
                        SPECIAL OFFER
                    </h3>

                    <h2>
                        50%
                    </h2>

                    <p>
                        OFF ON ALL MEMBERSHIPS
                    </p>

                    <button
                        className="join-btn"
                        onClick={() => navigate("/cta")}
                    >

                    Join Today
                     <i className="bi bi-arrow-right"></i>

                    </button>

                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="scroll-down">
                <i className="bi bi-chevron-double-down"></i>
            </div>

            

        </section>

    );

}

export default Hero;