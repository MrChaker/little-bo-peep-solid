import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { ParentProps, Suspense } from "solid-js";
import Container from "~/components/Container";
import { Meta, MetaProvider } from "@solidjs/meta";

import "./app.css";
import { StoreProvider } from "./store/StoreProvider";
import HamburgerButton from "./components/HamburgerButton";
import HamburgerPanel from "./components/HamburgerPanel";
import SectionsBreadcrumbs from "./components/SectionsBreadcrumbsContainer";
import SectionsBreadcrumbsContainer from "./components/SectionsBreadcrumbsContainer";

export default function App() {
  return (
    <MetaProvider>
      <Meta property="og:image" content="images/lbp_preview.png"></Meta>
      <StoreProvider>
        <Router
          root={(props) => (
            <>
              <HamburgerButton />
              <HamburgerPanel />
              <SectionsBreadcrumbsContainer />
              <Container>
                <Suspense>{props.children}</Suspense>
              </Container>
            </>
          )}>
          <FileRoutes />
        </Router>
      </StoreProvider>
    </MetaProvider>
  );
}
