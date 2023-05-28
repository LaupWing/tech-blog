import { CloudinaryImage } from "@/components/images"

const SingleProjectPage = () => {
   return (
      <section className="layout">
         <CloudinaryImage
            publicId="samples/bike"
            alt="Bike"
            width={1440}
            height={792}
         />
      </section>
   )
}
export default SingleProjectPage