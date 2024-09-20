import axios from "axios";
import { useEffect, useState } from "react";

const MakananPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => setData(resp.data))
      .catch((err) => console.log(err?.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <div>LOADING....</div>;

  return (
    <div>
      {data.map((todo) => (
        <div className="py-2" key={todo.id}>
          {todo.title}
        </div>
      ))}
    </div>
  );
};

export default MakananPage;
