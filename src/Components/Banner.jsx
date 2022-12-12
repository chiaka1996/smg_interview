import img from '../Assets/MyTestApp.png'
const Banner = () => {
    return(
        <div>
        <nav>
        <div className='imgContainer'>
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