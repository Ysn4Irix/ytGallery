import { json } from '@sveltejs/kit'
import { PrismaClient } from '@prisma/client'

/**
 *
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export const DELETE = async ({ params }) => {
	try {
		const { id } = params
		const prisma = new PrismaClient()
		await prisma.gallery.delete({
			where: {
				id: parseInt(id)
			}
		})

		return json({
			status: 200,
			error: false,
			success: true
		})
	} catch (error) {
		return json({
			status: 400,
			error: false,
			message: error.message
		})
	}
}
