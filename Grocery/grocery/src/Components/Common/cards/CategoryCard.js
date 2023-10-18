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
            <section className="category-card h-48 shadow-lg flex justify-center items-center" style={cardStyle} >
                <div className="category-content text-center  px-4">
                    <p className="small-text">{smallText}</p>
                    <p className="large-text text-2xl font-bold">{largeText}</p>
                </div>
            </section>
        </>
    );
}

export default CategoryCard;