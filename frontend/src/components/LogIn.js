//Import of Tools
//import Home from './Home'
import React, {useState} from "react";
import Weather from "../Weather";

//React Function 
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState("");

    //Handle Events
    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    };
    const handleLoggedIn = (event) => {
        event.preventDefault();
        if (email === "kelly@gmail.com" && password === "1234") 
        setLoggedIn(true);
    };
    function handleLogOut (event) {
        event.preventDefault();
        setLoggedIn(false);
    };

    //Return of the Above
    return (
        <div>
            {loggedIn ? (
                 <>
                 <p>Welcome!</p>
                <Weather />
                <button onClick={handleLogOut}>Logout</button>
               </>

            ) : (
                 // Search:<input></input><br></br>
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
                   <button onClick={handleLoggedIn}> LogIn</button>
                 </form>


                </>
            )}
        </div>
    );
}

export default Login;