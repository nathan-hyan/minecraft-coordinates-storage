import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Landing, Create, Details } from "@screens";
import {
  addNote,
  deleteLocation,
  deleteNote,
  editLocation,
  getLocation,
  getSingleLocation,
  saveLocation,
} from "@services/locations";
import { Main } from "@layouts";

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
            path: ":locationId",
            element: <Details />,
            loader: ({ params }) => getSingleLocation(params.locationId),
            children: [
              {
                path: "deleteLocation",
                action: ({ params }) => deleteLocation(params.locationId),
              },
              {
                path: "delete/:note",
                action: ({ params }) =>
                  deleteNote(params.locationId, params.note),
              },
              {
                path: "addNote",
                action: async ({ params, request }) =>
                  addNote(params.locationId, await request.formData()),
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
      {
        path: "edit/:locationId",
        element: <Create editMode />,
        loader: ({ params }) => getSingleLocation(params.locationId),
        action: ({ request, params }) =>
          editLocation(request, params.locationId),
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
