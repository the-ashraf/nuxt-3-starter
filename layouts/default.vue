<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value);
});

</script>

<template>
  <div class="grid min-h-screen grid-rows-[auto_1fr_auto]">
    <header class="">
      <div class="container px-4 mx-auto flex justify-between">
        <p>header</p>

        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
        </nuxt-link>
      </div>
    </header>
    <slot />
    <footer>
      <div class="container px-4 mx-auto flex justify-between">
        footer
      </div>
    </footer>
  </div>
</template>