const date = new Date();
const appendCopyRightDate = document.querySelector('#date');
appendCopyRightDate.append(date.getFullYear()) // We push in our current year in the empty span

const posts = document.querySelectorAll(".post");
const observerPosts = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.target.classList.toggle('show', entry.isIntersecting); // If observer is 100% (look at threshold) then this will show our target
		// if (entry.isIntersecting) observerBoxes.unobserve(entry.target); //Remove this if you want to keep animation on top and bottom observer!
	}),
	{
		threshold: 1,
	}
});

posts.forEach(post => {
	observerPosts.observe(post);
})

const mosaics = document.querySelectorAll(".box");
const observerBoxes = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.target.classList.toggle('lazy-load', entry.isIntersecting); // If observer is 100% (look at threshold) then this will show our target
		// if (entry.isIntersecting) observerBoxes.unobserve(entry.target); //Remove this if you want to keep animation on top and bottom observer!
	}),
	{
		rootMargin: "100px"
	}
});

mosaics.forEach(mosaic => {
	observerBoxes.observe(mosaic);
})