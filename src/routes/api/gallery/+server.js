import { json } from '@sveltejs/kit'
import { PrismaClient } from '@prisma/client'

/**
 *
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export const POST = async ({ request }) => {
	try {
		const { thumbnailUrl, videoUrl } = await request.json()
		const prisma = new PrismaClient()
		const video = await prisma.gallery.create({
			data: {
				thumbnailUrl,
				videoUrl
			}
		})

		return json({
			status: 200,
			error: false,
			video
		})
	} catch (error) {
		return json({
			status: 400,
			error: false,
			message: error.message
		})
	}
}
