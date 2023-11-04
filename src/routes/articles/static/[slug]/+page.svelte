<script lang="ts">
    import type { WithHtml } from '@yababay67/svelte-components/dist/types'
    export let data: WithHtml
    const { html, title } = data
</script>

{@html html}

<svelte:head>
    <title>{title}</title>
</svelte:head>
