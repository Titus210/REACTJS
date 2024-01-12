const SecondaryButton = ({ btnText }) => {
    return (
        <div className="button">
            <button className="bg-accent-yellow  text-white text-center py-2 px-4 rounded-md w-10/12 ">
                {btnText}
            </button>
        </div>
    );
}

export default SecondaryButton;