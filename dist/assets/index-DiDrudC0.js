(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function c(){return`
    <header class="bg-white/70 dark:bg-gray-900/50 backdrop-blur sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <a href="#/" class="text-xl font-bold text-brand-600 dark:text-brand-400">Windsurf</a>
          <nav class="hidden sm:flex gap-6 text-sm">
            <a href="#/" class="hover:text-brand-600">Home</a>
            <a href="#/features" class="hover:text-brand-600">Features</a>
            <a href="#/about" class="hover:text-brand-600">About</a>
          </nav>
        </div>
      </div>
    </header>
  `}function u(){return`
    <footer class="border-t border-gray-200 dark:border-gray-800 py-8 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600 dark:text-gray-300 flex items-center justify-between">
        <p>© ${new Date().getFullYear()} Windsurf. All rights reserved.</p>
        <div class="flex gap-4">
          <a href="https://vite.dev" target="_blank" class="hover:text-brand-600">Vite</a>
          <a href="https://tailwindcss.com" target="_blank" class="hover:text-brand-600">Tailwind</a>
        </div>
      </div>
    </footer>
  `}function x(a){const r=()=>{const n=`/${window.location.hash.replace(/^#\/?/,"")||""}`;return a[n]||a["/"]};let i=r();const s=new Set,e=()=>{i=r(),s.forEach(t=>t(i))};return window.addEventListener("hashchange",e),{get current(){return i},subscribe(t){return s.add(t),()=>s.delete(t)}}}function p(){return`
    <section class="py-16 sm:py-24 bg-gradient-to-b from-brand-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Build faster with <span class="text-brand-600 dark:text-brand-400">Tailwind + Vite</span>
        </h1>
        <p class="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A minimal starter with routing, components, ESLint/Prettier, and Husky hooks.
        </p>
        <div class="mt-8 flex items-center justify-center gap-4">
          <a href="#/features" class="inline-flex items-center px-6 py-3 rounded-md bg-brand-600 text-white font-medium hover:bg-brand-700">Explore Features</a>
          <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" class="inline-flex items-center px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">Docs</a>
        </div>
      </div>
    </section>
  `}function o(){return`
    <section class="py-12 sm:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Features</h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          ${[{title:"Tailwind CSS",desc:"Utility-first styling with a custom brand palette and plugins."},{title:"Vite",desc:"Blazing fast dev server and optimized builds."},{title:"ESLint + Prettier",desc:"Consistent code quality and formatting with pre-commit checks."},{title:"Husky + lint-staged",desc:"Automated formatting and linting before every commit."}].map(r=>`
              <div class="rounded-lg border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-900 shadow-sm">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">${r.title}</h3>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">${r.desc}</p>
              </div>
            `).join("")}
        </div>
      </div>
    </section>
  `}function m(){return`
    <main>
      ${p()}
      ${o()}
    </main>
  `}function f(){return`
    <main>
      ${o()}
    </main>
  `}function g(){return`
    <main class="py-12">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert">
        <h1>About</h1>
        <p>
          This starter was scaffolded with Vite and enhanced with Tailwind CSS, a few preconfigured components,
          ESLint, Prettier, and Husky + lint-staged for a smooth developer experience.
        </p>
        <p>
          Use it as a base to build your app, or swap in a framework like React later.
        </p>
      </div>
    </main>
  `}const h={"/":m,"/features":f,"/about":g},d=x(h),b=document.querySelector("#app");function l(a){b.innerHTML=`
    ${c()}
    ${a()}
    ${u()}
  `}l(d.current);d.subscribe(l);
