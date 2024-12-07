<script>
    import { goto } from '$app/navigation'; 
</script>


<div>
    <h1>DSA Visualizer</h1>
    <h2>Select a DSA:</h2>

    <ul class="mt-5">
        <div class="inline-block mx-2">
        <li><button on:click={() => goto('/vector')}>Vector</button></li>
    </ul>
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