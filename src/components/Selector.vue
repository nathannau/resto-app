<template>
  <div class="selector" @click="onClick">
    <component v-bind:is="currentItem" />
  </div>
</template>

<script>
import Config from './Config.vue'
import Setting from './Setting.vue'
import Kitchen from './Kitchen.vue'
import Service from './Service.vue'

export default {
  name: 'Selector',
  components: {
    Config,
    Setting,
    Kitchen,
    Service
  },
  data: () => ({
    lastClickTime: 0,
    lastClickPoint: { x: 0, y: 0 },
    countClick: 0
  }),
  computed: {
    currentItem: function () {
      const item = this.$store.state.displayMode
      console.log(item)
      switch (item) {
        case 'Setting':
        case 'Kitchen':
        case 'Service':
          return item
        default:
          return Config
      }
    }
  },
  methods: {
    onClick: function (e) {
      const t = new Date().getTime()
      const p = { x: e.clientX, y: e.clientY }
      const deltaT = (t - this.lastClickTime) / 10
      const deltaP = Math.abs(p.x - this.lastClickPoint.x) +
        Math.abs(p.y - this.lastClickPoint.y)
      this.lastClickTime = t
      this.lastClickPoint = p
      if (deltaT + deltaP < 50) {
        this.countClick += 1
      } else {
        this.countClick = 0
      }
      console.log('onClick:', this.countClick)
      if (this.countClick >= 10) {
        this.countClick = 0
        this.$store.commit('setDisplayMode', 'Config')
      }
    }
  }
}
</script>

<style scoped>
  .selector {
    /* border: 1px solid #ff0000; */
    height: 100%
  }
</style>
