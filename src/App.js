import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Container from "./components/Container/Container"
import TodoList from "./components/Todo-list";


const App = () => {
  return (
      <div className="App" style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
      }}>
        <Header />
        <Container />
        <TodoList />
        <Footer />
      </div>
  );
}
export default App;
