<script setup lang="ts">
import BCard1 from '../components/BCard1.vue'
import BCard2 from '../components/BCard2.vue'
import MainBox from '@/components/MainBox.vue'
</script>

<template>
  <MainBox>
    <template #title>
      Business Card
    </template>
    <template #content>

      <button @click="saveCard">
        Save card
      </button>

<!--      <BCard1>-->
<!--      </BCard1>-->

<!--      <br><br>-->

      <BCard2>
      </BCard2>
    </template>
  </MainBox>
</template>

<script lang="ts">
import {PERSON_WEBSITE} from "@/config";
import {setScheme} from "@/dark";
import html2canvas from "html2canvas";


export default {
  data() {
    return {
      value: PERSON_WEBSITE,
      size: 55,
    }
  },
  methods: {
    async saveCard(){
      setScheme("light")
      await this.$forceUpdate()


      const el = document.getElementById("bcard2")!

      el.classList.add("printMode")
      // const el = document.body //getElementById("bcard2")

      html2canvas(el, {
        allowTaint: true,
        useCORS: true,
        logging: true,
      }).then(function(canvas) {
        let width = canvas.width
        let height = canvas.height
        console.log(width, height)
        let scale = 8

        let sWidth = width * scale
        let sHeight = height * scale

        let extra_canvas = document.createElement("canvas");
        extra_canvas.setAttribute('width',sWidth.toString());
        extra_canvas.setAttribute('height',sHeight.toString());
        let ctx = extra_canvas.getContext('2d')!;
        ctx.drawImage(canvas,0,0,canvas.width, canvas.height,0,0, sWidth, sHeight);

        let imageData = extra_canvas.toDataURL("image/png");
        console.log(imageData)
        var newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");

        let a = document.createElement("a");
        document.body.appendChild(a);
        a.setAttribute("style", "display: none")
        a.href = newData
        a.download = "card.png"
        a.click()

        URL.revokeObjectURL(newData)
      })
    }
  }
}
</script>


<style>
</style>
