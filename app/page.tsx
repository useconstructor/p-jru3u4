import Link from 'next/link'

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-[1440px] border-x border-gray-200 bg-white text-gray-900">
      {/* Hero Section */}
      <section className="grid items-stretch overflow-hidden xl:grid-cols-2">
        {/* Left Column */}
        <div className="flex h-full min-h-full flex-col xl:border-r xl:border-gray-200">
          <section className="flex flex-col items-start gap-0 px-4 w-full border-b border-gray-200 py-4 sm:py-8 lg:py-12">
            <div className="flex items-center gap-2 font-mono text-sm font-normal uppercase leading-none tracking-normal text-gray-500">
              <svg aria-hidden="true" className="size-3.5 shrink-0 scale-95 text-[#ff4f00]" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H19V19M1 19L19 1" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2"></path>
              </svg>
              <span>AUTOMATE YOUR BUSINESS</span>
            </div>
            <h1 className="mt-2 max-w-5xl text-left text-5xl leading-none tracking-normal text-gray-900 sm:text-6xl lg:text-[64px] font-semibold">
              Supervise and Run your business with Artificial Intelligence.
            </h1>
            <p className="mt-4 max-w-2xl text-left text-xl leading-7 tracking-normal text-gray-500">
              Supervisor brings AI-first workflows, team visibility, and mobile access into a focused workspace.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-5 pb-2">
              <Link
                href="/book-a-call"
                className="inline-flex shrink-0 items-center border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 rounded-sm h-11 cursor-pointer justify-center gap-2 px-7 text-sm font-medium transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone" aria-hidden="true">
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
                Book a Call
              </Link>
              <Link
                href="/app"
                className="inline-flex shrink-0 items-center bg-gray-900 text-white hover:bg-gray-800 rounded-sm h-11 cursor-pointer justify-center gap-2 px-7 text-sm font-medium transition-all"
              >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </section>

          {/* Feature Grid */}
          <div className="mt-auto grid min-h-56 grid-cols-2 grid-rows-2 border-b border-gray-200">
            <div className="flex flex-col justify-center p-4 border-r border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Ask Questions</h3>
              <p className="text-sm text-gray-500 mt-1">Ask anything about your business and we'll find you the answer.</p>
            </div>
            <div className="flex flex-col justify-center p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Supervise</h3>
              <p className="text-sm text-gray-500 mt-1">Automatically and based on your preferences, review that everything is running smoothly.</p>
            </div>
            <div className="flex flex-col justify-center p-4 border-r border-gray-200">
              <h3 className="font-semibold text-gray-900">Schedule Actions</h3>
              <p className="text-sm text-gray-500 mt-1">Set up things which should run on a schedule, we'll run those for you.</p>
            </div>
            <div className="flex flex-col justify-center p-4">
              <h3 className="font-semibold text-gray-900">Mini Apps</h3>
              <p className="text-sm text-gray-500 mt-1">Build simple software to run your business, just by asking for it.</p>
            </div>
          </div>
        </div>

        {/* Right Column - Phone Mockup */}
        <div className="relative flex items-center justify-center bg-gray-50 p-8 min-h-[600px]">
          <div className="relative">
            <img
              src="https://trysupervisor.com/_next/image?url=%2Fimages%2Fiphone-17-black-portrait.png&w=3840&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
              alt="iPhone showing Supervisor app"
              className="relative z-10 max-h-[580px] w-auto"
            />
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="border-t border-gray-200">
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {/* Question Desk */}
          <div className="p-6 border-r border-b border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono uppercase text-gray-500">Question desk</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Answered</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Ask anything about the business</h3>
            <p className="text-sm text-gray-500 mb-4">Supervisor searches the right tools and returns the answer with sources.</p>
            <div className="bg-gray-50 rounded p-3 mb-3">
              <p className="text-sm text-gray-700">Why did revenue dip last week?</p>
            </div>
            <div className="flex gap-4 text-xs text-gray-500">
              <span>6 sources</span>
              <span>2 actions</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm text-gray-600">Which invoices are blocked?</p>
              <p className="text-sm text-gray-600">What changed in the pipeline?</p>
            </div>
          </div>

          {/* Operations Watch */}
          <div className="p-6 border-r border-b border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono uppercase text-gray-500">Operations watch</span>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">Watching</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Every team status in one view</h3>
            <p className="text-sm text-gray-500 mb-4">Dashboards, alerts, and owner follow ups stay connected to the work.</p>
            <div className="flex gap-4 text-xs text-gray-500 mb-3">
              <span>12 checks</span>
              <span>4 alerts</span>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Inventory sync healthy</p>
              <p className="text-sm text-gray-600">Two visits need owners</p>
              <p className="text-sm text-gray-600">Support backlog rising</p>
            </div>
          </div>

          {/* Scheduled Actions */}
          <div className="p-6 border-r border-b border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono uppercase text-gray-500">Scheduled actions</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Scheduled</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Recurring checks run on time</h3>
            <p className="text-sm text-gray-500 mb-4">Define the cadence once and Supervisor keeps the process moving.</p>
            <div className="flex gap-4 text-xs text-gray-500 mb-3">
              <span>18 runs</span>
              <span>7 routines</span>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Daily revenue review</p>
              <p className="text-sm text-gray-600">Friday access audit</p>
              <p className="text-sm text-gray-600">Hourly SLA check</p>
            </div>
          </div>

          {/* Mini Apps */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono uppercase text-gray-500">Mini apps</span>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">Built</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Build tools by asking for them</h3>
            <p className="text-sm text-gray-500 mb-4">Spin up focused tools like scanners, live maps, and order queues.</p>
            <div className="flex gap-4 text-xs text-gray-500 mb-3">
              <span>9 apps</span>
              <span>3 live</span>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Warehouse barcode scanner</p>
              <p className="text-sm text-gray-600">Live driver location map</p>
              <p className="text-sm text-gray-600">Ecommerce order list</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="p-6 border-r border-gray-200 text-center">
            <p className="text-3xl font-bold text-gray-900">118</p>
            <p className="text-xs text-gray-500 mt-1">Questions answered</p>
            <p className="text-xs text-gray-400">Sourced answers delivered</p>
          </div>
          <div className="p-6 border-r border-gray-200 text-center">
            <p className="text-3xl font-bold text-gray-900">104</p>
            <p className="text-xs text-gray-500 mt-1">Alerts reviewed</p>
            <p className="text-xs text-gray-400">Signals checked automatically</p>
          </div>
          <div className="p-6 border-r border-gray-200 text-center">
            <p className="text-3xl font-bold text-gray-900">86</p>
            <p className="text-xs text-gray-500 mt-1">Scheduled runs</p>
            <p className="text-xs text-gray-400">Checks completed on cadence</p>
          </div>
          <div className="p-6 border-r border-gray-200 text-center">
            <p className="text-3xl font-bold text-gray-900">41</p>
            <p className="text-xs text-gray-500 mt-1">Mini apps built</p>
            <p className="text-xs text-gray-400">Internal tools generated</p>
          </div>
          <div className="p-6 text-center">
            <p className="text-3xl font-bold text-gray-900">280</p>
            <p className="text-xs text-gray-500 mt-1">Sources searched</p>
            <p className="text-xs text-gray-400">Docs, tools, and records covered</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 border-t border-gray-200">
          <div className="p-6 border-r border-gray-200 text-center">
            <p className="text-3xl font-bold text-gray-900">97%</p>
            <p className="text-xs text-gray-500 mt-1">Answer speed</p>
            <p className="text-xs text-gray-400">Questions resolved without handoff</p>
          </div>
          <div className="p-6 border-r border-gray-200 text-center">
            <p className="text-3xl font-bold text-gray-900">90%</p>
            <p className="text-xs text-gray-500 mt-1">Escalation health</p>
            <p className="text-xs text-gray-400">Issues routed before they stall</p>
          </div>
          <div className="p-6 border-r border-gray-200 text-center">
            <p className="text-3xl font-bold text-gray-900">99%</p>
            <p className="text-xs text-gray-500 mt-1">On-time checks</p>
            <p className="text-xs text-gray-400">Runs completed before deadline</p>
          </div>
          <div className="p-6 border-r border-gray-200 text-center">
            <p className="text-3xl font-bold text-gray-900">4.9</p>
            <p className="text-xs text-gray-500 mt-1">Builder satisfaction</p>
            <p className="text-xs text-gray-400">Average internal tool rating</p>
          </div>
          <div className="p-6 text-center">
            <p className="text-3xl font-bold text-gray-900">96%</p>
            <p className="text-xs text-gray-500 mt-1">Processes covered</p>
            <p className="text-xs text-gray-400">Recurring work under control</p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 px-4 border-b border-gray-200">
        <div className="flex items-center gap-2 font-mono text-sm font-normal uppercase leading-none text-orange-500 mb-4">
          <span>SET IT UP IN 5 MINUTES</span>
        </div>
        <h2 className="text-4xl font-semibold text-gray-900 mb-12">How it Works.</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <span className="text-5xl font-light text-gray-300 mb-4">01</span>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect and Explain</h3>
            <p className="text-gray-500">Link your tools, files and workflows, give us as much context as possible about how your business works.</p>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl font-light text-gray-300 mb-4">02</span>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Invite your Team</h3>
            <p className="text-gray-500">It's as simple as entering their email and role, we'll handle the rest.</p>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl font-light text-gray-300 mb-4">03</span>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Start using it</h3>
            <p className="text-gray-500">Set it up in your favorite platform.</p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4">
        <div className="flex items-center gap-2 font-mono text-sm font-normal uppercase leading-none text-orange-500 mb-4">
          <span>Industries</span>
        </div>
        <h2 className="text-4xl font-semibold text-gray-900 mb-12">Built around the way your team actually operates.</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Startup */}
          <Link href="/for/startup" className="group block border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all">
            <div className="aspect-video overflow-hidden">
              <img
                src="https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fstartup-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
                alt="Startup"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">Startup</h3>
              <p className="text-sm text-gray-500 mb-2">Keep launches, product, customers, hiring and finance in check and automated as you scale.</p>
              <span className="text-sm text-orange-500 group-hover:text-orange-600">See More</span>
            </div>
          </Link>

          {/* Local Business */}
          <Link href="/for/local-business" className="group block border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all">
            <div className="aspect-video overflow-hidden">
              <img
                src="https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Flocal-business-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
                alt="Local Business"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">Local Business</h3>
              <p className="text-sm text-gray-500 mb-2">Coordinate daily work, appointments, staff checks, and customer follow ups.</p>
              <span className="text-sm text-orange-500 group-hover:text-orange-600">See More</span>
            </div>
          </Link>

          {/* Logistics */}
          <Link href="/for/logistics" className="group block border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all">
            <div className="aspect-video overflow-hidden">
              <img
                src="https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Flogistics-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
                alt="Logistics"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">Logistics</h3>
              <p className="text-sm text-gray-500 mb-2">Track routes, exceptions, handoffs, and updates without control-tower sprawl.</p>
              <span className="text-sm text-orange-500 group-hover:text-orange-600">See More</span>
            </div>
          </Link>

          {/* Non Profits */}
          <Link href="/for/non-profits" className="group block border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all">
            <div className="aspect-video overflow-hidden">
              <img
                src="https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fnon-profits-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
                alt="Non Profits"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">Non Profits</h3>
              <p className="text-sm text-gray-500 mb-2">Keep programs, volunteers, donors, and reports moving with less manual chasing.</p>
              <span className="text-sm text-orange-500 group-hover:text-orange-600">See More</span>
            </div>
          </Link>

          {/* Restaurants */}
          <Link href="/for/restaurants" className="group block border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all">
            <div className="aspect-video overflow-hidden">
              <img
                src="https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Frestaurants-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
                alt="Restaurants"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">Restaurants</h3>
              <p className="text-sm text-gray-500 mb-2">Watch shifts, vendors, service issues, and repeat checks from one calm lane.</p>
              <span className="text-sm text-orange-500 group-hover:text-orange-600">See More</span>
            </div>
          </Link>

          {/* Hotels and Stays */}
          <Link href="/for/hotels-and-stays" className="group block border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all">
            <div className="aspect-video overflow-hidden bg-gray-100">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span>Hotels & Stays</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">Hotels and Stays</h3>
              <p className="text-sm text-gray-500 mb-2">Coordinate guest requests, housekeeping, maintenance, and team handoffs.</p>
              <span className="text-sm text-orange-500 group-hover:text-orange-600">See More</span>
            </div>
          </Link>

          {/* Ecommerce */}
          <Link href="/for/ecommerce" className="group block border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all">
            <div className="aspect-video overflow-hidden bg-gray-100">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span>Ecommerce</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">Ecommerce</h3>
              <p className="text-sm text-gray-500 mb-2">Monitor orders, inventory, support loops, campaigns, and fulfillment blockers.</p>
              <span className="text-sm text-orange-500 group-hover:text-orange-600">See More</span>
            </div>
          </Link>

          {/* Field Services */}
          <Link href="/for/field-services" className="group block border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all">
            <div className="aspect-video overflow-hidden bg-gray-100">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span>Field Services</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">Field Services</h3>
              <p className="text-sm text-gray-500 mb-2">Give mobile teams a clearer way to report, escalate, and finish the work.</p>
              <span className="text-sm text-orange-500 group-hover:text-orange-600">See More</span>
            </div>
          </Link>

          {/* Gyms and Studios */}
          <Link href="/for/gyms-and-studios" className="group block border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all">
            <div className="aspect-video overflow-hidden bg-gray-100">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span>Gyms & Studios</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">Gyms and Studios</h3>
              <p className="text-sm text-gray-500 mb-2">Run classes, memberships, staff tasks, and member follow ups without extra admin.</p>
              <span className="text-sm text-orange-500 group-hover:text-orange-600">See More</span>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 border-t border-gray-200 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Ready to get started?</h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">Supervisor brings AI-first workflows, team visibility, and mobile access into a focused workspace.</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/book-a-call"
            className="inline-flex shrink-0 items-center border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 rounded-sm h-11 cursor-pointer justify-center gap-2 px-7 text-sm font-medium transition-all"
          >
            Book a Call
          </Link>
          <Link
            href="/app"
            className="inline-flex shrink-0 items-center bg-gray-900 text-white hover:bg-gray-800 rounded-sm h-11 cursor-pointer justify-center gap-2 px-7 text-sm font-medium transition-all"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  )
}