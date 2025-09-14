(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();function u(){return`
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
  `}function p(){return`
    <footer class="border-t border-gray-200 dark:border-gray-800 py-8 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600 dark:text-gray-300 flex items-center justify-between">
        <p>© ${new Date().getFullYear()} Windsurf. All rights reserved.</p>
        <div class="flex gap-4">
          <a href="https://vite.dev" target="_blank" class="hover:text-brand-600">Vite</a>
          <a href="https://tailwindcss.com" target="_blank" class="hover:text-brand-600">Tailwind</a>
        </div>
      </div>
    </footer>
  `}function f(a){const r=()=>{const e=window.location.hash.replace(/^#\/?/,"")||"",o=e?`/${e}`:"/";return a[o]||a["/"]||(()=>"<div>Page not found</div>")};let s=r();const n=new Set,t=()=>{s=r(),n.forEach(e=>e(s))};return window.location.hash||(window.location.hash="/"),window.addEventListener("hashchange",t),window.addEventListener("load",t),{get current(){return s},subscribe(e){return n.add(e),e(s),()=>n.delete(e)}}}function m(){return`
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
  `}function d(){return`
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
  `}function g(){return`
    <main>
      ${m()}
      ${d()}
    </main>
  `}function x(){return`
    <main>
      ${d()}
    </main>
  `}function h(){return`
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
  `}const b={"/":g,"/features":x,"/about":h},l=f(b),i=document.querySelector("#app");if(!i)throw console.error("Could not find #app element"),document.body.innerHTML='<div style="color: red; padding: 20px; font-family: sans-serif;">Error: Could not find #app element</div>',new Error("Could not find #app element");function c(a){try{i.innerHTML=`
    ${u()}
    ${a()}
    ${p()}
  `}catch(r){console.error("Error rendering page:",r),i.innerHTML=`
      <div style="color: red; padding: 20px; font-family: sans-serif;">
        Error rendering page: ${r.message}
      </div>
    `}}c(l.current);l.subscribe(c);
//# sourceMappingURL=index-Z-rtyXL2.js.map
