<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings row">
    <div class="col-md-1">

    <div class="bn-logo logo">
      <span class='flip_H letter-1'>B</span>
      <span class="letter-2">N</span>
    </div>
    </div>

    <div class="col vertical-center">

      <h1 class="green">{{ msg }}</h1>
      <h3>
        System Development and Automation
      </h3>
    </div>
  </div>
</template>

<style scoped>

.bn-logo {
  /*color: green;*/
  font-size: 100px;
  /*font-kerning: none;*/
  letter-spacing: -1px;
  width: 200px;
}

.bn-logo .letter-1{

}

.bn-logo .letter-2{
  margin-left: -6px;
  margin-top: 1px;
}

.bn-logo span{
  display: inline-block;
  #margin:1em;
}

.flip_H{
  transform: scale(-1, 1);
}
.flip_V{
  transform: scale(1, -1);
  color:green;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}


.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
