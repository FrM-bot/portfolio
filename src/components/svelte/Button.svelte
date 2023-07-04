<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements'
  import { classNamesJoin } from "../../utils/classNamesJoin"
  import { Styles } from '../../utils/styles'

  export let className = ''
  export let props: HTMLButtonAttributes

  const classStyle = classNamesJoin(
    className,
    "rounded shadow-lg [letter-spacing:1px;] active:[letter-spacing:1px;] hover:[letter-spacing:2px;] py-[0.3em] px-[0.6em] duration-200",
    Styles.borderGradient
  )
</script>

<button
  class={classStyle}
  {...props}
>
  <slot />
</button>
