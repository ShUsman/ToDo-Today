import AddTask from "./AddTask";

function ToDoList() {

    return(
        <div className="flex flex-col max-w-7xl min-h-screen mx-auto items-center gap-10">
            <div className="h-14.5 w-75 mt-20.5">
                <h1 className="text-5xl">To Do Today</h1>
            </div>
            <div>
                <AddTask />
            </div>
        </div>
    )
}

export default ToDoList;