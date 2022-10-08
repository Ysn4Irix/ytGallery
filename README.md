<p align="center">
 <img width="250px" src="https://res.cloudinary.com/ydevcloud/image/upload/v1665261100/yassi/kvfgthwu4zemqukoq1sn.svg" align="center" alt="yt" />
</p>

<br>

<p align="center">
  <b>A youtube gallery web application for collecting valuable resources youtube videos while learning to code built with
  </b>
  <br>
</p>

<p align="center">
<a href="https://kit.svelte.dev" style="appearance: none;">
<img width="100px" src="https://res.cloudinary.com/ydevcloud/image/upload/v1663804918/yassi/mxrjfvymnux04jhjwlh2.svg" align="center" alt="svelte" />
</a>
&nbsp; &nbsp; &nbsp;
<a href="https://prisma.io" style="appearance: none;">
<img width="200px" src="https://res.cloudinary.com/ydevcloud/image/upload/v1665260524/yassi/fhvpnjjhhv6evwakpvid.svg" align="center" alt="nodejs" />
</a>
&nbsp; &nbsp; &nbsp;
<a href="https://planetscale.com" style="appearance: none;">
<img width="100px" src="https://res.cloudinary.com/ydevcloud/image/upload/v1665260586/yassi/xtq1q6vuvmvrxse8knky.svg" align="center" alt="planetscale" />
</a>
&nbsp; &nbsp; &nbsp;
<a href="https://tailwindcss.com" style="appearance: none;">
<img width="200px" src="https://res.cloudinary.com/ydevcloud/image/upload/v1660842725/yassi/dglubft3rg2iuh6fxsaf.svg" align="center" alt="tailwind" />
</a>

</p>

<br>

<p align="center">
  <img src="https://res.cloudinary.com/ydevcloud/image/upload/v1665260747/yassi/ypdpw2ep3yk54ylmgcnp.png" alt="yt" width="600px" style="border-radius: 5px;">

</p>

<br>

<p align="center">
  <img src="https://res.cloudinary.com/ydevcloud/image/upload/v1657122244/yassi/goafdvoalju7ty1seuqo.gif" alt="star-repo" style="border-radius: 5px;">
  <br>
</p>

![📟](https://res.cloudinary.com/ydevcloud/image/upload/v1656874185/asm9cp84cbuuqmarw9wq.png)

## ❯ Usage

The perfect app to keep track of valuable youtube resources while learning to code, if you have one add it to list 😃

**_I start learning the most beloved framework [Sveltekit](https://kit.svelte.dev) and that's what i'm using in the frontend_**

#### API

You can make a `GET` request to [https://yt-gallery.vercel.app/api/](https://yt-gallery.vercel.app/api/) to get all videos

```bash
curl --request GET \
  --url 'https://idiom.ysnirix.live/api
```

Example response

```json
{
	"status": 200,
	"error": false,
	"videos": [
		{
			"id": 19,
			"createdAt": "2022-10-08T20:04:40.407Z",
			"updatedAt": "2022-10-08T20:04:40.407Z",
			"videoUrl": "https://www.youtube.com/watch?v=rLRIB6AF2Dg",
			"thumbnailUrl": "https://i3.ytimg.com/vi/rLRIB6AF2Dg/sddefault.jpg"
		},
		{
			"id": 12,
			"createdAt": "2022-10-08T19:47:44.912Z",
			"updatedAt": "2022-10-08T19:47:44.912Z",
			"videoUrl": "https://www.youtube.com/watch?v=rv3Yq-B8qp4",
			"thumbnailUrl": "https://i3.ytimg.com/vi/rv3Yq-B8qp4/sddefault.jpg"
		},
		{
			"id": 11,
			"createdAt": "2022-10-08T19:46:26.293Z",
			"updatedAt": "2022-10-08T19:46:26.293Z",
			"videoUrl": "https://www.youtube.com/watch?v=rnOQHrYiiD8",
			"thumbnailUrl": "https://i3.ytimg.com/vi/rnOQHrYiiD8/sddefault.jpg"
		},
		{
			"id": 10,
			"createdAt": "2022-10-08T19:32:31.154Z",
			"updatedAt": "2022-10-08T19:32:31.154Z",
			"videoUrl": "https://www.youtube.com/watch?v=9OlLxkaeVvw",
			"thumbnailUrl": "https://i3.ytimg.com/vi/9OlLxkaeVvw/sddefault.jpg"
		}
	]
}
```

### Development

Once you've cloned the project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

- rename .env.example to .env add replace DATABASE_URL with your Planetscale database

```bash
npm run dev
# or start and open the app in a new browser tab
npm run dev -- --open
```

### Production

```bash
npm run build
```

> You can preview the built client app with `npm run preview`,This should _not_ be used to serve your app in production.

<br>

![🙌](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/connect.png)

## ❯ About

<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and features requests, [please create an issue](../../issues/new).

#### Author

**Ysn4Irix**

- [GitHub Profile](https://github.com/Ysn4irix)
- [Instagram Profile](https://instagram.com/ysn.irix)

<br>

![📃](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/license.png)

## ❯ License

Copyright © 2022-present, [Ysn4Irix](https://github.com/Ysn4Irix).
Released under the [MIT License](LICENSE).
