export default async function Layout({
	children,
}: {
	children: React.ReactNode
}) {
	const { name } = getData()
	return (
		<div className="p-8">
			<header>
				<h1 className="">Hello, {name}</h1>
			</header>
			<main>{children}</main>
			<footer>
				<p>footer</p>
			</footer>
		</div>
	)
}

function getData() {
	return {
		name: 'Joe',
	}
}
