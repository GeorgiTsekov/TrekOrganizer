const Login = () => {
    return (
        <section className="contact-form">
            <div className="container">
                <div className="contact-heading">
                    <h1>Contact Us</h1>
                    <h3>You can send your feedback or report any issues by submitting the form.</h3>
                </div>
                <form id="contact" action="" method="post">
                    <h3>Leave your query here</h3>
                    <fieldset>
                        <input placeholder="Your name" type="text" tabindex="1" required autofocus />
                    </fieldset>
                    <fieldset>
                        <input placeholder="Your Email Address" type="email" tabindex="2" required />
                    </fieldset>
                    <fieldset>
                        <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required />
                    </fieldset>
                    <fieldset>
                        <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required />
                    </fieldset>
                    <fieldset>
                        <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
                    </fieldset>
                    <fieldset>
                        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    </fieldset>
                </form>

            </div>

        </section>
    )
}

export default Login;