import "../css/Heading.css";
import { useNavigate } from "react-router-dom";

export default function Heading({visible,goToShop,authenticated}){

let history=useNavigate();

return <div className="Heading">
       <div className="Heading_text">
         <h1 style={{visibility:visible ? "visible" : "hidden"}}>Ignite Your Style with Unique Lighters</h1>
        <p>Discover the Coolest Designed Lighters from Around the World and Elevate Your Everyday Moments</p>
        <button onClick={()=>{
            if(authenticated===true){
                history('/Shop')
            }else{
                history('/signup')
            }
        }}>buy now</button>
        </div>
        <div className="photo_grid">
        <img src="https://i.pinimg.com/564x/98/e8/d4/98e8d4f9255b787357bdb92f291179e7.jpg" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_GOEXtloRfcMwVlvmUzuR9IHQYgtntzhuqXgNteTm_WSMklYO" />
        <img src="https://res.cloudinary.com/dldonwgcr/image/upload/v1692195311/heading3_kge8fe.png" />
        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS5H6_UI50gSGtEBVg7_NZgPitYG-1exuRBBfiOEspxc14rL-8f"/>
        </div>
    </div>
}