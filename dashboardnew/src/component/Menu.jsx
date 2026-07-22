import React, {useState} from "react";
import  {Link} from "react-router";
import axios from "axios";

const Menu = () => {
  const [selectedMenu , setSelectedMenu] = useState(0);
  const [isProfileDropDownOpen , setIsProfileDropDownOpen] = useState(false);

  const handleMenuClick = (index)=>{
    setSelectedMenu(index);
  };

const handleProfileClick = (index)=>{
    setIsProfileDropDownOpen(!isProfileDropDownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const handleLogout = async () => {
  try {
    await axios.post(
      "http://localhost:8080/logout",
      {},
      {
        withCredentials: true,
      }
    );

    window.location.href = "http://localhost:5173/login";
  } catch (err) {
    console.log(err);
  }
};

  return (
    
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" onClick={()=>handleMenuClick(0) } style={{textDecoration:"none"}}>
            <p className={selectedMenu===0 ? activeMenuClass:menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/Orders" onClick={()=>handleMenuClick(1) } style={{textDecoration:"none"}}>
            <p className={selectedMenu===1 ? activeMenuClass:menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="/Holdings" onClick={()=>handleMenuClick(2) } style={{textDecoration:"none"}}>
            <p className={selectedMenu===2 ? activeMenuClass:menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to="/Positions" onClick={()=>handleMenuClick(3) } style={{textDecoration:"none"}}>
            <p className={selectedMenu===3 ? activeMenuClass:menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link to="/Funds" onClick={()=>handleMenuClick(4) } style={{textDecoration:"none"}}>
            <p className={selectedMenu===4 ? activeMenuClass:menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link to="/Apps" onClick={()=>handleMenuClick(5) } style={{textDecoration:"none"}}>
            <p className={selectedMenu===5 ? activeMenuClass:menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
<div className="profile" onClick={handleProfileClick}>
  <div className="avatar">ZU</div>
  <p className="username">USERID</p>
</div>

{isProfileDropDownOpen && (
  <div className="profile-dropdown">
    <button onClick={handleLogout}>Logout</button>
  </div>
)}
      </div>
    </div>
  );
};

export default Menu;
