import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main>
			<h1>Hello World</h1>
			<div className="flex flex-col">
				<Link href="/users">UsersLink</Link>
				<a href="/users">UsersATag</a>
			</div>
		</main>
	);
}
