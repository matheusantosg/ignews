import Prismic from '@prismicio/client'

export function createClient(req: unknown) {
  const client = Prismic.createClient(process.env.PRISMIC_ENDPOINT,
    {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    })

    return client
}