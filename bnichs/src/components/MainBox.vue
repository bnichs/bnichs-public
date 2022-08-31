<template>
  <main>
    <h1 class="pageTitle">
      <slot name="title"></slot>
    </h1>

<!--    <hr class="pageTitleLine">-->

    <div class="main-content">
      <slot name="content"></slot>
    </div>
  </main>
</template>

<style>

.pageTitle {
  border-bottom: 1px solid var(--color-border);
  margin: 0 0 1em 0;
  font-size: 3rem;

}
</style>
