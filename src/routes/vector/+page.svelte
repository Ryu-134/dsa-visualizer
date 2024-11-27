
<!-- JS to mimic vector logic to connect JS to visuals -->
<script lang="ts">        
    let vector: string[] = [];
    let capacity = 3;
    let size = 0;
    let inputValue = '';
    // C++ code representation
    let cppCode: string = "#include <vector>\nvector<int> vector";

    function addElements() {
        if (!inputValue) return;    // check for empty input 
        if (size === 12) {      // if vector hits 12 elements reset state variables
            capacity = 3;
            size = 0;
            vector = [];
            inputValue = '';
            cppCode = "#include <vector>\nvector<int> vector";
            return;
        }    
        if (size === capacity) {    //double capacity if vector is full
            capacity *= 2;
        }
        vector = [...vector, inputValue];   // append new element to vector using spread (...) 
        cppCode += `\nvec.push_back(${inputValue});`;   // show operation in C++ code representation
        size++;     
    }
</script>


<!-- Page Layout: Contain visuals of vector, representative C++ code, user controls -->

<!-- User Input: -->
<div>
    <!-- bind:value connects user input to inputValue variable -->
    <input 
        type="text" 
        placeholder="Enter Value" 
        bind:value={inputValue} 
    />     
    <button 
        on:click={addElements}
        class="btn-input"
    >
        Add Element
    </button>
</div>

<!-- Visualization -->

<div class="flex w-full">
    <!-- Vector visual representation -->
    <div class="w-1/2 flex flex-col items-center justify-center">
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
        <div class="flex space-x-10 text-center justify-center">
            <h4>Capacity: {capacity} </h4>
            <h4> Size: {size}</h4>
        </div>
        
    </div>
    <!-- C++ code representation visuals -->
    <div class="w-1/2 flex items-center justify-center">
        <pre><code>{cppCode}</code></pre>
    </div>
</div>

