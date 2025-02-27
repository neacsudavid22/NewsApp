import { useLocation } from "react-router-dom";
import User from "../types/User";

const HomePage = () => {
    const location = useLocation();
    const user : User | undefined = location.state?.user;

    return(
        <>
            <h1>{"HomePage " + user?.username}</h1>   
        </>
    );
}

export default HomePage;