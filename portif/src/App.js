import './App.css';
import './portifolio.css'
import Header from './componentes/Header/header';
import Home from './componentes/Home/Home';
import About from './componentes/About/About'
import Portif from './componentes/Portif/Portif'

function App() {

  const pages = [
    {page: 'Pagina Inicial',
    link: <Home/>
    },
    {page: 'Sobre Mim',
    link: <About/>
    },
    {
      page: 'Portifólio',
      link: <Portif/>
    }
  ]

  return (
    <div className="App">
      <Header pages={pages}/>
    </div>
  );
}

export default App;
