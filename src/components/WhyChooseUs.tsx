export default function WhyChooseUs() {
  return (
    <section className="bg-surface-container-lowest py-stack-lg md:py-32 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto text-center">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-16">Why Choose Us</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 relative">
          {/* Card 1 */}
          <div className="bg-surface-container-lowest rounded-2xl p-stack-md shadow-soft border border-surface-container-highest w-full md:w-1/4 h-full z-10">
            <h3 className="font-headline-md text-headline-md text-primary mb-base">We make AI simple and useful</h3>
          </div>
          {/* Arrow */}
          <div className="text-secondary-fixed text-3xl font-bold z-0">
            <span className="material-symbols-outlined hidden md:block">arrow_forward</span>
            <span className="material-symbols-outlined md:hidden">arrow_downward</span>
          </div>
          {/* Card 2 */}
          <div className="bg-surface-container-lowest rounded-2xl p-stack-md shadow-soft border border-surface-container-highest w-full md:w-1/4 h-full z-10">
            <h3 className="font-headline-md text-headline-md text-primary mb-base">We focus on business value</h3>
          </div>
          {/* Arrow */}
          <div className="text-secondary-fixed text-3xl font-bold z-0">
            <span className="material-symbols-outlined hidden md:block">arrow_forward</span>
            <span className="material-symbols-outlined md:hidden">arrow_downward</span>
          </div>
          {/* Card 3 */}
          <div className="bg-surface-container-lowest rounded-2xl p-stack-md shadow-soft border border-surface-container-highest w-full md:w-1/4 h-full z-10">
            <h3 className="font-headline-md text-headline-md text-primary mb-base">We build around your business context</h3>
          </div>
          {/* Arrow */}
          <div className="text-secondary-fixed text-3xl font-bold z-0">
            <span className="material-symbols-outlined hidden md:block">arrow_forward</span>
            <span className="material-symbols-outlined md:hidden">arrow_downward</span>
          </div>
          {/* Card 4 */}
          <div className="bg-surface-container-lowest rounded-2xl p-stack-md shadow-soft border border-surface-container-highest w-full md:w-1/4 h-full z-10">
            <h3 className="font-headline-md text-headline-md text-primary mb-base">We help you save time and serve better</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
