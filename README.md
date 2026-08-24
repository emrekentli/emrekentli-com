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

Proje statik olarak dışa aktarılır. GitHub Actions ortamında `/emrekentli-com`
base path'i otomatik olarak etkinleşir; yerel geliştirmede kök yol kullanılır.
