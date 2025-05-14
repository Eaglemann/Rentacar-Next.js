
# Rentacar-Next.js

A modern car rental application built with Next.js, designed for seamless user experience and efficient car management.

## Features

-   **Browse Cars:** View available cars with detailed information, including model, year, and rental price.
-   **Search and Filter:** Easily find the perfect car using advanced search and filter options.
-   **Reservation Management:** Manage your car rentals, view booking history, and modify upcoming reservations.
-   **User Authentication:** Secure user accounts with login, registration, and password recovery features.

## Technologies

-   [Next.js](https://nextjs.org): React framework for building performant web applications.
-   [React](https://reactjs.org): JavaScript library for building user interfaces.
-   [Tailwind CSS](https://tailwindcss.com):  Utility-first CSS framework for rapid UI development.
-   [Prisma](https://www.prisma.io/):  Next-generation ORM for Node.js & TypeScript.
-   [NextAuth.js](https://next-auth.js.org/):  Authentication for Next.js.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org) (version 18 or higher)
-   [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com) or [pnpm](https://pnpm.io) installed
-   A database instance (e.g., PostgreSQL, MySQL)

### Installation

1.  Clone the repository:

    bash
    npm install
    # or
    yarn install
    # or
    pnpm install
        -   Create a `.env.local` file in the root directory of the project.
    -   Add the necessary environment variables to the `.env.local` file. See the "[Environment Variables](#environment-variables)" section for details.
4.  (If applicable) Set up your database:

    -   Configure your database connection in the `.env.local` file.
    -   Run database migrations (if using an ORM like Prisma):

        bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    -   **Dependency Issues:** If you encounter issues during the installation of dependencies, try deleting the `node_modules` folder and running `npm install` (or `yarn install` or `pnpm install`) again.
-   **Port Conflicts:** If port 3000 is already in use, the development server will attempt to use a different port. You can also manually specify a different port using the `-p` option: `npm run dev -p 3001`.
-   **Database Connection Errors:** Double-check your database connection settings in the `.env.local` file and ensure that your database server is running.

## Directory Structure

| Variable Name      | Description                                                                | Example Value                       |
| :----------------- | :------------------------------------------------------------------------- | :---------------------------------- |
| `DATABASE_URL`     | The URL of your database.                                                  | `postgresql://user:password@host:port/database` |
| `NEXTAUTH_SECRET`  | Secret used to encrypt the NextAuth.js JWT.                               | `your-secret-key`                   |
| `NEXTAUTH_URL`     | The URL of your Next.js application.                                      | `http://localhost:3000`             |
| `API_KEY`          | API key for external services.                                             | `your-api-key`                      |

**Important:** Do not commit the `.env.local` file to version control. This file should only exist on your local machine and in your production environment.

## Custom Configurations

>  Describe any custom configurations made to the default Next.js setup.
>
> For example:
>
> - Modified `next.config.js` file (e.g., added custom webpack configurations, rewrites, or redirects).
> - Custom server configurations.
> - Any other changes made to the default Next.js setup.
>
> If no custom configurations have been made, you can omit this section.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
-   [Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the main branch of the original repository.

