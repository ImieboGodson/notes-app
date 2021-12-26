import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { CgLock } from "react-icons/cg";
import './signup.css'
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className='signup'>
            <div className='signupForm'>
                <div className='welcomeTextContainer shortTextContainer'>
                    {/* <p className='welcomeTextBig'>Welcome back!</p> */}
                    <p className='welcomeTextSmall'>Welcome to .Notes, your minimalist notes app.</p>
                </div>
                <div className='googleSignInBtn'>
                    <p>Sign in with Google</p>
                    <FcGoogle  className='googleLogo'/>
                </div>
                <p className="loginOrText">Or</p>
                <form>
                    <div class="container">
                        <label className='formItem formLabel' for="name">Name *</label>
                        <div className='formNameBoxContainer'>
                            <div className='formItem formBox signupFormBox firstNameInputContainer'>
                                <input className='formBoxInput firstNameFormBoxInput formNameBoxInput' type="text" placeholder="First Name" name="name" required/>
                            </div>

                            <div className='formItem formBox signupFormBox lastNameInputContainer'>
                                <input className='formBoxInput formNameBoxInput' type="text" placeholder="Last Name" name="name" required/>
                            </div>
                        </div>
                        

                        <label className='formItem formLabel' for="email">Email *</label>
                        <div className='formItem formBox'>
                            <HiOutlineMail className='formIcons'/>
                            <input className='formBoxInput' type="text" placeholder="Enter your Email Address" name="email" required/>
                        </div>

                        <label className='formItem formLabel' for="psw">Password *</label>
                        <div className='formItem formBox passwordInputContainer'>
                            <CgLock className='formIcons'/>
                            <input className='formBoxInput' type="password" placeholder="Enter your password" name="psw" required/>
                        </div>
                            
                        <button className='loginBtn' type="submit">Get Started</button>
                        
                    </div>
                </form>
                <div className='bottomInfoTextContainer'>
                    <p className='bottomInfoText'>Already have an account? <Link to={'/login'} style={{textDecoration: 'none', fontWeight: '600', color: '#000'}}>Log In</Link></p>
                    
                </div>
            </div>
            <div className='loginImageContainer'>
                PICTURE GOES HERE
            </div>
        </div>
    )
}

export default Signup
