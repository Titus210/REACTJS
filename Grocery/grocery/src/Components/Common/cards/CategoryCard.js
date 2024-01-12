import PrimaryButton from "../button/PrimaryButton";

const CategoryCard = ({ bgImage, bgColor, smallText, largeText }) => {

    const cardStyle = {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: bgColor

    };

    return (
        <>
            <article className="category-card h-48 py-2 px-3 shadow-xl rounded-lg border border-gray-300 flex justify-center items-center">
                <div className="grid grid-cols-2 gap-2">
                    <div className="category-text flex flex-col gap-2">
                        <p className="text-md font-bold">We have 100% organic</p>
                        <PrimaryButton btnText='see all'/>
                    </div>
                    <div className="category-image">
                    <div className="h-full" style={cardStyle} >
                        
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

export default CategoryCard;