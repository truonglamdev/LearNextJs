import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material'
import { Box, Container, Icon, Stack, Typography } from '@mui/material'

export function Footer() {
	const socialLinks = [
		{ comp: Facebook, url: 'https://google.com' },
		{ comp: Twitter, url: 'https://google.com' },
		{ comp: Instagram, url: 'https://google.com' },
		{ comp: LinkedIn, url: 'https://google.com' },
	]
	return (
		<Box component="footer" py={2} textAlign="center">
			<Container>
				<Stack direction="row" justifyContent="center">
					{socialLinks.map((item, index) => (
						<Box
							key={index}
							component="a"
							p={2}
							href={item.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Icon component={item.comp} sx={{ fontSize: 48 }} />
						</Box>
					))}
				</Stack>
				<Typography>Copyright ©{new Date().getUTCFullYear()} All rights reserved </Typography>
			</Container>
		</Box>
	)
}
