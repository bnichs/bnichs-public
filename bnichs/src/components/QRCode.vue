<script setup lang="ts">
import QrcodeVue from 'qrcode.vue'
</script>

<template>
    <qrcode-vue class="qr-box" :value="value" :size="size" :foreground="fgColor" :background="bgColor" level="H" />
</template>

<script lang="ts">
import {PERSON_WEBSITE} from "@/config";
import {defineComponent} from "vue";
import {colorFromCSSClass} from "@/dark";

export default defineComponent({
  props: {
    size: {
      type: Number,
      default: 55
    }
  },
  data() {
    return {
      value: PERSON_WEBSITE,
      fgColor: colorFromCSSClass("qrForeground"),
      bgColor: colorFromCSSClass("qrBackground")
    }
  },
  computed: {
  },
  methods: {
    updateQR(){
      this.fgColor = colorFromCSSClass("qrForeground")
      this.bgColor = colorFromCSSClass("qrBackground")
    }
  },
  mounted(){
    let outerThis = this

    // Update qr code when the theme changes
    let observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === "attributes") {
          outerThis.updateQR()
        }
      });
    });

    let element = document.documentElement
    observer.observe(element, {
      attributes: true //configure it to listen to attribute changes
    });
  }
})
</script>


<style>
.qrForeground{
  color: var(--color-title);
}

.qrBackground{
  color: var(--color-background);
}
</style>
