<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-md-7">
                <el-table
                        :data="tableData"
                        :default-sort="{ prop: 'date', order: 'descending' }"
                        style="width: 100%"
                >
                    <el-table-column prop="date" label="Month" sortable min-width="80"/>
                    <el-table-column prop="country" label="Country" sortable min-width="80"/>
                    <el-table-column prop="count" sortable label="DAU" min-width="80"/>
                </el-table>

            </div>
        </div>
    </div>
</template>

<script setup>
    import data from '../data.json'
    import {reactive, onBeforeMount} from 'vue';

    let tableData = reactive([]);
    onBeforeMount(() => {
        tableData = data.items;
    })
</script>
<style scoped>

</style>