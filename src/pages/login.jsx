import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { setCookie } from "cookies-next";

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleEmail = (event) => setEmail(event.target.value);
    const handlePassword = (event) => setPassword(event.target.value);

    const login = async () => {
        const res = await axios.post(
            "https://api-bootcamp.do.dibimbing.id/api/v1/login",
            {email: email, password: password},
            {
                headers: {
                    "Content-Type": "application/json",
                    apiKey: "w05KkI9AWhKxzvPFtXotUva-",
                }
            }
        )

        const tokenValue = res.data.token;
        setCookie("token", tokenValue);
    
        router.push("/")
    
    }

   
    return (
        <div className="grid w-16 gap-4">
        <input className="text-black" placeholder="Email" onChange={handleEmail}/>
        <input className="text-black" placeholder="Password" onChange={handlePassword}/>
        <button className="rounded bg-violet-700" onClick={login}>Submit</button>
    </div>
    )
}

export default LoginPage