import EndPageImg from "../../../public/assets/end_page_img.png";
import { TbWorld } from "react-icons/tb";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import "./endPage.css"

export default function EndPage() {
  return (
    <div className="page end_page">
      <h3 className="title1">
        Let's get the ball rolling and build something outstanding!
      </h3>
      <p className="title2">
        We look forward to empowering your business goals and becoming a partner
        to your success.
      </p>
      <img src={EndPageImg} alt="" className="end_page_img" />
      <div className="contact_details">
        <h2 className="contact_title">Please reach us at:</h2>
        <div>
          <p className="detail">
            <TbWorld /> theantopolis.com
          </p>
          <p className="detail">
            <MdEmail /> info@theantopolis.com
          </p>
          <p className="detail">
            <MdPhoneInTalk /> +880–1322–447011
          </p>
        </div>
      </div>
    </div>
  );
}
