import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
  redirect,
} from '@tanstack/react-router';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';

import App from './App.tsx';
import Szczegoly from './pages/Szczegoly.tsx';
import reportWebVitals from './reportWebVitals.ts';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
});

const szczegolyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/szczegoly',
  component: Szczegoly,
});

// Former sub-pages now live as homepage sections; keep old links working.
const sectionRedirects = [
  { path: '/indywidualne', hash: 'indywidualne' },
  { path: '/online', hash: 'online' },
  { path: '/workshops', hash: 'warsztaty' },
].map(({ path, hash }) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path,
    beforeLoad: () => {
      throw redirect({ to: '/', hash });
    },
  })
);

const routeTree = rootRoute.addChildren([indexRoute, szczegolyRoute, ...sectionRedirects]);

const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('app');
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
