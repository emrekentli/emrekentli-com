# emrekentli.com

Emre Kentli'nin Next.js tabanlı kişisel web sitesi.

## Gereksinimler

- Node.js 20.9 veya üzeri
- npm 10 veya üzeri

## Geliştirme

```bash
npm ci
npm run dev
```

## Doğrulama

```bash
npm run lint
npm run typecheck
npm run build
npm audit
```

Proje statik olarak dışa aktarılır. GitHub Pages'in bildirdiği `base_path`
derleme sırasında otomatik kullanılır; yerel geliştirmede kök yol kullanılır.
