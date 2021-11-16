import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { NotFound } from "./pages/404";
import { Login } from "./pages/Login";
import { RequireAuth } from "./components/RequireAuth";
import { Layout } from "./components/Layout";

const SearchProfile = lazy(() => import("./pages/SearchProfile"));

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          // <RequireAuth>
          <Layout />
          /* </RequireAuth> */
        }
      >
        <Route
          index
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="profile">
          <Route
            index
            element={
              <RequireAuth>
                <Suspense fallback={<div>...</div>}>
                  <SearchProfile />
                </Suspense>
              </RequireAuth>
            }
          />
          <Route path=":profileName" element={<Profile />} />
        </Route>
        <Route path="login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Route>
      {/* <Route path="login" element={<Login />} /> */}
    </Routes>
  );
}
