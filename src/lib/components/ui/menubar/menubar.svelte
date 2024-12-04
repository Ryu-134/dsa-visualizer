<script lang="ts">
    import { Menubar as MenubarPrimitive } from "bits-ui";
    import { cn } from "$lib/utils.js";
    import { goto } from '$app/navigation'; 


    type $$Props = MenubarPrimitive.Props;

    // Import subcomponents
    import MenubarTrigger from "./menubar-trigger.svelte";
    import MenubarContent from "./menubar-content.svelte";
    import MenubarItem from "./menubar-item.svelte";
    import MenubarSeparator from "./menubar-separator.svelte";

    let className: $$Props["class"] = undefined;
    export { className as class };
</script>


<MenubarPrimitive.Root
    class={cn("bg-background flex h-11 m-0 rounded-md border-charcoal", className)}
    {...$$restProps}
>
	<!-- Menubar layout structure, maybe move to layout.svelte later?  -->
    <MenubarPrimitive.Menu>
        <MenubarTrigger on:click={() => goto('/dsa-visualizer')}>Home</MenubarTrigger>
    </MenubarPrimitive.Menu>

    <MenubarPrimitive.Menu>
		<MenubarTrigger>Data Structure</MenubarTrigger>
			<MenubarContent>
				<MenubarItem on:click={() => goto('/dsa-visualizer/vector')}>Vector</MenubarItem>
                    <MenubarSeparator />
			</MenubarContent>
        </MenubarPrimitive.Menu>
        
    <MenubarPrimitive.Menu>
        <MenubarTrigger>Algorithms</MenubarTrigger>
			<MenubarContent>
				<MenubarItem>n/a</MenubarItem>
					<MenubarSeparator />
                <MenubarItem>n/a</MenubarItem>
			</MenubarContent>
    </MenubarPrimitive.Menu>
</MenubarPrimitive.Root>