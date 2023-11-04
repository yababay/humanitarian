<script lang="ts">
    import '../styles/index.scss'
    import { Head, Footer } from '@yababay67/svelte-components'
    import { author, description, title, subtitle, keywords, license, url } from '../SEO.json'
    import { PUBLIC_WITH_BOOTSTRAP } from '$env/static/public'

    const seo = { author, description, title, subtitle, keywords }
</script>

<Head {seo} />

<main>
    <slot />
</main>

<Footer {author} {title} {license} {url} />

<svelte:head>
    {#if PUBLIC_WITH_BOOTSTRAP === '1'}
        <link href="/bootstrap.min.css" rel="stylesheet">
        <script src="/bootstrap.bundle.min.js"></script>
    {/if}
</svelte:head>
