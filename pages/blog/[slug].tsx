import { Box, Container } from '@mui/material'
import { Post } from 'models'
import React from 'react'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { getPostList } from '@/utils/posts'

export interface BlogPageProps {
	post: Post
}
export default function PostDetailPage({ post }: BlogPageProps) {
	console.log(post)

	if (!post) return null
	return (
		<Box>
			<Container>m</Container>
		</Box>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const postList = await getPostList()
	return {
		paths: postList.map((post: Post) => ({
			params: { slug: post.slug },
		})),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async (
	context: GetStaticPropsContext
) => {
	const postList = await getPostList()
	const slug = context.params?.slug
	if (!slug) return { notFound: true }

	const post = postList.find((x) => x.slug === slug)
	if (!post) return { notFound: true }

	// parse md to html with 
	

	return {
		props: {
			post,
		},
	}
}

