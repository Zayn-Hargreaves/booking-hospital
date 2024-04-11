import BookingSchema from "../models/BookingSchema.js"
import Doctor from "../models/DoctorSchema.js"

export const updateDoctor = async (req, res) => {
    const id = req.params.id
    try {
        const updateDoctor = await Doctor.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json({ success: true, message: "Cập nhật thành công", data: updateDoctor })
    } catch (error) {
        res.status(500).json({ success: false, message: "Cập nhật thất bại" })
    }
}
export const deleteDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        await Doctor.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "Xoá thành công" })
    } catch (error) {
        res.status(500).json({ success: false, message: "Xoá thất bại" })
    }
}
export const getSingleDoctor = async (req, res) => {
    const id = req.params.id
    try {
        const doctor = await Doctor.findById(id).populate("reviews").select("-password")
        res.status(200).json({ success: true, message: "Đã tìm thấy bác sĩ", data: doctor })
    } catch (error) {
        res.status(500).json({ success: false, message: "Không tìm thấy" })
    }
}
export const getAllDoctor = async (req, res) => {
    try {
        const { query } = req.query
        let doctors;
        if (query) {
            doctors = await Doctor.find({
                isApproved: "approved",
                $or: [
                    { name: { $regex: query, $options: 'i' } },
                    { specialization: { $regex: query, $options: "i" } }]
            }).select("-password")
        } else {
            const doctors = await Doctor.find({ isApproved: 'approved' }).select("-password");
        }


        const doctor = await Doctor.find({}).select("-password")
        res.status(200).json({ success: true, message: "Đã tìm thấy tài khoản", data: doctor })
    } catch (error) {
        res.status(500).json({ success: false, message: "Không tìm thấy tài khoản" })
    }
}

export const getDoctorProfile = async(res, req) =>{
    const doctorId = req.userId
    try {
        const doctor = await Doctor.findById(doctorId)
        if(!doctor){
            return res.status(404).json({success:false , message:"Bác sĩ này không tồn tại"})
        }
        const {password, ...rest} = doctor._doc
        const appointment = await BookingSchema.find({doctor:doctorId})
        res.status(200).json({success:true, message:"Thông tin hồ sơ đang được tải", data:{...rest, appointment}})
    } catch (error) {
        res.status(500).json({success:false , message:"Có sự cố xảy ra, không thể truy cập được thông tin"})        
    }   
}