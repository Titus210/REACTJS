// new

import React, { useState, useEffect } from 'react'

// style
import "../../../../Styles/DocSlide/Docslide.css"
// Images


import doctor_2 from '../../../../assets/images/Doctor_2.jpg';
import doctor_3 from '../../../../assets/images/doctor-2.jpg';
import doctor_4 from '../../../../assets/images/Doctor_4.png';
import doctor_5 from '../../../../assets/images/Doctor_4.jpg';
import doctor_6 from '../../../../assets/images/doctor-1.jpg';

const words = [
    "We are committed to providing quality healthcare services to our patients.",
    "Our hospital is equipped with state-of-the-art technology and facilities.",
    "Our team of dedicated medical professionals is here to serve you 24/7.",
    "At our hospital, we believe in personalized care and treatment for every patient.",
    "We strive to maintain a clean and hygienic environment for the safety of our patients.",
    "Your health and well-being are our top priorities.",
    "We are proud to offer a wide range of medical services to meet your needs.",
    "Our hospital is recognized for its excellence in patient care and medical innovation.",
    "Our mission is to provide compassionate care to all who walk through our doors.",
    "We work tirelessly to ensure that you receive the best possible care and treatment.",
    "We understand that every patient is unique and deserves individualized attention.",
    "Our medical team is dedicated to keeping you informed and involved in your care.",
    "We believe in treating the whole person, not just the illness.",
    "We are honored to serve our community and improve the health of our patients.",
    "Our hospital is a place of healing, hope, and comfort.",
    "We are committed to staying at the forefront of medical research and innovation.",
    "Our goal is to help you achieve and maintain optimal health and wellness.",
    "We believe that every patient has the right to access high-quality healthcare services.",
    "Our hospital is staffed by some of the most skilled and compassionate medical professionals.",
    "We are dedicated to providing affordable and accessible healthcare services to all.",
];



function DocSlide() {
    const images = [doctor_2, doctor_3, doctor_4, doctor_5, doctor_6];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [previousWord, setPreviousWord] = useState("");
    const [currentWord, setCurrentWord] = useState(words[Math.floor(Math.random() * words.length)]);

    // const history = useHistory();
    // const autoplayIntervalRef = useRef(null);

    // useEffect(() => {
    //     // start autoplay
    //     autoplayIntervalRef.current = setInterval(handleNextClick, 5000);

    //     // cleanup function to stop autoplay when component unmounts
    //     return () => {
    //         clearInterval(autoplayIntervalRef.current);
    //     };
    // }, []);
    
    const handleNextClick = () => {
        const nextImageIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(nextImageIndex);

        let nextWord;
        do {
            nextWord = words[Math.floor(Math.random() * words.length)];
        } while (nextWord === previousWord);
        setPreviousWord(currentWord);
        setCurrentWord(nextWord);
    };

    useEffect(() => {
        const autoplayTimer = setTimeout(() => {
            handleNextClick();
        }, 5000); // change the delay time as desired (in milliseconds)

        return () => {
            clearTimeout(autoplayTimer);
        };
    }, [currentImageIndex]);

    useEffect(() => {
        if (currentImageIndex === images.length - 1) {
            // open account chosing page
            window.location.href = '/account';
        }
    }, [currentImageIndex]);

    return (
        <div className="docslide-wrapper">
            <div className="docslide-content"
                style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            >
                <div className="header-text">
                    <p></p>
                    <p className="skip-slide">skip</p>
                </div>
            </div>
            <div className="docslide-text">
                <p>{currentWord}</p>
            </div>
            <div className="docslide-next">
                <p></p>
                <p className='next' onClick={handleNextClick}>-></p>
            </div>
        </div>
    )
}

export default DocSlide;
