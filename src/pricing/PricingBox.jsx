import React from "react";
import Box from "./Box.jsx";


const PricingBox = () => {
  const featureBox1 = [
    "Gợi ý lịch chuyển nhà",
    "Các thủ tục hành chính",
    "Đề xuất nhà miễn phí",
    "Theo dõi hoạt động hiện tại",
  ];
  const featureBox2 = [
    "Tự động xuất các giấy tờ cần thiết cho việc chuyển nhà",
    "Đề xuất các dịch vụ chuyển nhà phù hợp",
    "Gợi ý lịch trình chuyển nhà",
    "Các thủ tục hành chính",
    "Đề xuất nhà miễn phí",
    "Theo dõi hoạt động hiện tại",
    "Nhận email thông báo"
  ];
  const featureBox3 = [
    "Ủy quyền và chúng tôi thực hiện thay cho bạn",
    "Tư vấn online đến khi thuê được nhà vừa ý",
    "Tư vấn và đăng ký dịch vụ chuyển đồ vừa ý",
    "Theo dõi tất cả các hoạt động trực tuyến",
    "Các yêu cầu khác nếu có"
  ];
  return (
    <div className="card-deck mb-3 text-center">
      <Box
        price="1000"
        title="Tiết kiệm"
        btnClass="btn-outline-primary"
        btnTitle="ĐĂNG KÝ"
        feature={featureBox1}
      />
      <Box
        price="1500"
        title="Hợp lý"
        btnClass="btn-primary"
        btnTitle="CHUYỂN NGAY"
        feature={featureBox2}
      />
      <Box
        price="100.000"
        title="Rảnh khỏe"
        btnClass="btn-outline-primary"
        btnTitle="NHẬN TƯ VẤN NGAY"
        feature={featureBox3}
      />
    </div>
  );
};

export default PricingBox;
