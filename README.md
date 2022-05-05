## Examples of implementing user authentication with nextjs(SSR), prisma and cookies.

Install dependencies and run dev server
```
yarn install
```
```
yarn run dev
```

Run prisma migrations
```
npx prisma migrate dev
```

Seed test data
```
npx prisma db seed
```
Backend routes
* GET /api/users/me
* POST /api/users/login
* DELETE /api/users/logout
* POST /api/users/register
* GET /api/posts

Frontend pages
* Home page - with list of all news posts
* Login page - with form to log in
* News post page - page where you can view specific news post

## MIT License

Project bootstraped from: https://github.com/jpedroschmitz/typescript-nextjs-starter
