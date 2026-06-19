export default function Contact() {
  return (
    <section className="bg-surface py-stack-lg md:py-32 px-margin-mobile md:px-margin-desktop text-center" id="contact">
      <div className="max-w-2xl mx-auto bg-surface-container-lowest p-stack-lg rounded-2xl shadow-soft border border-surface-container-highest">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-md">Ready to make your business easier to run with AI?</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">Connect with us directly to discuss how we can implement practical automation solutions tailored to your specific needs.</p>
        <a className="inline-flex items-center justify-center bg-[#25D366] text-white font-label-md px-8 py-4 rounded-full hover:bg-[#128C7E] transition-colors shadow-md w-full sm:w-auto" href="https://wa.me/2348067079576?text=Hi%20TwilightAfrika%20Hub,%20I'd%20like%20to%20discuss%20a%20digital%20project%20with%20you" target="_blank" rel="noopener noreferrer">
          <span className="material-symbols-outlined mr-2">chat</span>
          Message Us on WhatsApp
        </a>
      </div>
    </section>
  );
}
