export const COMMANDS = new Map([
	[
		'a',
		{
			name: 'AWS',
			suggestions: [
				'a/cognito/v2/idp/user-pools',
				'a/dynamodbv2#item-explorer'
			],
			url: 'https://us-west-2.console.aws.amazon.com/console/home'
		}
	],
	[
		'b',
		{
			name: 'Dribbble',
			searchTemplate: '/search/{}',
			suggestions: [
				'b/shots/popular/product-design',
				'b/shots/popular/web-design'
			],
			url: 'https://dribbble.com/shots/popular'
		}
	],
	[
		'c',
		{
			name: 'Calendar',
			searchTemplate: '/calendar/u/0/r/search?q={}',
			suggestions: ['c/calendar/u/1/r', 'c/calendar/u/2/r'],
			url: 'https://calendar.google.com/calendar/u/0/r'
		}
	],
	[
		'd',
		{
			name: 'Drive',
			searchTemplate: '/drive/u/0/search?q={}',
			suggestions: ['d/drive/u/1/my-drive', 'd/drive/u/2/my-drive'],
			url: 'https://drive.google.com/drive/u/0/my-drive'
		}
	],
	[
		'e',
		{
			name: 'DALL·E',
			suggestions: ['e/history', 'e/collections'],
			url: 'https://labs.openai.com'
		}
	],
	[
		'f',
		{
			name: 'Figma',
			suggestions: [
				'f/file/new',
				'f/file/new?editor_type=whiteboard',
				'f/community'
			],
			url: 'https://www.figma.com/files/recent'
		}
	],
	[
		'g',
		{
			name: 'GitHub',
			searchTemplate: '/search?q={}',
			suggestions: [
				'g/topics',
				'g/trending',
				'g/collections',
				'gist.github.com'
			],
			url: 'https://github.com'
		}
	],
	[
		'h',
		{
			name: 'Hypem',
			searchTemplate: '/search/{}',
			suggestions: ['h/stack', 'h/mixes', 'h/popular/lastweek', 'h/tags'],
			url: 'https://hypem.com/popular'
		}
	],
	['i', { name: 'ChatGPT', url: 'https://chat.openai.com/chat' }],
	[
		'k',
		{
			name: 'Keep',
			searchTemplate: '/u/0/#search/text={}',
			suggestions: ['k/u/1', 'k/u/2'],
			url: 'https://keep.google.com/u/0'
		}
	],
	[
		'l',
		{
			name: 'Translate',
			searchTemplate: '/?sl=en&tl=es&text={}',
			url: 'https://translate.google.com'
		}
	],
	['m', { name: 'Mail', url: 'https://mail.proton.me/u/0/inbox' }],
	['n', { name: 'Notion', url: 'https://www.notion.so' }],
	['o', { name: 'Discord', url: 'https://discord.com/channels/@me' }],
	[
		'p',
		{
			name: 'Products',
			searchTemplate: '/search?q={}',
			suggestions: ['p/products', 'p/topics', 'p/time-travel'],
			url: 'https://www.producthunt.com'
		}
	],
	[
		'r',
		{
			name: 'Reddit',
			searchTemplate: '/search?q={}',
			suggestions: [
				'r/r/webdev',
				'r/r/startpages',
				'r/r/onebag',
				'r/r/fujix'
			],
			url: 'https://www.reddit.com'
		}
	],
	[
		's',
		{
			name: 'Slack',
			suggestions: ['s/shiftnudge', 's/ayp'],
			url: 'https://app.slack.com'
		}
	],
	[
		's/shiftnudge',
		{
			command: 's/client/T09M5UWSV'
		}
	],
	[
		's/ayp',
		{
			command: 's/client/T03VB9LJ0AF'
		}
	],
	[
		't',
		{
			name: 'Twitter',
			searchTemplate: '/search?q={}',
			suggestions: [
				't/explore/tabs/trending',
				't/hashtag/buildinpublic?f=live'
			],
			url: 'https://twitter.com/home'
		}
	],
	['u', { name: 'Supabase', url: 'https://app.supabase.com/projects' }],
	[
		'v',
		{
			name: 'Vercel',
			suggestions: ['v/dashboard/activity', 'v/dashboard/usage'],
			url: 'https://vercel.com/dashboard'
		}
	],
	[
		'w',
		{
			name: 'Wikipedia',
			searchTemplate: '/w/index.php?search={}',
			suggestions: [
				'w/wiki/Portal:Current_events',
				'w/wiki/Special:Random'
			],
			url: 'https://en.wikipedia.org/wiki/Main_Page'
		}
	],
	[
		'y',
		{
			name: 'YouTube',
			searchTemplate: '/results?search_query={}',
			suggestions: ['y/trending', 'y/music', 'y/gaming', 'y/sports'],
			url: 'https://youtube.com/feed/subscriptions'
		}
	],
	[
		'0',
		{
			name: 'localhost',
			searchTemplate: ':{}',
			suggestions: ['0 54323', '0 8000'],
			url: 'http://localhost:3000'
		}
	],
	['?', { name: 'README', url: 'https://github.com/xvvvyz/tilde' }]
])
