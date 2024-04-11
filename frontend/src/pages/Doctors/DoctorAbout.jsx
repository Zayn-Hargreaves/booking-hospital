import { formateDate } from "../../utils/formateDate";
const DoctorAbout = () => {
    return (
        <div>
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                Thông tin về
                <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                    Dr. Vũ Anh Quân
                </span>
            </h3>
            <p className="text__para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quasi, architecto mollitia harum iusto, nihil, incidunt tempore ducimus labore nesciunt dicta. Blanditiis, accusamus nemo recusandae tempore sed quia aspernatur rerum.
            </p>
            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Học vấn</h3>
                <ul className="pt-4 md:p-5">
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                        <div>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">{formateDate("12-09-2008")}-{formateDate("03-06-2013")}</span>
                            <p className="text-[16px] leading-6 font-medium text-textColor">tốt nghiệp tiến sĩ trong lĩnh vực phẫu thuật</p>
                        </div>
                        <p className="text-[16px] leading-6 font-medium text-textColor">Đại học y Hà Nội, Hà Nội</p>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px}">
                        <div>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">{formateDate("12-8-2010")}-{formateDate("03-06-2016")}</span>
                            <p className="text-[16px] leading-6 font-medium text-textColor">tốt nghiệp tiến sĩ trong lĩnh vực phẫu thuật</p>
                        </div>
                        <p className="text-[16px] leading-6 font-medium text-textColor">Học viện quân y, Hà Nội</p>
                    </li>
                </ul>

            </div>
            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                    Kinh nghiệm làm việc
                </h3>
                <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                    <li className="p-4 rounded bg-[#fff9ea]">
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                            {formateDate("07-07-2012")} - {formateDate("12-12-2015")}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                            Bác sĩ phẫu thuật chính
                        </p>
                        <p className="text-[14px] leading-5 font-medium text-textColor">
                            Bệnh viện đa khoa Thu Cúc
                        </p>
                    </li>
                    <li className="p-4 rounded bg-[#fff9ea]">
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                            {formateDate("07-07-2012")} - {formateDate("12-12-2015")}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                            Bác sĩ phẫu thuật chính
                        </p>
                        <p className="text-[14px] leading-5 font-medium text-textColor">
                            Bệnh viện đa khoa Hồng Ngọc
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default DoctorAbout