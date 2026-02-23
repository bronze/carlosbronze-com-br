{/* <script is:inline>
	const getThemePreference = () => {
		if (typeof localStorage !== 'undefined' && localStorage.getItem('colorTheme')) {
			return localStorage.getItem('theme');
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	};
	const isDark = getThemePreference() === 'dark';
	document.documentElement.classList[isDark ? 'add' : 'remove']('dark');

	if (typeof localStorage !== 'undefined') {
		const observer = new MutationObserver(() => {
			const isDark = document.documentElement.classList.contains('dark');
			localStorage.setItem('colorTheme', isDark ? 'dark' : 'light');
		});
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
	}
</script> */}


<script is:inline>
	function initTheme() {
		const stored = typeof localStorage !== 'undefined' && localStorage.getItem('colorTheme')
		const isDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
		document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
	}
	initTheme()
	document.addEventListener('astro:after-swap', initTheme)

	if (typeof localStorage !== 'undefined') {
		const observer = new MutationObserver(() => {
			const isDark = document.documentElement.classList.contains('dark')
		localStorage.setItem('colorTheme', isDark ? 'dark' : 'light')
		})
	observer.observe(document.documentElement, {attributes: true, attributeFilter: ['class'] })
	}
</script>