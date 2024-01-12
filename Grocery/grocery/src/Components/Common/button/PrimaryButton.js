const PrimaryButton = ({btnText}) => {
    return (
        <div className="button">
        <button className="bg-primary-green text-white py-2 px-4 rounded-md  text-xl font-bold hover:bg-accent-orange">
            {btnText}
        </button>
        </div>
    );
}

export default PrimaryButton;