import "./App.css";
import Footer from "./Footer/Footer.jsx";
function App() {
  const owner={
    address:'г. Москва, улица Моховая, дом 10 строение 2',
    phone:'+7 (495) 568-14-70',
    email:'gubern@adm.yar.ru0'
  }
  return (
    <div className="App">
      <Footer
        owner={owner}/>
    
    </div>
  );
}

export default App;
