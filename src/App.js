import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Container from "./components/Container/Container"
import TodoList from "./components/Pages/Todo-list";
import Emojies from "./components/Pages/Emojies/Emojies";
import UsersList from "./components/Pages/UsersList/UsersList";


const App = () => {
  return (
      <div className="App" style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
      }}>
        <Header />
        <Container />
        {/*<UsersList />*/}
        {/*<TodoList />*/}
        {/*<Emojies />*/}
        <Footer />
      </div>
  );
}
export default App;
