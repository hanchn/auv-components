<template>
  <button :style="style" :type="type ? type: 'default'" class="auv-btn" :class="class">
    <slot></slot>
  </button>
</template>
<script>
import './style.css'
import { reactive, toRefs } from 'vue'
export default {
  name: "auv-button",
  props: {
    style: Object,
    type: String,
    class: Object,
    width: String,
    height: String
  },
  setup: (props, context) => { 
      const state = reactive({
        style: {
          ...props.style,
          width: props.width + 'px',
          height: props.height + 'px'
        }
      })
      return {
        context,
        ...toRefs(props),
        ...toRefs(state)
      }
    }
  }

</script>
