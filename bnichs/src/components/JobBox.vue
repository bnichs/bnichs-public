<template>
  <div class="job">
    <div class="row">
    <div class="col">
      <span class="role">
        <slot name="role"></slot>
      </span>
        at
        <span class="company">
        <slot name="company"></slot>
      </span>
    </div>
    <div class="where-and-when col-md-4">
      <h5 class="location">
        <slot name="location"></slot>
      </h5>
      <h6 class="dates">
        <slot name="dates"></slot>
      </h6>
    </div>
      </div>

    <hr>

  <div class="row">

    <div class="col">
      <span class="job-description">
        <slot name="job-description"></slot>
      </span>

      <div class="team-boxes">
        <slot name="teams"></slot>
      </div>
    </div>
    <div class="skill-box col-md-3">
      <h5>
        Primary Skills / Platforms
      </h5>

      <ul class="skill-list">
       <slot name="skills"></slot>
      </ul>
    </div>
  </div>

  </div>
</template>

<style scoped>
.job{
  margin: 20px 10px 0 10px;
  padding: 20px;
  border: 1px solid var(--color-border);
  box-shadow: 0 0 3px rgba(255, 255, 255, 0.25);
}

.company {
  font-size: 20px;
}

.role {
  font-size: 30px;
}

.skill-box{
  /*border-left: 1px solid;*/
  border-left: 1px solid var(--color-border);
}

.where-and-when {
  text-align: right;
}
</style>
