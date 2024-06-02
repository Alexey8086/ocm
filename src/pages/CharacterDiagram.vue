<template>
    <div class="container">
        <h1><router-link to="/"> < Список персонажей </router-link></h1>
        <br>

        <div class="diagram">
            <Bar
                v-if="dataset"
                :data="dataset"
                :options="options"
            />
        </div>

        <the-pagination @paginate-page="(page) => paginate(page)"/>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ThePagination } from '#shared/ui'
import { usePaginate } from '#shared/composables/pagination'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true
        },
        title: {
            display: true,
            text: 'STAR WARS API'
        }
    }
}
const dataset = ref(null)

const paginate = async (page=1) => {
    const characters = await usePaginate(page)

    const labels = []
    const data = []

    characters.forEach((character) => {
        labels.push(character.name)
        data.push(character.height)
    })

    dataset.value = {
        labels: labels,
        datasets: [
            {
                label: 'Star Wars HEIGHT/\NAME',
                backgroundColor: '#628AF6',
                data: data
            }
        ]
    }
}

onMounted(async () => {
    await paginate()
})

</script>

<style scoped lang='scss'>
.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;

    .diagram {
        width: 70%;
        height: 700px;
        background-color: #cbe3f4;
    }
}
</style> 