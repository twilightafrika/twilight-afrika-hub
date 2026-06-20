export default function Footer() {
  return (
    <footer className="bg-surface-variant p-8 mt-10 border-t">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-secondary">© 2026 TwilightAfrika Hub</p>
        <div className="flex gap-6">
          <a href="#about" className="text-secondary">About</a>
          <a href="#services" className="text-secondary">Services</a>
          {/* Updated with your phone number */}
          <a
            href="https://wa.me/2348067079576"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-bold"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}