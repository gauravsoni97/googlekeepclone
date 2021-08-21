import React from "react";

export const Header = () => {
  return (
    <div className="Navbar">
      <div className="togglemenu">
        <i class="fas fa-bars"></i>
      </div>
      <div className="logo">
        <img src="./keep.png" alt="logoimg" />
        <h1>Keep</h1>
      </div>
      <div className="searchbar">
        <i class="fas fa-search"></i>
        <input type="search" placeholder="Search" />
      </div>
      <div className="menuright">
        <div className="refresh">
          <i class="uil uil-cloud-check"></i>
        </div>
        <div className="listview">
          <i class="uil uil-apps"></i>
        </div>
        <div className="settings">
          <i class="uil uil-setting"></i>
        </div>
     
        <div className="profile">
          <img src="./user.jpeg" alt="" width="40px" />
        </div>
      </div>
    </div>
  );
};
