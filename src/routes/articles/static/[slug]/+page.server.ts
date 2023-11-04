import { getArticle } from "@yababay67/svelte-components/server/index.js"

export async function load({ params, fetch }){
    const { slug } = params
    const [ html, title ] = await getArticle(fetch, slug)
    return { html, title }
}
