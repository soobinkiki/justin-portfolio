import emailLogo from '../../images/email.png'

export default function Contact () {

    const sendMail = () => {
        const mailto = "mailto:j.sb.parkk@gmail.com?subject=Hi, Justin&body=How can I help you?";
        window.open(mailto, "_blank")
    }

    return (
        <div className="text-center d-flex align-items-center justify-content-center contact_main_container" id="contact" >
            <button onClick={sendMail} id="contact_btn"><h1 className="lets_talk">Let's Talk</h1></button>
            <a href="mailto:j.sb.parkk@gmail.com?subject=Hi, Justin&body=How can I help you?" target="_blank" rel="noreferrer"><img id="email_logo" src={emailLogo} alt="email_logo"/></a>
        </div>
    )
}