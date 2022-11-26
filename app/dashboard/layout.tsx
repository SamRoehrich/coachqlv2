import Link from 'next/link'
import { Suspense } from 'react'
import DashboardHeader from './DashboardHeader'

export default async function Layout({
	children,
}: {
	children: React.ReactNode
}) {
	// const { firstName, lastName } = await getData()
	return (
		<div className="p-8">
			<header>
				<Suspense fallback={<div>Loading...</div>}>
					{/* @ts-expect-error Server Component */}
					<DashboardHeader />
				</Suspense>
			</header>
			<nav>
				<ul className="flex justify-between p-4 text-xl font-medium">
					<li>
						<Link href="/"> Home </Link>
					</li>
					<li>
						<Link href="/sessions"> Sessions </Link>
					</li>
					<li>
						<Link href="/calendar"> Calendar </Link>
					</li>
				</ul>
			</nav>
			<main>{children}</main>
			<footer>
				<p>footer</p>
			</footer>
		</div>
	)
}

// async function getData(): Promise<{ firstName: string; lastName: string }> {
// 	const data = await fetch('/api/hello', { method: 'GET' })
// 	return data.json()

// }
