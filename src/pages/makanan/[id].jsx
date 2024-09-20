import { useRouter } from "next/router";
import axios from "axios";

export const getServerSideProps = async (context) => {
    const akhiranURL = context.query.id;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${akhiranURL}`)
    const todo = res.data;

    return {props: {todo}}
}

const TodoContent = ({todo}) => {
    return (
        <div>
            {todo.title}
        </div>
    )
}

export default TodoContent;