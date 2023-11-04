import { getArticle } from "@yababay67/svelte-components/server/index.js"
import { ARTICLES_REPOSITORY } from "$env/static/private"

export async function load({ fetch }){
    const [  html ] = await getArticle(fetch, 'table-of-content', ARTICLES_REPOSITORY)
    return { html }
}
