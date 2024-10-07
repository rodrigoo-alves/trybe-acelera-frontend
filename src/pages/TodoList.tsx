import { useContext } from "react";
import Context from "../context/Context";

function TodoList () {
  const { user } = useContext(Context);
  return (
    <>
      <h1>Welcome, {user} </h1>
    </>
  )
}

export default TodoList
