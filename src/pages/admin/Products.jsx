
function Products() {
  return (
    <div>
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5  mx-auto">
    <div className="lg:w-4.8/5  mx-auto flex flex-evenly">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
         Ferrari
        </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
          SF90 STRADALE
        </h1>
        <div className="flex mb-4">
          <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
            Description
          </a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
            Reviews
          </a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
            Details
          </a>
        </div>
        <p className="leading-relaxed mb-4">
        The car’s name encapsulates the true significance of all that has been achieved in terms of performance. The reference to the 90th anniversary of the foundation of Scuderia Ferrari underscores the strong link that has always existed between Ferrari’s track and road cars. A brilliant encapsulation of the most advanced technologies developed in Maranello, the SF90 Stradale is also the perfect demonstration of how Ferrari immediately transitions the knowledge and skills it acquires in competition to its production cars. 
        </p>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Color</span>
          <span className="ml-auto text-gray-900">Black</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Type</span>
          <span className="ml-auto text-gray-900">Supercar</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">Catagory</span>
          <span className="ml-auto text-gray-900">Luxury</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">
            $589999999.99
          </span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            More
          </button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
        </div>
      </div>
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-100 object-cover object-center rounded"
        src="/sf90.png"
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Products