import { getArticle } from "@yababay67/svelte-components/server/index.js"
import { ARTICLES_REPOSITORY } from "$env/static/private"

export async function load({ params, fetch }){
    const { slug } = params
    const [ html, title ] = await getArticle(fetch, slug, ARTICLES_REPOSITORY)
    return { html, title }
}
