import "../styles/fourth.css";
import p2 from "../pics/p2.png";
function fourth(){
    return(
        <div className="fourth">
          <div className="ftext">
             <p className="orange">Explore varieties</p>
             <p className="bold">
                <p>Shop for your favorites</p>
                <p>meal as e dey hot.</p>
             </p>
             <p className="normal">
               <p>Shop for your favorite meals or drinks</p>
               <p>and enjoy while doing it.</p>
             </p>
         </div>
         <img src={p2} className="p2"></img>
        </div>
    )
}
export default fourth;