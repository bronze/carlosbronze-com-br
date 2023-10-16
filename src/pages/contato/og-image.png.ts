import type { APIRoute } from 'astro'
import renderOgImage from '~/renderOgImage'
// import renderOgImage from '~/renderOgImageTitles'
import { SiteMetadata } from '~/config'

const thisTitle = 'Contato'
const thisDescription = 'Como entrar em contato comigo'

export const GET: APIRoute = async ({ params, request }) => {
  // const response = await fetch(
  //   'https://docs.astro.build/assets/full-logo-light.png',
  // )
  // return new Response(await response.arrayBuffer())
  return renderOgImage(thisTitle, thisDescription)
}
