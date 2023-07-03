import "../styles/third.css"
import p1 from "../pics/p1.png"

function third(){
   return(
    <div className="third">
       <img src={p1} className="p1"></img>
       <div className="ttext">
          <p className="orange">Create an account</p>
          <p className="bold">
            <p>Create/login to an existing</p>
            <p>account to get started</p>
          </p>
          <p className="normal">
            <p>An account is created with your email</p>
            <p>and a desired password</p>
          </p>
       </div>
    </div>
   )
}
export default third;