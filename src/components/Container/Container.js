import { Routes, Route } from "react-router-dom";

import UsersList from "../Pages/UsersList/UsersList";
import Emojies from "../Pages/Emojies/Emojies";
import TodoList from "../Pages/Todo-list";
import Home from "../Pages/Home/Home";

import './container.css'



const Container = () => {
    return <div className='wrapper'>
        {/*<h2>Container</h2>*/}
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="emojies" element={<Emojies />} />
                <Route path="userslist" element={<UsersList />} />
                <Route path="todolist" element={<TodoList />} />
        </Routes>
    </div>
}
export default Container