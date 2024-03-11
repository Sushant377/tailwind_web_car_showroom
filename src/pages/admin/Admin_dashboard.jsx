

export default function Admin() {

  return (
<div className="">
 
   <div>
      <div className="  text-2xl font-bold mb-1"> <h2 >Dashboard</h2>
</div>

      <section className="text-gray-600 body-font">
  <div className="container px-5  mx-auto flex flex-col">
    <div className="lg:w-5/6 mx-auto">
      <div className="rounded-lg h-40 overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src="carcover.png"
        />
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-10 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round" 
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"   
                      />
              <circle cx={12} cy={7} r={4} />
            </svg>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
              Phoebe Caulfield
            </h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
            <p className="text-base">
              Raclette knausgaard hella meggs normcore williamsburg enamel pin
              sartorial venmo tbh hot chicken gentrify portland.
            </p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">
            Meggings portland fingerstache lyft, post-ironic fixie man bun banh
            mi umami everyday carry hexagon locavore direct trade art party.
            Locavore small batch listicle gastropub farm-to-table lumbersexual
            salvia messenger bag. Coloring book flannel truffaut craft beer
            drinking vinegar sartorial, disrupt fashion axe normcore meh
            butcher. Portland  scenester vexillologist forage post-ironic
            asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst
            before they sold out four loko. 3 wolf moon brooklyn.
          </p>
          <a className="text-indigo-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      
    </div>
   </div>
)}
