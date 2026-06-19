export default function Hero() {
  return (
    <section className="deep-navy-bg relative overflow-hidden pt-32 pb-stack-lg md:pt-40 md:pb-48 px-margin-mobile md:px-margin-desktop">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1c33] via-[#0d1c33] to-[#1a2f52] opacity-80 pointer-events-none"></div>
      <div className="relative max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-8 md:col-start-3 text-center z-10">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-stack-md">
            AI-powered systems for growing businesses that want to work smarter
          </h1>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim mb-stack-lg max-w-3xl mx-auto leading-relaxed">
            TwilightAfrika Hub helps growing businesses use AI assistants, websites, apps, and automation tools to save time, reduce manual work, and deliver better experiences to their customers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a className="soft-gold-bg text-on-secondary-fixed font-label-md px-8 py-4 rounded-full hover:bg-secondary-container transition-colors shadow-md text-center" href="#contact">
              Request Your AI Assistant Setup
            </a>
            <a className="border-2 soft-gold-border soft-gold-text font-label-md px-8 py-4 rounded-full hover:bg-secondary/10 transition-colors text-center" href="#services">
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
