import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("login", "routes/login.tsx"),
    route("forgot-password", "routes/forgot-password.tsx"),
    route('dashboard', 'routes/dashboard-layout.tsx', [
        index('routes/dashboard-root.tsx')
    ])
] satisfies RouteConfig;
