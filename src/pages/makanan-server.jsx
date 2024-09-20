import axios from "axios";

export const getServerSideProps = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/todos")
    return {props: {todos: resp.data}};
}

const MakananServerPage = ({todos}) => {
    return (
        <div>
            <h1 className="text-3xl font-bold">TODO SERVER</h1>
            {todos.map((todo) => (
                <div>{todo.title}</div>
            ))}
        </div>
    )
}

export default MakananServerPage;