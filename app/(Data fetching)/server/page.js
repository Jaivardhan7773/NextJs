
export default async function Todos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const todos = await res.json();



    return (
        <>
            <h1>Todos</h1>
            <div className="todos-container">
                {todos.map(({ id, title, completed }) => (
                    <div className="todo-item" key={id}>
                        <input type="checkbox" checked={completed} readOnly />
                        <p>{title}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
