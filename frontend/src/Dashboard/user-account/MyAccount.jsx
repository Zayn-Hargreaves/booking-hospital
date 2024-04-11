import React, { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";
import userImg from "../../assets/images/doctor-img01.png"
import MyBookings from "./MyBooking";
import Profiles from "./Profiles";
import useGetProfile from "../../hooks/useFetchData.js"
import {BASE_URL} from "../../config.js"
const MyAccount = () => {
    const { dispatch } = useContext(authContext)
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }
    const {data:userData, loading, error} = useGetProfile(`${BASE_URL}/users/profile/me`)
    console.log(error)
    console.log(userData, 'userdata')
    const [tab, setTab] = useState('bookings')  
    return (
        <section>
            <div className="max-w-[1170px] px5 mx-auto">
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="pb-[50px] px-[30px] round-md">
                        <div className="flex items-center justify-center ">
                            <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                                <img src={userImg} alt="" className="w-full h-full rounded-full" />
                            </figure>
                        </div>
                        <div className="text-center mt-4">
                            <h3 className="text[18px] leading-[30px] text-headingColor font-bold">
                                Nguyễn van a
                            </h3>
                            <p className="text-textColor text-[15px] leading-6 font-medium">
                                example@gmail.com
                            </p>
                            <p className="text-textColor text-[15px] leading-6 font-medium">
                                Nhóm máu:{" "}
                                <span className="ml-2 text-headingColor text-[22px] leading-8">
                                    AB
                                </span>
                            </p>
                        </div>
                        <div className="mt-[50px] md:mt-[100px]">
                            <button onClick={handleLogout} className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white">Đăng xuất</button>
                            <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">Xoá tài khoản</button>
                        </div>
                    </div>
                    <div className="md:col-span-2 md:px-[30px]">
                        <div>
                            <button onClick={() => setTab('bookings')} className={`${tab === "bookings" && "bg-primaryColor text-white font-normal"} text-[16px] p-2 mr-5 px-5 rounded-md text-headingColor font-semibold leading-7 border border-solid border-primaryColor`}>Lịch hẹn của tôi</button>
                            <button onClick={() => setTab('settings')} className={`${tab === "settings" && "bg-primaryColor text-white font-normal"} text-[16px] p-2 mr-5 px-5 rounded-md text-headingColor font-semibold leading-7 border border-solid border-primaryColor`}>Cài đặt thông tin cá nhân</button>

                        </div>
                        {
                            tab === "bookings" && <MyBookings />
                        }
                        {
                            tab === "settings" && <Profiles />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MyAccount;