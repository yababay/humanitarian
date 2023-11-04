import { readFile } from 'fs/promises'

export async function GET({ params }) {
    const { name } = params
    const path = `./node_modules/bootstrap-icons/icons/${name}`
    const svg = await readFile(path, 'utf8')
	const response = new Response(svg)
	response.headers.set('Content-Type', 'image/svg+xml');
    return response
}
