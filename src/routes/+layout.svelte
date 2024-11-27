<script>
    import '../app.css';    // import global styles
</script>
  
<!-- Global Wrapper obtained using Coolor: https://coolors.co/264653-2a9d8f-e9c46a-f4a261-e76f51 -->
<div class="bg-charcoal text-saffron min-h-screen flex flex-col justify-center">
    <!-- Header -->
    <header>
        <h1>PLACEHOLDER FOR MENU UI</h1>
    </header>

    <!-- Main Context -->
    <main class="flex-grow p-8">
            <!-- Dynamic Content for each page -->
        <slot /> 
    </main>

    <!-- Footer -->
    <footer >
        &copy; 2024 My Website. All rights reserved
    </footer>

</div>  
    