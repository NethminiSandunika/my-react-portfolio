import React from 'react';
import "./contact.css";

const Contact = () => {
    return(
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get in touch</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Let's talk!</h3>
                    <p className="contact__details">Feel free to reach out to me if you have any questions or inquiries. I'm always excited to connect with new people and explore new opportunities. </p>
                </div>

                <form action="" className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input"
                            placeholder=' Your name'/>
                        </div>

                        <div className="contact__form-div">
                        <input type="email" className="contact__form-input"
                            placeholder='Your email'/>
                        </div>

                    </div>

                    <div className="contact__form-div">
                        <input type="text" className="contact__form-input"
                            placeholder='Your subject'/>
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <textarea 
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            className="contact__form-input"
                            placeholder="write your message"
                            ></textarea>
                        </div>


                        <button className="btn">Send message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact