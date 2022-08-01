
<template>
  <div class="bn-logo logo">
    <img src="/src/assets/bn-logo.svg" alt="BN Logo" v-bind:width="width" v-bind:height="height"/>

  </div>
</template>

<script lang="ts">
export default {
  name: "App",
  props: {
    height: {
      type: String,
      default: "200",
    },
    width: {
      type: String,
      default: "300",
    }
  },
}

</script>

<style scoped>

.strikethrough {
  position: relative;
}
.strikethrough:before {
  position: absolute;
  content: "";
  left: 0;
  /*top: 23vh;*/
  right: 0;
  border-top: 6px solid;
  border-color: inherit;
  margin: 22% 0 0 0;

}

.logo-letter-wrapper{
  background-color: var(--color-background);
  width: fit-content;
  margin: 0 auto 0 auto;

  font-size: 10vw;
  /*display: inline;*/
}


.logo {
  display: block;
  /*margin: 0 auto 2rem;*/
}

.bn-logo {
  width: 300px;
  /*margin: 0 auto 0 18vw;*/

}

/*@media (min-width: 1024px) {*/
/*  .bn-logo {*/
/*    margin: 0 2vh 0 4vh;*/
/*  }*/
/*}*/

.bn-logo .letter-1{
  margin: 0 auto 0 3vh;
}

.bn-logo .letter-2{
  margin: 1px 3vh 0 -1.6vw;
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
  font-size: 2.2rem;
  top: -10px;
}

.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
