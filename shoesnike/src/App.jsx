import {FaUser,FaShopify} from 'react-icons/fa'
import {BiSearch, BiToggleLeft} from 'react-icons/bi'
import nikelogo from './assets/nike.svg'
import textlogo from './assets/text.svg'
import shoes from './assets/shoes.svg'
import './App.css'

function App() {
  

  return (
    <div className="App">
      <div className="BoxContent">

      
      <header>
        <nav>
          <ul>
            <li><a href="">Woman</a></li>
            <li><a href="">Men</a></li>
            <li><a href="">All</a></li>
          </ul>
          </nav>
          <div className="logo">
            <img src={textlogo} alt="Nike Logo" />
            <img className='nikelogo' src={nikelogo} alt="Nike Logo" />
          </div>
          <div className="settings">
            <a href=""><FaUser/> </a>
            <a href=""><BiSearch/></a>
            <a href=""><FaShopify/></a>
            
          </div>
      </header>
      <div className="contentShoes">
        <div className="leftContent">
          <span>SNEAKER</span>
          <h1>AIR JORDAN</h1>
          <p>AIR JORDAN 1 MID LIGHT SMOKE GREY</p>
          <div className='bio'>
            <p>The popularity of Jordan 1s haven’t changed since their release in 1984. The classic silhouette has been seen in countless colorways over the years. Sneakerheads in their teens and twenties also love to wear Air Jordan 1s, in their eyes the original AJ1s are already part of sneaker history. This is proof of being truely iconic, isn’t it?</p>
          </div>
          <div className='oldprice'>
          <span>
          SKU: 554724-073 EU40.5-EU47
          </span>
          <span>
          SKU: 554725-073 (GS) EU36-EU40
          </span>
          <span>
          Release date: October 2020 
          </span>

          </div>
        </div>

        <div className="rightContent">
          <img className='shoes' src={shoes} alt="" />
          <span className='numero1'>01</span>
        </div>
      </div>
      <div className='buy'>
        <div className="toggle">
        <a href="#"><BiToggleLeft/><p>black</p></a>
     
        </div>
        <div className="btn">
          <span>360$</span>
          <button>Buy</button>
          </div>
          <div className="language">
            <span >EN</span>
            <span className='UA'>UA</span>
          </div>
      </div>
      </div>
    </div>
  )
}

export default App
