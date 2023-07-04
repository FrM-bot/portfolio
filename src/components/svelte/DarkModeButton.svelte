<script>
    import AppIcon from "../icons/AppIcon.svelte"
    import { setDarkTheme } from '../../utils/darkmode'

    const darkModeButton = document.querySelector(
        "#darkmode"
    )

    // const spanDark = document.querySelector(
    //     "#dark"
    // ) as HTMLSpanElement

    // const spanLight = document.querySelector(
    //     "#light"
    // ) as HTMLSpanElement

    if (darkModeButton instanceof HTMLButtonElement) {
        darkModeButton.addEventListener("click", () => {
            const darkModeValue = document.documentElement.getAttribute('data-theme') === 'ligth'
            setDarkTheme(darkModeValue)
            window.localStorage.setItem("darkmode", String(darkModeValue))
            // if (darkModeValue) {
            //     spanDark.classList.add('border')
            //     spanLight.classList.remove('border')
            // }
            // if (!darkModeValue) {
            //     spanLight.classList.add('border')
            //     spanDark.classList.remove('border')
            // }
        })
    }
    function handlerDarkmode() {
        const darkModeValue = document.documentElement.getAttribute('data-theme') === 'ligth'
            setDarkTheme(darkModeValue)
            window.localStorage.setItem("darkmode", String(darkModeValue))
    }
</script>

<!-- <label id="darkmode-button" class="flex cursor-pointer"> -->
    <!-- <button id="darkmode" class="flex items-center">
        <span id="dark" class="p-2 text-primary border-primary rounded-md">
            <SVGDark />
        </span>
        <span id="light" class="p-2 text-secondary border-secondary rounded-md">
            <SVGLigth />
        </span>
    </button> -->
    <!-- <input class='hidden w-0 h-0' id='darkmode' type='checkbox' /> -->
<!-- </label> -->
<button on:click={handlerDarkmode} class="flex items-center dark:[filter:drop-shadow(0px_0px_2px_rgb(var(--primary)))] [filter:drop-shadow(0px_0px_2px_rgb(var(--secondary)))] animate-pulse">
    <AppIcon />
</button>

