const routes = [
  {
    path: "/",
    redirect: { name: "login" },
    component: () => import("layouts/default.vue"),
    children: [
      {
        name: "login",
        path: "/login",
        component: () => import("pages/login/index.vue")
      },
      {
        name: "thanks",
        path: "/thanks",
        component: () => import("pages/thanks/index.vue")
      },
      {
        name: "perfil",
        path: "/perfil",
        component: () => import("pages/perfil/index.vue")
      },
      {
        name: "forgot-password",
        path: "/forgot-password",
        component: () => import("pages/forgot-password/index.vue")
      },
      {
        name: "dashboard",
        path: "/dashboard",
        component: () => import("pages/dashboard/index.vue")
      },
      {
        name: "cotizacion",
        path: "/cotizacion",
        component: () => import("pages/quotation/index.vue")
      },
      {
        name: "cotizacion-service",
        path: "/cotizacion-service",
        component: () => import("pages/quotation/service.vue")
      },
      {
        name: "services",
        path: "services",
        redirect: { name: "dashboard" },
        component: () => import("pages/services/index.vue"),
        children: [
          {
            name: "services-limpieza",
            path: "/services/limpieza",
            component: () => import("pages/services/limpieza.vue")
          },
          {
            name: "services-dj",
            path: "/services/dj",
            component: () => import("pages/services/dj.vue")
          },
          {
            name: "services-chef",
            path: "/services/chef",
            component: () => import("pages/services/chef.vue")
          },
          {
            name: "services-cocktail",
            path: "/services/cocktail",
            component: () => import("pages/services/cocktail.vue")
          }
        ]
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
