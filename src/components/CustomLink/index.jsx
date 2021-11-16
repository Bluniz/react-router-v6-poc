import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";

import "./styles.css";

export function CustomLink({ children, to, ...props }) {
  const resolved = useResolvedPath(to);
  const { pathname } = useLocation();

  let match = useMatch({ path: resolved.pathname, end: true });

  if (!match && resolved.pathname !== "/") {
    match = pathname.includes(resolved.pathname);
  }

  return (
    <Link to={to} className={match ? "link--active" : "link"} {...props}>
      {children}
    </Link>
  );
}
