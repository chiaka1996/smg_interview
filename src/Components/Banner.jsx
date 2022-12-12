import img from '../Assets/MyTestApp.png'
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const nav = useNavigate()
    return(
        <div>
        <nav>
        <div className='imgContainer' onClick={nav('/')}>
          <img src={img} alt='logo' className='logo'/>
        </div>
      </nav>

    <div>
      <div className='banner'>
      <img src='/rectangle.png' alt='img banner'  className='imgBanner'/>
      <div className='bannerText'>
        Watch Something Incredible
      </div>
      </div>
      </div>
        </div>
    )
}

export default Banner;