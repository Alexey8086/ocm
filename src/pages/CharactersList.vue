<template>

    <div class="container">
        <h1>STAR WARS</h1>

        <h1><router-link to="/diagram"> Диаграмма > </router-link></h1>

        <table class="table">
            <thead>
                <tr>
                    <th class="table__column">Name (имя)</th>
                    <th class="table__column">Height (рост)</th>
                    <th class="table__column">Birth_year (дата рождения)</th>
                    <th class="table__column"><span>Gender (пол)</span></th>
                </tr>
            </thead>
            <tbody v-for="(character, index) in characters">
                <tr>
                    <td>{{ character.name }}</td>
                    <td>{{ character.height }} см.</td>
                    <td>{{ character.birth_year }}</td>
                    <td>{{ character.gender }}</td>
                </tr>
            </tbody>
        </table>

        <the-pagination @paginate-page="(page) => paginate(page)"/>

    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { usePaginate } from '#shared/composables/pagination'
import { ThePagination } from '#shared/ui'

const characters = ref([])

const paginate = async (page=1) => {
    characters.value = await usePaginate(page)
}

onMounted(async () => {
    await paginate()
})

</script>

<style scoped lang='scss'>

.container {
    width: 100%;
    padding: 50px;

    h1 {
        text-align: center;
        margin-bottom: 30px;
    }
}

.table {
    border: 1px solid rgb(88, 93, 230);
    width: 100%;
    border-collapse: collapse;

    th {
        background-color: rgb(173, 174, 213);
    }

    th, tr, td {
        border: 1px solid rgb(88, 93, 230);
    }

    tr:hover {
        background-color: rgb(173, 174, 213);
        font-weight: bold;
    }

    td {
        padding-left: 10px;
        font-size: 1.2rem;
    }
}

</style>