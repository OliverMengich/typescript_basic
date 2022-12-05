import axios from "axios";
const url = 'https://jsonplaceholder.typicode.com/todos/1';
interface Todo{
    id: number,
    title: string,
    completed: boolean
}
axios.get(url,{headers: {'Content-Type': 'application/json'}})
.then((response) => {
    const todo = response.data as Todo;
    const ID = todo.id;
    console.log(ID);
    const title = todo.title;
    const finished = todo.completed;
    logTodo(ID,title,finished);
});
const logTodo = (ID: number, title: string,completed: boolean)=>{
    console.log(`
        The Todo with ID: ${ID}
        Has a title of: ${title}
        Is it finished? ${completed? 'YES' : 'NO'}
    `);
}
// Basic Types in Typescript