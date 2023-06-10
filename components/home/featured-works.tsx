import { Box, Container, Typography } from '@mui/material'
import { WorkList } from 'components/work/work-list'
import { Work } from 'models/work'
import React from 'react'

export function FeaturedWorks() {
	const workList: Work[] = [
		{
			id: '1',
			title: 'Designing Dashboards',
			createdAt: '1648363391671',
			updatedAt: '1648363391671',
			tagList: ['Dashboard'],
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription: '',
			thumbnailUrl:
				'https://res.cloudinary.com/dsfx720gh/image/upload/v1685324528/learn_nextjs/image3_lyeehg.jpg',
		},
		{
			id: '2',
			title: 'Vibrant Portraits of 2020',
			createdAt: '1648363391671',
			updatedAt: '1648363391671',
			tagList: ['Illustration'],
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription: '',
			thumbnailUrl:
				'https://res.cloudinary.com/dsfx720gh/image/upload/v1685324528/learn_nextjs/Rectangle_32-min_yxqle9.jpg',
		},
		{
			id: '3',
			title: '36 Days of Malayalam type',
			createdAt: '1648363391671',
			updatedAt: '1648363391671',
			tagList: ['Typography'],
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription: '',
			thumbnailUrl:
				'https://res.cloudinary.com/dsfx720gh/image/upload/v1685324527/learn_nextjs/Rectangle_34-min_tixgl3.jpg',
		},
	]
	return (
		<Box component="section" pt={2} pb={4}>
			<Container>
				<Typography variant="h5" mb={4}>
					Featured Works
				</Typography>

				<WorkList workList={workList} />
			</Container>
		</Box>
	)
}
