<svelte:head>
	<title>whoami</title>
</svelte:head>

<section style:padding="24px 0">
	<p>
		ah! so you're actually interested in reading a random guy's web page that you know nothing
		about? cool!
	</p>

	<br />

	<p>
		My name is Ali. I'm a 21 years old guy who happens to know a thing or two about computers. My
		first programming language was Java, though I didn't do much with it, mainly because that was
		what my university offered. Later on, I learned JavaScript, and then Lua(because neovim, of
		course). I kinda lost track of where I was when I fell into the Linux rabbit hole, but now I'm
		back on track and resuming my journey into the unknown.
	</p>

	<br />

	<p>
		I first started learning about web development, and I initially wanted to be a web developer.
		after a while... that dream sorta died really quickly, and I started fiddling around with random
		stuff again. I found interest in operating systems and also how programming languages work. I
		feel like it's gonna be a long trip but also it seems fun!
	</p>

	<br />

	<h2>What do you do?</h2>
	<hr />

	<br />

	<p>
		currently I'm an IT student at <a href="https://uob.edu.ly/">University of Benghazi</a>.
		Studying computer science. doing good so far, and hopefully I'll graduate by the end of 2025(or
		probably the beginning of 2026)!
	</p>

	<br />

	<h2>Hobbies?</h2>
	<hr />

	<br />

	<div class="hobbies">
		<div>
			<p>
				well not really, I used to have interest in pixel art, and it died the moment I got into
				University. Here's some cool biker art!
			</p>

			<br />

			<p>I made it using aseprite!</p>

			<br />
			<p>
				even tho I like aseprite, I've been transitioning to pixelorama. why leave aseprite for
				pixelorama? you may ask. Well, because I don't want to compile aseprite from source :p
			</p>
			<br />
		</div>
		<img src="/images/biker.png" alt="biker pixel" />
	</div>

	<br />
</section>

<style>
	p {
		font-size: 1.25rem;
	}

	.hobbies {
		display: flex;
		& p {
			padding-right: 12px;
		}

		& img {
			border-radius: 16px;
			min-width: 350px;
			min-height: 350px;
		}
	}

	@media screen and (320px <= width <= 1080px) {
		.hobbies {
			flex-direction: column;

			& p {
				padding-right: initial;
			}

			& img {
				min-width: 100%;
				min-height: 100%;
			}
		}
	}
</style>
