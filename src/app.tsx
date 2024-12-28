import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { createEffect, Suspense } from "solid-js";
import Nav from "~/components/Nav";
import Container from "~/components/Container";

import "./app.css";
import { StoreProvider } from "./store/StoreProvider";
import PanelButton from "./components/PanelButton";
import SVGDefs from "./components/SVGDefs";

export default function App() {
  return (
    <StoreProvider>
      <Router
        root={(props) => (
          <>
            <Container>
              <Nav />
              <PanelButton />
              <Suspense>{props.children}</Suspense>
              <SVGDefs />
            </Container>
          </>
        )}>
        <FileRoutes />
      </Router>
    </StoreProvider>
  );
}
