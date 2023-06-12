<template>
  <th scope="row">{{ id }}</th>
  <td>{{ productTitle }}</td>
  <td>{{ description }}</td>
  <td>{{ price }}</td>
</template>

<script>
export default {
  name: 'ProductView',
  props: {
    id: Number,
    productTitle: String,
    description: String,
    price: Number,
  },
  data() {
    return {};
  }
}
</script>