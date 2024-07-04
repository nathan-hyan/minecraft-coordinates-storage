import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main/Main";
import { Landing, Create, Details } from "./screens";
import {
  addNote,
  deleteNote,
  getLocation,
  getSingleLocation,
  saveLocation,
} from "./services/locations";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Landing />,
        loader: getLocation,
      },
      {
        path: "details",
        element: <Outlet />,
        children: [
          {
            path: ":id",
            element: <Details />,
            loader: ({ params }) => getSingleLocation(params.id),
            children: [
              {
                path: "delete/:note",
                action: ({ params }) => deleteNote(params.id, params.note),
              },
              {
                path: "addNote",
                action: async ({ params, request }) =>
                  addNote(params.id, await request.formData()),
              },
            ],
          },
        ],
      },
      {
        path: "create",
        element: <Create />,
        action: saveLocation,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
