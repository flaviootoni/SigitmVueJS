<template>
    <footer class="footer" >
        <span>Copyright <strong>Telefonica</strong> © 2021</span>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
    .footer {
        grid-area: footer;
        background-color: #DDD;
        color: #333;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 0px;
        height: 30px;

    }
</style>