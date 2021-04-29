
export default function Contact () {

    const sendMail = () => {
        const mailto = "mailto:j.sb.parkk@gmail.com?subject=Hi, Justin&body=How can I help you?";
        // window.location.href = (mailto, "_blank");
        window.open(mailto, "_blank")
    }

    return (
        <div className="contact_container" id="contact">
            <a type="button" onClick={sendMail}><h1>Let's Talk</h1></a>
        </div>
    )
}