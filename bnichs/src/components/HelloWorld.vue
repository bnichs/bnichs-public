<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings row">
    <div class="col">

      <div class="bn-logo logo strikethrough">

        <div class="logo-letter-wrapper">
          <span class='flip_H letter-1'>B</span>
          <span class="letter-2">N</span>
        </div>
      </div>
    </div>

    <div class="col title-box">

      <h1 class="the-name green">{{ msg }}</h1>
      <h3 class="the-subtitle">
        System Development and Automation
      </h3>
    </div>
  </div>
</template>

<style scoped>

.strikethrough {
  position: relative;
}
.strikethrough:before {
  position: absolute;
  content: "";
  left: 0;
  top: 47%;
  right: 0;
  border-top: 6px solid;
  border-color: inherit;

  /*-webkit-transform:rotate(-5deg);*/
  /*-moz-transform:rotate(-5deg);*/
  /*-ms-transform:rotate(-5deg);*/
  /*-o-transform:rotate(-5deg);*/
  /*transform:rotate(-5deg);*/
}

.logo-letter-wrapper{
  background-color: white;
  width: fit-content;
  margin: 0 auto 0 auto;

}

.title-box {
  padding: 4vh 0 0 0;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.bn-logo {
  /*color: green;*/
  font-size: 100px;
  /*font-kerning: none;*/
  letter-spacing: -1px;
  width: 300px;
}

.bn-logo .letter-1{
  margin: 0 auto 0 3vh;
}

.bn-logo .letter-2{
  margin: 1px 3vh 0 -2vh;
}

.bn-logo span{
  display: inline-block;
  /*background-color: white;*/
}

.flip_H{
  transform: scale(-1, 1);
}
.flip_V{
  transform: scale(1, -1);
  color:green;
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
