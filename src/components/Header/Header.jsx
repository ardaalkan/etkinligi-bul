import React from "react";
import { useState } from "react";

const Header = () => {
  const [selects, setSelects] = useState();

  return (
    <header className="header-container">
      <div className="top-header">
        <div>
          <input placeholder="Etkinlik, sanatçı ya da mekan arayın"></input>
        </div>
        <div>
          <h2>Giriş Yap</h2>
        </div>
      </div>
      <div className="bottom-header-filters">
        <select value={selects} onChange={(e) => setSelects(e.target.value)}>
          <option>Apple</option>
          <option>Apple</option>
          <option>Apple</option>
        </select>
        <select value={selects} onChange={(e) => setSelects(e.target.value)}>
          <option>Apple</option>
          <option>Apple</option>
          <option>Apple</option>
        </select>
        <select value={selects} onChange={(e) => setSelects(e.target.value)}>
          <option>Apple</option>
          <option>Apple</option>
          <option>Apple</option>
        </select>
      </div>
      <hr width="100%"></hr>
    </header>
  );
};

export default Header;
