import Navbar from "../../Components/Common/navbar/navbar";
import Trending from "../../Components/Products/trending";
import Hero from "../../Components/ui/hero/Hero";
import Sidebar from "../../Components/ui/sidebar/Sidebar";

/**
 * Shop Component:
 *
 * The Shop component serves as the main page for an online shopping website.
 *
 * Key Components:
 * - Navbar: The top navigation bar.
 * - Hero: The hero section of the shop.
 * - Sidebar: A filter panel for products (visible on larger screens).
 * - Trending: Displays trending products.
 *
 * Suggestions:
 * - Ensure responsive design for different screen sizes.
 *
 * This component creates the shop page layout.
 */
const Shop = () => {
    return (
        <>
            <Navbar />
            <div className="flex w-full">
                <div className="sidebar hidden w-3/12  bg-blue-400 md:block">
                    <Sidebar />
                </div>
                <div className="items w-full bg-slate-900 md:mx-auto">
                    <Hero />
                    <Trending />
                    <Trending />
                </div>
            </div>
        </>
    );
}

export default Shop;
