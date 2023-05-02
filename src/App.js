import "./App.css";
import Header from "./Layout/Header/header";
import Sidebar from "./Layout/Sidebar/sidebar";
import Content from "./Layout/Content/content";
import Footer from "./Layout/Footer/footer";



function App() {


const product=[
  {
    package:"Free",
    price:"$0"
  },
  {
    package:"Plus",
    price:"$5"
  },
  {
    package:"Pro",
    price:"$10"
  }
]



  return (
  
  <div className="App">
  <header className="header"><Header/></header>
  <div className="SidebarContent">
    <aside className="sidebar"><Sidebar/></aside>
    <main className="content"><Content Products={product}/></main>
  </div>
  <footer className="footer"><Footer/></footer>
</div>
  );
}

export default App;
