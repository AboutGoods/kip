<template>
    <div class="navbar">
        <search-bar />
        <articles-tree />
    </div>
</template>

<script>
    import ArticlesTree from "pages/article/navbar/ArticlesTree";
    import SearchBar from "pages/article/navbar/SearchBar";

    export default {
        name : "NavBar",
        components: {SearchBar, ArticlesTree}
    }
</script>

<style scoped lang="less">

    .navbar {
        background-color: @navbar-background-color;
        padding: 30px @navbar-padding-horizontal;
    }

</style>
