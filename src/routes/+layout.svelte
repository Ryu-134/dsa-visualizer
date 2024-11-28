<script>
    import '../app.css';    // import global styles
    import * as Menubar from "$lib/components/ui/menubar"; // Import Menubar component
</script>
  
<!-- General page layout -->
<div class="gradient-bg">

    <!-- Header -->
    <header>
        <Menubar.Root>
            <!-- File Menu -->
            <Menubar.Menu>
                <Menubar.Trigger class="menubar-trigger">File</Menubar.Trigger>
                <Menubar.Content class="menubar-content">
                    <Menubar.Item class="menubar-item">
                        New Tab <Menubar.Shortcut class="menubar-shortcut">⌘T</Menubar.Shortcut>
                    </Menubar.Item>
                    <Menubar.Item class="menubar-item">New Window</Menubar.Item>
                    <Menubar.Separator class="menubar-separator" />
                    <Menubar.Item class="menubar-item">Print</Menubar.Item>
                </Menubar.Content>
            </Menubar.Menu>
    
            <!-- Edit Menu -->
            <Menubar.Menu>
                <Menubar.Trigger class="menubar-trigger">Edit</Menubar.Trigger>
                <Menubar.Content class="menubar-content">
                    <Menubar.Item class="menubar-item">Undo</Menubar.Item>
                    <Menubar.Item class="menubar-item">Redo</Menubar.Item>
                    <Menubar.Separator class="menubar-separator" />
                    <Menubar.Item class="menubar-item">Cut</Menubar.Item>
                    <Menubar.Item class="menubar-item">Copy</Menubar.Item>
                    <Menubar.Item class="menubar-item">Paste</Menubar.Item>
                </Menubar.Content>
            </Menubar.Menu>
        </Menubar.Root>
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
    