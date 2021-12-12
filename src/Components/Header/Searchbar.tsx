import React from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useAction";

const Searchbar: React.FC = () => {
  const [value, setValue] = React.useState<string>("");
  const navigate = useNavigate();
  const { addSearchItem} = useActions();
  const handleClick = (value:string) => {
    navigate(`/search/${value}`);
    addSearchItem(value);
  };
 
  console.log(value)
  return (
    <div className="d-flex me-5">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button onClick={()=>handleClick(value)} className="btn" type="submit">
        Search
      </button>
    </div>
  );
};

export default Searchbar;
