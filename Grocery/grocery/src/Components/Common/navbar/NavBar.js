import { AccountIcon, EmailIcon, FacebookIcon, HeartIcons, LinkedinIcon, PhoneIcon, ShoppingCartIcon, TwitterIcon } from "../../../Assets/icons/Icons";

const Navbar = () => {
    
    /**
 * Navbar Component:
 * 
 * The Navbar component represents the website's navigation bar.
 * It includes contact information, social icons, the logo, menu items,
 * and a search bar.
 *
 * Key Features:
 * - Displays contact information (email and phone).
 * - Shows social icons for Facebook, Twitter, and LinkedIn.
 * - Features a login icon.
 * - Displays the site's logo.
 * - Provides a menu for Home, Shop, Products, Blogs, and Pages.
 * - Includes a search bar and a shopping cart.
 *
 * Suggestions:
 * - Implement the functionality for the search bar.
 * - Ensure social icons link to the correct profiles.
 * - Customize the login functionality.
 * - Style and format text and components as needed.
 *
 * This component serves as the website's navigation bar.
 */

    return (
        <>
            <main className="">
                <section className="hidden items-center  justify-between mx-auto  py-2 px-6 md:flex text-white bg-[#214462]">
                    <div className=" flex gap-2 ">
                        <div className="email gap-2  flex items-center">
                            <p className="text-xl  text-green">
                                <EmailIcon />
                            </p>
                            <p className="text-md">
                                greenmart@gmail.com
                            </p>
                        </div>x``
                        <div className="phone flex gap-2 items-center">
                            <p className="text-xl text-green">
                                <PhoneIcon />
                            </p>
                            <p className="text-md">
                                +254 7-448-019
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center  ">
                        <div className="icons flex gap-2 text-2xl ">
                            <p>
                                <FacebookIcon />
                            </p>
                            <p className="">
                                <TwitterIcon />
                            </p>
                            <p>
                                <LinkedinIcon />
                            </p>
                        </div>
                        <div className="login ml-4 text-2xl flex items-center">
                            <p><AccountIcon /></p>
                            <p className="login ml-2">login</p>
                        </div>
                    </div>
                </section>

                <section className="md:flex items-center w-full  justify-between px-4  py-2  mx-auto lg:w-10/12">
                    <div className="flex gap-3 items-center border-gray border-b-2 py-2 md:border-b-0 md:py-0">
                        <div className="logo">
                            GreenMart
                        </div>
                        <div className="flex text-sm md:text-lg menu-items md:flex gap-2 ">
                            <p className=" text-green font-bold">Home</p>
                            <p className=" text-green font-bold">Shop</p>
                            <p className=" text-green font-bold">Products</p>
                            <p className=" text-green font-bold">Blogs</p>
                            <p className=" text-green font-bold">Pages</p>
                        </div>
                    </div>
                    <div className="icons flex gap-2 py-2 items-center text-2xl">
                        <div className="">
                            <p>
                                <input type="text" className="w-full bg-gray outline-none " />
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-2xl">
                            <p><HeartIcons /></p>
                            <p><ShoppingCartIcon /></p>
                            <p>${100}</p>
                        </div>
                    </div>
                </section>
                <section className="hidden md:flex justify-between  mx-auto lg:w-10/12 py-2 px-6">

                </section>
            </main>
        </>
    );
}

export default Navbar;