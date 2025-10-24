# 🌸 My Dear Flower Shop

Landing page para a floricultura My Dear Flower Shop com **sistema de paletas de cores alternáveis**.

## 🚀 Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS v4

## 📦 Instalação

```bash
npm install
```

## 🏃 Desenvolvimento

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 🎨 Sistema de Paletas

Este projeto possui **3 paletas de cores** completas que você pode alternar:

### 🌸 Dear Bouquet (Principal)

Paleta elegante e acolhedora - ideal para homepage e seções institucionais.

### 🎉 Good News (Campanha)

Paleta vibrante e energética - perfeita para promoções e ofertas.

### 🌙 Noir Botanique (Escura)

Paleta sofisticada e moderna - excelente para catálogos premium.

### Como Trocar de Tema

**Opção 1:** Clique no botão **"🎨 Trocar Tema"** no canto inferior direito da página.

**Opção 2:** Edite `src/index.css` e altere as variáveis do tema ativo na seção "TEMA ATIVO".

📖 **Documentação completa:** Veja o arquivo [`PALETAS.md`](./PALETAS.md) para detalhes sobre cada cor e uso recomendado.

## ♿ Acessibilidade

Todas as paletas foram testadas para conformidade WCAG AA/AAA:

- ✅ Contraste adequado entre texto e fundo
- ✅ Cores otimizadas para daltonismo
- ✅ Hierarquia visual clara

## 🎨 Tailwind CSS v4

Este projeto usa o Tailwind CSS v4 com o plugin oficial para Vite:

- ✅ Plugin `@tailwindcss/vite` configurado em `vite.config.ts`
- ✅ Usa `@import "tailwindcss"` no CSS (sintaxe v4)
- ✅ Não precisa de `tailwind.config.js` ou `postcss.config.js`
- ✅ Performance melhorada e bundle menor
- ✅ Detecção automática de templates (sem configuração de `content`)

### Customização

Para customizar o tema, use `@theme` no arquivo CSS:

```css
@import "tailwindcss";

@theme {
  --color-brand-500: #8b5cf6;
  --font-heading: "Inter", sans-serif;
}
```

Uso: `bg-brand-500`, `font-heading`, etc.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
