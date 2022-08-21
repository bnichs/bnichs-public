<script setup lang="ts">
</script>

<template>
  <table id="skillTable" class="display table table-bordered">
          <thead>
          <tr>
            <th>Name</th>
            <th title="Years used">Years</th>
            <th data-type="Number" title="Years used professionally">Years Prof.</th>
            <th>Description</th>
          </tr>
          </thead>

  </table>
</template>

<script lang="ts">

// https://datatables.net/blog/2022-06-22-vue
import {defineComponent} from "vue";
import {DataTable} from "simple-datatables"

export default defineComponent({
  mounted() {
    const myTable = document.querySelector("#skillTable");
    if (myTable){
      // @ts-ignore
      const dataTable = new DataTable(myTable, {
        searchable: false,
        paging: false,
        columns: [
          // Sort the second column in ascending order
          { select: [1,2] , type: Number },
          { select: [0, 1, 2], sortable: true },


          // Disable sorting on the fourth and fifth columns
          { select: [3], sortable: false },

        ]
      });

      fetch("/skills.json").then((resp) =>{
        resp.text().then((data) => {
          console.log(data)
          dataTable.import({
            type: "json",
            data: data
          })
        })
        console.log("Imported")
      })
    }

  }
})

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
  color: var(--color-heading) !important;
}

.table th a{
  color: var(--color-heading);
  font-weight: bold;
}

.table td{
  padding: 5px;
}

.table th:nth-child(3){
  /* third column */
  width: 5.5rem !important;
}

</style>
