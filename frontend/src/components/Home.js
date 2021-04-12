//Import of Tools
//import Weather from '../Weather.js'
import LogIn from "./components/LogIn";
import React, {useState} from "react";

//React Function 
function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Loggedin, setLoggedIn] = useState("false");

    //Handle Events
    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    };
    const handleLogIn = (event) => {
        event.preventDefault();
        if (email === "kelly@gmail.com" && password === "1234") 
        setLoggedIn(false);
    };
    const handleLogOut = (event) => {
        <LogIn />
        event.preventDefault();
        setLoggedIn(false);
    };

    //Return of the Above
    return (
        <div>
            {Loggedin === false ? (
                 <>
                 <form id="login-form">
                   <label>Email:</label>
                   <input type=" email" value={email} 
                   onChange={handleEmailInput} />
       
                   <label>Password:</label>
                   <input
                     type="password"
                     value={password}
                     onChange={handlePasswordInput}
                   />
                   <br/><br/>
                   <h4>Gender</h4>
                   <label>Male</label>
                   <input type="radio" name="gender" value="choice-1" />
                   <label>Female</label>
                   <input type="radio" name="gender" value="choice-2" />
                   <label>Others</label>
                   <input type="radio" name="gender" value="choice-3" />
                   <br></br><br/>
                   <label for="Month">Birth Month</label>
                   <select name="Month">
                   <option value="0" selected disabled>Month</option>
                    <option value="jan">January</option>
                    <option value="feb">February</option>
                    <option value="mar">March</option>
                    <option value="apr">April</option>
                    <option value="may">May</option>
                    <option value="jun">June</option>
                    <option value="jul">July</option>
                    <option value="aug">August</option>
                    <option value="sep">September</option>
                    <option value="oct">October</option>
                    <option value="nov">November</option>
                    <option value="dec">December</option>
                   </select>
                   <br></br><br></br>
                   <label>I agree to all terms and conditions</label>
                   <input type="checkbox" name="agree" />
                   <br></br>
                   <button onClick={handleLogIn}> LogIn</button>
                 </form>
               </>

            ) : (
                 // Search:<input></input><br></br>
                <>
                <p>Welcome!</p>
                <LogIn />
                <button onClick={handleLogOut}>Logout</button>
                </>
            )}
        </div>
    );
}

export default Home;