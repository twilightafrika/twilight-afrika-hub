const fs = require('fs');
const path = require('path');

const files = [
  'c:/Users/HP/.gemini/antigravity-ide/scratch/twilight-afrika-hub/src/pages/demos/RetailAssistant.tsx',
  'c:/Users/HP/.gemini/antigravity-ide/scratch/twilight-afrika-hub/src/pages/demos/ClinicBooking.tsx',
  'c:/Users/HP/.gemini/antigravity-ide/scratch/twilight-afrika-hub/src/pages/demos/LeadScoring.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // 1. Stacking: Add overflow-x-hidden to main container
  content = content.replace(
    /<div className="min-h-screen bg-surface font-body-md text-on-surface flex flex-col">/g,
    '<div className="min-h-screen bg-surface font-body-md text-on-surface flex flex-col overflow-x-hidden">'
  );

  // 2. Navigation: flex-col on mobile for Navbars
  content = content.replace(
    /flex justify-between items-center sticky top-0/g,
    'flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 sticky top-0'
  );

  // RetailAssistant specific: Grid cols for analytics
  content = content.replace(
    /grid grid-cols-2 gap-4/g,
    'grid grid-cols-1 sm:grid-cols-2 gap-4'
  );

  // LeadScoring specific: Header flex-col
  content = content.replace(
    /<div className="flex justify-between items-end">/g,
    '<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">'
  );

  // ClinicBooking specific: Phone container max-width
  content = content.replace(
    /w-\[320px\] h-\[650px\]/g,
    'w-full max-w-[320px] md:w-[320px] h-[650px]'
  );

  // 3. Legibility: Text sizes and padding
  
  // text-sm -> text-base md:text-sm
  content = content.replace(/(?<![:a-zA-Z0-9-])text-sm\b/g, 'text-base md:text-sm');
  
  // text-xs -> text-base md:text-xs
  content = content.replace(/(?<![:a-zA-Z0-9-])text-xs\b/g, 'text-base md:text-xs');
  
  // text-[10px] -> text-base md:text-[10px]
  content = content.replace(/(?<![:a-zA-Z0-9-])text-\[10px\]\b/g, 'text-base md:text-[10px]');

  // py-1 -> py-2 md:py-1
  content = content.replace(/(?<![:a-zA-Z0-9-])py-1\b/g, 'py-2 md:py-1');
  
  // Increase button touch target padding
  content = content.replace(/<button([^>]*)py-2([^>]*)>/g, '<button$1py-3 md:py-2$2>');
  
  // Increase input touch target padding
  content = content.replace(/<input([^>]*)py-2([^>]*)>/g, '<input$1py-3 md:py-2$2>');
  // Also py-3 for chat input: already has py-3, let's leave it or make it py-4 md:py-3
  content = content.replace(/<input([^>]*)py-3([^>]*)>/g, '<input$1py-4 md:py-3$2>');

  // LeadScoring search input width
  content = content.replace(/\bw-64\b/g, 'w-full md:w-64');

  fs.writeFileSync(file, content, 'utf8');
});

console.log('Audit complete.');
