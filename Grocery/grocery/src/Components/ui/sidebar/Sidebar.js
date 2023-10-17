const Sidebar = () => {
    /**
 * Sidebar Component:
 *
 * The Sidebar component provides a filter panel with category options.
 *
 * Key Features:
 * - Displays categories like Fruits, Vegetables, Fish, and Meat.
 * - Content is organized into sections for clarity.
 *
 * Suggestions:
 * - Consider making the category options dynamic if needed.
 *
 * This component adds a filter panel to the user interface.
 */

    
    return (
        <>
            <div className="sidebar  p-4">
                <section>
                    <div className="section-heading text-2xl font-bold">
                        <h1>Filter by</h1>
                    </div>

                    <div className="items">
                        <div className="heading-text text-xl font-bold">
                            <h4 >Category</h4>
                        </div>
                        <div className="list-items text-lg ml-4">
                            <p>Fruits</p>
                            <p>Vegetables</p>
                            <p>Fish</p>
                            <p>Meat</p>
                        </div>
                    </div>

                    <div className="items">
                        <div className="heading-text text-xl font-bold">
                            <h4 >Category</h4>
                        </div>
                        <div className="list-items text-lg ml-4">
                            <p>Fruits</p>
                            <p>Vegetables</p>
                            <p>Fish</p>
                            <p>Meat</p>
                        </div>
                    </div>

                    <div className="items">
                        <div className="heading-text text-xl font-bold">
                            <h4 >Category</h4>
                        </div>
                        <div className="list-items text-lg ml-4">
                            <p>Fruits</p>
                            <p>Vegetables</p>
                            <p>Fish</p>
                            <p>Meat</p>
                        </div>
                    </div>

                </section>
            </div>
        </>
    );
}

export default Sidebar;