import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail, HiLockClosed } from "react-icons/hi";
import { CgLock } from "react-icons/cg";
import './login.css'

const Login = () => {
    return (
        <div className='login'>
            <div className='loginForm'>
                <div className='welcomeTextContainer'>
                    <p className='welcomeTextBig'>Welcome back!</p>
                    {/* <p className='welcomeTextSmall'>Welcome back! Please enter your details.</p> */}
                </div>
                <div className='googleSignInBtn'>
                    <p>Sign in with Google</p>
                    <FcGoogle  className='googleLogo'/>
                </div>
                <p className="loginOrText">Or</p>
                <p className='loginText'>Login with email or phone number</p>
                <form>
                    <div class="container">
                        <label className='formItem' for="uname"><b>Email</b></label>
                        <div className='formItem emailInputContainer'>
                            <HiOutlineMail className='formIcons'/>
                            <input type="text" placeholder="Enter your Email Address" name="uname" required/>
                        </div>

                        <label className='formItem' for="psw"><b>Password</b></label>
                        <div className='formItem passwordInputContainer'>
                            <CgLock className='formIcons'/>
                            <input type="password" placeholder="Enter your password" name="psw" required/>
                        </div>
                        
                            
                        <button type="submit">Login</button>
                        <label>
                        <input type="checkbox" checked="checked" name="remember"/> Remember me
                        </label>
                    </div>
                </form>
            </div>
            <div className='loginImageContainer'>
                PICTURE GOES HERE
            </div>
        </div>
    )
}

export default Login
