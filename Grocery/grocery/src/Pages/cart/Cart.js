import PrimaryButton from "../../Components/Common/button/PrimaryButton";
import Navbar from "../../Components/Common/navbar/NavBar";

const Cart = () => {
    return (
        <>
            <section>
                <div className="navbar">
                    <Navbar />
                </div>
                <div className="">
                    <div className="cart-wrapper flex flex-col h-[500px] rounded-xl gap-2 w-11/12 lg:w-9/12 mx-auto bg-slate-200 md:flex-row">
                        <div className="cart w-11/12 mx-auto md:w-8/12">
                            <div className="heading ">
                                <h2 className="text-3xl font-bold py-4 px-2">  Shopping Cart</h2>
                            </div>
                            <div className="items  bg-slate-300">
                                <div className="table w-full">
                                    <div className="table-heading flex items-center justify-between gap-2 bg-slate-100 w-full">
                                        <div className="product w-6/12 text-center ">
                                            <p>
                                                Product
                                            </p>
                                        </div>
                                        <div className="quantity ">
                                            <p>
                                                Quantity
                                            </p>
                                        </div>
                                        <div className="price text-center"><p>Price</p></div>
                                        <div className="remove text-center"><p>Remove</p></div>
                                    </div>
                                    <div className="table-content flex items-center justify-between ">
                                        <div className="product w-6/12 flex  gap-4 items-center">
                                            {/* Image */}
                                            <div className="image">
                                                <div className="h-24 w-24 bg-slate-900"></div>
                                            </div>
                                            <div className="content">
                                                <h2>Tomato</h2>
                                                <p>$24</p>
                                            </div>
                                        </div>
                                        <div className="quantity">
                                            <div className="text-white">
                                                <p className="flex gap-3 ">
                                                    <span className="bg-slate-900 h-8 w-8 p-3 rounded-full">+</span>
                                                    <span className="text-black">24</span>
                                                    <span className="bg-slate-900 h-8 w-8 p-3 rounded-full">+</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="price">
                                            2400
                                        </div>
                                        <div className="remove flex items-center justify-center">
                                            *
                                        </div>
                                    </div>
                                </div>
                                <div className="self-end flex">
                                    <div className="button self-center mx-auto  w-11/12">
                                        <PrimaryButton btnText="checkout" />
                                    </div>

                                    <div className="button self-center mx-auto  w-11/12">
                                        <div> <h2>Subtotal</h2></div>
                                        <div> <h2>Shopping</h2></div>
                                        <hr />
                                        <div> <h2>Total</h2></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="checkout w-11/12 mx-auto rounded-xl  md:w-4/12 bg-slate-600 flex flex-col  gap-6">
                            <div className="heading">
                                <h2 className="text-3xl font-bold py-4 px-2">Payment Info</h2>
                                <hr />
                            </div>
                            <div className="content flex flex-col gap-5 px-4">
                                <div className="method flex  gap-4 text-white">
                                    <p className="rounded-3xl py-3 px-2 border border-white">Credit card</p>
                                    <p className="rounded-3xl py-3 px-2 border border-white">Paypal</p>
                                </div>
                                <div className="card-name flex flex-col">
                                    <label htmlFor="">Card Name</label>
                                    <input type="text" placeholder="John Doe" className="py-[4px] px-2" />
                                </div>
                                <div className="card-name flex flex-col">
                                    <label htmlFor="">Card Number</label>
                                    <input type="text" className="py-[4px] px-2" />
                                </div>
                                {/* USe date */}
                                <div className="card-name flex flex-col">
                                    <label htmlFor="">Expiration date</label>
                                    <input type="text" className="py-[4px] px-2" />
                                </div>
                            </div>
                            <div className="button self-center mx-auto  w-11/12">
                                <PrimaryButton btnText="checkout" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;