import profilepic from './assets/catpfp.jpg'

function Card(){
    return(
        <div className="card">
            <img src={profilepic} alt="Profile Picture" />
            <h2>Pawfullpurr</h2>
            <p>i make cat videos</p>
        </div>
    );
}
export default Card