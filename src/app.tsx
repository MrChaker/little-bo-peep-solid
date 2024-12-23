import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { createEffect, Suspense } from "solid-js";
import Nav from "~/components/Nav";
import Container from "~/components/Container";

import "./app.css";
import { StoreProvider } from "./store/StoreProvider";
import PanelButton from "./components/PanelButton";

export default function App() {
  return (
    <StoreProvider>
      <Router
        root={(props) => (
          <>
            <PanelButton />
            <Suspense>{props.children}</Suspense>
          </>
        )}>
        <FileRoutes />
      </Router>
    </StoreProvider>
  );
}
