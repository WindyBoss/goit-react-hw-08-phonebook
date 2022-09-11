/** @format */

import React, { Suspense, useEffect } from "react";
import Contacts from "feature/Contacts";
import { Routes, Route } from "react-router-dom";
import AppBar from "components/AppBar";
import Register from "feature/Register";
import LogIn from "feature/LogIn";
import HomePage from "feature/HomePage";
import PublicRoute from "components/PublicRoute";
import PrivateRoute from "components/PrivateRoute";
import authOperations from "redux/auth/authOperations";
import { useDispatch } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route
              path="/"
              index
              element={
                // component wrap
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted redirectTo="contacts">
                  <LogIn />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted redirectTo="contacts">
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
