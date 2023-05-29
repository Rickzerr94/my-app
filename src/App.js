import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Container from "./components/Container/Container"


const App = () => {
  return (
      <div className="App" style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
      }}>
        <Header />
        <Container />
        <Footer />
      </div>
  );
}
export default App;
