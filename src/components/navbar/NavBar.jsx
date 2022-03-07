import { Link } from "react-router-dom";
import "./navbar.css";


export default function NavBar() {
    return (
        <div className='nav'>
            <div className="navLeft">
            <ul className="navList">
                    <li className="navListItem">
                    <Link to="/" className="nav-link" style={{ textDecoration: 'none' }}>Home</Link>
                    </li>
                    
                    <li className="navListItem">
                    <Link to="/single" className="nav-link" style={{ textDecoration: 'none' }}>Stories</Link>
                    </li>
                    <li className="navListItem">
                    <Link to="/write" className="nav-link" style={{ textDecoration: 'none' }}>Write</Link>
                    </li>
                    

                </ul>
            </div>

            <div className="navCenter">
               
            </div>
            <div className="navRight">
            
          <Link className="link" to="/settings">
            <img
              className="navImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
         
          <ul className="navList">
            <li className="navListItem">
              <Link className="link" to="/login" style={{ textDecoration: 'none' }}>
                login
              </Link>
            </li>
            <li className="navListItem">
              
            </li>
          </ul>
        
        
      </div>
    </div>
  );
}
