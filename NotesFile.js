// ******** SVELTE SPECIFIC NOTES ********


// goto function: svelte function to quickly post new page by just getting new page data and place on current page rather than reloading entire page

// '/**/' : double asterick in file globbing means to find matches at any depth
    // e.g. 'src/**/.{html}', this means to find all html files in src directory even if there in further sub directories

// file globbing: matching multiple files using patterns (wildcards)

//Best Practice: use CSS by defining classes (in my CSS or Tailwind) and placing them within HTML tags
    // otherwise can directly define CSS in HTML tags OR in <style> tag in document
    // TIP: Tailwind CSS has 99% of most design elements you'll use so just use that

//padding: empty space between element and its border in  CSS

//SvelteKit uses:
    // File-based routing: Files inside src/routes/ define the URLs of your app.
        // src/routes/+page.svelte → /
        // src/routes/about/+page.svelte → /about

    // Simple Way to Remember:
        // routes = the base of your site.
        // Folder names = URL paths.
        // +page.svelte = content for that path.
        // If there’s no folder (like src/routes/+page.svelte), it maps directly to /. This is why it "condenses" to the root URL.

    // Special file naming: Files like +page.svelte, +layout.svelte, and +server.js are used for routing, layouts, and server-side logic.

// **CHANGE**: ALWAYS create directory per page in routes/ as each folder IS THE URL path and +page.svelte defines 

// TIP: framework specific files '.svelte' are called COMPONENTS (self-contained unit)

// CommonJS vs ES Modules
    // CommonJS (CJS): Uses module.exports and require; older Node.js module system
        // e.g. File: math.js,
            const add = (a, b) => a + b;
            module.exports = add;
    // ES Modules (ESM): Uses export and import; newer Node.js module system
        // e.g. File: math.js,
            export const add = (a, b) => a + b;
    
    // Follow the project's package.json configuration:
        // If type: "module" is set, .js files are treated as ESM.
        // If type: "commonjs" (default), .js files are treated as CommonJS.

    // File Extensions:
        // .js: usually ES Modules; package.json dependent
        // .cjs: explicit CJS Module 
        // .mjs: explicit EM Module

    //TIP: module system is JS fancy wording for import/export system for files (modules)

// use bind:value for live updates on user input

// place color palette styles into +layout.svelte file to create layout (footer, header, persistent UI like menu)
    //add news colors in app.css (to create global style for tags) and reference them (or just bring in directly) in tailwind.config.js extend, to use in TailwindCSS
    //When to use:
        // Use app.css for Consistent Styling Across Tags:
            // Benefit: Global styling works even if you introduce new layouts or components.
            // NOTE: to incorporate tailwind utilities into CSS use '@apply' keyword

        // Use layout.svelte for Reusable Structure:
            // Define a persistent header, footer, or UI element that never changes

        // Work Together for Global and Layout Styling:
            // Use app.css for default tag styles.
            // Use layout.svelte to add styles specific to the layout structure.

// A five-color palette offers flexibility:
    // Background - Neutral Color
    // Primary - Main branding or dominant color.
    // Secondary - Support the primary or create variation.
    // Tertiary - Accent colors for highlights or small details.
    // Accent - sparingly use; to really highlight something 


    

// ***** GENERAL WEB DEV NOTES *******


// Web Dev Logic: 
    // 1. Start by Asking: What does this page need to do?
        // How do I abstract that into logic (using JavaScript classes)?
            // Every action the user takes changes the internal state and is "projected" onto page through visuals (SVGs) and text 
                // TIP: visualize webpage as a STORY; what to get across 

    // 2. Encapsulate Logic: classes to organize the behavior of page 
        // WARNING: unlike C++ OOP DO NOT separate JS of a page into its own .js file UNLESS reusing or it's MASSIVE
            // otherwise keep all in +page.svelte; web pages are often unique
                // BUT reusability is seen at component level (src/components); look at the UI 

    // 3. TIE Logic to Visuals: Map the internal state of your class to dynamic visuals on the page.
        // BEST PRACTICE: keep visual logic (HTML + CSS) and page logic (JavaScript) separate 
            // NOTE: does not mean separate files just separte sections in +page.svelte 
            // TIP: you will never separate HTML + CSS; they are symbiotic; only define global CSS style at most
            
    // 4. Add Representations: Use the same logic to output code or explanations alongside the visuals.    

