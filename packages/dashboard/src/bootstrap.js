import { createApp } from "vue";
import Dashboard from "./components/Dashboard";

// Mount function to start up the app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// If we are in development and isolation call mount immediatelyy
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_dashboard-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container therefore we export the mount function
export { mount };
