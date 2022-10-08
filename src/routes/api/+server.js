import { json } from '@sveltejs/kit'
import { PrismaClient } from '@prisma/client'

/**
 *
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export const GET = async () => {
	try {
		const prisma = new PrismaClient()
		const videos = await prisma.gallery.findMany({
			orderBy: {
				updatedAt: 'desc'
			}
		})

		return json({
			status: 200,
			error: false,
			videos
		})
	} catch (error) {
		return json({
			status: 400,
			error: false,
			message: error.message
		})
	}
}
