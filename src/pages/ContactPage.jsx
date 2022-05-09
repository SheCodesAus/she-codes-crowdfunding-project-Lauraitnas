import React from "react";

import "./forms.css"



function ContactPage() {
    
    return(
        <div className="contact">
                <div className="form">
                    <form action="https://formspree.io/f/xknyoola" method="post">
                    <h2 className="getintouch">Do you have any questions?</h2><h2> Get in touch using the form below.</h2>
                    <div className="form-item">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name"/>
                    </div> 
                    <div className="form-item">
                        <label for="email">Email</label>
                        <input type="text" id="email" name="email"/>
                    </div>
                    <div className="form-item">
                        <label for="message">Message</label>
                        <textarea id="message" name="message"></textarea>
                    </div>
                    <div className="form-item">
                        <button type="submit"> Submit!</button>
                    </div>
                    </form>
                </div>
        </div>
    );
}

export default ContactPage;