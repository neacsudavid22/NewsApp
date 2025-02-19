import User from "../types/User";

const getAuthUser = async (username: string , password: string): Promise<User | undefined> => {
    try {

        const response = await fetch(`http://localhost:3600/user-api/user-auth/${username}/${password}`);
        if (!response.ok) {
            throw new Error("Failed to authenticate user, either the username or the password is wrong");
        }

        const data : User = await response.json()
 
        return data; 

    } catch (err: unknown) {
        console.error("getAuthUser error:", err);
    }
}

export {
    getAuthUser
}