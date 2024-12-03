<script lang="ts">
    import { Menubar as MenubarPrimitive } from "bits-ui";
    import { cn } from "$lib/utils.js";

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

	<!-- Menuvar layout structure -->
    <MenubarPrimitive.Menu>
        <MenubarTrigger>Home</MenubarTrigger>
		<MenubarTrigger>Data Structure</MenubarTrigger>
			<MenubarContent>
				<MenubarItem>New Tab</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>Print</MenubarItem>
			</MenubarContent>
        <MenubarTrigger>Algorithms</MenubarTrigger>
			<MenubarContent>
				<MenubarItem>Undo</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>Cut</MenubarItem>
			</MenubarContent>
    </MenubarPrimitive.Menu>
</MenubarPrimitive.Root>