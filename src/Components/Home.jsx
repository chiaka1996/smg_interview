import Template from './Templates.jsx'
import Banner from './Banner'
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate()
    return(
        <div>
            <Banner />
            <section className='sectionBody'>
                <div>
                <label className='search'>Search</label><br/>
                <input type='text'  className='searchInput' onClick={()=> navigate('/search')}/>
                </div>
            </section>

            <Template title='Movies' />
            <Template title='series' />
      
    </div>
    )
}

export default Home;