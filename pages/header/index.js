export default function Navigation() {
  return (
    <nav className="bg-gray-100">
      <div className="max-w-7xl mx-auto border border-red-400">
        <div className="flex justify-center">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="logo" />
              <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="logo" />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">search</div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">search</div>
        </div>
      </div>
    </nav>
  );
}
