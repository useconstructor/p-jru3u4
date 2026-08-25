import Link from "next/link";

export default function Page() {
  const useCases = [
    {
      number: "01",
      title: "Revenue desk",
      description: "Ask for metrics, sources, and next actions without spreadsheet hunts.",
      href: "/use-cases/revenue-desk",
    },
    {
      number: "02",
      title: "Field operations",
      description: "Keep frontline teams moving with mobile-first tasks and checks.",
      href: "/use-cases/field-operations",
    },
    {
      number: "03",
      title: "Manager approvals",
      description: "Prepare high-risk decisions with the context reviewers need.",
      href: "/use-cases/manager-approvals",
    },
    {
      number: "04",
      title: "Customer follow ups",
      description: "Catch open loops across support, success, and account work.",
      href: "/use-cases/customer-follow-ups",
    },
    {
      number: "05",
      title: "Finance controls",
      description: "Review spend, invoices, and policy exceptions before they spread.",
      href: "/use-cases/finance-controls",
    },
    {
      number: "06",
      title: "Hiring onboarding",
      description: "Coordinate offers, equipment, access, and first-week readiness.",
      href: "/use-cases/hiring-onboarding",
    },
    {
      number: "07",
      title: "Incident response",
      description: "Turn alerts, owners, and updates into one calm response lane.",
      href: "/use-cases/incident-response",
    },
    {
      number: "08",
      title: "Vendor operations",
      description: "Monitor renewals, documents, tasks, and vendor follow-through.",
      href: "/use-cases/vendor-operations",
    },
    {
      number: "09",
      title: "Executive briefs",
      description: "Generate crisp operating updates from live team context.",
      href: "/use-cases/executive-briefs",
    },
    {
      number: "10",
      title: "Access reviews",
      description: "Check permissions, owners, and exceptions with audit-ready logs.",
      href: "/use-cases/access-reviews",
    },
    {
      number: "11",
      title: "Launch readiness",
      description: "Align product, ops, support, and go-to-market before launch day.",
      href: "/use-cases/launch-readiness",
    },
    {
      number: "12",
      title: "Knowledge base",
      description: "Turn scattered docs into answers teams can actually use.",
      href: "/use-cases/knowledge-base",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-28 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <p className="text-orange-500 font-mono text-sm uppercase tracking-wide mb-4">
            Use Cases
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Built for the daily rhythms of modern teams
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            Coordinate field work, manager reviews, handoffs, and follow ups without scattering context.
          </p>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        {/* First row - 2 columns */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {useCases.slice(0, 2).map((useCase) => (
            <Link
              key={useCase.number}
              href={useCase.href}
              className="group block border border-gray-200 rounded-sm p-8 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="flex flex-col h-full">
                <span className="text-gray-400 font-mono text-sm mb-4">{useCase.number}</span>
                <h2 className="text-2xl font-semibold mb-3">{useCase.title}</h2>
                <p className="text-gray-600 mb-6 flex-grow">{useCase.description}</p>
                <span className="text-orange-500 text-sm font-medium group-hover:text-red-500 transition-colors">
                  See More →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Second row - 3 columns */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {useCases.slice(2, 5).map((useCase) => (
            <Link
              key={useCase.number}
              href={useCase.href}
              className="group block border border-gray-200 rounded-sm p-8 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="flex flex-col h-full">
                <span className="text-gray-400 font-mono text-sm mb-4">{useCase.number}</span>
                <h2 className="text-xl font-semibold mb-3">{useCase.title}</h2>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{useCase.description}</p>
                <span className="text-orange-500 text-sm font-medium group-hover:text-red-500 transition-colors">
                  See More →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Third row - 3 columns */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {useCases.slice(5, 8).map((useCase) => (
            <Link
              key={useCase.number}
              href={useCase.href}
              className="group block border border-gray-200 rounded-sm p-8 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="flex flex-col h-full">
                <span className="text-gray-400 font-mono text-sm mb-4">{useCase.number}</span>
                <h2 className="text-xl font-semibold mb-3">{useCase.title}</h2>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{useCase.description}</p>
                <span className="text-orange-500 text-sm font-medium group-hover:text-red-500 transition-colors">
                  See More →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Fourth row - 4 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.slice(8, 12).map((useCase) => (
            <Link
              key={useCase.number}
              href={useCase.href}
              className="group block border border-gray-200 rounded-sm p-6 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="flex flex-col h-full">
                <span className="text-gray-400 font-mono text-sm mb-3">{useCase.number}</span>
                <h2 className="text-lg font-semibold mb-2">{useCase.title}</h2>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{useCase.description}</p>
                <span className="text-orange-500 text-sm font-medium group-hover:text-red-500 transition-colors">
                  See More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}