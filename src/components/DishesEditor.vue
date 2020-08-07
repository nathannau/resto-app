<i18n>
{
  "en": {
    "dishes":"Dishes",
    "rooms and tables": "Rooms and tables",
    "dishes": "Dishes"
  },
  "fr": {
    "dishes": "Plats",
    "rooms and tables" : "Salles et tables",
    "dishes": "Plats"
  }
}
</i18n>

<template>
  <div class="dishes">
    <!-- <h2>{{ $t('dishes') }}</h2> -->

    <dish-editor v-if="dish" :dish="dish" @input="change" />
    <b-button class="btn-remove" variant="danger" v-if="id && !children().length" @click="remove">Delete</b-button>
    <!-- <button v-if="this.id" @click="remove">Delete</button> -->
    <b-button variant="primary" @click="add">Add</b-button>
    <br/>
    <br/>
    <div class="children">
      <dishes-editor v-for="d in children()" v-bind:key="d.id" :id="d.id" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DishEditor from './DishEditor'

export default {
  name: 'DishesEditor',
  components: {
    DishEditor
  },
  props: {
    id: {
      type: Number,
      default: null
    }
  },
  data: function () {
    return {
    }
  },
  computed: {
    ...mapState({
      dishes: 'dishes'
    }),
    dish: function () {
      if (!this.id) return null
      const dishes = this.dishes.filter(d => d.id === this.id)
      return dishes.length ? dishes[0] : null
    }
  },
  methods: {
    children: function () {
      // const d = this.dishes.filter(d => d.dishParentId === this.id)
      // console.log('toto', d, this.dishes, this.id)
      return this.dishes.filter(d => d.dishParentId === this.id)
    },
    change: function (dish) {
      this.$store.dispatch('updateDish', { dish })
    },
    remove: function () {
      this.$store.dispatch('removeDish', { id: this.dish.id })
    },
    add: function () {
      this.$store.dispatch('addDish', { parentId: this.id })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dishes .children {
  border-left: 1px solid #000;
  padding-left: 15px;
  /* padding: 10px; */
}
.btn-remove {
  margin-right: 5px;
}
</style>
