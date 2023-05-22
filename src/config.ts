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
   href: string
   sizes?: string
   type?: string
}

export const favicons: Array<Favicons> = [
   {
      rel: "apple-touch-icon",
      sizes: "57x57",
      href: "/favicon/apple-icon-57x57.png"
   }
]