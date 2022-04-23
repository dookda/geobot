import 'bootstrap/dist/css/bootstrap.css'
const Profile = ({ displayName, userId, pictureUrl }) => {
    return (
        <div className='card-deck'>
            <div className='card card-width'>
                <img className="card-img-top" src={pictureUrl} alt="Logo" />
                <div className='card-body'>
                    <h5>{displayName}</h5>
                    <p>{userId}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile