import satori from 'satori'
import fs from 'fs/promises'
import sharp from 'sharp'
import { html } from 'satori-html'
import { Resvg } from '@resvg/resvg-js'

const interRegFile = fs.readFile('./public/fonts/Inter-Regular.woff')
const interMedFile = fs.readFile('./public/fonts/Inter-Medium.woff')
const interSBdFile = fs.readFile('./public/fonts/Inter-SemiBold.woff')
const interBldFile = fs.readFile('./public/fonts/Inter-Bold.woff')

const dimensions = {
  width: 1200,
  height: 630,
}

export default async function renderOgImage(
  title: string,
  description: string,
) {
  const interReg = await interRegFile
  const interMed = await interMedFile
  const interSBd = await interSBdFile
  const interBld = await interBldFile
  const markup = html`<div tw="bg-[#3b4252] flex flex-col w-full h-full">
    <div tw="flex flex-col w-full h-4/5 p-10 justify-center">
      <div
        tw="flex w-full flex-col text-6xl font-bold leading-snug tracking-tight text-slate-200">
        <div tw="mb-6 text-9xl">${title}</div>
        ${description}
      </div>
    </div>
    <div
      tw="w-full h-1/5 border-t border-zinc-700/50 flex p-10 items-center justify-between text-2xl">
      <div tw="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          xml:space="preserve"
          viewBox="0 0 800 800"
          fill="#450a0a">
          <path
            d="M410.54 26.001C612.764 31.575 775 197.275 775 400.858c0 167.938-110.402 310.099-262.583 357.858 32.738-17.624 59.655-42.827 78.991-74.735 23.28-38.426 32.564-91.532 22.996-131.827-4.559-19.198-13.195-36.818-23.902-53.025 15.257-29.462 23.878-62.879 23.878-98.271 0-118.21-96.17-214.383-214.377-214.383-4.385 0-8.741.133-13.055.393-3.445-49.104 3.585-104.305 23.592-160.867ZM191.82 712.809C91.237 645.553 25 530.938 25 400.858 25 193.755 192.896 25.855 400.003 25.855c.994 0 1.987.004 2.967.012-11.197 10.851-21.891 21.796-33.22 32.739-41.98 40.545-79.606 81.686-116.438 130.328-47.595 62.872-93.502 136.954-114.293 233.181-26.976 124.915-11.607 225.906 52.801 290.694Z"></path>
          <path
            d="M329.812 206.553c.598-.134.659.274.7.704-11.882 69.282 2.233 131.214 30.19 170.617 28.896 40.704 75.463 65.334 115.152 94.088 19.586 14.183 39.423 31.533 49.847 54.765 11.131 24.787 11.68 60.146 1.41 87.756-17.655 47.486-59.776 80.452-117.259 91.987-34.915 7.013-67.37 3.264-93.38-4.211-79.736-22.914-115.567-95.614-113.052-200.81 1.558-64.557 22.018-117.937 44.945-164.302 17.745-35.873 36.92-67.007 58.98-98.3 7.636-10.835 14.6-21.538 22.467-32.294"></path>
        </svg>
        <span tw="ml-3 text-slate-300">carlosbronze.com.br</span>
      </div>
      <div tw="flex items-center">
        <div tw="flex flex-col ml-4">
          <span tw="text-slate-300">Carlos Bronze</span>
          <span tw="text-slate-300">@carlosbronze</span>
        </div>
      </div>
    </div>
  </div>`

  const svg = await satori(markup, {
    fonts: [
      {
        name: 'Inter',
        data: interReg,
        weight: 400,
      },
      {
        name: 'Inter',
        data: interBld,
        weight: 700,
      },
    ],
    height: dimensions.height,
    width: dimensions.width,
  })

  // const png = await sharp(Buffer.from(svg)).png().toBuffer()

  // return new Response(png, {
  //   headers: {
  //     'Content-Type': 'image/png',
  //   },
  // })

  const image = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: dimensions.width,
    },
  }).render()

  return new Response(image.asPng(), {
    headers: {
      'Content-Type': 'image/png',
    },
  })
}

// const svg = await satori(
//   {
//     type: 'div',
//     props: {
//       children: [
//         {
//           type: 'h1',
//           props: {
//             children: title,
//             style: {
//               fontFamily: 'Inter',
//               fontSize: '80px',
//               fontWeight: 'bold',
//               lineHeight: 1,
//               color: '#eceff4',
//               marginBottom: '32px',
//             },
//           },
//         },
//         {
//           type: 'span',
//           props: {
//             children: description,
//             style: {
//               color: '#eceff4',
//               fontFamily: 'Inter',
//               fontSize: '60px',
//             },
//           },
//         },
//       ],
//       style: {
//         width: 1200,
//         height: 630,
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         borderBottom: '20px solid #5e81ac',
//         backgroundImage: `url('data:image/svg+xml,%3Csvg width='116' height='100' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M57.5 0L115 100H0L57.5 0z' /%3E%3C/svg%3E')`,
//         // backgroundColor: '#3b4252',
//         padding: '80px',
//       },
//     },
//   },
//   {
//     width: 1200,
//     height: 630,
//     fonts: [
//       {
//         name: 'Inter',
//         data: interReg,
//         style: 'normal',
//         weight: 400,
//       },
//       {
//         name: 'Inter',
//         data: interMed,
//         style: 'normal',
//         weight: 500,
//       },
//       {
//         name: 'Inter',
//         data: interSBd,
//         style: 'normal',
//         weight: 600,
//       },
//       {
//         name: 'Inter',
//         data: interBld,
//         style: 'normal',
//         weight: 700,
//       },
//     ],
//   },
// )

// const png = await sharp(Buffer.from(svg)).png().toBuffer()

// return new Response(png, {
//   headers: {
//     'Content-Type': 'image/png',
//   },
// })
