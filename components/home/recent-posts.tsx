import { Box, Container, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import PostCard from './post-card'
import { Post } from 'models/post'

function RecentPosts() {
	const postList: Post[] = [
		{
			id: '1',
			slug: '',
			title: 'Making a design system from scratch',
			publishedDate: '2022-06-15T03:00:00Z',
			tagList: ['Design', 'Pattern'],
			description:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		},
		{
			id: '2',
			slug: '',
			title: 'Creating pixel perfect icons in Figma',
			publishedDate: '2022-06-16T03:00:00Z',
			tagList: ['Figma', 'Icon Design'],
			description:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		},
	]
	return (
		<Box component="section">
			<Container>
				<Stack
					direction="row"
					justifyContent={{ xs: 'center', md: 'space-between' }}
					alignItems="center"
					mb={2}
				>
					<Typography variant="h5" >Resent posts</Typography>
					<Link href="/blog">
						<Typography sx={{ display: { xs: 'none', md: 'block' } }}>View all</Typography>
					</Link>
				</Stack>
				<Stack
					direction={{ sx: 'column', md: 'row' }}
					spacing={3}
					sx={{
						'& > div': {
							width: {
								xs: '100%',
								md: '50%',
							},
						},
					}}
				>
					{postList.map((post) => (
						<Box key={post.id}>
							<PostCard post={post} />
						</Box>
					))}
				</Stack>
			</Container>
		</Box>
	)
}

export default RecentPosts
