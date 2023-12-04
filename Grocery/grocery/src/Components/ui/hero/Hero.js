import SecondaryButton from '../../Common/button/SecondaryButton';


const Hero = ({ bgSize}) => {
    return (
        <>
            <section className={`hero h-[550px] md:h-[bg-${bgSize}]`} >
                <div className="wrapper h-full bg-primary-green flex flex-col justify-center items-center ">
                    <div className="text-center">
                        <p className="text-xl">Welcome to our Farm</p>
                        <h1 className="text-6xl font-bold">VEGETABLES</h1>
                        <p className="text-xl">Welcome to our Farm</p>
                    </div>
                    <div className="button">
                        <SecondaryButton btnText="Welcome" />
                    </div>
                </div>
            </section >
        </>
    );
}

export default Hero;