<template>
  <SearchField />
  <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SearchField from './components/SearchField.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

export default {
  name: 'App',
  components: {
    HelloWorld,
    SearchField
  }
}
</script>