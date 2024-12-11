import BriefCase from "../Icons/BriefCase.astro";
import Home from "../Icons/Home.astro";
import Info from "../Icons/Info.astro";
import ProjectsIcon from "../Icons/ProjectsIcon.astro";


export default function Header() {
  return (
    <header className=" text-white text-[8px] sm:text-xl md:text-md flex  justify-start  items-center py-5 w-full xl:w-[1120px]mx-auto transition-all duration-300 ease-in-out">
      <nav className="top-40 fixed mt-4  px-4 py-2  ml-5 flex flex-col bg-[#052423] rounded-full p-5 items-start flex-wrap gap-y-5 sm:gap-x-5 md:gap-x-7  z-40">
        <a href="#main" className="group relative flex items-center space-x-2">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
            ></path>
          </svg>
          <p className="hidden group-hover:block absolute left-14 text-green-200 bg-[#052423] p-2 rounded-md">Inicio</p>
        </a>
        <a href="#about" className="group relative flex items-center space-x-2">
          <svg
          
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            ></path>
          </svg>

          <p className="hidden group-hover:block absolute left-14 text-green-200 bg-[#052423] p-2 rounded-md text-nowrap">Sobre mi</p>
        </a>
        <a href="#experience" className="group relative flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            stroke-width="2">
            <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z"></path>
            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
          <p className="hidden group-hover:block absolute left-14 text-green-200 bg-[#052423] p-2 rounded-md">Experiencia</p>
        </a>
        <a href="#projects" className="group relative flex items-center space-x-2">
          <svg
        
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
            
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"
            ></path>
          </svg>

          <p className="hidden group-hover:block absolute left-14 text-green-200 bg-[#052423] p-2 rounded-md">Proyectos</p>
        </a>
      </nav>
    </header>
  )
}
