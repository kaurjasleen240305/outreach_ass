import image from "../pics/fpic.jpg"
import "../styles/first.css"
import horse from "../pics/horse.png"
function First(){
    console.log(image);
    return(
        <nav className="navbar">
           <img src={image} height="100px" width="250px"></img>
           <ul className="navlist">
               <li><a href="/">Home</a></li>
               <li><a href="/">Product</a></li>
               <li><a href="/">Faq</a></li>
               <li><a href="/">Contact</a></li>
           </ul>
           <img src={horse} className="horse"></img>
        </nav>
    )
}
export default First;