import React from 'react'
import { Link } from 'react-router-dom'
const Page404 = () => {
  return (
    <>
    <section className="flex items-center h-screen p-16 dark:bg-gray-900 dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-3xl font-semibold  md:text-2xl">Sorry, we couldn't find this page.</p>
			<Link to="/dashboard"><button className='mt-10 px-8 py-3 text-white font-semibold rounded bg-light-blue-400'>Go to Dashboard</button></Link>
		</div>
	</div>
</section>
    </>
  )
}

export default Page404