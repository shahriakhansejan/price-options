import PropTypes from 'prop-types';
import Link from '../Link/Link';
import { HiMenuAlt1 } from 'react-icons/hi';
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';


const Nav = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/dashboard", name: "Dashboard" },
        { id: 4, path: "/profile/:username", name: "Profile" },
        { id: 5, path: "*", name: "Not Found" }
      ];
      


    return (
        <nav>
           <div className='md:hidden text-3xl' onClick={() => setOpen(!open)}>
            {
                open === true? <RxCross2></RxCross2> : <HiMenuAlt1></HiMenuAlt1>
            }

           </div>
            <ul className={`md:flex duration-1000 absolute md:static ${open? 'top-11' : '-top-60'} bg-yellow-950 text-white p-3 rounded-lg font-semibold`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

Nav.propTypes = {
    
};

export default Nav;