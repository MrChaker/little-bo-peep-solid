import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import Container from "~/components/Container";

import "./app.css";
import { StoreProvider } from "./store/StoreProvider";

export default function App() {
  return (
    <StoreProvider>
      <Router
        root={(props) => (
          <>
            <Nav />
            <Container>
              <Suspense>{props.children}</Suspense>
            </Container>
          </>
        )}>
        <FileRoutes />
      </Router>
    </StoreProvider>
  );
}
