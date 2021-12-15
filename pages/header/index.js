export default function Navigation() {
  return (
    <nav className="">
      <div className=" py-4 max-w-7xl mx-auto border border-red-400">
        <div className="flex justify-center">
          <div className="container mx-auto py-1 flex item-center">
            <div class="mr-auto md:w-40 flex-shrink-0">
              <img class="h-8 md:h-10" src="https://i.ibb.co/98pHdFq/2021-10-27-15h51-15.png" alt="" />
            </div>

            <div class="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden lg:flex items-center rounded-full">
              <select class="bg-transparent uppercase font-bold text-sm p-4 mr-4" name="" id="">
                <option>all categories</option>
              </select>
              <input
                class="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4"
                type="text"
                placeholder="I'm searching for ..."
              />
              <p>
                <i class="fab fa-adn"></i>
              </p>
            </div>

            <div class="contents">
              <ul class="ml-4 xl:w-48 flex items-center justify-end">
                <li class="ml-2 lg:ml-4 relative inline-block">
                  <a class="" href="">
                    <svg
                      class="h-9 lg:h-10 p-2 text-gray-500"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="user"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="svg-inline--fa fa-user fa-w-14 fa-9x"
                    >
                      <path
                        fill="currentColor"
                        d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li class="ml-2 lg:ml-4 relative inline-block">
                  <a class="" href="">
                    <div class="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">3</div>
                    <svg
                      class="h-9 lg:h-10 p-2 text-gray-500"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="heart"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="svg-inline--fa fa-heart fa-w-16 fa-9x"
                    >
                      <path
                        fill="currentColor"
                        d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li class="ml-2 lg:ml-4 relative inline-block">
                  <a class="" href="">
                    <div class="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">12</div>
                    <svg
                      class="h-9 lg:h-10 p-2 text-gray-500"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="shopping-cart"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      class="svg-inline--fa fa-shopping-cart fa-w-18 fa-9x"
                    >
                      <path
                        fill="currentColor"
                        d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div class="ml-4 hidden sm:flex flex-col font-bold">
              <select class="bg-transparent uppercase font-bold text-sm p-4 mr-4" name="" id="">
                <option>Sign in</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" py-4 max-w-7xl mx-auto border border-red-400">
        <div className="flex justify-center">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="logo" />
              <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="logo" />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden lg:flex items-center rounded-full">
              <select class="bg-transparent uppercase font-bold text-sm p-4 mr-4" name="" id="">
                <option>all categories</option>
              </select>
              <input
                class="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4"
                type="text"
                placeholder="I'm searching for ..."
              />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ml-20">
            <ul>
              <li>
                <a> icon</a>
              </li>
            </ul>
            <ul>
              <li>
                <a> icon</a>
              </li>
            </ul>
            <ul>
              <li>
                <a> icon</a>
              </li>
            </ul>
            <ul>
              <li>
                <a> icon</a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </nav>
  );
}
