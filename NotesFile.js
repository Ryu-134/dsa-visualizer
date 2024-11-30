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

// BEST PRACTICE: define colors in app.css and create tokens in tailwind.config to those colors so they can be used in tailwind
    // e.g. 
        // 1. in app.css: 
            :root {
                --background: #264653; 
            }
        // 2. in tailwind.config.js:
            extend: {
                colors: {
                    background: 'hsl(var(--background))', // Use --background token
                }
            }
        // 3. Access via tailwind in HTML/componenets:
            <div class="bg-background">

// CSS Organization
    // global styles: app.css
    // component specific: style in <style> block within the file

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

// WARNING: in tailwindcss styles DO NOT CASCADE like regular CSS
    // even global styles in app.css; some in '@apply' can cascade like font-color BUT background-color and more do not
        // only what could cascade in standard CSS cascades
            // TIP: most inheritable CSS is related to typography; i.e. manipulating text

// In JS double quotes and single quotes are string literals 

// ARIA (Accessible Rich Internet Applications) Roles:
    // def: attributes in HTML to improve accesiblity
        // give non-semantic elements (e.g. <div> or <span>) specific purpose or meaning

// CSS vs JS Animations:
    // Use CSS for lightweight, simple animations (hover effects, transitions).
    // Use JS for complex animations (scroll-based effects, physics-based movement). 

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
        // TIP: flex default is flex-row so just 'flex' -> flex-row
    // Grid is ideal for more complex, two-dimensional layouts.
    // use Flexbox for smaller layout adjustments inside components and Grid for larger, overarching page layouts.
    // Tailwind CSS simplifies both systems with utility classes like flex, grid, justify-center, and gap.


// Website Design Guide:
        // 1. User Flow: map out from page landing to end goal        
            // KEY: As intuitive and apparent as possible

        // 2. Wireframing: look at inspirations & design each page of user flow quick (using tools like Figma); put placeholders: link, img, body, etc
        // 3. STEP AWAY: before commiting breathe and reasses; don't fall to bias

        // 4. Design System: establish reusable, colors, fonts, icons/images, spacing, UI(e.g. buttons, inputs, forms, cards), etc. (generally these are main)
            // a. Colors: 5 main colors for background, text, primary, secondary, accent (maybe additional to indicate success/error)
                // NOTE: different shades of each color can be used for nuanced use (e.g. a filled out input box)
                // TIP: accent color is only for most important element(s)
                // TIP: use subtle gradients to standard color for flair; e.g. black card -> black~dark gray card

            // b. Fonts: 3 main sizes for title (32px, bold), body (18px, regular/bold), small (14px, regular)
            // c. Icons/Images: use Icon/Image libraries
            // d. Spacing: use standard of; 4, 8, 12, 16, 20, 28, 40, 60, 100, 160, 240 (Incremenets for from linear to exponential at halfway point)
                // spacing is to indicate 'relativity'; how related elements are

            // e. UI Components: look at UI design inspiration -> use UI libraries 

        // 5. 7 Core Design Principles:
            // a. Visual Hierarchy: to show order of importance of element; use size, weight, color
                // WARNING: start small often little change gives clear indication
                // TIP: every page is a ROW; each ROW is separate idea and background color/image must be separate for contrast
                    // NOTE: you can have multiple rows with same background but IDEA must be the same then
                    // NOTE: have top & bottom text padding for each row to keep uniform

            // b. Contrast: for readability; for colors mainly but ALSO,
                // depth (outer border shadows): closer is more important; shadows (inner shadows): over less important items

            // c. Balance: clean spacing and formatting (e.g. align left text; centering elemnts)

            // d. Consistency: for harmony (e.g. same font and color theme)
                // NOTE: Law of Similarity & Proximity -> similar CSS and group related elements and space grouped elements relative to each groups similarity 
                // TIP: use REM values for global fonts, spacing, etc; possibly assign variables to speceify what each type is for
                // TIP: line height to automate spacing

            // e. Simplcity: "Good design is as little design as possible"; build on essentials; depth > breadth; images > text
            // f. Feedback: for any user input to keep user engaged

            // g. Top-Down: design from website core function -> build out page -> fine-tune the page
                // NOTE: people SCAN; look at the whole page and break down each element; build out rough page first then fine-tune spacing, etc.


// CSS Layout Guide:
    // KEY: think in boxes; box-model
        // CSS flexbox hierarchy: content -> padding -> border -> margin
    // Build Outside In & Left to Right: <div> naturally stacks on top of each other; every element has parent child relationship

    // Tool to Use: FLEXBOX ( w/ Grid)
        // flexbox makes website responise and limits media queries for screen changes
            // TIP: for small enough screens just disable flexbox and it fits 

        // absolute positioning isnt as distributable; also tedious to code pixel perfect
        // elements are relative to each other so removing elements doesnt leave massive gap like absolute positioning

    // Main Flexbox Properties: 
        // a. display: choose type between flex and grid
        // b. justify-content: align horizontally 
        // c. align-items: align vertically
        // TIP: use flex box cheat sheet website

    // When using Grid: 
        // break smallest element into multiple rows and columns; smallest dividable units; UNLESS website elements are perfectly uniform
            // e.g. a small element may be 2 rows 2 columns and bigger element is 3 rows 4 column
        // BUT if elements span different vertical elements; use gridTemplateAreas

    // LAST RESORT: Absolute + Relative Layout; use as last resort when website requires unconventional positioning on page
        // use relative parent position and absolute child position

// HSL vs Hex Colors:
    // HSL = More control over your colors.
        // 3 values to tweak directly in code: color (hue), intensity (saturation), and brightness (lightness)
            // NOTE: theres a fourth optional value if needed called Alphavalue (transparency); HSLA
    // Easier for light/dark themes conversion
