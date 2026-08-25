import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <h1 className="mb-8 text-center text-2xl font-semibold text-gray-900">
              Login or Sign Up, all here
            </h1>

            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-sm border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                  placeholder=""
                />
              </div>

              <button className="w-full bg-gray-900 text-white hover:bg-gray-800 rounded-sm px-4 py-3 font-medium transition-colors">
                Continue
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-4 text-gray-500">or</span>
                </div>
              </div>

              <button className="w-full border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 rounded-sm px-4 py-3 font-medium transition-colors flex items-center justify-center gap-3">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-sm text-gray-500 mb-4">Code sent to</p>
              <div className="flex justify-center gap-2">
                <input
                  type="text"
                  maxLength={1}
                  className="w-10 h-12 text-center text-lg font-medium border border-gray-300 rounded-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                  defaultValue="–"
                />
                <input
                  type="text"
                  maxLength={1}
                  className="w-10 h-12 text-center text-lg font-medium border border-gray-300 rounded-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                  defaultValue="–"
                />
                <input
                  type="text"
                  maxLength={1}
                  className="w-10 h-12 text-center text-lg font-medium border border-gray-300 rounded-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                  defaultValue="–"
                />
                <input
                  type="text"
                  maxLength={1}
                  className="w-10 h-12 text-center text-lg font-medium border border-gray-300 rounded-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                  defaultValue="–"
                />
                <input
                  type="text"
                  maxLength={1}
                  className="w-10 h-12 text-center text-lg font-medium border border-gray-300 rounded-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                  defaultValue="–"
                />
                <input
                  type="text"
                  maxLength={1}
                  className="w-10 h-12 text-center text-lg font-medium border border-gray-300 rounded-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                  defaultValue="–"
                />
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-gray-400">
            v11.3.4
          </p>
        </div>
      </div>
    </main>
  );
}