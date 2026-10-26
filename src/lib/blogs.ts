export type Blog = {
	id: number;
	title: string;
	slug: string;
	author: string;
	date: string;
	category: string;
	tags: string[];
	read_time_minutes: number;
	summary: string;
	icon: string;
	banner: string;
};

export const blogs: Blog[] = [
	{
		id: 1,
		title: "Building Scalable Microservices with Node.js",
		slug: "building-scalable-microservices-nodejs",
		author: "Sarah Jenkins",
		date: "2026-11-04",
		category: "Technology",
		tags: ["NodeJS", "Backend", "Architecture"],
		read_time_minutes: 9,
		summary:
			"Key strategies and design patterns for building reliable microservices that scale.",
		icon: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=120&h=120&q=80",
		banner: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=600&q=80",
	},
	{
		id: 2,
		title: "The Science of Deep Work and Uninterrupted Focus",
		slug: "science-of-deep-work",
		author: "Marcus Vance",
		date: "2026-11-05",
		category: "Productivity",
		tags: ["Focus", "Deep Work", "Efficiency"],
		read_time_minutes: 7,
		summary:
			"How to structure your day to enter flow states and produce high-quality work in less time.",
		icon: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=120&h=120&q=80",
		banner: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&h=600&q=80",
	},
	{
		id: 3,
		title: "Understanding Neural Networks: A Visual Introduction",
		slug: "understanding-neural-networks-visual-guide",
		author: "Alex Rivera",
		date: "2026-11-06",
		category: "Artificial Intelligence",
		tags: ["Machine Learning", "Neural Networks", "AI"],
		read_time_minutes: 8,
		summary:
			"An intuitive look into how deep learning models process data and make predictions.",
		icon: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=120&h=120&q=80",
		banner: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&h=600&q=80",
	},
	{
		id: 4,
		title: "Typography Essentials for Digital Interfaces",
		slug: "typography-essentials-digital-interfaces",
		author: "Elena Rostova",
		date: "2026-11-07",
		category: "Design",
		tags: ["Typography", "UI/UX", "Design"],
		read_time_minutes: 5,
		summary:
			"How hierarchy, line height, and font pairing improve readability across screen sizes.",
		icon: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=120&h=120&q=80",
		banner: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=1200&h=600&q=80",
	},
	{
		id: 5,
		title: "The Ultimate Guide to Backpacking Through Europe",
		slug: "ultimate-guide-backpacking-europe",
		author: "Liam O'Connor",
		date: "2026-11-08",
		category: "Travel",
		tags: ["Backpacking", "Europe", "Budget Travel"],
		read_time_minutes: 11,
		summary:
			"Routes, accommodation tips, and budgeting hacks for an unforgettable European trip.",
		icon: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=120&h=120&q=80",
		banner: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&h=600&q=80",
	},
	{
		id: 6,
		title: "CSS Grid vs. Flexbox: When to Use Which",
		slug: "css-grid-vs-flexbox-guide",
		author: "Sarah Jenkins",
		date: "2026-11-09",
		category: "Technology",
		tags: ["CSS", "Frontend", "Web Dev"],
		read_time_minutes: 6,
		summary:
			"Clear rules of thumb for choosing between Grid and Flexbox for modern web layouts.",
		icon: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=120&h=120&q=80",
		banner: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&h=600&q=80",
	},
	{
		id: 7,
		title: "Optimizing Your Morning Routine for Peak Energy",
		slug: "optimizing-morning-routine-peak-energy",
		author: "Marcus Vance",
		date: "2026-11-10",
		category: "Productivity",
		tags: ["Wellness", "Morning Routine", "Health"],
		read_time_minutes: 5,
		summary:
			"Simple adjustments in light exposure, hydration, and movement to jumpstart your day.",
		icon: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=120&h=120&q=80",
		banner: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&h=600&q=80",
	},
	{
		id: 8,
		title: "The Rise of Computer Vision in Retail",
		slug: "rise-of-computer-vision-in-retail",
		author: "Alex Rivera",
		date: "2026-11-11",
		category: "Artificial Intelligence",
		tags: ["Computer Vision", "Retail", "AI Tech"],
		read_time_minutes: 7,
		summary:
			"How smart cameras and automated checkouts are reshaping the physical shopping experience.",
		icon: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=120&h=120&q=80",
		banner: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&h=600&q=80",
	},
	{
		id: 9,
		title: "Creating Intuitive Micro-Interactions in UI Design",
		slug: "creating-intuitive-micro-interactions-ui",
		author: "Elena Rostova",
		date: "2026-11-12",
		category: "Design",
		tags: ["UI/UX", "Animation", "Product Design"],
		read_time_minutes: 6,
		summary:
			"Subtle visual feedback techniques that make digital products feel responsive and delight users.",
		icon: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=120&h=120&q=80",
		banner: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&h=600&q=80",
	},
	{
		id: 10,
		title: "Nordic Travel: Exploring Fjords and Northern Lights",
		slug: "nordic-travel-fjords-northern-lights",
		author: "Liam O'Connor",
		date: "2026-11-13",
		category: "Travel",
		tags: ["Nordic", "Nature", "Adventure"],
		read_time_minutes: 8,
		summary:
			"A complete winter travel itinerary for discovering Scandinavia's iconic landscapes.",
		icon: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=120&h=120&q=80",
		banner: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&h=600&q=80",
	},
	{
		id: 11,
		title: "A Developer's Guide to Web Security Fundamentals",
		slug: "developers-guide-web-security-fundamentals",
		author: "Sarah Jenkins",
		date: "2026-11-14",
		category: "Technology",
		tags: ["Security", "Web Dev", "DevOps"],
		read_time_minutes: 9,
		summary:
			"Protect your web apps against common vulnerabilities like XSS, CSRF, and SQL Injection.",
		icon: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=120&h=120&q=80",
		banner: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&h=600&q=80",
	},
	{
		id: 12,
		title: "Time Blocking: The Calendar Method That Restores Control",
		slug: "time-blocking-calendar-method",
		author: "Marcus Vance",
		date: "2026-11-15",
		category: "Productivity",
		tags: ["Time Management", "Organization", "Workflows"],
		read_time_minutes: 5,
		summary:
			"How to schedule intentional blocks for tasks, meetings, and breaks to double your output.",
		icon: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=120&h=120&q=80",
		banner: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&h=600&q=80",
	},
	{
		id: 13,
		title: "Natural Language Processing Trends to Watch",
		slug: "natural-language-processing-trends",
		author: "Alex Rivera",
		date: "2026-11-16",
		category: "Artificial Intelligence",
		tags: ["NLP", "LLMs", "AI Research"],
		read_time_minutes: 8,
		summary:
			"How multi-modal capabilities and smaller, localized models are shaping the future of NLP.",
		icon: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=120&h=120&q=80",
		banner: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&h=600&q=80",
	},
	{
		id: 14,
		title: "Design Systems at Scale: Architecture & Maintenance",
		slug: "design-systems-at-scale",
		author: "Elena Rostova",
		date: "2026-11-17",
		category: "Design",
		tags: ["Design Systems", "UI/UX", "Component Library"],
		read_time_minutes: 10,
		summary:
			"Strategies for creating reusable, maintainable UI components across cross-functional teams.",
		icon: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=120&h=120&q=80",
		banner: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&h=600&q=80",
	},
	{
		id: 15,
		title: "Exploring National Parks: Off the Beaten Track",
		slug: "exploring-national-parks-off-beaten-track",
		author: "Liam O'Connor",
		date: "2026-11-18",
		category: "Travel",
		tags: ["Outdoors", "National Parks", "Hiking"],
		read_time_minutes: 7,
		summary:
			"Discover lesser-known national parks offering stunning views and tranquility without the crowds.",
		icon: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=120&h=120&q=80",
		banner: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&h=600&q=80",
	},
];
export function getBlogBySlug(slug: string) {
	return blogs.find((blog) => blog.slug === slug);
}

export function formatDate(date: string) {
	return new Date(date).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric",
	});
}

export function getCategories() {
	return [...new Set(blogs.map((blog) => blog.category))];
}

export function countByCategory(category: string) {
	return category === "All"
		? blogs.length
		: blogs.filter((blog) => blog.category === category).length;
}

export function getRelatedPosts(blog: Blog, limit = 3) {
	return blogs
		.filter((item) => item.slug !== blog.slug)
		.sort((a, b) => {
			const aScore = a.category === blog.category ? 1 : 0;
			const bScore = b.category === blog.category ? 1 : 0;
			return bScore - aScore;
		})
		.slice(0, limit);
}

export function getFeaturedPost() {
	return blogs[0];
}
