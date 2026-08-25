import Link from 'next/link'

export default function Page() {
  const industries = [
    {
      number: '01',
      title: 'Startup',
      description: 'Keep launches, product, customers, hiring and finance in check and automated as you scale.',
      image: 'https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fstartup-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf',
      href: '/for/startup'
    },
    {
      number: '02',
      title: 'Local Business',
      description: 'Coordinate daily work, appointments, staff checks, and customer follow ups.',
      image: 'https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Flocal-business-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf',
      href: '/for/local-business'
    },
    {
      number: '03',
      title: 'Logistics',
      description: 'Track routes, exceptions, handoffs, and updates without control-tower sprawl.',
      image: 'https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Flogistics-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf',
      href: '/for/logistics'
    },
    {
      number: '04',
      title: 'Non Profits',
      description: 'Keep programs, volunteers, donors, and reports moving with less manual chasing.',
      image: 'https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fnon-profits-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf',
      href: '/for/non-profits'
    },
    {
      number: '05',
      title: 'Ecommerce',
      description: 'Monitor orders, inventory, support loops, campaigns, and fulfillment blockers.',
      image: 'https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fecommerce-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf',
      href: '/for/ecommerce'
    },
    {
      number: '06',
      title: 'Hotels and Stays',
      description: 'Coordinate guest requests, housekeeping, maintenance, and team handoffs.',
      image: 'https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fhotels-and-stays-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf',
      href: '/for/hotels-and-stays'
    },
    {
      number: '07',
      title: 'Restaurants',
      description: 'Watch shifts, vendors, service issues, and repeat checks from one calm lane.',
      image: 'https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Frestaurants-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf',
      href: '/for/restaurants'
    },
    {
      number: '08',
      title: 'Field Services',
      description: 'Give mobile teams a clearer way to report, escalate, and finish the work.',
      image: 'https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Ffield-services-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf',
      href: '/for/field-services'
    },
    {
      number: '09',
      title: 'Gyms and Studios',
      description: 'Run classes, memberships, staff tasks, and member follow ups without extra admin.',
      image: 'https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fgyms-and-studios-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf',
      href: '/for/gyms-and-studios'
    },
    {
      number: '10',
      title: 'Health Care and Clinics',
      description: 'Keep patient operations, staffing, forms, and follow ups coordinated.',
      image: 'https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fhealth-care-and-clinics-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf',
      href: '/for/healthcare'
    },
    {
      number: '11',
      title: 'Schools and Education',
      description: 'Coordinate study plans, schedules, classes, parent communications, staff tasks and student follow ups.',
      image: 'https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fschools-and-education-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf',
      href: '/for/schools-and-education'
    },
    {
      number: '12',
      title: 'Agencies and Firms',
      description: 'Coordinate client work, cases, campaigns, approvals, and team updates in one operating view.',
      image: 'https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fagencies-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf',
      href: '/for/agencies'
    },
    {
      number: '13',
      title: 'Investors',
      description: 'Turn portfolio updates, founder asks, diligence notes, and follow ups into a calmer investing workflow.',
      image: 'https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Finvestors-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf',
      href: '/for/investors'
    },
    {
      number: '14',
      title: 'Solo Practice',
      description: 'Manage clients, tasks, notes, and follow-through without a heavier system.',
      image: 'https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fsolo-practice-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf',
      href: '/for/solo-practice'
    },
    {
      number: '15',
      title: 'Personal',
      description: 'Organize your life in a central place, trips, reminders, medications, taxes, habits and routines.',
      image: 'https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fpersonal-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf',
      href: '/for/personal'
    },
    {
      number: '16',
      title: 'Groups and Teams',
      description: 'Coordinate plans, trips, bookings, parties, payments, games.',
      image: 'https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fgroups-and-trips-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf',
      href: '/for/groups-and-trips'
    }
  ]

  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto text-center">
        <p className="text-orange-500 font-mono text-sm uppercase tracking-wide mb-4">
          Industries
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto">
          Built around the way your team actually operates.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Start from familiar operating patterns, then let Supervisor adapt to the details of your work.
        </p>
      </section>

      {/* Industries Grid */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        {/* Row 1 - 2 items */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {industries.slice(0, 2).map((industry) => (
            <Link
              key={industry.number}
              href={industry.href}
              className="group relative block overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]"
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-white/70 font-mono text-sm">{industry.number}</span>
                  <span className="text-orange-500 text-sm font-medium group-hover:underline">See More</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{industry.title}</h2>
                <p className="text-white/80 text-sm">{industry.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Row 2 - 3 items */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {industries.slice(2, 5).map((industry) => (
            <Link
              key={industry.number}
              href={industry.href}
              className="group relative block overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]"
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-white/70 font-mono text-sm">{industry.number}</span>
                  <span className="text-orange-500 text-sm font-medium group-hover:underline">See More</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{industry.title}</h2>
                <p className="text-white/80 text-sm">{industry.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Row 3 - 3 items */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {industries.slice(5, 8).map((industry) => (
            <Link
              key={industry.number}
              href={industry.href}
              className="group relative block overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]"
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-white/70 font-mono text-sm">{industry.number}</span>
                  <span className="text-orange-500 text-sm font-medium group-hover:underline">See More</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{industry.title}</h2>
                <p className="text-white/80 text-sm">{industry.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Row 4 - 2 items */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {industries.slice(8, 10).map((industry) => (
            <Link
              key={industry.number}
              href={industry.href}
              className="group relative block overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]"
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-white/70 font-mono text-sm">{industry.number}</span>
                  <span className="text-orange-500 text-sm font-medium group-hover:underline">See More</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{industry.title}</h2>
                <p className="text-white/80 text-sm">{industry.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Row 5 - 3 items */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {industries.slice(10, 13).map((industry) => (
            <Link
              key={industry.number}
              href={industry.href}
              className="group relative block overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]"
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-white/70 font-mono text-sm">{industry.number}</span>
                  <span className="text-orange-500 text-sm font-medium group-hover:underline">See More</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{industry.title}</h2>
                <p className="text-white/80 text-sm">{industry.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Row 6 - 3 items */}
        <div className="grid md:grid-cols-3 gap-6">
          {industries.slice(13, 16).map((industry) => (
            <Link
              key={industry.number}
              href={industry.href}
              className="group relative block overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]"
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-white/70 font-mono text-sm">{industry.number}</span>
                  <span className="text-orange-500 text-sm font-medium group-hover:underline">See More</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{industry.title}</h2>
                <p className="text-white/80 text-sm">{industry.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}