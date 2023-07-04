<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements'
	export let labeltext: string = ''
	export let props: HTMLInputAttributes
</script>

<label for={props.name}>
    <span>{labeltext}</span>
    <input name={props.name} class='dark:bg-custom-dark-v2 duration-300 focus:border-cyan-400 dark:focus:border-cyan-400 outline-none border border-[#b4b2b27d] dark:border-custom-dark rounded-md w-full px-2 py-1 focus:outline-hidden my-2 shadow-sm' {...props} />
</label>