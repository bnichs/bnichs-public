
<template>
  <div class="bn-logo logo" onload="canvg()">
    <img id="logoImg" src="/bn-logo-full.png" alt="BN Logo"
             />
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
.bn-logo{
  --logo-width: 100px;
  --logo-height: 45px;
}


.bn-logo object {
  pointer-events: none;
}

.logo {
  display: block;
  /*margin: 0 auto 2rem;*/
}

.bn-logo {
  /*width: var(--logo-width);*/
  /*height: var(--logo-height);*/
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


#logoImg {
  width: 8em;
  height: 3.5em;
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
