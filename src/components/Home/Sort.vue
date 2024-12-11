<script setup>
let sortList = [{
    id: 1,
    title: '耳环',
    imgUrl: './images/1.webp'
},
{
    id: 2,
    title: '女鞋',
    imgUrl: './images/2.webp'
},
{
    id: 3,
    title: '针织衫',
    imgUrl: './images/3.webp'
},
{

    id: 4,
    title: '眼影',
    imgUrl: './images/4.webp'
},
{
    id: 5,
    title: '裤子',
    imgUrl: './images/5.webp'
},
{
    id: 6,
    title: '上衣',
    imgUrl: './images/6.webp'
},
{
    id: 7,
    title: '短裙',
    imgUrl: './images/7.webp'
},
{
    id: 8,
    title: '卫衣',
    imgUrl: './images/8.webp'
},
{
    id: 9,
    title: '套装',
    imgUrl: './images/9.webp'
},
{
    id: 10,
    title: '帽子',
    imgUrl: './images/10.webp'
}
]

</script>




<template>
    <ul class="sorts">
        <li v-for="(item, index) in sortList" :key="item.id">
            <img :src="item.imgUrl" alt="">
            <span>{{ item.title }}</span>
        </li>
    </ul>
</template>

<style scoped>
.sorts {
    width: 100%;
    background-color: #fff;
    font-size: 0.35rem;
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
}

.sorts li {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    flex: 0 0 20%;
    margin: 0.3rem 0;
}

.sorts li img {
    width: 1.5rem;
    height: 1.5rem;
}

.sorts li span {
    margin-top: 0.1875rem;
    color: rgb(102, 102, 102);
}
</style>