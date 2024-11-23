<script>
    import { goto } from '$app/navigation'; 
</script>

<!-- Whats the point of the HTML here? Ask GPT -->
<h1>Data Structures & Algorithms Visualizer</h1>
<p>Select a DSA to visualize:</p>

 <ul>     
    <li><button on:click={() => goto('/vector')}>Vector</button></li>   
</ul>

<div class="text-center bg-gray-100 p-5">
    <h1 class="text-4xl font-bold">DSA Visualizer</h1>
    <ul class="mt-5">
        <div class="inline-block mx-2">
        <li><button class="bg-blue-500 text-white px-4 py-2 rounded" on:click={() => goto('/vector')}>Vector</button></li>
    </ul>
</div>

<!-- 
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
 -->