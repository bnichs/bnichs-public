<script setup lang="ts">
</script>
<template>
  <label :for="id + '_button'" :class="{'active': isActive}" class="toggle_button">
    <span v-if="true" class="toggle_label_lhs">
      <slot name="lhs"></slot>
    </span>


    <input type="checkbox" :disabled="disabled" :id="id + '_button'" v-model="checkedValue">
    <span class="toggle_switch"></span>
    <span v-if="true" class="toggle_label_rhs">
      <slot name="rhs"></slot>
    </span>
  </label>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    // labelEnableText: {
    //   type: String,
    //   default: 'On'
    // },
    // labelDisableText: {
    //   type: String,
    //   default: 'Off'
    // },
    id: {
      type: String,
      default: 'primary'
    },
    defaultState: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentState: this.defaultState
    }
  },
  watch: {
    defaultState: function defaultState() {
      this.currentState = Boolean(this.defaultState)
    }
  },
  computed: {
    // currentState() {
    //     return this.defaultState;
    // },
    isActive() {
      return this.currentState;
    },
    // enableText() {
    //   return this.labelEnableText;
    // },
    // disabledText() {
    //   return this.labelDisableText;
    // },
    checkedValue: {
      get() {
        return this.currentState;
      },
      set(newValue: boolean) {
        this.currentState = newValue;
        this.$emit('change', newValue);
      }
    }
  }
})
</script>

<style scoped>
.toggle_button {
  vertical-align: middle;
  user-select: none;
  cursor: pointer;
}
.toggle_button input[type="checkbox"] {
  opacity: 0;
  position: absolute;
  width: 1px;
  height: 1px;
}
.toggle_button .toggle_switch {
  display:inline-block;
  height:12px;
  border-radius:6px;
  width:40px;
  background: var(--color-icon-bg);
  box-shadow: inset 0 0 1px var(--color-icon-bg);
  position:relative;
  margin-left: 10px;
  margin-right: 10px;
  transition: all .25s;
}
.toggle_button .toggle_switch::after,
.toggle_button .toggle_switch::before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  left: 0;
  top: -3px;
  transform: translateX(0);
  transition: all .25s cubic-bezier(.5, -.6, .5, 1.6);
}
.toggle_button .toggle_switch::after {
  background: var(--color-icon-fg);
  box-shadow: 0 0 1px var(--color-icon-fg);
}
.toggle_button .toggle_switch::before {
  background: #4D4D4D;
  box-shadow: 0 0 0 3px rgba(0,0,0,0.1);
  opacity:0;
}
.active .toggle_switch {
  background: var(--color-icon-bg);
  box-shadow: inset 0 0 1px var(--color-icon-bg);
}
.active .toggle_switch::after,
.active .toggle_switch::before{
  transform:translateX(40px - 18px);
}
.active .toggle_switch::after {
  left: 23px;
  background: #4D4D4D;
  box-shadow: 0 0 1px #666;
}

</style>