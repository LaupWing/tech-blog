
export const inter400 = fetch(
   new URL("@/assets/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export const inter700 = fetch(
   new URL("@/assets/fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export const runtime = "edge"