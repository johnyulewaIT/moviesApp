import { Link } from "react-router-dom";

function Header() {
    return (
      <header>
        <nav className="flex gap-4 justify-between shadow-md p-4">
          <div>
            <img src="/src/assets/react.svg" />
          </div>
          
            <div className="flex gap-4 font-semibold">
              <Link to="/">Home</Link>
              <Link to="/favorite">Favorites</Link>
              <Link to="">Contact</Link>
            </div>
       
        </nav>
      </header>
    );
}

export default Header;