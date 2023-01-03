<template>
  <button :style="style">
    <slot/>
  </button>
</template>
<script>
import { reactive } from 'vue'
export default {
  props: {
    style: Object
  },
  setup: (props, context) => { 
      const state = reactive({

      })
      return {
        ...toRefs(props),
        context,
        ...toRefs(state)
      }
    }
  }

</script>
<style></style>