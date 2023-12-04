import CategoryCard from '../../Common/cards/CategoryCard';

const categoryData = [
    {
        id: 1,
        bgImage: require('../../../Assets/Images/canned-1.png'),
        smallText: '100% Natural organic Fruits',
        bigText: 'FRESH FRUITS',
        bgColor: '#2ff242'
    },
    {
        id: 2,
        bgImage: require('../../../Assets/Images/cherry-2.png'),
        smallText: '100% Natural organic Fruits',
        bigText: 'FRESH FRUITS',
        bgColor: '#f3f'
    },
    {
        id: 3,
        bgImage: require('../../../Assets/Images/corn-1.png'),
        smallText: '100% Natural organic Fruits',
        bigText: 'FRESH FRUITS',
        bgColor: '#f2ff32'
    },
]

const ShopCategories = () => {
    return (
        <>
            <section>
                <div className="wrapper flex flex-wrap md:flex-nowrap lg:w-10/12 mx-auto ">
                    {
                        categoryData.map((data) => (
                            <div key={data.id} className="w-full p-2">
                                <CategoryCard bgImage={data.bgImage} smallText={data.smallText} largeText={data.bigText} bgColor={data.bgColor} />
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    );
}

export default ShopCategories;