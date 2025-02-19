import { useState } from "react";
import { getAuthUser } from "../Services/userService";
import User from "../types/User"

const LoginPage = () => {

    const [currentUser, setCurrentUser] = useState<User | undefined>()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleAuth = async () => {
        try{
            const user = await getAuthUser(username, password);
            setCurrentUser(user);
            console.log("current user", currentUser)
        }
        catch(err: unknown){
            console.error("Error at authentification:", err)
        }
    }

    return(
        <>
            <h1>{`Login form ${currentUser?.username}`}</h1>
            <form style={{
                display: "flex", 
                flexDirection: "column",
                textAlign: "center", 
                width: "500px",  
                alignItems: "center", 
                justifyContent: "center", 
                margin: "auto"
                }}>

                <label>Nume de utilizator</label>
                <input type="text"
                       onChange={(e) => setUsername(e.target.value)}
                />
                
                <label>Parola</label>
                <input type="password"
                       onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={() => handleAuth()}>Submit</button>
            </form>
        </>
    );
}

export default LoginPage;