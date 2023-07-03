import "../styles/seven.css"
import logo from "../pics/fpic.jpg"
import tw from "../pics/tw.jpg.png"
import face from "../pics/face.png"
import ins from "../pics/ins.png"

function seven(){
    return(
        <div className="seven">
           <img src={logo} className="lo"></img>
           <div className="signs">
              <img src={tw}></img>
              <img src={face}></img>
              <img src={ins}></img>
               
           </div>
           <p className="stext">Copywright 2020 Bella Onojie.com</p>
        </div>
    )
}
export default seven;