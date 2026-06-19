import { Link } from 'react-router-dom';

export default function SeeOurWork() {
  return (
    <section className="bg-surface py-stack-lg md:py-32 px-margin-mobile md:px-margin-desktop" id="demo">
      <div className="max-w-container-max mx-auto">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-16 text-center">See Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Demo 1 */}
          <div className="group rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-shadow duration-300 border border-surface-container-highest flex flex-col h-full bg-surface-container-lowest">
            <div className="h-48 deep-navy-bg bg-gradient-to-br from-[#0d1c33] to-[#1a2f52] relative p-6 flex items-end" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAklwSZg2dS47yp8gonoDesGu_hjv4G4DeBf2cxU4bxkS843YAgphW7PjSID5vHia9lYBsiNVURsSzWrNqGdFCAmvIM3NPW6c-fvEMyo-bSxtxM7eNMJNoorevw040Clk7eutuEQuqYBTDWsHYvigL4QBTCo2qPBvgC2iYQI--jy2HJaMwnjXl8iGlIbUx53WPljYolx-vq93Cn0Z2EarAJc7-ozMHx_Q_K__jijozbiDmUGBAWxCRLKT5SckIYT9DNrOETOvPsLOc")', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
              <span className="glassmorphism text-white font-label-sm px-3 py-1 rounded-full absolute top-4 left-4">E-Commerce Bot</span>
              {/* Abstract decor */}
              <div className="absolute right-4 bottom-4 w-16 h-16 border-2 border-secondary-fixed/30 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="font-headline-md text-headline-md text-primary mb-2">ShopPulse</h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-4">An AI agent designed to answer product availability queries and process basic order tracking for Shopify stores.</p>
              <Link className="soft-gold-text font-label-md flex items-center hover:underline group-hover:translate-x-1 transition-transform" to="/demo/retail-assistant" target="_blank" rel="noopener noreferrer">Launch Demo View <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span></Link>
            </div>
          </div>
          {/* Demo 2 */}
          <div className="group rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-shadow duration-300 border border-surface-container-highest flex flex-col h-full bg-surface-container-lowest">
            <div className="h-48 deep-navy-bg bg-gradient-to-tr from-[#0d1c33] to-[#1a2f52] relative p-6 flex items-end" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBrxGfat0B1ApNJCke-Sa4jLmMBAeOj3LkHeTMYN5nsXtDUIou7d0ejP1gZ0gO61FXrBBVE0bmG_knSD9d7zzywGJCvCdPVTw65YwHWr0mLilwKKvgO2PYv_9Oy9CrdOUtgOM13uhbJ773M9eQcyDD6fnTyEnXWHExaF3qMNIj7D8s4Q4fqKXQHW4BVbLS6-6BuE9LZEiDIhNyw_nkAiGamk7v8O5-o-EMuGYvhLWic-G1V9LJBjRfIalOkHMNRJyJFF95NEZuTmsE")', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
              <span className="glassmorphism text-white font-label-sm px-3 py-1 rounded-full absolute top-4 left-4">Service Automation</span>
              {/* Abstract decor */}
              <div className="absolute right-4 bottom-4 w-12 h-12 bg-secondary-fixed/20 rounded-lg transform rotate-12 opacity-50 group-hover:rotate-45 transition-transform"></div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="font-headline-md text-headline-md text-primary mb-2">MedFlow</h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-4">Automated WhatsApp scheduler that books appointments, sends reminders, and handles rescheduling requests.</p>
              <Link className="soft-gold-text font-label-md flex items-center hover:underline group-hover:translate-x-1 transition-transform" to="/demo/clinic-booking" target="_blank" rel="noopener noreferrer">Launch Demo View <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span></Link>
            </div>
          </div>
          {/* Demo 3 */}
          <div className="group rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-shadow duration-300 border border-surface-container-highest flex flex-col h-full bg-surface-container-lowest">
            <div className="h-48 deep-navy-bg bg-gradient-to-bl from-[#0d1c33] to-[#1a2f52] relative p-6 flex items-end" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAkkEPrn1TZnY1vN3QtsnH1c60XWzWrxdjhuS_kBnQLY1HiG3xVHVyCcrwojZUD_ld2kuXR8-LdI_ZB5fi0J3fJDW9Q3d3pRfcoF920G2OaJhAZxV7cvjiPAc2GwQ1mf028qck40rTu2x0dJHop11KwSpIphj8N-Lo5tYZIB2friPavqrmO_dno0ToieS29wIU_MXIsMi2DqXphanYlf1s1lGV5NVMbQCDt1-0zjAjjNbvrP7lleAe7x9VWA61AHr8Sua9208XWSkE")', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
              <span className="glassmorphism text-white font-label-sm px-3 py-1 rounded-full absolute top-4 left-4">Internal Tool</span>
              {/* Abstract decor */}
              <div className="absolute right-4 bottom-4 w-20 h-4 bg-secondary-fixed/20 rounded-full opacity-50 group-hover:w-24 transition-all"></div>
              <div className="absolute right-4 bottom-10 w-12 h-4 bg-secondary-fixed/20 rounded-full opacity-50"></div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="font-headline-md text-headline-md text-primary mb-2">ConvertMetric</h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-4">A custom dashboard connecting multiple marketing APIs to aggregate and score incoming leads automatically.</p>
              <Link className="soft-gold-text font-label-md flex items-center hover:underline group-hover:translate-x-1 transition-transform" to="/demo/lead-scoring" target="_blank" rel="noopener noreferrer">Launch Demo View <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
