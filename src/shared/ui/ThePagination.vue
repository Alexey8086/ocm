<template>
    <div class="pagination">
        <div
            v-for="page in 6"
            @click="paginate(page)"
            :class="{'active': (currentPage === page)}"
        >{{ page }}</div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['paginatePage'])
const currentPage = ref(1)

const paginate = (page) => {
    currentPage.value = page
    emit('paginatePage', page)
}

</script>

<style scoped lang='scss'>
.active {
    background-color: rgb(109, 110, 171)!important;
    color: white;
}
.pagination {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    width: 100%;
    height: 40px;

    &>div {
        background-color: rgb(173, 174, 213);
        border-radius: 10px;
        width: 40px;
        height: 100%;
        font-size: 1.2rem;
        transition: ease-in-out 0.2s;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background-color: rgb(193, 194, 231);
            transform: scale(0.95);
        }
    }
}

</style> 