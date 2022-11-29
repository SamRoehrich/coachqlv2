import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	console.log('endpoint called')
	const data = await fetch(`${process.env.API_ENDPOINT}/${req.query.slug}`)
	// res.statusCode = data.statusCode
	console.log(data)
	res.json(data)
}
