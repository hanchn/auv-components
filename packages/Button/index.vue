<template>
  <button :style="style_" :class="class_" :size="size_" :type="type_">
    <slot></slot>
  </button>
</template>
<script>
import './style.css'
import { initState } from '../utils.js'
import { reactive, toRefs, onMounted } from 'vue'
export default {
  name: "auv-button",
  props: {
    style: Object,
    type: String,
    class: Object,
    size: String
  },
  setup: (props) => { 
    const state = reactive({
      style_: null,
      class_: 'auv-btn',
      type_: 'default',
      size_: 'default'
    })

    onMounted(() => { 
      initState(state, props)
    })
    
    return {
      ...toRefs(state)
    }
  }
}
</script>
