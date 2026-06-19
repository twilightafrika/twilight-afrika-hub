export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-primary-container text-primary dark:text-primary-fixed-dim font-label-sm text-label-sm full-width">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-desktop py-stack-md max-w-container-max mx-auto gap-4">
        <div className="flex flex-col items-center md:items-start">
          <img src="/logo.jpeg" alt="TwilightAfrika Hub Logo" className="h-12 md:h-16 w-auto object-contain mb-3" />
          <span className="text-on-surface-variant dark:text-on-primary-container">building the new with digital solutions</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 opacity-80 hover:opacity-100 transition-opacity">
          <a className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed hover:underline" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed hover:underline" href="#">Terms of Service</a>
          <a className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed hover:underline" href="#">Cookie Policy</a>
          <a className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed hover:underline" href="#">Contact Us</a>
        </div>
        <div className="text-on-surface-variant dark:text-on-primary-container text-center md:text-right">
          © 2026 TwilightAfrika Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
