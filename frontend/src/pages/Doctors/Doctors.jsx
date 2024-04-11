import DoctorCard from "./DoctorCard"
import { doctors } from "../../assets/data/doctors"
import Testimonial from "../../components/Testimonial/Testimonial"

const Doctors = () => {
    return <>
        <section className="bg-[#fff9ea]">
            <div className="container text-center">
                <h2 className="heading">Tìm bác sĩ</h2>
                <div className="max-w[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
                    <input type="search" className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor" placeholder="Tìm bác sĩ" />
                    <button className="btn mt-0 rounded-[0px] rounded-r-md">Tìm kiếm</button>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {doctors.map((doctor) => <DoctorCard doctor={doctor} key={doctor.id} />)}
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="xl:w-[470px] mx-auto">
                    <div className="heading text-center">Những bệnh nhân của chúng tôi nói gì</div>
                    <p className="text__para text-center">Chăm sóc sức khỏe đẳng cấp thế giới cho mọi người. Hệ thống chăm sóc sức khỏe của chúng tôi mang đến sự chăm sóc y tế chuyên nghiệp và không thể sánh bằng.</p>
                </div>
                <Testimonial />
            </div>
        </section>
    </>
}
export default Doctors