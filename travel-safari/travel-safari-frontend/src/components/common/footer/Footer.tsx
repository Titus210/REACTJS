'use client';

import { Footer } from 'flowbite-react';


import lionImage from "../../../assets/images/lion.jpg";


const PageFooter = () => {
    return (
        <>
            <Footer container>
                <div className="w-full text-center">
                    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                        <Footer.Brand
                            href="https://flowbite.com"
                            src={lionImage}
                            alt="Travel Safari"
                            name="Travel Safari"
                        />
                        <Footer.LinkGroup className='flex gap-2'>
                            <Footer.Link href="#">About</Footer.Link>
                            <Footer.Link href="#">Privacy Policy</Footer.Link>
                            <Footer.Link href="#">Licensing</Footer.Link>
                            <Footer.Link href="#">Contact</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <Footer.Divider />
                    <Footer.Copyright href="#" by="Travel Safari" year={2023} />
                </div>
            </Footer>
        </>
    );
}

export default PageFooter;