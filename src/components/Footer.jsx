// definisco il Footer

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <ul className="list-footer-top">
                    <li><h3>DC COMICS</h3></li>
                    <li>Characters</li>
                    <li>Comics</li>
                    <li>Movies</li>
                    <li>Tv</li>
                    <li>Games</li>
                    <li>Videos</li>
                    <li>News</li>
                    <li><h3>SHOP</h3></li>
                    <li>Shop dc</li>
                    <li>Shop dc collectibles</li>
                </ul>
                <ul className="list-footer-top">
                    <li><h3>DC</h3></li>
                    <li>Terms Of Use</li>
                    <li>Privacy policy new</li>
                    <li>Ad Choices</li>
                    <li>Adversiting </li>
                    <li>Jobs</li>
                    <li>Subscriptions</li>
                    <li>Talent Workshops</li>
                    <li>CPSC Certificates</li>
                    <li>Ratings</li>
                    <li>Shop help</li>
                    <li>Contact Us</li>
                </ul>
                <ul className="list-footer-top">
                    <li><h3>SITES</h3></li>
                    <li>DC</li>
                    <li>MAD Magazine</li>
                    <li>DC kids</li>
                    <li>DC Universe </li>
                    <li>DC Power Visa</li>
                </ul>
                <div className="container-img-footer">
                    <img id="logo-footer" src="./img/dc-logo-bg.png" alt="" />
                </div>


            </div>

            <div className="footer-bottom">
                <ul>
                    <li><button>SING-UP NOW!</button></li>
                    <li><ul>
                        <li id="color-blu">FOLLOW US</li>
                        <li><img src="./img/footer-facebook.png" alt="" /></li>
                        <li><img src="./img/footer-twitter.png" alt="" /></li>
                        <li><img src="./img/footer-youtube.png" alt="" /></li>
                        <li><img src="./img/footer-pinterest.png" alt="" /></li>
                        <li><img src="./img/footer-periscope.png" alt="" /></li>
                    </ul>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
