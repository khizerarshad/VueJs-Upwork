<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-md-6">
                <Bar
                        id="my-chart-id"
                        :options="chartOptions"
                        :data="chartData"
                />
            </div>
        </div>
    </div>
</template>
<script setup>
    import {reactive, onBeforeMount} from 'vue';
    import data from '../data.json'
    import {Bar} from 'vue-chartjs'
    import {Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js'

    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
    let chartData = reactive({
        labels: [],
        datasets: [{data: []}]
    });
    let chartOptions = reactive(
        {
            responsive: true,
        })

    onBeforeMount(() => {
        const items = data.items;
        chartData = {
            ...chartData,
            datasets: [
                {
                    label: '',
                    data: items.map(item => item.count),

                }],
            labels: items.map(item => `${item.date}(${item.country})`),
        };

        chartOptions = {
            ...chartOptions, plugins: {
                legend: {
                    display: true,
                    onClick: (event, legendItem, legend) => {
                        const index = legend.chart.data.labels.indexOf(legendItem.value)
                        legend.chart.toggleDataVisibility(index)
                        legend.chart.update();
                    },
                    labels: {
                        padding: 30,
                        generateLabels: (chart) => {
                            let visibility = [];
                            for (let i = 0; i < chart.data.labels.length; i++) {
                                if (chart.getDataVisibility(i) === true) {
                                    visibility.push(false)
                                } else {
                                    visibility.push(true)
                                }
                            }
                            return items.map((item, index) => {
                                return {
                                    text: item.country,
                                    strokeStyle: '#ccc',
                                    fillStyle: '#ccc',
                                    hidden: visibility[index],
                                    value: `${item.date}(${item.country})`
                                }
                            })
                        }
                    }
                },
            },
        }
    })
</script>

<style scoped>

</style>