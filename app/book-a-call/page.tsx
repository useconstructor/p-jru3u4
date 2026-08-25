export default function Page() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Intro */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Book a Call
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Tell us who you are, what you are building, and what would make the call useful.
            </p>
            <a
              href="mailto:support@trysupervisor.com?subject=Book%20a%20Call"
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              support@trysupervisor.com
            </a>
          </div>

          {/* Right Column - Form */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-2">
              A little context before we talk.
            </h2>
            <p className="text-gray-600 mb-8">
              We use this to route the conversation, prepare useful examples, and avoid spending the first ten minutes gathering basics.
            </p>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company / Institution
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                  I am a
                </label>
                <select
                  id="role"
                  name="role"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white"
                >
                  <option value="">Select...</option>
                  <option value="founder">Founder</option>
                  <option value="executive">Executive</option>
                  <option value="manager">Manager</option>
                  <option value="developer">Developer</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white hover:bg-gray-800 rounded-sm py-3 px-6 font-medium transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}