<script setup lang="ts">
</script>


<template>
  <div class="team-box">
    <div class="row">
      <div class="col-7">
        <h4 class="team-name">
          <slot name="team-name"></slot>
        </h4>
        <h5 class="team-subtitle">
          <slot name="team-subtitle"></slot>
        </h5>
        <h4 class="team-role">
          <slot name="role"></slot>
        </h4>
      </div>

      <div class="col-5 where-and-when">
        <span class="team-dates">
          <slot name="dates"></slot>
        </span>
      </div>

    </div>
    <ul class="project-list">
      <slot name="projects"></slot>
    </ul>
  </div>

</template>

<style scoped>
.team-box{
  border: 1px solid green;
  margin: 30px 5px 30px 5px;

  border: 1px solid var(--color-border);
  box-shadow: 0 0 2px rgba(255, 255, 255, 0.25);

  padding: 2vh 1vw 1vh 1vw;
  page-break-after: auto;
  page-break-inside: auto;
  page-break-before: auto;
  /*margin: 4vh 1vw 0 1vw;*/
}

.team-name{
  font-size: 1.2em;
}

.team-dates {
  font-size: 1em;
}

.team-subtitle {
  font-size: 1em;
}

.team-role {
  padding: 2vh 0 0 0;
  font-size: .7em;
}

.project-list{
  margin: 1vh 10px 0 10px;
  page-break-inside: auto;
}




.where-and-when {
  text-align: right;
}

@media (max-width: 1024px) {

  .team-box{
    padding: 1em 3vw 1vh 3vw;
    /*margin: 4vh 1vw 0 1vw;*/
  }

}
</style>
