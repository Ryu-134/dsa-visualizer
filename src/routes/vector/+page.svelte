
<!-- JS to mimic vector logic to connect JS to visuals -->
<script lang="ts">        
    let vector: string[] = [];
    let capacity = 2;
    let size = 0;
    let inputValue = '';
    // C++ code representation
    let cppCode: string = "#include <vector>\nvector<int> vector";

    function addElements() {
        if (!inputValue) return;    // check for empty input 
        if (size === 8) {      // if vector hits 12 elements reset state variables
            capacity = 2;
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


<!-- Visualization with User Input -->
<div class="flex flex-col w-full justify-center gap-8">
    <!-- Visuals: Vector Graphic and C++ Code Representation -->
    <div class="flex w-full items-start justify-between gap-8">
        <!-- Vector visual representation -->
        <div class="w-[40%] flex flex-col items-center justify-center gap-12">
            <!-- Rectangle for each slot; x: horiz. pstn of of slot; fill: color rect. if its filled or not -->
             <h2 class="text-sandy-brown">Vector Visual:</h2>
            <svg class="border border-saffron" width="700" height="210" >
                <!-- for each possible array index draw rectangle -->
                {#each Array(capacity) as _, i}
                    <rect
                        x={i * 70 + 70}
                        y="70"
                        width="70"
                        height="70"
                        fill={i < size ? "lightblue" : "white"}
                        stroke="black"
                    />
                    <!-- Text for filled slot(s) -->
                    <text
                        x={i * 70 + 105}
                        y="110"
                        text-anchor="middle"
                        alignment-baseline="middle"
                        fill="black"
                    >
                        {i < size ? vector[i] : ""}
                    </text>
                {/each}
            </svg>
            <div class="flex space-x-12 text-center justify-center text-base ">
                <h2 class="text-2xl">Capacity: <span class="text-burnt-sienna">{capacity}</span></h2>
                <h2 class="text-2xl">Size: <span class="text-burnt-sienna">{size}</span></h2>
            </div>
        </div>

        <!-- C++ code representation visuals -->
        <div class="w-[40%] flex flex-col items-center justify-center gap-12">
            <h2 class="text-sandy-brown">Representative Code:</h2>

            <pre><code>{cppCode}</code></pre>
        </div>
    </div>
   
    <!-- User Input: -->
    <div class="flex flex-row items-center justify-center gap-4 mt-4">
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
</div>
