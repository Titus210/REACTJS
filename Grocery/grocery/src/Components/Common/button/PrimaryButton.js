const PrimaryButton = ({btnText}) => {
    return (
        <button className="bg-primary-green text-white py-2 px-4 mt-4 rounded-md w-10/12 hover:bg-orange">
            {btnText}
        </button>
    );
}

export default PrimaryButton;