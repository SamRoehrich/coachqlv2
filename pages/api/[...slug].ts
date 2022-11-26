import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// call your backend API here
	const data = await (
		await fetch(`${process.env.API_ENDPOINT}/${req.query.slug}`)
	).json()
	// res.statusCode = data.statusCode
	console.log(data)
	res.json(data)
}
