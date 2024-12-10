<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const routerList = ref([
    { title: '首页', path: '/home' },
    { title: '商城', path: '/shopping' },
    { title: '直播', path: '/live' },
    { title: '我的', path: '/my' }
])
let router = useRouter()
let route = useRoute()
const switchTab = (path) => {
    router.replace(path)
}
</script>


<template>
    <div class="tabbar">
        <ul>
            <li v-for="(item, index) in routerList" :key="index" @click="switchTab(item.path)">
                <span :class='route.path.includes(item.path) ? "active" : ""'>{{ item.title }}</span>
            </li>

        </ul>
    </div>
</template>

<style scoped>
.tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.25rem;
    background-color: white;
    z-index: 999;

}

.tabbar ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    border-top: 1px solid rgb(226, 226, 226)
}

.tabbar ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}

.tabbar ul li span {
    font-size: 0.45rem;
    /* color: rgb(102, 102, 102) */
}

.active {
    color: red;
}
</style>