export default async function DashboardHeader() {
	const { name } = await getData()
	console.log(typeof window)
	return (
		<header className="flex items-center justify-between px-4 py-4 bg-white border-b border-gray-200">
			<div className="flex items-center">
				<h1 className="text-2xl font-semibold">Dashboard</h1>
			</div>
			<div className="flex items-center">
				<h1>Hi - {name}</h1>
			</div>
		</header>
	)
}

async function getData(): Promise<{ name: string }> {
	// TODO: FIgure out API routes
	const data = await fetch('/api/hello', { method: 'GET' })
	return data.json()
	// return {
	// 	name: 'John Doe',
	// }
}
