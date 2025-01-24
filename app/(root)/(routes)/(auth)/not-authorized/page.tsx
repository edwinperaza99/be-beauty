export default function NotAuthorized() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-3xl font-bold text-red-600">Not Authorized</h1>
			<p className="mt-4 text-lg">
				You do not have permission to access this page.
			</p>
		</div>
	);
}
