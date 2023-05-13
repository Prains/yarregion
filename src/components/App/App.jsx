import "./App.css";
import Footer from "./Footer/Footer.jsx";
function App() {
  return (
    <div className="App">
      <Footer
        address="г. Москва, улица Моховая, дом 10 строение 2"
        phone="+7 (495) 568-14-70"
        email="gubern@adm.yar.ru0"
      />
      {/* большое количество данных лучше передавать объектом. так код становится чище*/}
    </div>
  );
}

export default App;
