import React from "react";
function FooterPage() {

    return (
        <>
            <div class="footer">
                <div class="footerstyles">
                    <div class="row">
                        <div class="col-4">
                            <ul class="liststyles" >
                                <li><h6>About Us</h6></li><br />
                                <li><h6>Quality Certification</h6></li><br />
                                <li><h6>FAQs</h6></li><br />
                                <li><h6>Press / News</h6></li><br />
                            </ul>
                        </div>
                        <div class="col-4">
                            <ul class="liststyles">
                                <h6>Business Hours</h6>
                                <li>Mon: 11:00 AM – 11:00 PM</li>
                                <li>Tue: 11:00 AM – 11:00 PM</li>
                                <li>Wed: 11:00 AM – 11:00 PM</li>
                                <li>Thu: 11:00 AM – 11:00 PM</li>
                                <li>Fri: 11:00 AM – 11:00 PM</li>
                                <li>Sat: 11:00 AM – 11:00 PM</li>
                                <li>Sun: 11:00 AM – 11:00 PM</li>

                            </ul>

                        </div>
                        <div class="col-4">

                            <ul class="liststyles">
                                <h6>Get in Touch</h6>
                                <p>care@foodforlife.com</p>
                                <h6>Toll Free </h6>
                                <p>1800-108-4488</p>
                            </ul>

                        </div>
                    </div>
                    <hr/>
                </div>

                {/* <div class="container"> */}
                    <div class="row footertextstyles">
                        <div class="col-3 ">
                            <h6> Home</h6>
                        </div>
                        <div class="col-3">
                            <h6>About Us</h6>
                        </div>
                        <div class="col-3">
                            <h6>Menu</h6>
                        </div>
                        <div class="col-3">
                            <h6>Gallery</h6>
                        </div>
                    </div>

                {/* </div> */}
            </div>
        </>
    )
}
export default FooterPage;