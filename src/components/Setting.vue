<i18n>
{
  "en": {
    "setting":"Setting",
    "rooms and tables": "Rooms and tables",
    "dishes": "Dishes"
  },
  "fr": {
    "setting": "Parametrage",
    "rooms and tables" : "Salles et tables",
    "dishes": "Plats"
  }
}
</i18n>

<template>
  <div class="setting">
    <h1>{{ $t('setting') }}</h1>

    <b-tabs content-class="mt-3">
      <b-tab :title="$t('rooms and tables')">
        <p>I'm the first tab</p>
      </b-tab>
      <b-tab :title="$t('dishes')" active>
        <dishes-editor />
      </b-tab>
    </b-tabs>

  </div>
</template>

<script>
import DishesEditor from './DishesEditor'

export default {
  name: 'Setting',
  components: {
    DishesEditor
  },
  props: {
    msg: String
  },
  beforeMount: function () {
    this.$store.dispatch('reloadDishes')
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.setting {
  padding: 10px;
}
</style>
