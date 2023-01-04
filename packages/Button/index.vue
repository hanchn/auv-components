<template>
  <button :type="type" :style="style" class="auv-btn" :class="class" :size="size">
    <slot></slot>
  </button>
</template>
<script>
import './style.css'
import { reactive, toRefs, onMounted } from 'vue'
export default {
  name: "auv-button",
  props: {
    style: Object,
    type: String,
    class: Object
  },
  setup: (props) => { 
    const state = reactive({
      style: null,
      type: null,
      class: null,
      size: 'default'
    })

    onMounted(() => {})
    
    return {
      ...toRefs(props),
      ...toRefs(state)
    }
  }
}
</script>
