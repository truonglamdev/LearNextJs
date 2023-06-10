import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import avatar from '@/images/avatar.jpg'

export function HeroSection() {
	return (
		<Box component="section" pt={{ xs: 4, md: 18 }} pb={{xs: 7, md: 9}}>
			<Container>
				<Stack
					spacing={2}
					direction={{ xs: 'column-reverse', md: 'row' }}
					textAlign={{ xs: 'center', md: 'left' }}
					alignItems={{ xs: 'center', md: 'flex-start' }}
				>
					<Box>
						<Typography component="h1" variant="h4" fontWeight="bold" mt={{ xs: 2, md: 3.5 }}>
							Hi, I am Lam, <br /> Creative Technologist
						</Typography>
						<Typography component="p" mt={{ xs: 2, md: 3.5 }} mb={{ xs: 2, md: 3.5 }}>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
							officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
							amet.
						</Typography>
						<Button variant="contained">Download Resume</Button>
					</Box>
					<Box
						sx={{
							minWidth: '240px',
							borderRadius: '50%',
							overflow: 'hidden',
							boxShadow: '-5px 13px',
							color: '#EDF7FA',
						}}
					>
						<Image src={avatar} alt="avatar" />
					</Box>
				</Stack>
			</Container>
		</Box>
	)
}
