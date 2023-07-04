<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements'
	export let labeltext: string = ''
	export let props: HTMLTextareaAttributes
</script>

<label for={props.name}>
  <span>{labeltext}</span>
</label>
<textarea
  class="dark:bg-custom-dark-v2 duration-300 outline-none focus:border-cyan-400 dark:focus:border-cyan-400 border border-[#b4b2b27d] dark:border-custom-dark rounded-md w-full py-1 px-2 focus:outline-hidden my-2 shadow-sm resize-none"
  {...props}
/>
