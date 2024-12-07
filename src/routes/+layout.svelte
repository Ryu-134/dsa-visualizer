<script>
    import Menubar from "$lib/components/ui/menubar/menubar.svelte"; // Import Menubar   
    import '../app.css';    // import global styles

</script>
  
<!-- General page layout -->
<div class="gradient-bg min-h-screen flex flex-col items-center justify-center">

    <!-- Header -->
    <header>
        <img src="/logo.png" alt="Logo">
        <Menubar />
    </header>

    <!-- Main Context -->
    <main>
        <!-- Dynamic content injection for each page will be inserted here -->
        <slot /> 
    </main>

    <!-- Footer -->
    <footer>
        &copy; 2024 My Website. All rights reserved
    </footer>
    
</div>  
    