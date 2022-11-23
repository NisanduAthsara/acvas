import React from "react";

export default function Footer(){
    return(
        <div className="footer">
            <div className="upper-footer">
                <div className="useful-links">
                    <h1 className="footer-mini-h">Useful Links</h1>
                    <a className="useful-links-inner" href="#">
                        <i class="fa-solid fa-face-smile footer-icons"></i>
                        <span className="useful-links-inner-span">About</span>
                    </a>
                    <a className="useful-links-inner" href="#">
                        <i class="fa-solid fa-face-smile footer-icons"></i>
                        <span className="useful-links-inner-span">About</span>
                    </a>
                    <a className="useful-links-inner" href="#">
                        <i class="fa-solid fa-face-smile footer-icons"></i>
                        <span className="useful-links-inner-span">About</span>
                    </a>
                </div>
                <div className="socialmedia-links">
                    <h1 className="footer-mini-h">Social Medias</h1>
                    <a className="socialmedia-links-inner" href="#">
                        <i class="fa-solid fa-face-smile footer-icons"></i>
                        <span className="socialmedia-links-inner-span">About</span>
                    </a>
                    <a className="socialmedia-links-inner" href="#">
                        <i class="fa-solid fa-face-smile footer-icons"></i>
                        <span className="socialmedia-links-inner-span">About</span>
                    </a>
                    <a className="socialmedia-links-inner" href="#">
                        <i class="fa-solid fa-face-smile footer-icons"></i>
                        <span className="socialmedia-links-inner-span">About</span>
                    </a>
                </div>
                <div className="footer-description">
                    <h1 className="footer-mini-h">ACVAS</h1>
                    <p className="footer-description-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="footer-line-break"></div>
            <div className="below-footer">
                <p className="below-footer-p">Copyright @ ACVAS</p>
            </div>
        </div>
    )
}