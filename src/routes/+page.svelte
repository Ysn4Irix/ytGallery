<script>
	import { onMount } from 'svelte'

	let clickedVideo = ''
	let id = ''
	let errorMsg = ''
	let loading = false
	let data = []
	let modalOpen = false
	let videoUrl = ''

	const loadVideos = async () => {
		errorMsg = ''
		loading = true
		const res = await fetch('/api')
		const { videos } = await res.json()
		data = videos
		loading = false
	}
	/**
	 *
	 * @param {string} Url
	 * @param {string} videoId
	 */
	const previewVideo = (Url, videoId) => {
		modalOpen = true
		id = videoId
		clickedVideo = `https://www.youtube.com/embed/${getVideoId(Url)}`
	}

	const addVideo = async () => {
		errorMsg = ''
		loading = true
		const isValid = new RegExp('^(https?://)?(www.youtube.com|youtu.be)/.+$').test(videoUrl)

		if (!isValid) return (errorMsg = 'Invalid Link')

		const thumbnailUrl = `https://i3.ytimg.com/vi/${getVideoId(videoUrl)}/sddefault.jpg`
		const options = {
			method: 'POST',
			body: JSON.stringify({
				thumbnailUrl,
				videoUrl
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		}
		try {
			const response = await fetch('/api/gallery', options)
			if (response.ok) {
				await loadVideos()
				loading = false
			} else loading = true
			//console.log(res)
		} catch (err) {
			loading = false
			error = err.message
		}
	}

	/**
	 *
	 * @param {string} id
	 */
	const deleteVideo = async (id) => {
		const options = {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		}
		try {
			const response = await fetch(`/api/gallery/delete/${id}`, options)
			const res = await response.json()
			//console.log(res)
			modalOpen = false
			await loadVideos()
		} catch (err) {
			loading = false
			error = err.message
		}
	}

	/**
	 *
	 * @param {string} url
	 * @returns {string}
	 */
	const getVideoId = (url) => {
		const queries = url.split('?')[1]

		return queries.replace('v=', '')
	}

	onMount(async () => await loadVideos())
</script>

<div class="flex flex-col justify-center  items-center font-fresca">
	<svg class="w-40 pr-4" viewBox="0 0 448 148" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M139.328 69.272L162.496 69.912C162.752 72.984 162.88 76.1413 162.88 79.384C162.88 82.5413 162.453 85.9547 161.6 89.624C160.832 93.2933 159.595 96.8773 157.888 100.376C156.181 103.789 153.749 106.563 150.592 108.696C147.52 110.829 143.467 111.896 138.432 111.896C133.397 111.896 128.704 110.829 124.352 108.696C120 106.477 116.629 103.363 114.24 99.352C109.547 91.672 107.2 81.816 107.2 69.784C107.2 58.4347 109.973 48.7067 115.52 40.6C118.251 36.6747 121.835 33.56 126.272 31.256C130.709 28.8667 135.403 27.672 140.352 27.672C145.387 27.672 149.397 28.5253 152.384 30.232C155.456 31.8533 158.4 34.584 161.216 38.424L152.128 44.696C148.459 40.1733 144.363 37.912 139.84 37.912C133.013 37.912 127.68 41.1547 123.84 47.64C120.085 54.04 118.208 61.6773 118.208 70.552C118.208 76.952 119.659 83.5653 122.56 90.392C124.011 93.8053 126.101 96.6213 128.832 98.84C131.563 101.059 134.805 102.168 138.56 102.168C142.4 102.168 145.685 100.12 148.416 96.024C151.147 91.8427 152.512 86.5947 152.512 80.28C152.512 79.6827 152.512 79.0853 152.512 78.488L139.328 78.36V69.272ZM189.534 112.024C183.987 112.024 179.422 110.403 175.838 107.16C172.339 103.832 170.59 99.3947 170.59 93.848C170.59 88.3013 172.595 83.7787 176.606 80.28C180.617 76.7813 185.353 75.032 190.814 75.032C196.275 75.032 200.926 76.7813 204.766 80.28V75.416C204.766 70.1253 203.699 66.0293 201.566 63.128C199.518 60.1413 196.958 58.648 193.886 58.648C190.814 58.648 188.126 59.3733 185.822 60.824C183.603 62.1893 181.257 64.3227 178.782 67.224L173.022 60.696C178.825 53.1867 186.121 49.432 194.91 49.432C208.734 49.432 215.646 57.24 215.646 72.856C215.646 88.472 215.689 101.229 215.774 111.128H206.686L206.302 105.496L205.918 105.24C204.723 106.947 202.505 108.525 199.262 109.976C196.105 111.341 192.862 112.024 189.534 112.024ZM204.894 93.08C204.809 90.008 203.529 87.6187 201.054 85.912C198.579 84.2053 195.593 83.352 192.094 83.352C188.595 83.352 185.865 84.3333 183.902 86.296C181.939 88.2587 180.958 90.6053 180.958 93.336C180.958 96.0667 181.939 98.456 183.902 100.504C185.95 102.467 188.723 103.448 192.222 103.448C195.721 103.448 198.665 102.595 201.054 100.888C203.529 99.096 204.809 96.4933 204.894 93.08ZM220.646 28.184L220.262 18.712L241.766 17.688C240.998 50.712 240.614 70.04 240.614 75.672L240.358 110.872L230.118 111.64V75.416C230.118 63.2987 229.905 47.128 229.478 26.904L220.646 28.184ZM250.771 28.184L250.387 18.712L271.891 17.688C271.123 50.712 270.739 70.04 270.739 75.672L270.483 110.872L260.243 111.64V75.416C260.243 63.2987 260.03 47.128 259.603 26.904L250.771 28.184ZM332.736 84.888L294.976 85.144C294.976 90.6053 296.512 95 299.584 98.328C302.656 101.571 306.112 103.192 309.952 103.192C313.792 103.192 317.077 102.595 319.808 101.4C322.624 100.12 324.629 98.8827 325.824 97.688L327.488 95.768L332.736 102.68C327.787 108.653 320.107 111.64 309.696 111.64C301.333 111.64 294.976 109.123 290.624 104.088C286.272 99.0533 284.096 92.1413 284.096 83.352C284.096 74.4773 286.827 66.712 292.288 60.056C297.835 53.3147 304.917 49.944 313.536 49.944C320.448 49.944 325.483 52.3333 328.64 57.112C331.883 61.8053 333.504 67.9493 333.504 75.544C333.504 78.7013 333.248 81.816 332.736 84.888ZM323.52 77.592C323.52 71.448 322.581 66.7973 320.704 63.64C318.912 60.4827 315.669 58.904 310.976 58.904C306.368 58.904 302.528 60.952 299.456 65.048C296.469 69.0587 294.933 73.3253 294.848 77.848L323.52 77.592ZM345.564 50.968L354.78 49.944L355.932 62.104L356.7 61.976C361.223 53.4427 367.153 49.176 374.492 49.176C377.905 49.176 381.404 50.2427 384.988 52.376L380.508 62.232C377.436 60.2693 374.449 59.288 371.548 59.288C368.732 59.288 366.215 60.568 363.996 63.128C361.777 65.6027 360.028 69.016 358.748 73.368C357.553 77.6347 356.956 82.6693 356.956 88.472C356.956 94.2747 357.169 101.784 357.596 111L345.692 111.512C345.863 97.688 345.948 86.2533 345.948 77.208L345.564 50.968ZM433.512 49.56L445.672 51.864C433.469 84.9733 426.301 104.899 424.168 111.64C422.12 118.381 420.584 122.947 419.56 125.336C418.621 127.725 417.256 130.2 415.464 132.76C411.965 137.709 406.632 140.184 399.464 140.184C392.381 140.184 386.323 138.861 381.288 136.216L384.488 126.232C389.693 129.219 395.069 130.712 400.616 130.712C404.371 130.712 407.4 129.304 409.704 126.488C412.008 123.757 413.16 120.685 413.16 117.272C413.16 113.944 411.752 108.611 408.936 101.272L388.712 51.992L401.256 49.048L418.92 99.48L433.512 49.56Z"
			fill="#444444"
		/>
		<path
			d="M7.29464 54.3086C7.71237 47.8776 12.8828 42.8376 19.3195 42.5187C28.6403 42.0569 41.9623 41.5 52 41.5C62.0377 41.5 75.3597 42.0569 84.6805 42.5187C91.1172 42.8376 96.2876 47.8776 96.7054 54.3086C97.1056 60.47 97.5 68.0514 97.5 74C97.5 79.9486 97.1056 87.53 96.7054 93.6914C96.2876 100.122 91.1172 105.162 84.6805 105.481C75.3597 105.943 62.0377 106.5 52 106.5C41.9623 106.5 28.6403 105.943 19.3195 105.481C12.8828 105.162 7.71237 100.122 7.29464 93.6914C6.89443 87.53 6.5 79.9486 6.5 74C6.5 68.0514 6.89443 60.47 7.29464 54.3086Z"
			fill="#FC0D1B"
		/>
		<path d="M42.25 61V87L68.25 74L42.25 61Z" fill="white" />
	</svg>
	<input
		type="text"
		placeholder="Video url..."
		class="input input-secondary input-bordered mt-4 w-full max-w-xs"
		bind:value={videoUrl}
	/>
	<button
		on:click={addVideo}
		class:btn-disabled={videoUrl === ''}
		type="button"
		class="btn btn-secondary mt-2 shadow-sm font-fresca w-72"
	>
		Save
	</button>
	{#if errorMsg}
		<h3 class="font-fresca text-center text-red-500 mt-4">{errorMsg}</h3>
	{:else if loading}
		<progress class="progress progress-secondary w-56 mt-8" />
	{:else}
		<ul
			class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 my-9"
		>
			{#each data as { thumbnailUrl, videoUrl, id }}
				<li {id} class="relative">
					<div
						class="group block w-80 h-60 aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
					>
						<img
							src={thumbnailUrl}
							alt="thumbnailUrl"
							class="object-cover pointer-events-none group-hover:scale-110 transition-all duration-300 ease-in-out"
						/>
						<button
							on:click={previewVideo(videoUrl, id)}
							type="button"
							class="absolute inset-0 focus:outline-none"
						>
							<span class="sr-only">View details</span>
						</button>
					</div>
				</li>
			{/each}
		</ul>
	{/if}

	<input type="checkbox" id="my-modal-5" class="modal-toggle" checked={modalOpen} />
	<label for="" class="modal transition-all duration-300 ease-in-out modal-bottom">
		<label class="modal-box relative" for="">
			<label
				for=""
				on:click={() => (modalOpen = false)}
				class="btn btn-sm btn-circle absolute right-2 top-2">❌</label
			>
			<label for="" on:click={deleteVideo(id)} class="btn btn-sm btn-circle absolute left-2 top-2"
				>🗑️</label
			>
			<div class="relative w-full" style="padding-top: 42.857143%">
				<iframe
					title="id"
					class="absolute top-0 right-0 bottom-0 left-0 w-full h-full mt-4 rounded-lg"
					frame-border="0"
					src={clickedVideo}
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			</div>
		</label>
	</label>
</div>
