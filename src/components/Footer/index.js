import React from "react";
import gpcaLogo from "../../assets/small/Memberships/GPCA_Logo_4c.jpg";
import npmaLogo from "../../assets/small/Memberships/NPMA_RGB.jpg";
import scpcaLogo from "../../assets/small/Memberships/SCPCA-logo-header85px.png";

function Footer(props) {
    return (
        <footer className="space-between flex-row px-1 my-2">
            <div className="card flex-row footer-img space-between">
                <a href="https://www.gpca.org/" target="_blank">
                    <img src={gpcaLogo} width="100px" height="80px" viewBox="0 0 24 24">
                    </img>
                </a>
                <a href="https://npmapestworld.org/" target="_blank">
                    <img src={npmaLogo} width="100px" height="80px" viewBox="0 0 24 24">
                    </img>
                </a>
                <a href="https://scpca.net/" target="_blank">
                    <img src={scpcaLogo} width="100px" height="80px" viewBox="0 0 24 24">
                    </img>
                </a>
            </div>
            <div className="footer-font card flex-row flex-end">

               Commerce Pest Services, Inc.<br/>
                PO Box 292510<br/>
                Columbia, SC 29229<br/><br/>
                Phone: 1-866-3902-1572<br/>
                Local: 803-760-6688

            </div>
        </footer>
    )
}

export default Footer;