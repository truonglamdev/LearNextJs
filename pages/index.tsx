import { Box } from '@mui/material'
import Seo from 'components/common/seo'
import { FeaturedWorks, HeroSection } from 'components/home'
import RecentPosts from 'components/home/recent-posts'
import { MainLayout } from 'components/layout'

export default function Home() {
	return (
		<Box>
			<Seo
				data={{
					title: 'NextJS Tutorials | Easy Frontend',
					description:
						'Step by step tutorials to build a full CRUD website using NextJS for beginners',
					url: 'https://learn-nextjs-fawn.vercel.app/',
					thumbnailUrl:
						'https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/nextjs.png',
				}}
			/>
			<HeroSection />
			<RecentPosts />
			<FeaturedWorks />
		</Box>
	)
}

Home.Layout = MainLayout
