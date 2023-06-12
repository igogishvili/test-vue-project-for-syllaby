<template>
  <div class="container search">
    <div class="d-flex
                justify-content-center
                align-items-center
                my-5">
      Search  

      <input class="mx-2" type="text" v-model.lazy="searchQuery">

      <div class="d-inline" @click="clearSearch()">x</div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import _ from 'lodash'; 

export default {
  name: 'SearchField',
  setup() {
    const store = useStore();
    
    const searchQuery = computed({
      get() {
        return store.state.searchQuery;
      },
      set(newValue) {
        store.commit('updateValue', newValue);
      },
    });

    return {
      searchQuery,
    };
  },
  data() {
    return {
      
    }; 
  },
  watch: {
    searchQuery(newValue) {
      this.debouncedUpdateValue(newValue);
    },
  },
  methods: {
    debouncedUpdateValue: _.debounce(function(newValue) {
      console.log(newValue);
    }, 500),
    clearSearch() {
      this.searchQuery = '';
    }
  },
}
</script>