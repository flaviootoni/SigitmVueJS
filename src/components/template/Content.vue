<template>
    <v-main class="content" >
        <router-view></router-view>
    </v-main>
</template>

<script>
export default {
    name: 'Content'
}
</script>

<style>
    .content {
        grid-area: content;
        background-color: #f5f5f5;
        padding: 20px;
    }
</style>