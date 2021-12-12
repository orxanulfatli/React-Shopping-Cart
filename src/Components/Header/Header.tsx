
import { NavLink } from "react-router-dom";
import { UseBaseQueryResult, useQuery } from "react-query";
import { fetchCategories } from "../../api/category";
import { useActions } from "../../hooks/useAction";
import Searchbar from "./Searchbar";

const Header:React.FC = () => {
  const {showCardItems} = useActions()
  const { data }:UseBaseQueryResult<string[],Error> = useQuery<string[],Error>(["categories"], fetchCategories);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/*navlist*/}

          <ul className="navbar-nav me-5  mb-2 mb-lg-0">
            {data?.map((category) => {
              return (
                <li key={category} className="nav-item">
                  <NavLink
                    to={category}
                    className="nav-link active"
                    aria-current="page"
                  >
                    {category}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          {/*searchbar*/}
         <Searchbar/>
          <div>
            <NavLink
              className="nav-link"
              to="/card"
              onClick={() => showCardItems()}
            >
              Card
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
