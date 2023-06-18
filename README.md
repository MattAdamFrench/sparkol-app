This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running the Application

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

By default the application will look for the authentication server running at `http://localhost:3333`, but this can be changed within the env file.

I've provided a default `.env.development` file with the necessary variables.

## Application Overview
Authentication is provided by NextAuth, which handles the auth for a session.
We provide a custom authorisation function that uses the provided credentials to check against the external auth server.
If successful this will return an user who's details we can display as part of the application.

## Documentation
### Technologies
TailwindCSS for styling.
React for frontend.
NextAuth for authentication.

### Linting
The project has been configured for linting using ESLint, and extending the recommend typescript configuration.
We also add some additional rules such as automatic ordering of imports.
You can run the linter using `npm run lint`.

### Environment Variables
#### NEXTAUTH_SECRET
The randomly generated secret string used to encrypt JWTs.

#### AUTHSERVER_URL
The URL of the authentication server.

### Wishlist / Extensions
#### Testing with Cypress
For typical projects, I would create Cypress tests for the components and potentials end-to-end tests for the application.
Due to the simplicity of the project, these are unlikely to be necessary, but would be a welcome addition.