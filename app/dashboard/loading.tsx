

export default function Loading() {
  return (
    <div className="p-4 text-gray-600">
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-400 border-solid"></div>
      </div>
      <p className="text-center text-lg">🍕...</p>
    </div>
  );
}
