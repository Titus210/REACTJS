import React ,{ useState } from "react";

import "./ManageItems.css"

function ManageItems() {
    const [file, setFile] = useState();

  
    return (

        <div className="items">
            <div className="search-header">
                <input type="search" />
                <i className="fa fa-search"></i>
            </div>
            <div className="products">
                <div className="descr">
                    <form action="">
                        <label htmlFor="">Product Name</label>
                        <input type="text" name="" id="" placeholder="" />
                        <label htmlFor="">Price</label>
                        <input type="text" />
                        <label htmlFor="">Category</label>
                        <input type="text" name="" id="" placeholder="" />
                        <div className="stocks">
                            <div className="date">
                                <p>Expiry Date</p>
                                <input type="date" name="" id="" />
                            </div>
                            <div className="stock-items">
                                <p>Stock Items</p>
                                <input type="text" name="" id="" />
                            </div>
                        </div>
                        <label htmlFor="">Description</label>
                        <textarea name="" id="" cols="" rows="4" placeholder='Description'></textarea>

                    </form>

                </div>
                <div className="img">
                    <form action="">
                        <label htmlFor="">Product Image</label>
                        <input type="file"  />
                        <img src={file} alt="" />
                    </form>

                </div>

            </div>
            <button>Add Product</button>
        </div>
    )
}

export default ManageItems