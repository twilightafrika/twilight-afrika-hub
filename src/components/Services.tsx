export default function Services() {
  return (
    <section className="bg-surface-container-lowest py-stack-lg md:py-32 px-margin-mobile md:px-margin-desktop" id="services">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary">Our Core Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {/* Service 1 */}
          <a href="https://wa.me/2348067079576?text=Hi%20TwilightAfrika%20Hub,%20I'm%20interested%20in%20setting%20up%20an%20AI%20Business%20Assistant%20or%20Automation" target="_blank" rel="noopener noreferrer" className="block bg-surface-container-lowest rounded-2xl p-stack-md shadow-soft hover:shadow-hover transition-shadow duration-300 border border-surface-container-highest">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-stack-md text-primary">
              <span className="material-symbols-outlined">robot</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-base">Custom AI Assistant Setup</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Tailored conversational agents designed to handle customer inquiries, internal workflows, and repetitive communications.</p>
          </a>
          {/* Service 2 */}
          <a href="https://wa.me/2348067079576?text=Hi%20TwilightAfrika%20Hub,%20I'm%20interested%20in%20setting%20up%20an%20AI%20Business%20Assistant%20or%20Automation" target="_blank" rel="noopener noreferrer" className="block bg-surface-container-lowest rounded-2xl p-stack-md shadow-soft hover:shadow-hover transition-shadow duration-300 border border-surface-container-highest">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-stack-md text-primary">
              <span className="material-symbols-outlined">auto_awesome</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-base">AI Automation Starter Kit</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">A foundational suite of automated workflows to connect your existing apps and streamline daily operations instantly.</p>
          </a>
          {/* Service 3 */}
          <a href="https://wa.me/2348067079576?text=Hi%20TwilightAfrika%20Hub,%20I'd%20like%20to%20discuss%20building%20a%20website%20or%20custom%20web%20application" target="_blank" rel="noopener noreferrer" className="block bg-surface-container-lowest rounded-2xl p-stack-md shadow-soft hover:shadow-hover transition-shadow duration-300 border border-surface-container-highest">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-stack-md text-primary">
              <span className="material-symbols-outlined">language</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-base">Website Design</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Modern, conversion-optimized websites built on scalable platforms, integrating seamlessly with your AI tools.</p>
          </a>
          {/* Service 4 */}
          <a href="https://wa.me/2348067079576?text=Hi%20TwilightAfrika%20Hub,%20I'd%20like%20to%20discuss%20building%20a%20website%20or%20custom%20web%20application" target="_blank" rel="noopener noreferrer" className="block bg-surface-container-lowest rounded-2xl p-stack-md shadow-soft hover:shadow-hover transition-shadow duration-300 border border-surface-container-highest">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-stack-md text-primary">
              <span className="material-symbols-outlined">code_blocks</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-base">App or Tool Building</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Custom web applications and internal tools designed to solve specific operational bottlenecks in your business.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
