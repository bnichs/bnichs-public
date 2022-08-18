<script setup lang="ts">
import DataTable from 'datatables.net-vue3';
</script>

<template>
  TODO
<!--  <main>-->
<!--    <h2>-->
<!--      Skills-->
<!--    </h2>-->

<!--    <DataTable-->
<!--               :options="{select: true, paginate: false, searching: false, info: false, order: [[ 1, 'des' ]]}"-->
<!--               :columns="columns"-->
<!--               ajax="/skills.json"-->
<!--               class="display foo">-->
<!--      <thead>-->
<!--      <tr>-->
<!--        <th>Name</th>-->
<!--        <th>Years Total</th>-->
<!--        <th>Years Professionally</th>-->
<!--        <th>Description</th>-->
<!--      </tr>-->
<!--      </thead>-->
<!--    </DataTable>-->

<!--    <hr>-->
<!--  </main>-->
</template>

<script lang="ts">

// https://datatables.net/blog/2022-06-22-vue
const columns = [
  {data: "name"},
  {data: "years"},
  {data: "years_prof"},
  {data: "desc"},
];

export default {
  mounted(){
    // $('skill-table').DataTable();
  }
}
</script>

<style>

.table {
  color: var(--color-text);
}

.table th{
  font-weight: bold;
}

.table {
  padding: 1px !important;
}

</style>
