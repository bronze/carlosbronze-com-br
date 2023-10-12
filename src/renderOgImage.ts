import satori from 'satori'
import fs from 'fs/promises'
import sharp from 'sharp'

const interRegFile = fs.readFile('./public/fonts/Inter-Regular.woff')
const interMedFile = fs.readFile('./public/fonts/Inter-Medium.woff')
const interSBdFile = fs.readFile('./public/fonts/Inter-SemiBold.woff')
const interBldFile = fs.readFile('./public/fonts/Inter-Bold.woff')
const rubberDuckFile = fs.readFile('./public/duck_outline-r.svg')

export default async function renderOgImage(
  title: string,
  description: string,
) {
  const interReg = await interRegFile
  const interMed = await interMedFile
  const interSBd = await interSBdFile
  const interBld = await interBldFile
  // const rubberDuck = await rubberDuckFile
  const base64Pattern = (await rubberDuckFile).toString('base64')

  const svg = await satori(
    {
      type: 'div',
      props: {
        children: [
          {
            type: 'h1',
            props: {
              children: title,
              style: {
                fontFamily: 'Inter',
                fontSize: '80px',
                fontWeight: 'bold',
                lineHeight: 1,
                color: '#eceff4',
                marginBottom: '32px',
              },
            },
          },
          {
            type: 'span',
            props: {
              children: description,
              style: {
                color: '#eceff4',
                fontFamily: 'Inter',
                fontSize: '60px',
              },
            },
          },
        ],
        style: {
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderBottom: '20px solid #5e81ac',
          backgroundImage: `url('data:image/png;base64,${base64Pattern}')`,
          backgroundColor: '#3b4252',
          padding: '80px',
        },
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: interReg,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Inter',
          data: interMed,
          style: 'normal',
          weight: 500,
        },
        {
          name: 'Inter',
          data: interSBd,
          style: 'normal',
          weight: 600,
        },
        {
          name: 'Inter',
          data: interBld,
          style: 'normal',
          weight: 700,
        },
      ],
    },
  )

  const png = await sharp(Buffer.from(svg)).png().toBuffer()

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
    },
  })
}
