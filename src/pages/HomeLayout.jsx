import { Outlet} from 'react-router-dom';
import { Header, Navbar } from '../components'

const HomeLayout = () => {
    return (
      <>
      <Header />
     <Header /> 
      <section className='align-element py-20'>
        <Outlet/>
      </section>
      
      </>
    )
  }
  export default HomeLayout