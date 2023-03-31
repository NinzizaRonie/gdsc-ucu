import React from 'react';
import '../../css/style.css'
import '../../css/style.css'
import { Link } from "react-router-dom";


const Login = () => {


    return (

        <section class="sign-in">
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src="imgs/signin-image.jpg" alt="sing up image" /></figure>
                       
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Login</h2>
                        <form method="POST" class="register-form" id="login-form">
                            <div class="form-group">
                                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <select type="text" class="">
                                    <option value="Club Memeber" selected>Choose your Role</option>
                                    <option value="Club Memeber">Club Member</option>
                                    <option value="Club Lead">Club Lead</option>
                                    <option value="Event Coordinator">Event Coordinator</option>
                                    <option value="Marketing Lead">Marketing Lead</option>
                                    <option value="Technical Lead">Technical Lead</option>
                                    <option value="Mentorship Lead">Mentorship Lead</option>
                                    <option value="Design Lead">Design Lead</option>
                                    <option value="Outreach Lead">Outreach Lead</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="your_name" id="your_name" placeholder="Your Name"/>
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Password"/>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                                <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="form-submit" value="Log in"/>
                                <Link to="../signup" class="text-center">Create an account</Link>
                            </div>
                           
                        </form>
                        {/* <div class="social-login">
                            <span class="social-label">Or login with</span>
                            <ul class="socials">
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Login;