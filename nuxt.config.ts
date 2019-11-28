export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  srcDir: "src/",
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // Experimental composition api used in Vue 3.x
    "./plugins/composition-api"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    [
      "@nuxt/typescript-build",
      {
        typeCheck: true,
        ignoreNotFoundWarnings: true
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxt/typescript-build",
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",

    // Doc: https://axios.nuxtjs.org/usage
    "nuxt-tslint",
    "@nuxtjs/axios",
    "@nuxtjs/pwa",

    // enable css preprocessor
    "@nuxtjs/style-resources"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config: any, ctx: any) {}
  }
};
