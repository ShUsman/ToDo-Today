import { useEffect, useMemo, useState } from "react";
import AddTask from "./AddTask";

function ToDoList() {


const useTypewriter = (text, speed = 20) => {
  const [index, setIndex] = useState(0);
  const displayText = useMemo(() => text.slice(0, index), [index]);
  useEffect(() => {
    if (index >= text.length)
      return;
      
    const timeoutId = setTimeout(() => {
      setIndex(i => i + 1);
    }, speed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [index, text, speed]);

  return displayText;
};



    return(
        <div className="flex flex-col max-w-7xl min-h-screen mx-auto items-center gap-10">
            <div className="h-14.5 w-75 mt-20.5">
                <h1 className="text-5xl select-none text-center">To Do Today</h1>
            </div>
            <div>
                <AddTask />
            </div>
        </div>
    )
}

export default ToDoList;