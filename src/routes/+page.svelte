<script lang="ts">
    import type { WithHtml } from '@yababay67/svelte-components/dist/types'
    export let data: WithHtml
    const { html } = data
</script>

<section>
    <figure>
        <img width="64" height="64" src="/icons/github.svg" alt="">
    </figure>
    {@html html}
</section>
