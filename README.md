# Monorepo Starter

This is a **Turbo-powered monorepo** managed with **pnpm**. It contains multiple applications and shared packages to streamline development across projects.

## 📁 Structure

```
monorepo-starter/
│── apps/
│   ├── web/       # Next.js application
│   ├── cms/       # Strapi CMS
│
│── packages/
│   ├── typescript-config/  # Shared TypeScript configurations
│   ├── types/              # Shared TypeScript types
│
│── package.json      # Root package configuration
│── turbo.json        # Turbo build configurations
│── pnpm-workspace.yaml  # pnpm workspace settings
```

## 🚀 Getting Started

### 1️⃣ Install Dependencies

Make sure you have **Node.js >=18** and **pnpm 9** installed.

```sh
pnpm install
```

### 2️⃣ Run Development Mode

```sh
pnpm dev
```

This runs the applications in development mode using **Turbo**.

### 3️⃣ Build Applications

```sh
pnpm build
```

This runs `turbo build`, compiling all apps and packages.

### 4️⃣ Lint Code

```sh
pnpm lint
```

### 5️⃣ Clean Workspace

```sh
pnpm clean
```

## 📦 Applications & Packages

### 🖥️ Web Application (@monorepo/web)

- **Framework**: Next.js (React 19)
- **Commands**:
  ```sh
  pnpm --filter @monorepo/web dev   # Run Next.js in dev mode
  pnpm --filter @monorepo/web build # Build Next.js project
  ```

### 📊 CMS (@monorepo/cms)

- **Framework**: Strapi 5
- **Commands**:
  ```sh
  pnpm --filter @monorepo/cms dev   # Run Strapi in dev mode
  pnpm --filter @monorepo/cms build # Build Strapi project
  ```

### 📜 Shared TypeScript Config (@monorepo/typescript-config)

- Stores TypeScript configurations for all projects.

### 🔗 Shared Types (@monorepo/types)

- Syncs TypeScript types between **CMS** and **Web**.
- **Command**:
  ```sh
  pnpm --filter @monorepo/types sync # Sync types from CMS
  ```

## ⚡ Turbo Configuration

This monorepo uses **Turbo** for task caching and parallel execution.

- **turbo.json** defines how build, dev, lint, and other tasks run efficiently.

## 🚀 Deployment

### 📤 Deploy Web (Next.js) on Vercel

1. Install Vercel CLI:
   ```sh
   pnpm add -g vercel
   ```
2. Authenticate with Vercel:
   ```sh
   vercel login
   ```
3. Deploy:
   ```sh
   vercel --prod
   ```
4. **Fixing Corepack Issue:** If you encounter a deployment issue related to Corepack, enable it by adding the following environment variable in your Vercel project settings:
   - **Key**: `ENABLE_EXPERIMENTAL_COREPACK`
   - **Value**: `1`
   
   Also, ensure `packageManager` is set in `package.json`:
   ```json
   {
     "packageManager": "pnpm@9"
   }
   ```

   **Common Issue:** Some users report an error when deploying to Vercel:
   ```
   ERR_PNPM_META_FETCH_FAIL  GET https://registry.npmjs.org/pnpm: Value of "this" must be of type URLSearchParams
   ```
   To resolve this, ensure Corepack is enabled as described above.

### 🌍 Deploy CMS (Strapi) on Render Cloud

1. Build the Strapi project:
   ```sh
   pnpm --filter @monorepo/cms build
   ```
2. Deploy to **Render Cloud** by creating a new **Web Service** and linking your repository.
3. Set the required environment variables in Render for production.
4. Start the service and verify deployment.

## 📜 Individual READMEs

To maintain clarity, each application and shared library has its own README:
- `apps/web/README.md` → Details specific to the Next.js web application.
- `apps/cms/README.md` → Documentation for the Strapi CMS setup and usage.
- `packages/typescript-config/README.md` → Explanation of TypeScript configurations.
- `packages/types/README.md` → Documentation on shared types and how to use them.

Each README contains setup instructions, dependencies, commands, and deployment guidelines.

## 📜 License

This project is licensed under the **MIT License**.

