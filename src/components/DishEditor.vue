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
    <b-form-group
      label-cols="2"
      :label="$t('shortName')"
      label-for="shortName">
      <b-form-input
        id="shortName"
        v-model="value.shortname"
        type="text"
        @input="emit" />
    </b-form-group>
    <b-form-group
      label-cols="2"
      :label="$t('name')"
      label-for="name">
      <b-form-input
        id="name"
        v-model="value.name"
        type="text"
        @input="emit" />
    </b-form-group>
    <b-form-group
      label-cols="2"
      :label="$t('desc.')"
      label-for="desc.">
      <b-form-input
        id="desc."
        v-model="value.description"
        type="text"
        @input="emit" />
    </b-form-group>
    <b-form-group
      label-cols="2"
      :label="$t('price')"
      label-for="price">
      <b-form-input
        id="price"
        v-model="value.price"
        type="text"
        @input="emit" />
    </b-form-group>
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
