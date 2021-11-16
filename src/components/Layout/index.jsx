import { Outlet } from "react-router-dom";

import { AuthStatus } from "../AuthStatus/index";

import { CustomLink } from "../CustomLink/index";

import "./styles.css";

export function Layout() {
  return (
    <div className="layout">
      <header className="layout--header">
        <div className="layout--header__title">
          <h1>REACT ROUTER DOM V6 POC</h1>
          <AuthStatus />
        </div>

        <nav className="layout--header__nav">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/profile">Profile</CustomLink>
          <CustomLink to="/settings">Settings</CustomLink>
        </nav>
      </header>

      <main className="layout--main">
        <Outlet />
      </main>
      <footer className="layout--footer">
        <span>
          Criado em 16/11/2021 por{" "}
          <a
            href="https://github.com/Bluniz"
            target="_blank"
            className="layout__link"
            rel="noreferrer"
          >
            Lucas Rosa
          </a>
        </span>
      </footer>
    </div>
  );
}
