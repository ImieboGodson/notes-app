import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { CgLock } from "react-icons/cg";
import { Link } from "react-router-dom";
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
                <div className='loginTextContainer'>
                    <p className='loginText'>Login with email or phone number</p>
                </div>
                <form>
                    <div class="container">
                        <label className='formItem formLabel' for="uname">Email</label>
                        <div className='formItem formBox emailInputContainer'>
                            <HiOutlineMail className='formIcons'/>
                            <input className='formBoxInput' type="text" placeholder="Enter your Email Address" name="uname" required/>
                        </div>

                        <label className='formItem formLabel' for="psw">Password</label>
                        <div className='formItem formBox passwordInputContainer'>
                            <CgLock className='formIcons'/>
                            <input className='formBoxInput' type="password" placeholder="Enter your password" name="psw" required/>
                        </div>
                        
                        <label className='rememberMeLabel'>
                        <input type="checkbox" checked="checked" name="remember"/> Remember me
                        </label>
                            
                        <button className='loginBtn' type="submit">Log In</button>
                        
                    </div>
                </form>
                <div className='bottomInfoTextContainer'>
                    <p className='bottomInfoText'>Don't have an account? <Link className="linkText" style={{textDecoration: 'none', fontWeight: '600', color: '#000'}} to={'/signup'}>Sign Up</Link></p>
                    
                </div>
            </div>
            <div className='loginImageContainer'>
                <img className='loginImage' src={process.env.PUBLIC_URL + '/assets/images/notes-signin-image.jpg'} alt='notes img'/>
            </div>
        </div>
    )
}

export default Login
