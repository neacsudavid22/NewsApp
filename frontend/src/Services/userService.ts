import User from "../types/User";

const authenticateUser = async (username: string , password: string): Promise<User | undefined> => {
    try {

        const response = await fetch(`http://localhost:3600/user-api/user-login/${username}/${password}`);
        if (!response.ok) {
            throw new Error("Failed to authenticate user, either the username or the password is wrong");
        }

        const data : User = await response.json()
 
        return data; 

    } catch (err: unknown) {
        console.error("authenticateUser error:", err);
    }
}

const signUpUser = async (email: string , name: string , username: string, password: string): Promise<User | undefined> => {
    try {
        const response = await fetch(`http://localhost:3600/user-api/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email ,
                name: name , 
                username: username, 
                password: password,
                account: "standard"
            }),
        });
        if (!response.ok) {
            throw new Error("Failed to sign up user");
        }

        const data : User = await response.json()
 
        return data; 

    } catch (err: unknown) {
        console.error("getAuthUser error:", err);
    }
}

export {
    authenticateUser,
    signUpUser
}