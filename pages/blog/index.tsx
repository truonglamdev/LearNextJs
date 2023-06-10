import { getPostList } from '@/utils/posts'
import { Box, Container, Divider } from '@mui/material'
import PostItem from 'components/blog/post-item'
import { MainLayout } from 'components/layout'
import { Post } from 'models'
import { GetStaticProps } from 'next'
import Link from 'next/link'

export interface BlogListPageProps {
	posts: Post[]
}
function BlogListPage({ posts }: BlogListPageProps) {
	return (
		<Box>
			<Container>
				<h1>Blog</h1>
                <Box component="ul">
                    {posts.map(post => <li key={post.id}>
						<Link href={`/blog/${post.slug}`}>
							<PostItem post={post}/>
						</Link>
						<Divider sx={{my: 3}}/>
					</li>)}
                </Box>
			</Container>
		</Box>
	)
}

BlogListPage.Layout = MainLayout

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
	// convert markdown files into list of javascript objects
	const postList = await getPostList()

	return {
		props: {
			posts: postList,
		},
	}
}

export default BlogListPage
