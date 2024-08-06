import './contact.css'

const Contact = () => {
    return (
        <div id="contact-form">
            <h1>Contact Us</h1>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required="" />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required="" />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required="" defaultValue={""} rows="4" cols="50" />
                <button type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default Contact;