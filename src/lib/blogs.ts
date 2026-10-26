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
};

export const blogs: Blog[] = [
	{
		id: 1,
		title: "Understanding Modern Web Development in 2026",
		slug: "understanding-modern-web-development-2026",
		author: "Sarah Jenkins",
		date: "2026-10-15",
		category: "Technology",
		tags: ["Web Dev", "JavaScript", "Frontend"],
		read_time_minutes: 5,
		summary:
			"An overview of the latest frameworks, tools, and best practices shaping web development this year.",
	},
	{
		id: 2,
		title: "10 Tips for Boosting Your Daily Productivity",
		slug: "10-tips-for-boosting-your-daily-productivity",
		author: "Marcus Vance",
		date: "2026-10-18",
		category: "Productivity",
		tags: ["Lifestyle", "Time Management", "Work"],
		read_time_minutes: 4,
		summary:
			"Practical, science-backed strategies to help you manage your time better and avoid burnout.",
	},
	{
		id: 3,
		title: "A Beginner's Guide to AI-Assisted Programming",
		slug: "beginners-guide-to-ai-assisted-programming",
		author: "Alex Rivera",
		date: "2026-10-20",
		category: "Artificial Intelligence",
		tags: ["AI", "Coding", "Tools"],
		read_time_minutes: 7,
		summary:
			"Learn how to leverage modern AI tools to write cleaner code, debug faster, and learn new languages.",
	},
	{
		id: 4,
		title: "The Art of Minimalist Interior Design",
		slug: "art-of-minimalist-interior-design",
		author: "Elena Rostova",
		date: "2026-10-22",
		category: "Design",
		tags: ["Interior", "Minimalism", "Home"],
		read_time_minutes: 6,
		summary:
			"How to transform your living space into a calm, functional, and clutter-free sanctuary.",
	},
	{
		id: 5,
		title: "Exploring Sustainable Travel Trends",
		slug: "exploring-sustainable-travel-trends",
		author: "Liam O'Connor",
		date: "2026-10-24",
		category: "Travel",
		tags: ["Eco-Friendly", "Travel", "Environment"],
		read_time_minutes: 5,
		summary:
			"Discover eco-conscious ways to see the world without leaving a heavy carbon footprint.",
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
