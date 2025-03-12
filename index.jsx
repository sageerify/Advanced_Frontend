
// import Heading from "../heading";
// import { Row, Col } from "antd";
// import Image from "../image";
// import { Typography } from "antd";
// const { Link } = Typography;
// const Footer = () => {
//   return (
//     <>
      
//       <h4 style={{ textAlign: "center" }}>Recently visited profiles:</h4>
//       <Row gutter={[16, 8]}>
//         <Col style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//           <Image
          
//             width={20}
//             height={20}
//             imageUrl="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//             style={{ borderRadius: "50%"}} // Makes the image circular
//           />
//           <Link href="#">Rick Sanchez</Link>
          
//         </Col>
//       </Row>
     
     
//     </>
//   );
// };

// export default Footer;

import { Row, Col, Typography } from "antd";
import Image from "../image";

const { Link } = Typography;

const Footer = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px 0" }}>
      <h4>Recently Visited Profiles:</h4>
      <Row justify="center">
        <Col style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Image
            width={40} // Increased size
            height={40}
            imageUrl="data:image/png;base64,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"
            style={{ borderRadius: "50%" }} // Circular image
          />
          <Link href="#" style={{ fontSize: "16px", fontWeight: "500" }}>
            Rick Sanchez
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
