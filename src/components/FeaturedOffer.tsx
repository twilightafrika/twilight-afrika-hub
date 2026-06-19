export default function FeaturedOffer() {
  return (
    <section className="deep-navy-bg py-stack-lg md:py-32 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
        {/* Left: Content */}
        <div>
          <span className="inline-block px-4 py-1 rounded-full soft-gold-bg/10 soft-gold-text font-label-sm mb-base uppercase tracking-wider border soft-gold-border/30">Special Offer</span>
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg soft-gold-text mb-stack-md">AI Business Assistant Starter Setup</h2>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim mb-stack-md">Fast-track your automation journey with our comprehensive starter package, designed to deliver immediate ROI.</p>
          <ul className="space-y-4 mb-stack-lg">
            <li className="flex items-start">
              <span className="material-symbols-outlined soft-gold-text mr-3 mt-1">check_circle</span>
              <span className="text-white font-body-md">24/7 Customer Support Bot Integration</span>
            </li>
            <li className="flex items-start">
              <span className="material-symbols-outlined soft-gold-text mr-3 mt-1">check_circle</span>
              <span className="text-white font-body-md">Lead Qualification &amp; Routing Workflows</span>
            </li>
            <li className="flex items-start">
              <span className="material-symbols-outlined soft-gold-text mr-3 mt-1">check_circle</span>
              <span className="text-white font-body-md">Appointment Scheduling Automation</span>
            </li>
            <li className="flex items-start">
              <span className="material-symbols-outlined soft-gold-text mr-3 mt-1">check_circle</span>
              <span className="text-white font-body-md">Basic FAQ Knowledge Base Training</span>
            </li>
            <li className="flex items-start">
              <span className="material-symbols-outlined soft-gold-text mr-3 mt-1">check_circle</span>
              <span className="text-white font-body-md">CRM Synchronization Setup</span>
            </li>
            <li className="flex items-start">
              <span className="material-symbols-outlined soft-gold-text mr-3 mt-1">check_circle</span>
              <span className="text-white font-body-md">1 Hour Training Session</span>
            </li>
          </ul>
          <a className="soft-gold-bg text-on-secondary-fixed font-label-md px-8 py-4 rounded-full hover:bg-secondary-container transition-colors shadow-md inline-block" href="https://wa.me/2348067079576?text=Hi%20TwilightAfrika%20Hub,%20I'm%20interested%20in%20setting%20up%20an%20AI%20Business%20Assistant%20or%20Automation" target="_blank" rel="noopener noreferrer">
            Claim Starter Setup
          </a>
        </div>
        {/* Right: Abstract UI */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden glassmorphism p-6 shadow-2xl">
          <div className="absolute inset-0 bg-cover bg-center opacity-80" data-alt="A sleek, dark-mode abstract dashboard interface representing an AI assistant control panel. The UI features minimalist geometric charts, glowing blue data lines, and soft gold accent buttons on a deep navy background. High-fidelity corporate modern aesthetic." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuALXFLBUdFksQT9IDOf-qWks9U9LE39cHIwAuvygBw3vdzJx7iKG6HXbmpd0lPACHvn6baC4VNXRQ5isFp_ptGhWeC_b2FbiIbFySsXK4Euf3ysbrEMY18hZv64pwJJtPqK9xaSobxQHxDdH1dGtUZ2njzRAJoSodk3w8nX5TZ4pbKbmZmLrlIp-gZfPyvjNlKbKFKpXqf7YMkDXBqE6JA6qrUxrsnjhBKeVCPcMLI8t0YhLs_eHpSlPcWNNywkGrOzXKXk95unqeU")' }}></div>
          {/* Abstract UI elements overlaid */}
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-center bg-[#0a1930]/80 p-4 rounded-xl backdrop-blur-md border border-white/10">
              <div className="h-4 w-32 bg-white/20 rounded"></div>
              <div className="h-8 w-8 rounded-full bg-secondary-fixed/20"></div>
            </div>
            <div className="space-y-4">
              <div className="h-24 w-full bg-gradient-to-r from-primary-container to-[#1a2f52] rounded-xl border border-white/10 p-4">
                <div className="h-2 w-1/2 bg-secondary-fixed/50 rounded mb-2"></div>
                <div className="h-2 w-3/4 bg-white/20 rounded"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-20 bg-[#0a1930]/80 rounded-xl border border-white/10"></div>
                <div className="h-20 bg-[#0a1930]/80 rounded-xl border border-white/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
