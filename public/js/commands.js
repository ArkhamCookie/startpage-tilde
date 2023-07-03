// type="module"
import { CONFIG } from './config.js'

class Commands extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
		const template = document.getElementById('commands-template')
		const clone = template.content.cloneNode(true)
		const commands = clone.querySelector('.commands')
		const commandTemplate = document.getElementById('command-template')

		for (const [key, { name, url }] of commands.entries()) {
			if (!name || !url) continue // skips if missing?

			const clone = commandTemplate.content.cloneNode(true)
			const command = clone.querySelector('.command')
			command.href = url

			if (CONFIG.openLinksInNewTab) {
				command.target = '_blank'
			}

			clone.querySelector('.key').innerText = key
			clone.querySelector('.name').innerText = name
			commands.append(clone)
		}
		this.shadowRoot.append(clone)
	}
}

customElements.define('commands-component', Commands)
