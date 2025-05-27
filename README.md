# Modern Dashboard

**Author:** Jainam 

## Overview

The pizza dashboard presented is a Next.js application featuring Google OAuth authentication, a modern UI, and server-side session management. It demonstrates secure authentication flows, a responsive dashboard layout, and data visualization using Recharts.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/modern-dashboard.git
cd modern-dashboard
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Google OAuth Credentials

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project (or select an existing one).
3. Navigate to **APIs & Services > Credentials**.
4. Click **Create Credentials > OAuth client ID**.
5. Choose **Web application**.
6. Set the **Authorized redirect URI** to:  
   ```
   http://localhost:3000/api/auth/callback/google
   ```
7. After creation, copy your **Client ID** and **Client Secret**.

### 4. Configure Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret_here
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

- **Do NOT commit your actual OAuth client secret to the repository.**
- Generate a strong `NEXTAUTH_SECRET` using:
  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```

### 5. Run the development server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Challenges

-Fixing Minors bug while deployment 


## Third-Party Libraries Used

- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/) (styling)
- [@next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (font optimization)
- [Recharts](https://recharts.org/) (data visualization)



## A personal note from developer

- Did I write the code ? - Yes
- Did I write the whole code 😁 ? - No (Vibe coding was fun)
---