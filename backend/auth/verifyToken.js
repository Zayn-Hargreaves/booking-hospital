import jwt from"jsonwebtoken";
import Doctor from"../models/DoctorSchema.js";
import User from"../models/UserSchema.js"

export const authenticate = async (req, res, next) => {
  // Lấy token từ header
  const authToken = req.headers.authorization;
  if (!authToken || !authToken.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ success: false, message: "Không có mã thông báo, truy cập bị từ chối!" });
  }
  try {
    const token = authToken.split(" ")[1];
    const decode = jwt.verify(token,process.env.JWT_SECRET_KEY)
    req.userId = decode.userId
    req.role = decode.role
    // Xử lý mã thông báo ở đây (ví dụ: giải mã, xác thực người dùng, lấy thông tin người dùng)
    next(); // Chuyển tiếp cho middleware tiếp theo nếu mã thông báo hợp lệ
  } catch (error) {
    if(error.name = "TokenExpiredError"){
        return res
        .status(401)
        .json({ success: false, message: "mã thông báo đã hết hạn!" });     
    }
    return res
      .status(401)
      .json({ success: false, message: "Truy cập bị từ chối do mã thông báo không hợp lệ!" });
    // Xử lý lỗi nếu có
    // Có thể trả về lỗi 401 Unauthorized nếu xử lý mã thông báo không thành công
  }
};

export const restrict = roles => async(req, res, next)=>{
    const userId = req.userId
    let user;
    const patient = await User.findById(userId)
    const doctor = await Doctor.findById(userId)
    if(patient){
        user=patient;
    }else if(doctor){
        user=doctor
    }
    console.log(user)
    if(!roles.includes(user.role)){
        return res.status(401).json({success:false, message:"Bạn không được uỷ quyền"})
    }
    next();
}