import ExtraordinaryImg from "../../../public/assets/extraordinary_img.png";
import "./extraordinary.css"

export default function Extraordinary() {
    return(
        <div className="page extraordinary">
          <h3 className="title1">Ready to build something</h3>
          <h2 className="title2">Extraordinary?</h2>
          <img src={ExtraordinaryImg} alt="" className="extraordinary_img" />
          <h2 className="title3">Antopolis is here to help you</h2>
          <h2 className="title4">Make your dream app a reality</h2>
        </div>
    )
}