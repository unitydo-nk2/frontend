<!-- @format -->

<script setup></script>

<template>
  <div class="font-primary ">
    <div class="pl-4 sm:ml-64 grid">
      <div class="p-4 rounded-lg dark:border-gray-700">
        <div class="text-zinc-400 text-base font-normal font-['DB Heavent']">
          Activities > Activity Detail
        </div>
        <div
          class="text-zinc-900 text-2xl font-bold font-['DB Heavent'] tracking-wide"
        >
          โพสต์กิจกรรรมทั้งหมด
        </div>
        <div class="w-full h-px mt-4 mb-2 border border-stone-300"></div>
      </div>
      <div class="flex flex-in-line">
        <button
          class="w-44 h-9 px-2.5 py-1.5 rounded-md border border-indigo-600 justify-start items-center gap-1 inline-flex"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0441 5.49999H6.81507V1.49997C6.81507 1.22403 6.57821 1 6.28637 1C5.99462 1 5.75776 1.22403 5.75776 1.49997V5.49999H1.52861C1.23686 5.49999 1 5.72402 1 5.99995C1 6.27599 1.23686 6.50001 1.52861 6.50001H5.75776V10.4999C5.75776 10.776 5.99462 11 6.28637 11C6.57821 11 6.81507 10.776 6.81507 10.4999V6.50001H11.0441C11.336 6.50001 11.5728 6.27599 11.5728 5.99995C11.5728 5.72402 11.336 5.49999 11.0441 5.49999Z"
              fill="#5628FF"
              stroke="#5628FF"
              stroke-width="0.7"
            />
          </svg>

          <div
            class="w-36 text-indigo-600 text-base font-medium font-['DB Heavent']"
          >
            Create Post
          </div>
        </button>
        <button
          class="w-28 border text-neutral-500 text-base font-medium font-['DB Heavent']"
        >
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.73001 4.1259H2.18236C1.85497 4.1259 1.63672 3.91947 1.63672 3.60983C1.63672 3.30018 1.85497 3.09375 2.18236 3.09375H8.73001C9.05739 3.09375 9.27565 3.30018 9.27565 3.60983C9.27565 3.91947 9.05739 4.1259 8.73001 4.1259Z"
              fill="#6D6E6F"
            />
            <path
              d="M7.09485 7.22356H3.82103C3.49365 7.22356 3.27539 7.01713 3.27539 6.70748C3.27539 6.39784 3.49365 6.19141 3.82103 6.19141H7.09485C7.42224 6.19141 7.64049 6.39784 7.64049 6.70748C7.64049 7.01713 7.42224 7.22356 7.09485 7.22356Z"
              fill="#6D6E6F"
            />
            <path
              d="M10.3671 1.03215H0.545638C0.218255 1.03215 0 0.82572 0 0.516075C0 0.20643 0.218255 0 0.545638 0H10.3671C10.6945 0 10.9128 0.20643 10.9128 0.516075C10.9128 0.82572 10.6945 1.03215 10.3671 1.03215Z"
              fill="#6D6E6F"
            />
          </svg>
          Filter
        </button>
        <button
          class="w-28 border text-neutral-500 text-base font-medium font-['DB Heavent']"
        >
          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.65602 0.266869C3.77578 0.126738 3.9924 0.126738 4.11215 0.266869L6.66587 3.2551C6.83225 3.44979 6.6939 3.75 6.4378 3.75H1.33037C1.07427 3.75 0.935925 3.44979 1.10231 3.2551L3.65602 0.266869Z"
              fill="#6D6E6F"
            />
            <rect
              x="3.35547"
              y="3"
              width="1.05728"
              height="6"
              rx="0.3"
              fill="#6D6E6F"
            />
            <path
              d="M10.4573 8.73313C10.3375 8.87326 10.1209 8.87326 10.0011 8.73313L7.44741 5.7449C7.28103 5.55021 7.41938 5.25 7.67548 5.25L12.7829 5.25C13.039 5.25 13.1774 5.55021 13.011 5.7449L10.4573 8.73313Z"
              fill="#6D6E6F"
            />
            <rect
              x="10.7578"
              y="6"
              width="1.05728"
              height="6"
              rx="0.3"
              transform="rotate(-180 10.7578 6)"
              fill="#6D6E6F"
            />
          </svg>

          Sort
        </button>
      </div>

      <div class="mt-4 relative overflow-x-auto shadow-md">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">
                <div
                  class="flex items-center w-32 text-neutral-900 text-xs font-medium font-['DB Heavent']"
                >
                  Activities name
                  <a href="#"
                    ><svg
                      width="9"
                      height="14"
                      viewBox="0 0 9 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.62735 12.6792C4.42724 12.9415 4.03246 12.9415 3.83235 12.6792L1.18026 9.2035C0.92916 8.87442 1.16382 8.4002 1.57776 8.4002H6.88194C7.29588 8.4002 7.53054 8.87442 7.27944 9.2035L4.62735 12.6792Z"
                        fill="#6F6B6B"
                      />
                      <path
                        d="M3.83163 1.32076C4.03175 1.05849 4.42652 1.05849 4.62664 1.32076L7.27873 4.7965C7.52982 5.12558 7.29516 5.5998 6.88123 5.5998H1.57704C1.16311 5.5998 0.928445 5.12558 1.17954 4.7965L3.83163 1.32076Z"
                        fill="#6F6B6B"
                      />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                <div
                  class="flex items-center w-32 text-neutral-900 text-xs font-medium font-['DB Heavent']"
                >
                  ผู้จัดกิจกรรม
                  <a href="#">
                    <svg
                      width="9"
                      height="13"
                      viewBox="0 0 9 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.62735 11.8794C4.42724 12.1417 4.03246 12.1417 3.83235 11.8794L1.18026 8.40369C0.92916 8.07462 1.16382 7.60039 1.57776 7.60039L6.88194 7.60039C7.29588 7.60039 7.53054 8.07462 7.27944 8.40369L4.62735 11.8794Z"
                        fill="#6F6B6B"
                      />
                      <path
                        d="M3.83163 0.520951C4.03175 0.258689 4.42652 0.25869 4.62664 0.520951L7.27873 3.9967C7.52982 4.32577 7.29516 4.8 6.88123 4.8H1.57704C1.16311 4.8 0.928445 4.32577 1.17954 3.9967L3.83163 0.520951Z"
                        fill="#6F6B6B"
                      />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                <div
                  class="flex items-center w-32 text-neutral-900 text-xs font-medium font-['DB Heavent']"
                >
                  หมวดหมู่
                  <a href="#"
                    ><svg
                      width="9"
                      height="13"
                      viewBox="0 0 9 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.62735 11.8794C4.42724 12.1417 4.03246 12.1417 3.83235 11.8794L1.18026 8.40369C0.92916 8.07462 1.16382 7.60039 1.57776 7.60039L6.88194 7.60039C7.29588 7.60039 7.53054 8.07462 7.27944 8.40369L4.62735 11.8794Z"
                        fill="#6F6B6B"
                      />
                      <path
                        d="M3.83163 0.520951C4.03175 0.258689 4.42652 0.25869 4.62664 0.520951L7.27873 3.9967C7.52982 4.32577 7.29516 4.8 6.88123 4.8H1.57704C1.16311 4.8 0.928445 4.32577 1.17954 3.9967L3.83163 0.520951Z"
                        fill="#6F6B6B"
                      />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                <div
                  class="flex items-center w-32 text-neutral-900 text-xs font-medium font-['DB Heavent']"
                ></div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">
                <button
                  class="w-32 h-8 px-2.5 py-1.5 rounded-md border border-indigo-400 justify-center items-center gap-2.5 inline-flex"
                >
                  <div
                    class="text-indigo-600 text-base font-normal font-['DB Heavent'] leading-tight"
                  >
                    Show Detail
                  </div>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style></style>
