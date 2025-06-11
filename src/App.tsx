import { GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  RefineSnackbarProvider,
  ThemedLayoutV2,
  useNotificationProvider,
} from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import dataProvider from "@refinedev/airtable";
import routerBindings, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { DoelenList } from "./pages/doelen/list";
import { ScholenList } from "./pages/scholen/list";
import { VakkenList } from "./pages/vakken/list";

function App() {
  const API_TOKEN = import.meta.env.VITE_AIRTABLE_API_TOKEN;
  const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;

  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider(API_TOKEN, BASE_ID)}
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                resources={[
                  {
                    name: "Doelen",
                    list: "/doelen",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "Scholen",
                    list: "/scholen",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "Vakken",
                    list: "/vakken",
                    meta: {
                      canDelete: true,
                    },
                  },
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "OiPyHx-Rszwo3-AindKO",
                }}
              >
                <Routes>
                  <Route
                    element={
                      <ThemedLayoutV2 Header={() => <Header sticky />}>
                        <Outlet />
                      </ThemedLayoutV2>
                    }
                  >
                    <Route
                      index
                      element={<NavigateToResource resource="Doelen" />}
                    />
                    <Route path="/doelen">
                      <Route index element={<DoelenList />} />
                    </Route>
                    <Route path="/scholen">
                      <Route index element={<ScholenList />} />
                    </Route>
                    <Route path="/vakken">
                      <Route index element={<VakkenList />} />
                    </Route>
                    <Route path="*" element={<ErrorComponent />} />
                  </Route>
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
