import { Application, Router } from 'https://deno.land/x/oak@v12.5.0/mod.ts'
import { send } from 'https://deno.land/x/oak@v12.5.0/send.ts'

const app = new Application()
const port = 8000
const router = new Router()

app.use(router.routes())
app.use(router.allowedMethods())
app.use((context) => {
	return send(context, context.request.url.pathname, {
		root: Deno.cwd() + '/public/',
		index: 'index.html'
	})
})

app.addEventListener('listen', () => {
	console.log('Listening at http://localhost:' + port)
})

await app.listen({ port })
