<template>
  <div class="config">
    <h1>Configuration</h1>
    <b-form-group
      label="Url du serveur"
      label-for="server-url">
      <b-form-input
        id="server-url"
        v-model="serverUrl"
        type="url"
        :state="serverUrlState"
        @input="suInput" />
    </b-form-group>
    <b-form-group
      label="Affichage"
      label-for="display-mode">
      <b-form-select
        id="display-mode"
        v-model="displayMode">
        <b-form-select-option value="Config">Configuration</b-form-select-option>
        <b-form-select-option value="Setting">Parametrage</b-form-select-option>
        <b-form-select-option value="Kitchen">Cuisine</b-form-select-option>
        <b-form-select-option value="Service">Service</b-form-select-option>
      </b-form-select>
    </b-form-group>
    <button @click="save">Enregistrer</button>
  </div>
</template>

<script>
export default {
  name: 'Config',
  props: {
    msg: String
  },
  data: function () {
    return {
      serverUrl: this.$store.state.serverUrl,
      displayMode: this.$store.state.displayMode,
      serverUrlState: null
    }
  },
  methods: {
    save: function () {
      this.$store.commit('setServerUrl', this.serverUrl)
      this.$store.commit('setDisplayMode', this.displayMode)
    },
    suInput: async function () {
      this.serverUrlState = null
      const su = this.serverUrl
      try {
        await fetch(`${this.serverUrl}/ping`, { timeout: 1000 })
        if (su !== this.serverUrl) return
        this.serverUrlState = true
      } catch {
        if (su !== this.serverUrl) return
        this.serverUrlState = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.config  {
  padding: 10px;
}
</style>
