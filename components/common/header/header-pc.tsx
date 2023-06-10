import { Box, Container, Stack } from '@mui/material'
import { clsx } from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HEADER_ROUTE } from './routes'

export interface HeaderDesktopProps {}

export function HeaderDesktop(props: HeaderDesktopProps) {
	const router = useRouter()

	return (
		<Box display={{ md: 'block', xs: 'none' }} py={2}>
			<Container>
				<Stack direction="row" justifyContent="flex-end">
					{HEADER_ROUTE.map((route) => (
						<Link
							key={route.path}
							href={route.path}
							passHref
							className={clsx({ active: router.pathname === route.path }, 'link')}
						>
							{route.label}
						</Link>
					))}
				</Stack>
			</Container>
		</Box>
	)
}
