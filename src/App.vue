<template>
  <SearchField />
  <Products />
</template>

<script>
import Products from './components/Products.vue'
import SearchField from './components/SearchField.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

export default {
  name: 'App',
  components: {
    Products,
    SearchField
  }
}
</script>