import React, { useState } from 'react'
import { FormattedMessage } from "react-intl"
import './Footer.scss'

function Footer() {

    const [footerMenu1, setFooterMenu1] = useState(false);
    const [footerMenu2, setFooterMenu2] = useState(false);
    const [footerMenu3, setFooterMenu3] = useState(false);
    const [footerMenu4, setFooterMenu4] = useState(false);

    return (
        <div className="bg-blue">
            <div id="accordionFooter" className="accordion flex-container maindiv">
                <div className="contentfooter">
                    <div onClick={() => { setFooterMenu1(!footerMenu1); setFooterMenu2(false); setFooterMenu3(false); setFooterMenu4(false) }} className="flex-container flex-space-between" data-toggle="collapse" href="#footerContent1" aria-expanded="false" aria-controls="footerContent1">
                        <h6 className="white-txt mobile"><FormattedMessage id="footer.customerservice" /></h6>
                        {!footerMenu1 && <i className="white-txt mobile fa fa-angle-down" aria-hidden="true"></i>}
                        {footerMenu1 && <i className="white-txt mobile fa fa-angle-up" aria-hidden="true"></i>}
                    </div>
                    <h6 className="white-txt desktop"><FormattedMessage id="footer.customerservice" /></h6>
                    <div id="footerContent1" data-parent="#accordionFooter">
                        <a href="#" className="mainfooter"><FormattedMessage id="footer.content.paymentoptions" /></a><br></br>
                        <a href="#" className="mainfooter"><FormattedMessage id="footer.content.trackorder" /></a><br></br>
                        <a href="#" className="mainfooter"><FormattedMessage id="footer.content.findstore" /></a>
                    </div>
                </div>
                <div className="contentfooter">
                    <div onClick={() => { setFooterMenu2(!footerMenu2); setFooterMenu1(false); setFooterMenu3(false); setFooterMenu4(false) }} className="flex-container flex-space-between" data-toggle="collapse" href="#footerContent2" aria-expanded="false" aria-controls="footerContent2">
                        <h6 className="white-txt mobile"><FormattedMessage id="footer.contactus" /></h6>
                        {!footerMenu2 && <i className="white-txt mobile fa fa-angle-down" aria-hidden="true"></i>}
                        {footerMenu2 && <i className="white-txt mobile fa fa-angle-up" aria-hidden="true"></i>}
                    </div>
                    <h6 className="white-txt desktop"><FormattedMessage id="footer.contactus" /></h6>
                    <div id="footerContent2" data-parent="#accordionFooter">
                        <div className="mainfooter contactinfo"><FormattedMessage id="footer.content.contactnumber" /></div>
                        <div className="mainfooter contactinfo"> heenajoshi931@gmail.com </div>
                    </div>
                </div>
                <div className="contentfooter">
                    <div onClick={() => { setFooterMenu3(!footerMenu3); setFooterMenu1(false); setFooterMenu2(false); setFooterMenu4(false) }} className="flex-container flex-space-between" data-toggle="collapse" href="#footerContent3" aria-expanded="false" aria-controls="footerContent3">
                        <h6 className="white-txt mobile"><FormattedMessage id="footer.policies" /></h6>
                        {!footerMenu3 && <i className="white-txt mobile fa fa-angle-down" aria-hidden="true"></i>}
                        {footerMenu3 && <i className="white-txt mobile fa fa-angle-up" aria-hidden="true"></i>}
                    </div>
                    <h6 className="white-txt desktop"><FormattedMessage id="footer.policies" /></h6>
                    <div id="footerContent3" data-parent="#accordionFooter">
                        <a href="#" className="mainfooter"><FormattedMessage id="footer.content.returnsexchanges" /></a><br></br>
                        <a href="#" className="mainfooter"><FormattedMessage id="footer.content.cancellation" /></a><br></br>
                        <a href="#" className="mainfooter"><FormattedMessage id="footer.content.shipping" /></a><br></br>
                        <a href="#" className="mainfooter"><FormattedMessage id="footer.content.deliveryinformation" /></a>
                    </div>
                </div>
                <div className="contentfooter">
                    <div onClick={() => { setFooterMenu4(!footerMenu4); setFooterMenu1(false); setFooterMenu2(false); setFooterMenu3(false) }} className="flex-container flex-space-between" data-toggle="collapse" href="#footerContent4" aria-expanded="false" aria-controls="footerContent4">
                        <h6 className="white-txt mobile"><FormattedMessage id="footer.about" /> <span className="logofont">followme</span></h6>
                        {!footerMenu4 && <i className="white-txt mobile fa fa-angle-down" aria-hidden="true"></i>}
                        {footerMenu4 && <i className="white-txt mobile fa fa-angle-up" aria-hidden="true"></i>}
                    </div>
                    <h6 className="white-txt desktop"><FormattedMessage id="footer.about" /> <span className="logofont">followme</span></h6>
                    <div id="footerContent4" data-parent="#accordionFooter">
                        <a href="#" className="mainfooter"><FormattedMessage id="footer.content.aboutus" /></a><br></br>
                        <a href="#" className="mainfooter"><FormattedMessage id="footer.content.careers" /></a><br></br>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="flex-container flex-space-between flex-align-center">
                <img src="images/paymentoptions.png" className="payoptionimg"></img>
                <span className="copyright contactinfo">© 2007-2020 followme.com</span>
            </div>
        </div>
    )
}

export default Footer

