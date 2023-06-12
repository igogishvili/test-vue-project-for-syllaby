<template>
  <div class="container products">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items.products" :key="item.id">
          <product-view :product-title="item.title"
                        :id="item.id"
                        :description="item.description"
                        :price="item.price"></product-view>
        </tr>
      </tbody>
    </table>

    <div class="d-flex justify-content-center">
      <div class="d-inline px-2 products__page_button" v-for="number in itemsPagesNumber" :key="number" @click="switchPage(number)">{{ number }}</div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'; // Import the computed function
import { useStore } from 'vuex';
import axios from 'axios';

import ProductView from './ProductView.vue';

export default {
  name: 'HelloWorld',
  setup() {
    const store = useStore();
    const searchQuery = computed(() => store.state.searchQuery);

    return {
      searchQuery,
    };
  },
  data() {
    return {
      items: [],
      itemsLimitOnPage: 10,
      itemsPage: 1,
      skipItems: 0,
      itemsPagesNumber: 0,
      error: null 
    }; 
  },
  components: {
    ProductView
  },
  mounted() {
    this.fetchItems('', this.itemsLimitOnPage, this.skipItems);

  },
  watch: {
    searchQuery(newValue) {
      this.itemsPage = 1;
      this.skipItems = 0;

      this.fetchItems(newValue, this.itemsLimitOnPage, this.skipItems);
    },
  },
  methods: {
    fetchItems(q, limit, skip) {
      console.log(q);

      axios
        .get('https://dummyjson.com/products/search?q=' + q + '&limit=' + limit + '&skip=' + skip)
        .then(response => {
          this.items = response.data;

          this.itemsPagesNumber = Math.ceil(this.items.total / this.itemsLimitOnPage);
        })
        .catch(error => {
          this.error = error.message;
        });
    },
    switchPage(pageId) {
      this.itemsPage = pageId;

      this.skipItems = (this.itemsPage - 1) * this.itemsLimitOnPage;

      this.fetchItems(this.searchQuery, this.itemsLimitOnPage, this.skipItems);
    }
  }
}
</script>