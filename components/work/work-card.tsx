/* eslint-disable @next/next/no-img-element */
import { Box, Stack, Typography, Chip } from '@mui/material'
import { Work } from 'models/work'

export interface WorkCardProps {
	work: Work
}
export function WorkCard({ work }: WorkCardProps) {
	return (
		<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
			<Box width={{ xs: '100%', sm: '246px' }} flexShrink={0}>
				<img src={work.thumbnailUrl} width={246} height={180} alt="work thumbnail" />
			</Box>
			<Box>
				<Typography variant="h4" fontWeight="bold">
					{work.title}
				</Typography>
				<Stack direction="row" my={2}>
					<Chip
						color="secondary"
						label={new Date(Number.parseInt(work.createdAt)).getFullYear()}
						size="small"
					/>
					<Typography ml={3} color="GrayText">
						{work.tagList.join(', ')}
					</Typography>
				</Stack>
				<Typography>{work.shortDescription}</Typography>
			</Box>
		</Stack>
	)
}
