// ******** SVELTE SPECIFIC NOTES ********


// goto function: svelte function to quickly post new page by just getting new page data and place on current page rather than reloading entire page

// '/**/' : double asterick in file globbing means to find matches at any depth
    // e.g. 'src/**/.{html}', this means to find all html files in src directory even if there in further sub directories

// file globbing: matching multiple files using patterns (wildcards)

//Best Practice: use CSS by defining classes (in my CSS or Tailwind) and placing them within HTML tags
    // otherwise can directly define CSS in HTML tags OR in <style> tag in document

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

    // 3. Tie Logic to Visuals: Map the internal state of your class to dynamic visuals on the page.
        // BEST PRACTICE: keep visual logic (HTML + CSS) and page logic (JavaScript) separate 
            // NOTE: does not mean separate files just separte sections in +page.svelte 
            // TIP: you will never separate HTML + CSS; they are symbiotic; only define global CSS style at most
            

    // 4. Add Representations: Use the same logic to output code or explanations alongside the visuals.    


    
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

