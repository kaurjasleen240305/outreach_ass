import "../styles/five.css"
import p3 from "../pics/p3.png"
function five(){
  return (
    <div className="five">
       <img src={p3} className="p3"></img>
       <div className="ttext">
          <p className="orange">Checkout</p>
          <p className="bold">
            <p>When you done check out</p>
            <p>and get it delivered</p>
          </p>
          <p className="normal">
            <p>When you done check out and get it</p>
            <p>delivered with ease.</p>
          </p>
       </div>
    </div>
  )
}
export default five;