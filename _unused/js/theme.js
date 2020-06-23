https://lea.verou.me/2020/06/hybrid-positioning-with-css-variables-and-max/

{
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
let root = document.documentElement;

document.addEventListener("scroll", evt => {
	root.style.setProperty("--scrolltop", root.scrollTop);
}, {passive: true});

if (window.CSS && CSS.registerProperty) {
	root.classList.add("supports-registerproperty");

	CSS.registerProperty({
		name: "--number",
		syntax: "<number>",
		inherits: true,
		initialValue: "0"
	});

	// Only apply animation when elements are in view, for performance
	let intersectionObserver = new IntersectionObserver(entries => {
		for (let entry of entries) {
			let element = entry.target;
			element.classList.toggle("in-view", entry.intersectionRatio > 0);
		}
	});

	for (let el of $$("#site-header, #site-footer, .singular .entry-header")) {
		intersectionObserver.observe(el);
	}
}

}

css:
	/* Document Setup ------------------------ */
	:root {
		--header-width: min(168rem, calc(100% - 8rem));
		--logo-y: 3em;
		--header-bg-center: calc(50vw - var(--header-width) / 2 + 1em) var(--logo-y);
	}

	@supports (width: max(1px, 1em)) {
		:root {
			--logo-y: calc(3em - var(--scrolltop, 0) * 1px);
		}
	}
