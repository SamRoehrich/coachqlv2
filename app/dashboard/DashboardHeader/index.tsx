export default async function DashboardHeader() {
	const { firstName, lastName } = await getData()
	console.log(firstName, lastName)
	return (
		<header className="flex items-center justify-between px-4 py-4 bg-white border-b border-gray-200">
			<div className="flex items-center">
				<h1 className="text-2xl font-semibold">Dashboard</h1>
			</div>
			<div className="flex items-center">
				<h1>Hi</h1>
			</div>
		</header>
	)
}

async function getData(): Promise<
	{ firstName: string; lastName: string } | any
> {
	// TODO: FIgure out API routes
	const data = await fetch(`http://localhost:3000/api/user`)
	// console.log(data.json())
	return data
}
