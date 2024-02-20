import { Outlet} from 'react-router-dom';

const HomeLayout = () => {
    return (
      <>
      <nav> 
        <span className='text-4xl text-primary'>Ecommerce Store</span>
      </nav>
      <section className='align-element py-20'>
        <Outlet/>
      </section>
      
      </>
    )
  }
  export default HomeLayout