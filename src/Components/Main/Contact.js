import Images from '../Images/Images';
import '../../Styles/Main/Contact.css'

export default function Contact () {

    const sendMail = () => {
        const mailto = "mailto:j.sb.parkk@gmail.com?subject=Hello!&body=Hello recruiter, please give me an opportunity for the interview if I met your expectation!";
        window.open(mailto, "_blank")
    }

    return (
        <div className="text-center d-flex align-items-center justify-content-center contact_main_container" id="contact" >
            <button onClick={sendMail} id="contact_btn"><h1 className="lets_talk">Let's Talk</h1></button>
            <a href="mailto:j.sb.parkk@gmail.com?subject=Hello!&body=Hello recruiter, please give me an opportunity for the interview if I met your expectation!" 
                target="_blank" rel="noreferrer"><img id="email_logo" src={Images.elogo} alt="email_logo"/></a>
        </div>
    )
}