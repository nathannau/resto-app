<i18n>
{
  "en": {
    "dishes":"Dishes",
    "rooms and tables": "Rooms and tables",
    "dishes": "Dishes",
    "shortName": "ShortName",
    "name": "Id.",
    "desc.": "Desc.",
    "price": "Price"
  },
  "fr": {
    "dishes": "Plats",
    "rooms and tables" : "Salles et tables",
    "dishes": "Plats",
    "shortName": "Ref.",
    "name": "Nom",
    "desc.": "Desc.",
    "price": "Prix"
  }
}
</i18n>

<template>
  <div class="dish">
    {{ $t('shortName') }} <input v-model="value.shortname" @input="emit" /><br/>
    {{ $t('name') }} <input v-model="value.name" @input="emit" /><br/>
    {{ $t('desc.') }} <input v-model="value.description" @input="emit" /><br/>
    {{ $t('price') }} <input v-model="value.price" @input="emit" /><br/>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'DishEditor',
  data: function () {
    return {
      value: { ...this.dish }
    }
  },
  methods: {
    emit: function () { this.$emit('input', this.value) }
  },
  props: {
    dish: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dish {
  /* margin-left: 5px;
  border-left: 1px solid #000;
  padding-left: 5px; */
}
</style>