// '...' : this is spread operator in JS
    // adheres to immutability (NO changing data in place) necessary in funcitonal programming as it creates a new variable
    // in svelte we need to re-assign it to ensure its reacted too as in place mutations (like push(), pop()) dont create a new reference
    // Ex:
        vector = [...vector, inputValue];   // spreads array 'vector' into a new array called 'vector' with appending inputValue

// Think use <div> block whenver you want encapsulation
    
// Tailwind CSS initialization Steps:
    // 1. install tailwindcss, postcss, and autoprefixer
    // 2. Verify/create tailwind.config.js file in root and ensure content property is configrued
    content: [
        './src/**/*.{html,js,svelte,ts}', // Ensures Tailwind scans all relevant files
    ],
// 3. Verify/create postcss.config.js file in root
    module.exports = {
        plugins: {
        tailwindcss: {},
        autoprefixer: {},
        },
    };
// 4. Include tailwind directives in app.css file (create if not there) in src/
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    // a. ensure this file is imported in src/routes/+layout.svelte
        <script>
        import '../app.css';
        </script>
    
        <slot />
  
// Modules: self-contained code that can be imported/exported and reused; e.g. .cpp and .h files act as modules when compiled together

// margin: space outside elements, affecting how far element is from other elements & parent container

// In JS anything that in not <header> or <footer> is generally considered <main>

// In JS double quotes and single quotes are string literals 

// JS string quotes:
    // Single Quotes ( ' ): For simple strings without interpolation and no need for escaping single quotes inside.
    // Double Quotes ( " )	: For strings that contain single quotes or match conventions (e.g., JSON requires double quotes).
    // Template Literals ( ` )	: For strings that need interpolation, multiline formatting, or embedded expressions with ${}.
    // NOTE: interpolation = placing vairables or expression in strings

// Test Breakpoints
    // Breakpoints: These are screen widths where you change styles for different devices. 
    // To test your responsive design:
        // Open your browser’s Developer Tools.
        // Switch to Responsive Mode (usually an icon with a phone/tablet).
        // Adjust the screen width to see how your styles look at different breakpoints (mobile, tablet, desktop).

// Graphic Types:
    // Vector graphics: use points, lines, and shapes to represent images; i.e. shapes to create graphics
        // graphics created mathematically so do not become blurry\
        // NOTE: SVG canvas is always origin of (0, 0) = top-left corder of SVG element, defined in <svg> tag position
    // raster graphics (e.g. JPGs, PNGs): are made of tiny dots called pixels; becomes blurry if resized improperly
        

// Compact Syntax: Inline Functions or Bindings
    // For inline/single-line operations, such as event handlers, function calls, or binding properties use compact syntax
    // JS Ex:
        // Event Handlers:
            <button on:click={addElements}>Add Element</button> <!-- Compact and clear -->
        // Property Bindings:
            <input bind:value={inputValue} />
    // C++ Ex:
        //1.
            if (isEven(number)) std::cout << "Number is even." << std::endl;
        //2. 
            int a = 5;
            std::vector<int> vec = {1, 2, 3};

// CSS Flexbox & Grid
    // Flexbox is great for one-dimensional layouts (rows or columns) and aligning items.
    // Grid is ideal for more complex, two-dimensional layouts.
    // use Flexbox for smaller layout adjustments inside components and Grid for larger, overarching page layouts.
    // Tailwind CSS simplifies both systems with utility classes like flex, grid, justify-center, and gap.
