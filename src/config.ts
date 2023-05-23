export const defaultMeta = {
   title: "Laup Wing Tech",
   siteName: "tech.laupwing.com",
   description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet necessitatibus doloribus, omnis delectus obcaecati reprehenderit inventore esse at cum tenetur? Sapiente tenetur molestias odio labore quaerat omnis eos officiis corporis.",
   url: "https://tech.laupwing.com",
   // Need to replace this
   image: "https://www.cgsusa.org/wp-content/uploads/cropped-placeholder.jpg",
   type: "website",
   robots: "follow, index"
}

interface Favicons {
   rel: string
   url: string
   sizes?: string
   type?: string
}

export const favicons: Array<Favicons> = [
   {
      rel: "apple-touch-icon",
      sizes: "57x57",
      url: "/favicon/apple-icon-57x57.png"
   },
   {
      rel: "apple-touch-icon",
      sizes: "60x60",
      url: "/favicon/apple-icon-60x60.png"
   },
   {
      rel: "apple-touch-icon",
      sizes: "72x72",
      url: "/favicon/apple-icon-72x72.png"
   },
   {
      rel: "apple-touch-icon",
      sizes: "76x76",
      url: "/favicon/apple-icon-76x76.png"
   },
   {
      rel: "apple-touch-icon",
      sizes: "114x114",
      url: "/favicon/apple-icon-114x114.png"
   },
   {
      rel: "apple-touch-icon",
      sizes: "120x120",
      url: "/favicon/apple-icon-120x120.png"
   },
   {
      rel: "apple-touch-icon",
      sizes: "144x144",
      url: "/favicon/apple-icon-144x144.png"
   },
   {
      rel: "apple-touch-icon",
      sizes: "152x152",
      url: "/favicon/apple-icon-152x152.png"
   },
   {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-icon-180x180.png"
   },
   {
      rel: "icon",
      sizes: "192x192",
      url: "/favicon/android-icon-192x192.png"
   },
   {
      rel: "icon",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png"
   },
   {
      rel: "icon",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png"
   },
   {
      rel: "icon",
      sizes: "96x96",
      url: "/favicon/favicon-96x96.png"
   },
   {
      rel: "manifest",
      url: "/favicon/manifest.json",
   },
]