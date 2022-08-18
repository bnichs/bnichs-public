<script setup lang="ts">
import DataTable from 'datatables.net-vue3';
// import DataTableBs5 from 'datatables.net-bs5';

// DataTable.use(DataTableBs5)
</script>

<template>
    <DataTable
               :options="{select: true, paginate: false, searching: false, info: false, order: [[ 1, 'des' ]]}"
               :columns="columns"
               width="100%"
               ajax="/skills.json"
               class="display table table-bordered">
      <thead>
      <tr>
        <th>Name</th>
        <th>Years</th>
        <th>Years Prof.</th>
        <th>Description</th>
      </tr>
      </thead>
    </DataTable>

</template>

<script lang="ts">

// https://datatables.net/blog/2022-06-22-vue
const columns = [
  {data: "name"},
  {data: "years"},
  {data: "years_prof"},
  {data: "desc"},
];

</script>

<style>

.table {
  color: var(--color-text);
  border: 1px solid var(--color-border);
  box-shadow: 0 0 3px rgba(255, 255, 255, 0.25);
  width: 100% !important;
}

.table th{
  font-weight: bold;
  cursor: pointer;
}

.table td{
  padding: 5px;
}

.table th:nth-child(3) {
  /* third column */
  width: fit-content !important;
}

</style>
