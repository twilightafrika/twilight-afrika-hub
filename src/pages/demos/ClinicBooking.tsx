import { Link } from 'react-router-dom';

export default function ClinicBooking() {
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
          <span className="font-headline-sm text-primary font-bold">MedFlow Automation</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-surface-container border-2 border-surface-container-lowest flex items-center justify-center text-base md:text-xs">A</div>
            <div className="w-8 h-8 rounded-full bg-surface-container border-2 border-surface-container-lowest flex items-center justify-center text-base md:text-xs">M</div>
          </div>
          <button className="bg-primary text-white px-4 py-3 md:py-2 rounded-full text-base md:text-sm font-semibold hover:bg-primary/90 transition-colors">
            Share Calendar
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-[1600px] mx-auto w-full">
        {/* Calendar Backend View */}
        <div className="lg:col-span-7 bg-surface-container-lowest rounded-3xl border border-surface-container-highest shadow-soft flex flex-col overflow-hidden h-[700px]">
          <div className="p-6 border-b border-surface-container flex justify-between items-center">
            <div>
              <h2 className="font-headline-md text-primary">Dr. Sarah's Schedule</h2>
              <p className="text-on-surface-variant text-base md:text-sm">October 24, 2026</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 border border-surface-container rounded-lg hover:bg-surface-container-highest transition-colors">
                <span className="material-symbols-outlined text-base md:text-sm">chevron_left</span>
              </button>
              <button className="p-2 border border-surface-container rounded-lg hover:bg-surface-container-highest transition-colors">
                <span className="material-symbols-outlined text-base md:text-sm">chevron_right</span>
              </button>
            </div>
          </div>
          
          <div className="flex-grow overflow-y-auto p-6 bg-surface">
            {/* Calendar Grid Mockup */}
            <div className="space-y-4 relative">
              {/* Timeline markers */}
              <div className="absolute left-0 top-0 bottom-0 w-16 border-r border-surface-container flex flex-col justify-between text-base md:text-xs text-on-surface-variant py-4">
                <span>09:00</span>
                <span>10:00</span>
                <span>11:00</span>
                <span>12:00</span>
                <span>13:00</span>
                <span>14:00</span>
                <span>15:00</span>
                <span>16:00</span>
              </div>
              
              {/* Appointments */}
              <div className="ml-20 space-y-3 pt-2">
                <div className="bg-primary-container border border-primary/20 p-4 rounded-xl shadow-sm">
                  <div className="flex justify-between">
                    <span className="font-bold text-primary">09:00 - 09:30</span>
                    <span className="text-base md:text-xs bg-white/50 px-2 py-2 md:py-1 rounded text-primary">Confirmed via WhatsApp</span>
                  </div>
                  <h4 className="font-semibold mt-1">Michael O.</h4>
                  <p className="text-base md:text-sm text-on-surface-variant">General Checkup</p>
                </div>
                
                <div className="bg-surface-container-lowest border-l-4 border-l-red-400 p-4 rounded-xl shadow-sm opacity-60">
                  <div className="flex justify-between">
                    <span className="font-bold text-on-surface-variant">10:00 - 10:45</span>
                    <span className="text-base md:text-xs bg-red-100 text-red-600 px-2 py-2 md:py-1 rounded">Cancelled (Automated)</span>
                  </div>
                  <h4 className="font-semibold mt-1 line-through">Sarah J.</h4>
                </div>
                
                <div className="bg-secondary-container border border-secondary-fixed/30 p-4 rounded-xl shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-secondary-fixed"></div>
                  <div className="flex justify-between">
                    <span className="font-bold text-secondary">11:15 - 12:00</span>
                    <span className="text-base md:text-xs bg-secondary-fixed/20 px-2 py-2 md:py-1 rounded text-secondary font-semibold animate-pulse">New Booking</span>
                  </div>
                  <h4 className="font-semibold mt-1">David K.</h4>
                  <p className="text-base md:text-sm text-on-surface-variant">Follow-up Consultation</p>
                </div>
                
                <div className="h-16 border-2 border-dashed border-surface-container rounded-xl flex items-center justify-center text-on-surface-variant text-base md:text-sm">
                  Available Slot
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Mobile Chat Mockup */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="w-full max-w-[320px] md:w-[320px] h-[650px] bg-black rounded-[3rem] p-3 shadow-2xl relative border-4 border-surface-container-highest">
            {/* Mobile Screen */}
            <div className="bg-[#efeae2] w-full h-full rounded-[2.25rem] overflow-hidden flex flex-col relative">
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-3xl w-40 mx-auto z-20"></div>
              
              {/* WA Header */}
              <div className="bg-[#075e54] text-white pt-10 pb-3 px-4 flex items-center shadow-md z-10">
                <span className="material-symbols-outlined mr-2 text-xl">arrow_back</span>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#075e54] mr-3">
                  <span className="material-symbols-outlined">medical_services</span>
                </div>
                <div>
                  <h3 className="font-bold text-base leading-tight">MedFlow Clinic</h3>
                  <p className="text-base md:text-xs text-white/80">bot • online</p>
                </div>
              </div>
              
              {/* WA Chat Body */}
              <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-3 pb-16" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundSize: 'cover' }}>
                
                <div className="self-center bg-[#dcf8c6] text-black text-base md:text-xs py-2 md:py-1 px-3 rounded-lg shadow-sm mb-2">Today</div>
                
                {/* User msg */}
                <div className="self-end bg-[#dcf8c6] text-black p-2 rounded-lg rounded-tr-none max-w-[80%] shadow-sm text-base md:text-sm relative">
                  Hi, I need to book an appointment with Dr. Sarah.
                  <span className="text-[10px] text-gray-500 float-right ml-3 mt-2">10:45 AM ✓✓</span>
                </div>
                
                {/* Bot msg */}
                <div className="self-start bg-white text-black p-2 rounded-lg rounded-tl-none max-w-[85%] shadow-sm text-base md:text-sm">
                  <p className="mb-1">Hello! I'm the MedFlow scheduling assistant.</p>
                  <p>Dr. Sarah is available today at the following times:</p>
                  <ul className="list-none mt-2 space-y-1">
                    <li className="bg-gray-100 p-2 rounded text-center font-semibold text-blue-600">1. 11:15 AM</li>
                    <li className="bg-gray-100 p-2 rounded text-center font-semibold text-blue-600">2. 02:30 PM</li>
                    <li className="bg-gray-100 p-2 rounded text-center font-semibold text-blue-600">3. 04:00 PM</li>
                  </ul>
                  <p className="mt-2 text-base md:text-xs text-gray-500">Reply with 1, 2, or 3 to select.</p>
                  <span className="text-[10px] text-gray-400 float-right mt-1">10:45 AM</span>
                </div>
                
                {/* User msg */}
                <div className="self-end bg-[#dcf8c6] text-black p-2 rounded-lg rounded-tr-none max-w-[80%] shadow-sm text-base md:text-sm relative">
                  1
                  <span className="text-[10px] text-gray-500 float-right ml-3 mt-1">10:46 AM ✓✓</span>
                </div>
                
                {/* Bot msg */}
                <div className="self-start bg-white text-black p-2 rounded-lg rounded-tl-none max-w-[85%] shadow-sm text-base md:text-sm">
                  <p className="mb-2">Great. Booking <strong>11:15 AM today</strong>.</p>
                  <p>Please reply with your full name to confirm.</p>
                  <span className="text-[10px] text-gray-400 float-right mt-1">10:46 AM</span>
                </div>
                
                {/* User msg */}
                <div className="self-end bg-[#dcf8c6] text-black p-2 rounded-lg rounded-tr-none max-w-[80%] shadow-sm text-base md:text-sm relative">
                  David K.
                  <span className="text-[10px] text-gray-500 float-right ml-3 mt-1">10:47 AM ✓✓</span>
                </div>
                
                {/* Bot msg */}
                <div className="self-start bg-white text-black p-2 rounded-lg rounded-tl-none max-w-[85%] shadow-sm text-base md:text-sm border-l-4 border-green-500">
                  <div className="flex items-center mb-1 text-green-600 font-bold">
                    <span className="material-symbols-outlined text-base md:text-sm mr-1">check_circle</span>
                    Confirmed
                  </div>
                  <p>Thanks David! Your appointment with Dr. Sarah is confirmed for today at 11:15 AM.</p>
                  <p className="text-base md:text-xs mt-2 text-gray-500">Reply 'CANCEL' if you need to reschedule later.</p>
                  <span className="text-[10px] text-gray-400 float-right mt-1">10:47 AM</span>
                </div>

              </div>
              
              {/* WA Input */}
              <div className="absolute bottom-0 inset-x-0 bg-transparent p-2 flex items-center gap-2">
                <div className="flex-grow bg-white rounded-full flex items-center px-4 py-2 shadow-sm">
                  <span className="material-symbols-outlined text-gray-400 mr-2">mood</span>
                  <input type="text" placeholder="Message" className="w-full text-base md:text-sm outline-none bg-transparent" disabled />
                  <span className="material-symbols-outlined text-gray-400 ml-2 transform rotate-45">attach_file</span>
                  <span className="material-symbols-outlined text-gray-400 ml-3">photo_camera</span>
                </div>
                <div className="w-10 h-10 bg-[#128C7E] rounded-full flex items-center justify-center text-white shadow-sm">
                  <span className="material-symbols-outlined text-xl">mic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
