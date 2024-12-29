<template>
<div>
  <header>
    <nav class="flex items-center justify-center min-h-28 bg-blue-400">
      <ul class="flex items-center justify-between desktop:gap-8 laptop:gap-6 tablet:gap-5 gap-4">
        <li class="list-none">
          <router-link to="/accueil" class="bg-white desktop:text-xl laptop:text-lg tablet:text-base text-sm desktop:py-3 desktop:px-6 laptop:py-2.5 laptop:px-5 tablet:py-2 tablet:px-4 py-1.5 px-3 rounded outline outline-4 outline-offset-0 outline-amber-500 hover:bg-slate-500 hover:text-white transition-colors duration-300">Accueil</router-link>
        </li>
        <li class="list-none">
          <router-link to="/contact" class="bg-white desktop:text-xl laptop:text-lg tablet:text-base text-sm desktop:py-3 desktop:px-6 laptop:py-2.5 laptop:px-5 tablet:py-2 tablet:px-4 py-1.5 px-3 rounded outline outline-4 outline-offset-0 outline-emerald-500 hover:bg-slate-500 hover:text-white transition-colors duration-300">Contact</router-link>
        </li>
        <li class="list-none">
          <router-link to="/outils" class="bg-white desktop:text-xl laptop:text-lg tablet:text-base text-sm desktop:py-3 desktop:px-6 laptop:py-2.5 laptop:px-5 tablet:py-2 tablet:px-4 py-1.5 px-3 rounded outline outline-4 outline-offset-0 outline-violet-500 hover:bg-slate-500 hover:text-white transition-colors duration-300">Outils</router-link>
        </li>
        <li class="list-none">
          <router-link to="/about" class="bg-white desktop:text-xl laptop:text-lg tablet:text-base text-sm desktop:py-3 desktop:px-6 laptop:py-2.5 laptop:px-5 tablet:py-2 tablet:px-4 py-1.5 px-3 rounded outline outline-4 outline-offset-0 outline-pink-500 hover:bg-slate-500 hover:text-white transition-colors duration-300">À propos</router-link>
        </li>
      </ul>
    </nav>
  </header>
</div>
</template>