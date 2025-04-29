function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-700">404</h1>
        <p className="text-2xl font-medium text-gray-600 mt-4">Page Not Found</p>
        <p className="text-gray-500 mt-2">Sorry, the page you are looking for does not exist.</p>
        <div className="w-full flex items-center justify-center mt-4">
          <div
            className="flex items-center justify-center bg-slate-300 px-3 pl-4 py-1.5 rounded-full font-semibold hover:cursor-pointer w-min "
            onClick={() => {}}
          >
            <button
              style={{
                background: 'white',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
              className="flex items-center justify-center gap-2 whitespace-nowrap text-sm rounded-full"
            >
              <a href="/" className="text-lg rounded-md ">
                Go to Homepage
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
