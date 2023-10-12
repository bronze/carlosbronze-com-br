import type { APIRoute } from 'astro'
import renderOgImage from '~/renderOgImage.ts'
import { SiteMetadata } from '~/config'

const thisTitle = SiteMetadata.title
const WRITING_DESCRIPTION = SiteMetadata.description

export const GET: APIRoute = async ({ params, request }) => {
  // const response = await fetch(
  //   'https://docs.astro.build/assets/full-logo-light.png',
  // )
  // return new Response(await response.arrayBuffer())
  return renderOgImage(thisTitle, WRITING_DESCRIPTION)
}
