export default function Friend({friend}){
    const {id, name, username, email} = friend;
    return(
        <div className="box">
            <p>Id: {id}</p>
            <h4>Name: {name}</h4>
            <h4>UserName: {username}</h4>
            <p>Email: {email}</p>
        </div>
    )
}