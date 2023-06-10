import { Card, CardContent } from '@mui/material'
import PostItem from 'components/blog/post-item'
import { Post } from 'models/post'

export interface PostCardProps {
	post: Post
}

function PostCard({ post }: PostCardProps) {
	if (!post) {
		return null
	}
	return (
		<Card>
			<CardContent>
				<PostItem post={post} />
			</CardContent>
		</Card>
	)
}

export default PostCard
