import React from 'react'
import {motion } from "framer-motion"
import {fadeIn} from "../../variants.js"
export default function Featured() {
  return (
    <>
        <section class="bg-white ">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">explore our <br/> Vital <span class="text-blue-500">Conditions</span></h1>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl ">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full  ">
<svg viewBox="0 0 1024 1024" className='w-10 h-10' version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M995.328 374.272c-2.56-2.56-6.144-3.584-10.752-2.048-57.344 23.04-105.984 66.048-150.016 107.52-46.592 43.52-88.576 91.648-124.928 143.36C640 721.92 594.432 835.072 578.56 954.368c-2.56-50.176-7.168-99.84-13.824-150.016 1.536-1.536 2.56-3.072 3.072-5.12 28.16-102.4 65.024-204.288 106.496-302.08 43.52-102.4 102.4-197.12 171.008-284.672 1.536-2.048 2.56-4.096 2.56-6.144 4.608-8.192-5.632-21.504-16.896-15.872-60.416 28.16-124.416 55.808-177.152 97.28-69.12 53.76-128.512 129.024-150.528 215.04L501.76 496.64c-36.864-134.144-99.328-265.728-195.584-367.616-50.688-53.76-121.344-95.744-194.56-108.544-12.8-2.048-19.456 13.824-11.776 20.48 1.024 1.536 2.048 3.072 4.096 4.096 68.096 44.032 119.296 113.664 161.792 181.76 47.616 75.264 66.56 160.256 76.8 247.808 6.144 52.224 8.704 104.96 10.752 157.184-6.144-14.848-13.824-29.184-23.04-42.496-22.528-31.744-51.2-59.904-79.872-86.016-56.832-52.736-119.808-97.28-192-125.952-12.8-5.12-18.944 13.312-9.728 20.992 0.512 0.512 0.512 1.024 1.024 1.536 140.288 164.864 217.088 386.048 213.504 602.112 0 15.36 23.552 15.36 24.064 0 3.072-206.336-65.536-416.256-189.952-581.12 49.664 26.112 95.232 60.416 136.704 98.816 27.136 25.088 54.784 51.2 76.288 81.408 22.528 31.232 32.256 67.584 44.032 103.936 0.512 1.536 1.536 3.072 2.56 4.608 3.072 96.768 5.632 193.536 21.504 289.28 2.56 15.36 25.6 8.704 23.04-6.144-30.72-184.32-12.8-372.736-39.424-557.568-12.288-87.04-37.888-165.376-87.04-238.592-32.768-48.64-68.608-97.28-112.64-136.704 107.52 41.984 184.32 142.848 238.08 243.2 68.608 127.488 99.84 270.336 125.952 411.136 16.896 90.112 27.648 180.736 30.72 272.384 0.512 12.288 16.384 14.848 22.016 7.168 6.144 6.144 20.48 3.584 21.504-8.192 10.752-123.392 56.32-240.64 125.952-342.528 33.28-48.64 71.68-93.184 114.176-134.144 29.184-28.16 60.416-57.856 95.232-81.408-49.152 58.368-88.064 124.928-108.544 198.656-14.336 53.248-19.456 109.568-26.624 164.352-7.68 61.44-13.824 122.88-14.848 184.32-0.512 15.36 23.552 15.36 24.064 0 1.024-55.808 6.144-111.104 12.8-165.888 6.656-55.808 11.776-113.152 25.6-167.424 24.064-95.744 80.896-178.688 151.04-247.296 5.12-7.68 1.536-16.384-4.096-19.968z m-438.272 376.32c-10.24-64.512-23.552-129.024-39.424-192V558.08c6.144-104.96 78.848-203.776 163.84-261.632 37.888-26.112 79.872-47.104 121.344-67.072-58.88 79.872-110.08 164.352-148.992 256-36.352 86.016-69.632 175.104-96.768 265.216z" fill="#056137"></path></g></svg>                </span>
                <motion.h1 variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }} class="text-xl font-semibold text-gray-700 capitalize ">Fresh From farm</motion.h1>

                <motion.p variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }} class="text-gray-500 ">
                    We deliver our products directly from the farm and we ensure it reached in your hands as soon it is plucked from the plant
                </motion.p>

                <a href="#" class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span class="mx-1">read more</span>
                    <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>

            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white ">
                <svg className='w-10 h-10' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 10H22H19.7639C20.3132 9.38625 21.1115 9 22 9C22.8885 9 23.6868 9.38625 24.2361 10H23ZM22 7C24.0503 7 25.8124 8.2341 26.584 10H27H28L29 10V12H28V17V18H27H25C24.087 18 23.2692 17.5921 22.719 16.9487C22.4842 16.9825 22.2442 17 22 17C19.2386 17 17 14.7614 17 12C17 9.23858 19.2386 7 22 7ZM24 12H26V16H25C24.4477 16 24 15.5523 24 15V12ZM5 22C5 19.7909 6.79086 18 9 18H8C7.44772 18 7 17.5523 7 17C7 16.4477 7.44772 16 8 16H12C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18H11C12.0465 18 12.9991 18.4018 13.7119 19.0596C14.2622 18.4114 15.0831 18 16 18H18H22C24.2091 18 26 19.7909 26 22V28.5585L28.7433 29.4729L34.6046 27.0451L34.9659 27.9173L36.4801 26.3988L40.3659 22.5019L41.7821 23.9141L39.5976 26.1049H42.6882V28.1049H37.1882H35.0436L35.3699 28.8928L31.3755 30.5474C31.9217 31.0653 32.1511 31.8712 31.8974 32.6325C31.5691 33.6172 30.549 34.1767 29.5576 33.9506C28.2987 38.0332 24.4958 41 20 41C14.8147 41 10.5511 37.0533 10.0494 32H9C6.79086 32 5 30.2091 5 28V22ZM25.9295 32.7514L27.6563 33.327C26.6597 36.6103 23.6089 39 20 39C15.8729 39 12.4757 35.8748 12.0459 31.8619C13.7478 31.4021 15 29.8473 15 28V24V22V21C15 20.4477 15.4477 20 16 20V32C16 34.2091 17.7909 36 20 36H22C23.9523 36 25.5779 34.6013 25.9295 32.7514ZM18 20V32C18 33.1046 18.8954 34 20 34H22C23.0686 34 23.9414 33.1619 23.9972 32.1072L20.3675 30.8974C19.5509 30.6251 19 29.8609 19 29V23C19 21.8954 19.8954 21 21 21C22.1046 21 23 21.8954 23 23V27.5585L24 27.8918V22C24 20.8954 23.1046 20 22 20H18ZM10 22.5858L11.2929 21.2929L12.7071 22.7071L11.4142 24L12.7071 25.2929L11.2929 26.7071L10 25.4142L8.70711 26.7071L7.29289 25.2929L8.58579 24L7.29289 22.7071L8.70711 21.2929L10 22.5858Z" fill="#333333"></path> </g></svg>
                </span>

                <motion.h1 variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }} class="text-xl font-semibold text-gray-700 capitalize ">Pesticide Free</motion.h1>

                <motion.p variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }} class="text-gray-500 ">
                    We make our environment pest free such that avoiding the use of pesticide in the plants.
                </motion.p>

                <a href="#" class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span class="mx-1">read more</span>
                    <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>

            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl ">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full ">
                <svg className=' h-10 w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 12V22H4V18.6127V12" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 22H22.5V4C22.5 2.89543 21.6046 2 20.5 2H19C17.8954 2 17 2.89543 17 4V9" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13.9002 21.6125L7.10019 16.0875" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 22V16H7V22" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 7H22.5" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 16H22.5" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 19H22.5" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 13L10.5 7L19 13" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 11.9375L10.5 11L12 11.9375" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 6L3.5 7.0625L5 6" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 2L7.5 3.0625L9 2" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </span>

                <motion.h1 variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }} class="text-xl font-semibold text-gray-700 capitalize ">Well Maintained Farms</motion.h1>

                <motion.p variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }} class="text-gray-500">
                Our aeroponic farm is superior in terms of excellent aeration, water use efficiency,seasonal independence and disease free plant propagation etc.                </motion.p>

                <a href="#" class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span class="mx-1">read more</span>
                    <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
    </div>
</section>
      
    </>
  )
}
