import { CloudinaryImage } from "@/components/images"
import { getFiles } from "@/lib/mdx"

const fetchPost = async (slug: string) => {
   // const params = useParams()
   // console.log(params)
} 

interface PageProps {
   params: {
      slug: string
   }
}

const SingleBlogPage = async (props: PageProps) => {
   const post = await fetchPost(props.params.slug)
   return (
      <main>
         <section className="layout">
            <div className="pb-4">
               <CloudinaryImage
                  publicId="samples/bike"
                  alt="Bike"
                  width={1200}
                  height={(1200 * 2) /5}
                  aspect={{
                     height: 2,
                     width: 5
                  }}
               />
               <h1 className="mt-4"></h1>
            </div>
         </section>
      </main>
   )
}

export default SingleBlogPage

export const dynamicParams = false

export async function generateStaticParams() {
   const posts = await getFiles("blog")
   
   return posts.map((p) => ({
      slug: p.replace(/\.mdx/, "")
   }))
}