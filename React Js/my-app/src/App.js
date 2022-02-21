import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'

function App() {

  const onDelete=(todo)=>{
    console.log("I am on Delete of ",todo)
  }

  let todos=[
    {
      sno:1,
      title:"Go to the market",
      desc:"You need to go"
    },
    {
      sno:2,
      title:"Go to the mall",
      desc:"You need to go"
    },
    {
      sno:3,
      title:"Go to the Garden",
      desc:"You need to go"
    },
  ]
  return (
    <div > 
    
      <Header/>
     

      <Todos todos={todos} onDelete={onDelete}/>
     
      <Footer/>
    </div>
  );
}

export default App;
