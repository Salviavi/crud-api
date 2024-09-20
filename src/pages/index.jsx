import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";

export const getServerSideProps = (context) => {
    const token = getCookie("token", context)
   
    if (!token) {
        return {redirect: {destination: "/login"}}
    }

    return {props: {}}
}

const hehe = () => {
    return (
        <div>
            halo
        </div>
    )
}

export default hehe;