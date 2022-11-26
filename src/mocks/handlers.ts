import { rest } from 'msw'

export const handlers = [
	rest.get('/api/auth/user', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				firstName: 'MSW',
				lastName: 'Maverick',
			})
		)
	}),

	rest.get('/api/hello', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				firstName: 'John',
				lastName: 'Maverick',
			})
		)
	}),

	rest.post('/api/login', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.cookie('loggedIn', 'true'),
			ctx.json({
				firstName: 'John',
				lastName: 'Maverick',
			})
		)
	}),
]
