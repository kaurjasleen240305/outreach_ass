import "../styles/six.css"
import foot from "../pics/foot.jpg"
function six(){
    return(
       <div class="six">
          <img src={foot} className="foot"></img>
          <div className="down">
            <p className="load">Download the app now.</p>
            <p className="fav">Available on your favorite store.Start your premium experience now</p>
            <div className="subs">
                <p>Most calendars are</p>
                <p>designed for teams.</p>
            </div>
            <div className="buttons">
                       <button>Playstore</button>
                       <button>Appstore</button>
            </div>
          </div>
       </div>
    )
}
export default six;