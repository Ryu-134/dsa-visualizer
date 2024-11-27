<script>
    import { goto } from '$app/navigation'; 
</script>


<div class="flex items-center justify-center h-screen p-5">
    <div class= "text-center">
        <h1 class="text-8xl font-extrabold font-mono p-4">DSA Visualizer</h1>
        <h2 class="text-2xl font-normal font-mono">Select a DSA to visualize:</h2>

        <ul class="mt-5">
            <div class="inline-block mx-2">
            <li><button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800" on:click={() => goto('/vector')}>Vector</button></li>
        </ul>
    </div>
</div>


<!-- Template of sub pages (e.g. Vector Subpage)

 Visual:                             Code Visuals:
+----------------------------------+--------------------------------+
|                                  |                                |
|  [Graphical Visual of Vector]    | [C++ Code for Vector]          |
|  ┌──────┬──────┬──────┬──────┐   | #include <vector>              |
|  │  10  │  20  │  30  │      │   | using namespace std;           |
|  └──────┴──────┴──────┴──────┘   |                                |
|  Capacity: 4                     | vector<int> vec;               |
|  Size: 3                         | vec.push_back(10);             |
|                                  | vec.push_back(20);             |
+----------------------------------+--------------------------------+
User Controls: (e.g. Vector Subpage Controls)
                        +--------------+
                        | Append Value |        
                        +--------------+  

-->