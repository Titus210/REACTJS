import { AiOutlineMail, AiOutlinePhone, AiOutlineShoppingCart, AiOutlineTwitter, AiOutlineHeart } from 'react-icons/ai';
import { RiAccountCircleFill, RiFacebookCircleFill, RiLinkedinFill } from 'react-icons/ri';

export const PhoneIcon = () => {
    return (
        <AiOutlinePhone />
    );
}


export const EmailIcon = () => {
    return (
        <AiOutlineMail />
    );
}



export const ShoppingCartIcon = () => {
    return (
        <AiOutlineShoppingCart />
    )
}


export const AccountIcon = () => {
    return (
        <RiAccountCircleFill />
    )
}


export const FacebookIcon = () => {
    return (
        <>
            <RiFacebookCircleFill />
        </>
    )
}


export const TwitterIcon = () => {
    return (
        <>
            <AiOutlineTwitter />
        </>
    )
}

export const LinkedinIcon = () => {
    return (
        <>
            <RiLinkedinFill />
        </>
    )
}

export const HeartIcons = () => {
    return (
        <>
            <AiOutlineHeart />
        </>
    )
}