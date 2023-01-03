<template>
  <button :style="style">
    aaaaa
  </button>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  name: "auv-button",
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