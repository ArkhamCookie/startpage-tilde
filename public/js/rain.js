// type = "module"

class Rain extends HTMLElement {
	#backgroundColor
	#canvas
	#ctx
	#drops
	#lastRender
	#rainColor
	#rainHeight
	#rainWidth

	constructor() {
		super()
		this.attachShadow({ mode: 'open' })

		const template = document.getElementById('rain-template')
		const clone = template.content.cloneNode(true)
		this.#canvas = clone.querySelector('.rain')
		this.#ctx = this.#canvas.getContext('2d', { alpha: false })

		this.#renderCanvas()
		const rerender = Rain.debounce(this.#renderCanvas, CONFIG.rainFrameRate)

		const mq = '(prefers-color-scheme: light)' // what am I a pyschopath?
		window.matchMedia(mq).addEventListener('change', rerender)
		window.addEventListener('resize', rerender)

		this.shadowRoot.append(clone)
	}

	static cssVar(name) {
		return getComputedStyle(document.body).getPropertyValue(name)
	}

	static debounce(fn, delay) {
		let timeout

		return () => {
			clearTimeout(timeout)
			timeout = setTimeout(() => fn.apply(this, arguments), delay)
		}
	}

	#renderCanvas = () => {
		this.#canvas.height = window.innerHeight
		this.#canvas.width = window.innerWidth

		this.#rainWidth = Math.ceil(this.#canvas.width / CONFIG.rainColumns)
		this.#rainHeight = this.#rainWidth * CONFIG.rainSpeed

		this.#backgroundColor = Rain.cssVar('--color-background')

		this.#rainColor = Rain.cssVar('--color-rain')

		this.#ctx.fillStyle = this.#backgroundColor
		this.#ctx.fillRect(0, 0, this.#canvas.width, this.#canvas.height)

		this.#drops = new Array(CONFIG.rainColumns).fill(0)

		this.#lastRender = performance.now()

		requestAnimationFrame(this.#renderRain)
	}

	#renderRain = (timestamp) => {
		if (timestamp - this.#lastRender >= CONFIG.rainFrameRate) {
			this.#ctx.fillStyle = this.#backgroundColor
			this.#ctx.globalAlpha = CONFIG.rainFade
			this.#ctx.fillRect(0, 0, this.#canvas.width, this.#canvas.height)

			for (let i = 0; i < this.#drops.length; i++) {
				this.#ctx.fillStyle = this.#rainColor
				this.#ctx.globalAlpha = 1

				const x = i * this.#rainWidth
				const y = this.#drops[i] * this.#rainHeight

				this.#ctx.fillRect(x, y, this.#rainWidth, this.#rainHeight)

				if (this.#drops[i] <= 4) {
					// fully fade out previous rain drop streak
					this.#ctx.fillStyle = this.#backgroundColor
					this.#ctx.globalAlpha = this.#drops[i] === 4 ? 1 : 0.4 // fix

					const eraseY = y + this.#rainHeight
					const eraseHeight = this.#canvas.height - eraseY
					this.#ctx.fillRect(x, eraseY, this.#rainWidth, eraseHeight)
				}

				const reset = Math.random() > CONFIG.rainResilience
				if (reset || y > this.#canvas.height) {
					this.#drops[i] = 0
				} else {
					this.#drops[i]++
				}
			}
			this.#lastRender = timestamp
		}
		requestAnimationFrame(this.#renderRain)
	}
}

customElements.define('rain-component', Rain)

export { Rain }
