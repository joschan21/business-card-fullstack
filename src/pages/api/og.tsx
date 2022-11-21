import { ImageResponse } from '@vercel/og'
import { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  runtime: 'experimental-edge',
}

const og = async (req: NextApiRequest, res: NextApiResponse) => {
  // Get query params from request url
  const url = new URL(req.url!, 'http://localhost:3000')
  const username = url.searchParams.get('username')
  const title = url.searchParams.get('title')
  const imgSrc = url.searchParams.get('imgSrc')

  if (!username) return res.status(400).json({ error: 'username is required' })

  return new ImageResponse(
    (
      <div style={{ fontFamily: 'sans-serif' }} tw='relative w-[30rem] h-[15rem] flex flex-col p-10'>
        <div tw='flex flex-row'>
          <img
            src={imgSrc!}
            tw='w-24 h-24 rounded-full shadow-2xl mb-4 mr-6'
            style={{ objectPosition: 'center', objectFit: 'cover' }}
          />
          <div tw='flex flex-col ml-4'>
            <h1 tw='text-2xl font-bold -mb-2 text-white'>{username}</h1>
            <h2 tw='text-base font-medium text-gray-300'>{title}</h2>
          </div>
        </div>
      </div>
    ),
    {
      width: 480,
      height: 240,

      // do not cache image
      headers: {
        'Cache-Control': 'no-cache',
      },
    }
  )
}

export default og
