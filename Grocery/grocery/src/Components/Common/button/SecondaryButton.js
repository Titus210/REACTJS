const SecondaryButton = ({btnText}) => {
    return (
        <button className="bg-orange-yellow  text-white text-center py-2 px-4 mt-4 rounded-md w-10/12 hover:bg-blue-600">
            {btnText}
        </button>
    );
}

export default SecondaryButton;