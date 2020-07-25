<i18n>
{
  "en": {
    "config": "Config",
    "server url": "Server url",
    "display": "Display",
    "config":"Config",
    "setting":"Setting",
    "kitchen":"Kitchen",
    "service":"Service",
    "save":"Save"
  },
  "fr": {
    "config" : "Configuration",
    "server url": "Url du serveur",
    "display": "Affichage",
    "config": "Configuration",
    "setting": "Parametrage",
    "kitchen": "Cuisine",
    "service": "Service",
    "save": "Enregistrer"
  }
}
</i18n>

<template>
  <div class="config">
    <h1>{{ $t('config' )}}</h1>
    <b-form-group
      :label="$t('server url')"
      label-for="server-url">
      <b-form-input
        id="server-url"
        v-model="serverUrl"
        type="url"
        :state="serverUrlState"
        @input="suInput" />
    </b-form-group>
    <b-form-group
      :label="$t('Affichage')"
      label-for="display-mode">
      <b-form-select
        id="display-mode"
        v-model="displayMode">
        <b-form-select-option value="Config">{{ $t('config') }}</b-form-select-option>
        <b-form-select-option value="Setting">{{ $t('setting') }}</b-form-select-option>
        <b-form-select-option value="Kitchen">{{ $t('kitchen') }}</b-form-select-option>
        <b-form-select-option value="Service">{{ $t('service') }}</b-form-select-option>
      </b-form-select>
    </b-form-group>
    <button @click="save">{{ $t('save') }}</button>
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
