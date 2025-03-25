export default function Loading() {
 
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-8 bg-blue-400 rounded-full animate-spin mb-4"></div>
          <p className="">Loading...</p>
        </div>
      </div>
    );
}
