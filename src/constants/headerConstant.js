import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { RiAdvertisementLine } from "react-icons/ri";
import { FiFileText } from "react-icons/fi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

export const suggestForYou = [
    {
        title: "có chơi",
        link: "/tim-kiem/tat-ca?q=có chơi",
    },
    {
        title: "kỳ vọng",
        link: "/tim-kiem/tat-ca?q=kỳ vọng",
    },
    {
        title: "shut down",
        link: "/tim-kiem/tat-ca?q=shut down",
    },
    {
        title: "karaoke",
        link: "/tim-kiem/tat-ca?q=karaoke",
    },
    {
        title: "ngủ ngon",
        link: "/tim-kiem/tat-ca?q=ngủ ngon",
    },
    {
        title: "XONE radio",
        link: "/tim-kiem/tat-ca?q=XONE radio",
    },
];

export const footerData = [
    {
        icon: <AiOutlineInfoCircle size={20} />,
        text: "Giới thiệu",
    },
    {
        icon: <BsTelephone size={16} />,
        text: "Liên hệ",
    },
    {
        icon: <RiAdvertisementLine size={18} />,
        text: "Quảng cáo",
    },
    {
        icon: <FiFileText size={18} />,
        text: "Thoả thuận sử dụng",
    },
    {
        icon: <IoShieldCheckmarkOutline size={18} />,
        text: "Chính sách bảo mật",
    },
];
