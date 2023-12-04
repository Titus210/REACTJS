import { Link } from 'react-router-dom';

const SectionHeading = ({ sctionHeading }) => {

    return (
        <>
            <div className="flex justify-between px-4">
                <h3 className="text-primary-green text-2xl">
                    {sctionHeading}
                </h3>

                <p className="underline text-primary-blue">
                    <Link to='/shop' >
                        see all
                    </Link>
                </p>
            </div>
        </>
    );
}

export default SectionHeading;