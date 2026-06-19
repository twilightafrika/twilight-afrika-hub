import { Link } from 'react-router-dom';

export default function LeadScoring() {
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
          <span className="font-headline-sm text-primary font-bold">ConvertMetric Intelligence</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">notifications</span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-surface-container-lowest"></span>
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center overflow-hidden border border-surface-container-highest">
            <img src="https://i.pravatar.cc/100?img=33" alt="User" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow p-6 w-full max-w-[1600px] mx-auto space-y-6">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="font-display-sm text-primary">Lead Pipeline Overview</h1>
            <p className="text-on-surface-variant mt-1">Real-time ML-scored leads from all inbound channels</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-3 md:py-2 bg-surface-container rounded-lg text-primary flex items-center hover:bg-surface-container-highest transition-colors border border-surface-container-highest">
              <span className="material-symbols-outlined mr-2 text-base md:text-sm">filter_list</span>
              Filter
            </button>
            <button className="px-4 py-3 md:py-2 soft-gold-bg text-on-secondary-fixed font-semibold rounded-lg flex items-center hover:bg-secondary-container transition-colors shadow-sm">
              <span className="material-symbols-outlined mr-2 text-base md:text-sm">download</span>
              Export CSV
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-highest shadow-soft relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-on-surface-variant font-medium">Total Leads (30d)</span>
              <span className="material-symbols-outlined text-blue-500 bg-blue-500/10 p-2 rounded-lg">group</span>
            </div>
            <div className="font-display-md text-primary">1,248</div>
            <div className="flex items-center text-green-500 text-base md:text-sm mt-2 font-medium">
              <span className="material-symbols-outlined text-base md:text-sm mr-1">trending_up</span>
              +12.5% from last month
            </div>
          </div>
          
          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-highest shadow-soft relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-on-surface-variant font-medium">Hot Leads (Score &gt; 80)</span>
              <span className="material-symbols-outlined text-red-500 bg-red-500/10 p-2 rounded-lg">local_fire_department</span>
            </div>
            <div className="font-display-md text-primary">312</div>
            <div className="flex items-center text-green-500 text-base md:text-sm mt-2 font-medium">
              <span className="material-symbols-outlined text-base md:text-sm mr-1">trending_up</span>
              +5.2% from last month
            </div>
          </div>
          
          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-highest shadow-soft relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500"></div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-on-surface-variant font-medium">Warm Leads (50-79)</span>
              <span className="material-symbols-outlined text-yellow-600 bg-yellow-500/10 p-2 rounded-lg">thermostat</span>
            </div>
            <div className="font-display-md text-primary">645</div>
            <div className="flex items-center text-red-500 text-base md:text-sm mt-2 font-medium">
              <span className="material-symbols-outlined text-base md:text-sm mr-1">trending_down</span>
              -2.1% from last month
            </div>
          </div>
          
          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-highest shadow-soft relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-on-surface-variant font-medium">Conversion Rate</span>
              <span className="material-symbols-outlined text-green-500 bg-green-500/10 p-2 rounded-lg">monetization_on</span>
            </div>
            <div className="font-display-md text-primary">18.4%</div>
            <div className="flex items-center text-green-500 text-base md:text-sm mt-2 font-medium">
              <span className="material-symbols-outlined text-base md:text-sm mr-1">trending_up</span>
              +1.2% from last month
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-surface-container-lowest rounded-2xl border border-surface-container-highest shadow-soft overflow-hidden">
          <div className="p-6 border-b border-surface-container flex justify-between items-center bg-surface-container/30">
            <h3 className="font-headline-sm text-primary">Recent Inbound Leads</h3>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-base md:text-sm">search</span>
              <input type="text" placeholder="Search leads..." className="pl-9 pr-4 py-4 md:py-3 md:py-2 bg-surface-container rounded-lg border border-surface-container-highest focus:outline-none focus:border-secondary-fixed text-base md:text-sm w-full md:w-64" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-on-surface-variant text-base md:text-sm border-b border-surface-container bg-surface-container/10">
                  <th className="py-4 px-6 font-semibold">Lead Details</th>
                  <th className="py-4 px-6 font-semibold">Source</th>
                  <th className="py-4 px-6 font-semibold text-center">AI Score</th>
                  <th className="py-4 px-6 font-semibold">Status</th>
                  <th className="py-4 px-6 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="text-base md:text-sm">
                {/* Row 1 */}
                <tr className="border-b border-surface-container hover:bg-surface-container/20 transition-colors">
                  <td className="py-4 px-6">
                    <div className="font-semibold text-primary">Sarah Jenkins</div>
                    <div className="text-on-surface-variant text-base md:text-xs mt-1">Acme Corp • Tech</div>
                  </td>
                  <td className="py-4 px-6 text-on-surface-variant">LinkedIn Ad</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border-4 border-red-500 flex items-center justify-center font-bold text-red-600 bg-red-50">94</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-base md:text-xs font-medium bg-red-100 text-red-800">
                      Hot • Contact ASAP
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-secondary-fixed hover:text-primary font-medium">Assign</button>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="border-b border-surface-container hover:bg-surface-container/20 transition-colors">
                  <td className="py-4 px-6">
                    <div className="font-semibold text-primary">Marcus Vance</div>
                    <div className="text-on-surface-variant text-base md:text-xs mt-1">Vance Retail • E-commerce</div>
                  </td>
                  <td className="py-4 px-6 text-on-surface-variant">Organic Search</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border-4 border-yellow-400 flex items-center justify-center font-bold text-yellow-700 bg-yellow-50">72</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-base md:text-xs font-medium bg-yellow-100 text-yellow-800">
                      Warm • Nurture
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-secondary-fixed hover:text-primary font-medium">Assign</button>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="border-b border-surface-container hover:bg-surface-container/20 transition-colors">
                  <td className="py-4 px-6">
                    <div className="font-semibold text-primary">Elena Rodriguez</div>
                    <div className="text-on-surface-variant text-base md:text-xs mt-1">Growth Startup • SaaS</div>
                  </td>
                  <td className="py-4 px-6 text-on-surface-variant">Referral</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border-4 border-red-500 flex items-center justify-center font-bold text-red-600 bg-red-50">88</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-base md:text-xs font-medium bg-red-100 text-red-800">
                      Hot • Contact ASAP
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-secondary-fixed hover:text-primary font-medium">Assign</button>
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-surface-container/20 transition-colors">
                  <td className="py-4 px-6">
                    <div className="font-semibold text-primary">John Miller</div>
                    <div className="text-on-surface-variant text-base md:text-xs mt-1">Independent Consultant</div>
                  </td>
                  <td className="py-4 px-6 text-on-surface-variant">Newsletter</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border-4 border-blue-400 flex items-center justify-center font-bold text-blue-700 bg-blue-50">34</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-base md:text-xs font-medium bg-blue-100 text-blue-800">
                      Cold • Automation
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-secondary-fixed hover:text-primary font-medium">Assign</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
