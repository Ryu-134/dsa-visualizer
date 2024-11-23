<script>        //ex. JS to mimic vector operations
    let vector = [];
    let inputValue = '';

    function addElements() {
        vector = [...vector, inputValue];      //add element to array 
        inputValue = '';    // clear input field
    }
</script>

<h1>Dynamic Array (Vector)</h1>
<p>Learn how vectors work and grow dynamically.</p>

// Input Section
<input type="text" bind:value={inputValue} placeholder="Enter Value" />
<button on:click={addElement}>Add Element</button>

// Visualization
<div> 
    <h2>Vector Elements:</h2>
    <ul>
        {#each vector as element}
        <li>{element}</li>
        {/each}
    </ul>
</div>

// C++ code snippet to display
<pre>
    <code>
        #include &lt;vector&gt;
        using namespace std;

        vector<int> vec;
        vec.push_back(1);       //Append element
    </code>
</pre>

