
export const inter400 = fetch(
   new URL("@/assets/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export const inter700 = fetch(
   new URL("@/assets/fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export const runtime = "edge"

export async function GET(request: Request) {
   const interRegular = await inter400
   const interBold = await inter700

   const { searchParams } = new URL(request.url)

   const siteName = searchParams.get("siteName")
   const description = searchParams.get("description")
   const theme = searchParams.get("theme")
   const logo = searchParams.get("logo")
   const templateTitle = searchParams.get("templateTitle")
   const logoWidth = searchParams.get("logoWidth")
   const logoHeight = searchParams.get("logoHeight")
 
   const query = {
      siteName: siteName ?? "Site Name",
      description: description ?? "Description",
      theme: theme ?? "dark",
      logo: logo ?? `${process.env.SITE_URL}/images/logo.png`,
      logoWidth: logoWidth ? +logoWidth : 100,
      logoHeight: logoHeight ? +logoHeight : 100 
   }
}