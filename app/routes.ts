import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("routes/login", "routes/login.tsx")] satisfies RouteConfig;
