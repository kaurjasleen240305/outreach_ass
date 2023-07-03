import "../styles/second.css"
import food from "../pics/food.jpg"
import phone from "../pics/phone.png"

function second(){
    return(
        <div class="second">
            <img src={food} className="food"></img>
            <div className="text">
                  <p className="one">Food app</p>
                  <p className="two">Why stay hungry when </p>
                  <p className="two">you can order from Bella Onojie</p>
                  <p className="three">Download the bella onojie food app now on</p>
                  <div className="buttons">
                       <button>Playstore</button>
                       <button>Appstore</button>
                  </div>
            </div>
            <div className="phones">
              <img src={phone} className="iphone"></img>
              <div className="ruler">
             <p className="ptext">How the app works</p>
            </div>
            

            </div>
        </div>
    )
}
export default second;