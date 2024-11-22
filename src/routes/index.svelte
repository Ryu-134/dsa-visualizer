<script>
    import { goto } from '$app/navigation'; 
</script>

<h1>Data Structures & Algorithms Visualizer</h1>
<p>Select a DSA to visualize:</p>

<ul>        // Add options for different DSA
    <li><button on:click={() => goto('/vector')}>Vector</button></li>   //when function runs '()' call goto function passing parameter /vector
</ul>