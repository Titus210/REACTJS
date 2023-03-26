import React, { useState } from 'react'

// style
import "../../../../Styles/DocSlide/Docslide.css"
// Images

import doctor_2 from '../../../../assets/images/Doctor_2.jpg';
import doctor_3 from '../../../../assets/images/doctor-2.jpg';
import doctor_4 from '../../../../assets/images/Doctor_4.png';
import doctor_5 from '../../../../assets/images/Doctor_4.jpg';
import doctor_6 from '../../../../assets/images/doctor-1.jpg';



function DocSlide() {
    //  const [backgroundImage, setBackgroundImage] = useState(doctor_2);
    // const handleNextClick = () => {
    //     if (backgroundImage === doctor_2) {
    //         setBackgroundImage(doctor_3);
    //     } else if (backgroundImage === doctor_3) {
    //         setBackgroundImage(doctor_4);
    //     } else if (backgroundImage === doctor_4) {
    //         setBackgroundImage(doctor_5);
    //     } else if (backgroundImage === doctor_5) {
    //         setBackgroundImage(doctor_6);
    //     } else {
    //         // if current image is doctor4, reset to doctor2
    //         setBackgroundImage(doctor_2);
    //     }
    // }


    const images = [doctor_2, doctor_3, doctor_4, doctor_5, doctor_6];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const words = ['Trust', 'Healing', 'Care', 'Compassion', 'Expertise', 'Support'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    const handleNextClick = () => {
        const nextImageIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(nextImageIndex);

        const nextWordIndex = Math.floor(Math.random() * words.length);
        setCurrentWordIndex(nextWordIndex);
    };
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
                <p>{words[currentWordIndex]}</p>
            </div>
            <div className="docslide-next">
                <p></p>
                <p className='next' onClick={handleNextClick}>-></p>
            </div>
        </div>
    )
}

export default DocSlide