import React from 'react';
import icon_fb from '../../Assets/icon_FB.png';
import icon_ig from '../../Assets/icon_IG.png';
import icon_pinterest from '../../Assets/icon_PINTEREST.png';
import icon_twitter from '../../Assets/icon_TWITTER.png';



function Footer() {
    return (
        <div className="footer">
            <div className="info">
                <div className="About-Us">
                    <h2>COMPANY</h2>
                    <ul>
                        <li><a href="/">Abouts us</a></li>
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">Our Goal</a></li>
                        <li><a href="/">Blog</a></li>
                    </ul>
                </div>
                <div className="About-Us">
                    <h2>Community</h2>
                    <ul>
                        <li><a href="/">Our Community</a></li>
                        <li><a href="/">For Teachers</a></li>
                        <li><a href="/">For Students</a></li>
                        <li><a href="/">For Parents</a></li>
                    </ul>
                </div>
                <div className="About-Us">
                    <h2>FAQ & HELP</h2>
                    <ul>
                        <li><a href="/">Ask Us</a></li>
                        <li><a href="/">Ask Our Community</a></li>
                        <li><a href="/">Contact Support</a></li>
                        <li><a href="/">Safety Center</a></li>
                    </ul>
                </div>
            </div>
            <div className="Email-Subscribtion">
                <form action="">
                    <h1>SIGN IN TO OUR NEWSLETTER</h1>
                    <input id="email" type="email" name="email"  placeholder="exemple@stuff.com" />
                    <input id="submit" type="submit" value="SIGN IN" />

                </form>
            </div>
            <div className="Social-Media">
                <ul id="social">
                    <li id= "img_fb"><img src={icon_fb} alt="Instagram" /></li>
                    <li id= "img_ig"><img src={icon_ig} alt="Facebook" /></li>
                    <li id= "img_pint"><img src={icon_pinterest} alt="Pinterest" /></li>
                    <li id= "img_twit"><img src={icon_twitter} alt="Twitter" /></li>
                </ul>

            </div>
            <div className="Copyright">
                <h1><strong>COPYRIGHT ©</strong> 2021<a id = "studer_link" href = "/"> STUDER</a>. ALL RIGHTS RESERVED</h1>
                <span><a href="/"> TERMS OF USE</a></span><span> | </span><span><a href="/">PRIVACY POLICY</a> </span> 
            </div>
        </div>
    )
}

export default Footer