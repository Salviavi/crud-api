import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export const getServerSideProps = (context) => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);

    const token = getCookie("token", context)
   
    if (!token) {
        return {redirect: {destination: "/login"}}
    }

    return {props: {}}

    useEffect(() => {
      const getData = async () => {
        setLoading(true);
        const resp = await axios.get("https://api-bootcamp.do.dibimbing.id/api/v1/foods", {
          headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-"},
        })

        setFoods(resp?.data?.data);
        setLoading(false);
      }
      getData();
    }, [])

    if (loading) return <div>Loading...</div>;
}

const hehe = () => {
    return (
        <div>
            <ul className="mx-auto grid justify-center">
              {foods.map((food) => {
                <li className="mb-8">
                  <img src={food.imageUrl} className="w-96 object-cover aspect-video" />
                </li>
              })}
            </ul>
        </div>
    )
}

export default hehe;