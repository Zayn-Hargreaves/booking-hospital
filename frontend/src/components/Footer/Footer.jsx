import React from "react";
import {Link} from "react-router-dom"
import logo from "../../assets/images/logo.png"
import {RiLinkedinFill} from "react-icons/ri"
import {AiFillYoutube,AiFillFacebook,AiFillGithub} from "react-icons/ai"
const socialLinks =[
    {
        path:"",
        icon: <AiFillYoutube className="group-hover:text-white w-4 h-5"/>
    },
    {
        path:"",
        icon: <AiFillGithub className="group-hover:text-white w-4 h-5"/>
    },
    {
        path:"",
        icon: <AiFillFacebook className="group-hover:text-white w-4 h-5"/>
    }
]
const quickLinks01=[
    {
        path:"/home",
        display:"Trang chủ"
    },
    {
        path:"/",
        display:"About Us"
    },
    {
        path:"/",
        display:"Blog"
    }
]
const quickLinks02=[
    {
        path:"/doctors",
        display:"Tìm bác sĩ"
    },
    {
        path:"/",
        display:"Đặt lịch khám bệnh"
    },
    {
        path:"/",
        display:"Tìm cơ sở điều trị"
    },
    {
        path:"",
        display:"Lấy ý kiến"
    }
]
const quickLinks03=[
        {
            path:"/",
            display:"Khuyên góp"
        },
        {
            path:"/contact",
            display:"Liên hệ"
        }
    ]

const Footer =() =>{
    const year = new Date().getFullYear();

    return (
        <footer className="pb-6 pt-10">
            <div className="container">
                <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
                    <div>
                        <img src={logo} alt="" />
                        <p className="text-[16px] leading-7 font-[400] text-textColor">Copyright @ {year} developed by Zayn_Hargreaves_V.A.Q all right reserved.</p>
                        <div className="flex items-center gap-3 mt-4">
                            {socialLinks.map((link, index) => <Link to={link.path} key={index} className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none">{link.icon}</Link>)}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                            Đường dẫn nhanh
                        </h2>
                        <ul>
                            {quickLinks01.map((item,index)=>(
                                <li key={index} className="mb-4">
                                    <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                            Tôi muốn
                        </h2>
                        <ul>
                            {quickLinks02.map((item,index)=>(
                                <li key={index} className="mb-4">
                                    <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                            Hỗ trợ
                        </h2>
                        <ul>
                            {quickLinks03.map((item,index)=>(
                                <li key={index} className="mb-4">
                                    <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;