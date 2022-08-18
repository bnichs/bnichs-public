<template>
  <div class="job">
    <div class="row job-header">
      <div class="col-8">
        <span class="team-role">
          <slot name="role"></slot>
        </span>
        <br>
          at
          <span class="company">
          <slot name="company"></slot>
        </span>
      </div>
      <div class="where-and-when col-4">
        <h5 class="job-location">
          <slot name="location"></slot>
        </h5>
        <h6 class="job-dates">
          <slot name="dates"></slot>
        </h6>
      </div>
    </div>

    <hr v-if="$slots.job_description">

    <div class="row">
      <div class="col job-description-box">
        <span class="job-description">
          <slot name="job-description"></slot>
        </span>

        <div class="team-boxes">
          <slot name="teams"></slot>
        </div>
      </div>

      <div class="skill-box col-md-3" v-if="$slots.skills">
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
  /*margin: 20px 10px 0 10px;*/
  /*padding: 20px;*/
  border: 1px solid var(--color-border);
  box-shadow: 0 0 3px rgba(255, 255, 255, 0.25);
  margin: 8vh 0 0 0;
  page-break-inside: auto;
  /*page-break-after: avoid;*/
  /*page-break-before: avoid;*/
}

.job-header{
  padding: 1vh 5vw 1vh 5vw;
  page-break-after: avoid;
}

.job-description-box{
  margin: 0 1vw 1vh 3vw;
}

.job-location{
  font-size: 1.2em;
}

.job-dates {
  font-size: 1.0em;
}

.company {
  font-size: 1.3em;
}

.team-role {
  /*font-size: 1.5em;*/
  color: var(--color-heading)
}

.skill-box{
  /*border-left: 1px solid;*/
  border-left: 1px solid var(--color-border);
  margin: 1vh 1vw 1vh 5vw;
}

.skill-box h5 {
  font-size: 1em;
}

.where-and-when {
  text-align: right;
}

@media not print and (max-width: 1024px){

  .job {
    margin: 3vh 0 0 0;
  }
}

@media not print and (min-width: 1024px){

  .job-header {
    padding: 2vh 2vw 0 1vw;
  }

  .skill-box {
    margin: 5vh 1vw 0 1vw;
  }

}
</style>
