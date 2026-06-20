export default function Navbar() {
  return (
    <header className="bg-surface dark:bg-primary-container text-primary dark:text-primary-fixed font-body-md text-body-md docked full-width top-0 sticky shadow-sm dark:shadow-none transition-all duration-300 z-50">
      <nav className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-20 md:px-margin-desktop px-margin-mobile">
        <a href="/" className="flex items-center gap-3 transition-transform hover:scale-105">
          <img
            src="/logo.jpeg"
            alt="TwilightAfrika Hub Logo"
            className="h-12 w-auto object-contain rounded-md"
          />
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            TwilightAfrika Hub
          </span>
        </a>
        <div className="hidden md:flex space-x-8">
          <a className="text-secondary dark:text-secondary-fixed border-b-2 border-secondary dark:border-secondary-fixed pb-1 font-label-md transition-colors duration-200" href="#">Home</a>
          <a className="text-on-surface-variant dark:text-surface-variant hover:text-secondary transition-colors duration-200 font-label-md" href="#about">About</a>
          <a className="text-on-surface-variant dark:text-surface-variant hover:text-secondary transition-colors duration-200 font-label-md" href="#services">Services</a>
          <a className="text-on-surface-variant dark:text-surface-variant hover:text-secondary transition-colors duration-200 font-label-md" href="#demo">Demo Projects</a>
          <a className="text-on-surface-variant dark:text-surface-variant hover:text-secondary transition-colors duration-200 font-label-md" href="#contact">Contact</a>
        </div>
        <div className="hidden md:flex">
          <a className="bg-primary text-on-primary font-label-md px-6 py-3 rounded-full hover:bg-primary/90 transition-colors shadow-sm" href="#contact">
            Get Started
          </a>
        </div>
        <button className="md:hidden text-primary">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </nav>
    </header>
  );
}
