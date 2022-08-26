<script setup lang="ts">
</script>

<template>
  <table id="skillTable" class="display table table-bordered">
          <thead>
          <tr>
            <th>Preference</th>
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


interface Skill {
  name: string,
  years: string,
  years_prof: string,
  desc: string,
  show?: Partial<Boolean>
}

interface RatedSkill extends Skill{
  preference: string,
}

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
          { select: [0, 2, 3] , type: Number },
          { select: [0, 1, 2, 3], sortable: true },


          { select: [4], sortable: false },

        ]
      });


      fetch("/skills.json").then((resp) =>{
        resp.text().then((jStr) => {
          let data = JSON.parse(jStr)

          let newData: Skill[] = []
          data.forEach((item: Skill, ind: Number, arr: Skill[]) => {
            let newItem: RatedSkill = {
              preference: ind.toString(),
              ...item
            }

            if (newItem.hasOwnProperty("show")){
              console.log(newItem)
              if (newItem.show === true){
                delete newItem.show
                newData.push(newItem)
              }
            } else {
              newData.push(newItem)
            }
          })

          let j = JSON.stringify(newData)

          dataTable.import({
            type: "json",
            data: j
          })

        })
      })
    }

  }
})

</script>

<style>

.dataTable-wrapper {
  overflow-x: scroll;
  white-space: nowrap;
  width: 100%;
}

.table {
  color: var(--color-text);
  border: 1px solid var(--color-border);
  box-shadow: 0 0 3px rgba(255, 255, 255, 0.25);
  width: 100% !important;
}

.table tr {
  padding: 0px;
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
  padding: 2px;
}

.table th:nth-child(3){
  /* third column */
  width: 5.5rem !important;
}


.table td:nth-child(1),
.table td:nth-child(3),
.table td:nth-child(4){
  text-align: center;
}

</style>
