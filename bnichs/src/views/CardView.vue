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

      <BCard1>
      </BCard1>

      <br><br>

      <BCard2>
      </BCard2>
    </template>
  </MainBox>
</template>

<script lang="ts">
import {PERSON_WEBSITE} from "@/config";
import {setScheme} from "@/dark";
import html2canvas from "html2canvas";


// Fix ts errors for ms
declare global {
  interface Navigator {
    msSaveBlob?: (blob: any, defaultName?: string) => boolean
    msSaveOrOpenBlob?: (blob: any, defaultName?: string) => boolean
  }
}

export default {
  data() {
    return {
      value: PERSON_WEBSITE,
      size: 55,
    }
  },
  methods: {
    async saveCard(){
      // Initiate download of blob
      function download(
          filename: string, // string
          blob: Blob // Blob
      ) {
        if (window.navigator.msSaveBlob !== undefined && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveBlob(blob, filename);
        } else {
          const elem = window.document.createElement('a');
          elem.href = window.URL.createObjectURL(blob);
          elem.download = filename;
          document.body.appendChild(elem);
          elem.click();
          document.body.removeChild(elem);
        }
      }

      console.log("Saving...")
      setScheme("light")
      await this.$forceUpdate()


      const el = document.getElementById("bcard2")!
      // const el = document.body //getElementById("bcard2")

      html2canvas(el, {
        allowTaint: true,
        useCORS: true,
        logging: true,
      }).then(function(canvas) {
        let imageData = canvas.toDataURL("image/png");
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
