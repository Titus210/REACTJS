import SecondaryButton from '../../Common/button/SecondaryButton';

import backgroundImage from '../../../Assets/Images/background-1.jpg'
import PrimaryButton from '../../Common/button/PrimaryButton';


const heroStyles ={
    backgroundImage : `url(${backgroundImage})`,
    backgroundSize:'cover',
    backgroundPosition:'center'
}

const Hero = () => {
    return (
        <>
            <section className={`hero h-[500px] md:h-[750px]`}  >
                <div className="wrapper h-full flex flex-col justify-center items-center gap-6">
                    <div className="text-center">
                        <p className="text-xl ">Welcome to our fresh</p>
                        <h1 className="text-6xl font-bold text--green uppercase text-primary-green">Grocery</h1>
                        <p className="text-xl">get organic food for your shop</p>
                    </div>
                    <div className="button">
                        <PrimaryButton btnText="Welcome" />
                    </div>
                </div>
            </section >
        </>
    );
}

export default Hero;