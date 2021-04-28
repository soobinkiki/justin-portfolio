import myphoto from '../../../src/my_photo.jpeg'


export default function About () {
    return (
        <div id="about">
            <h1>About me section!</h1>
            <img id="my_photo" src={myphoto} alt="my_photo"/>
        </div>
    )
}