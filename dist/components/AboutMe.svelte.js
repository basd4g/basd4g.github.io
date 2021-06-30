import './AboutMe.svelte.css.proxy.js';
/* src/components/AboutMe.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal
} from "../../_snowpack/pkg/svelte/internal.js";

function create_fragment(ctx) {
	let div;

	return {
		c() {
			div = element("div");

			div.innerHTML = `<h2>About Me</h2> 
  <table class="svelte-18jjhzd"><tr><td class="svelte-18jjhzd">Nickname</td>  <td class="svelte-18jjhzd">yammer<br/>やんまー</td></tr> 
  <tr><td class="svelte-18jjhzd">Name</td>  <td class="svelte-18jjhzd">Keisuke, Nakayama<br/>中山 慶祐</td></tr> 
  <tr><td class="svelte-18jjhzd">Education</td> 
    <td class="svelte-18jjhzd">Department of Information and Computer Sciences, Saitama University
    <br/>埼玉大学工学部情報システム工学科 (2017-2021)</td></tr></table>`;

			attr(div, "class", "about-me");
		},
		m(target, anchor) {
			insert(target, div, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

class AboutMe extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default AboutMe;