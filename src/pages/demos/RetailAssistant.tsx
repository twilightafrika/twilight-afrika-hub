import { Link } from 'react-router-dom';

export default function RetailAssistant() {
  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface flex flex-col overflow-x-hidden">
      {/* Mock Navbar */}
      <nav className="bg-surface-container-lowest border-b border-surface-container py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-secondary-fixed hover:text-primary transition-colors flex items-center">
            <span className="material-symbols-outlined mr-1">arrow_back</span>
            Back to Hub
          </Link>
          <div className="h-6 w-px bg-surface-container-highest"></div>
          <span className="font-headline-sm text-primary font-bold">ShopPulse Bot Control</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-base md:text-sm px-3 py-2 md:py-1 bg-green-500/10 text-green-500 border border-green-500/20 rounded-full flex items-center">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Bot Online
          </span>
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-primary-fixed font-bold">
            SP
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-[1600px] mx-auto w-full">
        {/* Analytics Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <h2 className="font-headline-md text-primary mb-4">Live Analytics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-surface-container-lowest p-5 rounded-2xl border border-surface-container-highest shadow-soft">
              <span className="text-on-surface-variant text-base md:text-sm block mb-1">Active Chats</span>
              <span className="font-display-sm text-primary">24</span>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-2xl border border-surface-container-highest shadow-soft">
              <span className="text-on-surface-variant text-base md:text-sm block mb-1">Resolved Today</span>
              <span className="font-display-sm text-secondary-fixed">142</span>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-2xl border border-surface-container-highest shadow-soft">
              <span className="text-on-surface-variant text-base md:text-sm block mb-1">Avg Resolution Time</span>
              <span className="font-display-sm text-primary">1m 12s</span>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-2xl border border-surface-container-highest shadow-soft">
              <span className="text-on-surface-variant text-base md:text-sm block mb-1">Orders Tracked</span>
              <span className="font-display-sm text-secondary-fixed">89</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-highest shadow-soft mt-8">
            <h3 className="font-headline-sm text-primary mb-4">Recent Intents</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-surface-container pb-2">
                <span className="text-on-surface-variant flex items-center"><span className="material-symbols-outlined mr-2 text-base md:text-sm">local_shipping</span> Order Tracking</span>
                <span className="font-bold text-primary">45%</span>
              </li>
              <li className="flex justify-between items-center border-b border-surface-container pb-2">
                <span className="text-on-surface-variant flex items-center"><span className="material-symbols-outlined mr-2 text-base md:text-sm">inventory_2</span> Product Availability</span>
                <span className="font-bold text-primary">30%</span>
              </li>
              <li className="flex justify-between items-center border-b border-surface-container pb-2">
                <span className="text-on-surface-variant flex items-center"><span className="material-symbols-outlined mr-2 text-base md:text-sm">assignment_return</span> Returns &amp; Refunds</span>
                <span className="font-bold text-primary">15%</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-on-surface-variant flex items-center"><span className="material-symbols-outlined mr-2 text-base md:text-sm">support_agent</span> Human Escaplation</span>
                <span className="font-bold text-primary">10%</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Live Chat Mockup */}
        <div className="lg:col-span-8 flex justify-center">
          <div className="w-full max-w-md bg-surface-container-lowest rounded-3xl border border-surface-container-highest shadow-2xl flex flex-col overflow-hidden h-[700px]">
            {/* Chat Header */}
            <div className="deep-navy-bg p-4 flex items-center text-white">
              <div className="w-10 h-10 rounded-full soft-gold-bg flex items-center justify-center text-primary font-bold text-lg mr-3 shadow-md">
                <span className="material-symbols-outlined">smart_toy</span>
              </div>
              <div>
                <h3 className="font-bold">ShopPulse Assistant</h3>
                <p className="text-base md:text-xs text-white/70">Typically replies instantly</p>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-surface-container-lowest">
              {/* Message 1 */}
              <div className="flex justify-end">
                <div className="bg-primary text-white rounded-2xl rounded-tr-sm py-2 px-4 max-w-[85%] text-base md:text-sm">
                  Hi! I want to know where my order is. It's been 3 days.
                </div>
              </div>

              {/* Message 2 */}
              <div className="flex justify-start">
                <div className="bg-surface-container text-on-surface rounded-2xl rounded-tl-sm py-2 px-4 max-w-[85%] text-base md:text-sm shadow-sm border border-surface-container-highest">
                  Hello! I can definitely help you with that. Could you please provide your order number? It usually starts with #SP.
                </div>
              </div>

              {/* Message 3 */}
              <div className="flex justify-end">
                <div className="bg-primary text-white rounded-2xl rounded-tr-sm py-2 px-4 max-w-[85%] text-base md:text-sm">
                  #SP98421
                </div>
              </div>

              {/* Message 4 */}
              <div className="flex justify-start">
                <div className="bg-surface-container text-on-surface rounded-2xl rounded-tl-sm py-3 px-4 max-w-[85%] text-base md:text-sm shadow-sm border border-surface-container-highest">
                  <div className="flex items-center mb-2">
                    <span className="material-symbols-outlined text-secondary-fixed mr-2 animate-spin-slow">sync</span>
                    <span className="font-semibold">Checking system...</span>
                  </div>
                  <p>Great news! Your order <strong>#SP98421</strong> has been dispatched and is currently out for delivery.</p>
                  <div className="mt-3 p-3 bg-surface-container-lowest rounded-lg border border-surface-container">
                    <div className="text-base md:text-xs text-on-surface-variant mb-1">Estimated Delivery</div>
                    <div className="font-bold text-primary">Today by 5:00 PM</div>
                  </div>
                </div>
              </div>

              {/* Message 5 */}
              <div className="flex justify-start">
                <div className="bg-surface-container text-on-surface rounded-2xl rounded-tl-sm py-2 px-4 max-w-[85%] text-base md:text-sm shadow-sm border border-surface-container-highest">
                  Is there anything else I can help you with today?
                </div>
              </div>
              
              {/* Quick Replies */}
              <div className="flex flex-wrap gap-2 justify-start mt-2">
                <button className="text-base md:text-xs px-4 py-3 md:py-2 rounded-full border border-secondary-fixed text-secondary hover:bg-secondary-fixed/10 transition-colors">Track another order</button>
                <button className="text-base md:text-xs px-4 py-3 md:py-2 rounded-full border border-secondary-fixed text-secondary hover:bg-secondary-fixed/10 transition-colors">Return policy</button>
                <button className="text-base md:text-xs px-4 py-3 md:py-2 rounded-full border border-secondary-fixed text-secondary hover:bg-secondary-fixed/10 transition-colors">No, thanks</button>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-surface-container bg-surface-container-lowest">
              <div className="relative">
                <input type="text" placeholder="Type your message..." className="w-full bg-surface-container py-4 md:py-3 pl-4 pr-12 rounded-full border border-surface-container-highest focus:outline-none focus:border-secondary-fixed focus:ring-1 focus:ring-secondary-fixed transition-all text-base md:text-sm" disabled />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors" disabled>
                  <span className="material-symbols-outlined text-base md:text-sm">send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
