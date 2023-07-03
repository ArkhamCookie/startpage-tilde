class Map {
	// required
	name
	url

	// optional
	template
	suggestion
	
	constructor() {
		this.suggestions = []
	}
	
	name(name) {
		this.name = name
	}
	
	url(url) {
		this.url = url
	}
	
	template(template) {
		this.template = template
	}
	
	addSuggestion(suggestion) {
		this.suggestions.push(suggestion)
	}
	
	build() {
		return {
			name: this.name,
			url: this.url,
			template: this.template,
			suggestions: this.suggestions
		}
	}
}

export { Map }