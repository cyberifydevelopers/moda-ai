import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("login", "routes/auth/login/index.tsx"),
    route("register", "routes/auth/register/index.tsx"),
    route("api/auth/*", "routes/api.auth.$.ts"),
    route("forgot-password", "routes/auth/forgot-password/index.tsx"),
    route('dashboard', 'routes/dashboard-layout.tsx', [
        index('routes/dashboard-root.tsx')
    ])
] satisfies RouteConfig;
