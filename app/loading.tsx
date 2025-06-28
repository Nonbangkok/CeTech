export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center transition-colors duration-300">
      <div className="text-center">
        <div
          className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-t-transparent mb-4"
          style={{
            borderColor: "var(--theme-secondary)",
            borderTopColor: "transparent",
          }}
        ></div>
        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Loading portfolios...</p>
      </div>
    </div>
  )
}
