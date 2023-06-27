import { Routes, Route } from "react-router-dom";

import UsersList from "../../Pages/UsersList/UsersList";
import Emojies from "../../Pages/Emojies/Emojies";
import TodoList from "../../Pages/Todo-list";
import Home from "../../Pages/Home/Home";

import './container.css'
import Userlist2 from "../../Pages/UserList2/Userlist2";
import Contacts from "../../Pages/Contact/Contacts";



const Container = () => {
    return <div className='wrapper'>
        {/*<h2>Container</h2>*/}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="emojies" element={<Emojies/>}/>
            <Route path="userslist" element={<UsersList/>}/>
            <Route path="todolist" element={<TodoList/>}/>
            <Route path="userlist2" element={<Userlist2/>}/>
            <Route path="contacts" element={<Contacts/>}/>
        </Routes>
    </div>
}
export default Container