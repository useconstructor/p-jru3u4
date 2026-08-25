import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto text-center">
        <p className="text-orange-500 font-mono text-sm uppercase tracking-wide mb-4">
          Pricing
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto">
          Choose the right Supervisor setup for focused web and mobile operations.
        </h1>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="border border-gray-200 rounded-lg p-8 flex flex-col">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Free</h2>
              <p className="text-gray-400 font-mono text-sm">0 1</p>
            </div>
            <div className="mb-6">
              <span className="text-5xl font-bold">$0</span>
            </div>
            <p className="text-gray-600 mb-8">
              Start with a focused workspace for one operator and early workflows.
            </p>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>1,000 questions a month</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>3 integrations to your sources</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>3 people in the workspace</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Community support</span>
              </li>
            </ul>
            <Link
              href="/app"
              className="border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 rounded-sm px-6 py-3 text-center font-medium transition-colors"
            >
              Start Free
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="border border-gray-200 rounded-lg p-8 flex flex-col bg-gray-50">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Pro</h2>
              <p className="text-gray-400 font-mono text-sm">0 2</p>
            </div>
            <div className="mb-6">
              <span className="text-5xl font-bold">$500</span>
              <span className="text-gray-600">/mo</span>
            </div>
            <p className="text-gray-600 mb-8">
              For teams ready to automate recurring work with visibility and rhythm.
            </p>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Everything in Free</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Unlimited questions per month*</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Unlimited integrations to your sources*</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Up to 20 people in workspace</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>1 day response support</span>
              </li>
            </ul>
            <Link
              href="/app"
              className="bg-gray-900 text-white hover:bg-gray-800 rounded-sm px-6 py-3 text-center font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-gray-200 rounded-lg p-8 flex flex-col">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Enterprise</h2>
              <p className="text-gray-400 font-mono text-sm">0 3</p>
            </div>
            <div className="mb-6">
              <span className="text-5xl font-bold">Custom</span>
            </div>
            <p className="text-gray-600 mb-8">
              For larger teams with security, custom rollout, and hands-on support needs.
            </p>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>SSO and audit controls</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Custom data retention</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Self-hosted option</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Implementation and rollout support</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Priority support</span>
              </li>
            </ul>
            <Link
              href="/book-a-call"
              className="border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 rounded-sm px-6 py-3 text-center font-medium transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-8 text-center">
          *Unlimited questions and integrations are subject to a fair usage policy.
        </p>
      </section>

      {/* Nonprofit Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <p className="text-orange-500 font-mono text-sm uppercase tracking-wide mb-4">
            Nonprofit programs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Free for qualifying nonprofits.
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            If you are a nonprofit, we offer free Pro packages or 50% discounts depending on your size and funding.
          </p>
          <Link
            href="/book-a-call"
            className="inline-block border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 rounded-sm px-6 py-3 font-medium transition-colors"
          >
            Book a Call
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <p className="text-orange-500 font-mono text-sm uppercase tracking-wide mb-4 text-center">
          FAQ
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Questions before choosing a plan.
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="border-b border-gray-200 py-6">
            <p className="text-gray-700">
              Yes. Free includes 1,000 questions a month, 3 integrations to your sources, 3 people in the workspace, and community support.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}