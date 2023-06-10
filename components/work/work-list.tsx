import { Box, Divider } from '@mui/material'
import { Work } from 'models/work'
import { Fragment } from 'react'
import { WorkCard } from './work-card'

export interface WorkListProps {
	workList: Work[]
	// loading?. : boolean
}

export function WorkList({ workList }: WorkListProps) {
	return (
		<Box>
			{workList.map((work) => (
				<Fragment key={work.id}>
					<WorkCard work={work} />
					<Divider sx={{ my: 3 }} />
				</Fragment>
			))}
		</Box>
	)
}
