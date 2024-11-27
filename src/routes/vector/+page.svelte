
<!-- JS to mimic vector logic to connect JS to visuals -->
<script lang="ts">        
    let vector: string[] = [];
    let capacity = 4;
    let size = 0;
    let inputValue = '';

    // C++ code representation
    let cppCode: string = "#include <vector>\nvector<int> vector";

    function addElements() {
        if (!inputValue) return;    // check for empty input 

        if (size === capacity) {    //double capacity if vector is full
            capacity *= 2;
        }

        vector = [...vector, inputValue];   // append new element to vector using spread (...) 
        cppCode += "\nvec.push_back(${inputValue});";   // show operation in C++ code representation
        size++;     
        inputValue = '';    // clear input field 
    }
</script>

<!-- Page Layout: Contain visuals of vector, representative C++ code, user controls -->

<!-- User Input: -->
<div class="mb-4 flex">
    <!-- bind:value connects user input to inputValue variable -->
    <input 
        type="text" 
        placeholder="Enter Value" 
        bind:value={inputValue} 
        class="border border-gray-300 rounded py-2 px-4 mr-2 text-lg"
    />     
    <button 
        on:click={addElements}
        class="bg-blue-500 text-white py-2"
    >
        Add Element
    </button>
</div>

<!-- Visualization -->
<div class="flex-justify-between">
    <!-- Vector visual representation -->
    <div class="w-1/2">
        <!-- Rectangle for each slot; x: horiz. pstn of of slot; fill: color rect. if its filled or not -->
        <svg class="border border-black" width="500" height="150" >
            <!-- for each possible array index draw rectangle -->
            {#each Array(capacity) as _, i}
                <rect
                    x={i * 50 + 10}
                    y="50"
                    width="40"
                    height="40"
                    fill={i < size ? "lightblue" : "lightgray"}
                    stroke="black"
                />
                <!-- Text for filled slot(s) -->
                <text
                    x={i * 50 + 30}
                    y="72"
                    text-anchor="middle"
                    alignment-baseline="middle"
                    fill="black"
                >
                    {i < size ? vector[i] : ""}
                </text>
            {/each}
        </svg>
        <p class="mt-2" >
            <p>Capacity: {capacity}</p>
            <p>Size: {size}</p>
    </div>
    <!-- C++ code representation visuals -->
    <div class="p-4 rounded">
        <pre><code>{cppCode}</code></pre>
    </div>
</div>

