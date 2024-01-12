import Footer from "../../Components/Common/footer/footer";
import Navbar from "../../Components/Common/navbar/NavBar";
import Newsletter from "../../Components/Newsletter/newletter";
import ShopCategories from "../../Components/ui/category/ShopCategories";
import Hero from "../../Components/ui/hero/Hero";
import ProductList from "../../Components/ui/products/ProductList";
import AboutSection from "../about/About";

const Homepage = () => {
    return (
        <main>
            {/* Navbar */}
            <nav className="">
                <Navbar />
            </nav>

            {/* Hero */}
            <section className="hero">
                <Hero/>
            </section>
            {/* Category */}
            
            <section className="category">
                <ShopCategories />
            </section>
            {/* Quick Cards */}

            {/* Products */}
            <section className="products">
                <ProductList />
            </section>

            {/* About */}
            <section className="about">
                <AboutSection />
            </section>

            {/*Why choose us */}
            <section className="category">
                <ShopCategories />
            </section>

            {/* Newsletter */}
            <section className="news-letter">
                <Newsletter />
            </section>

            {/* Footer */}
            <section className="footer">
                <Footer />
            </section>
        </main>
    );
}

export default Homepage;