<script setup lang="ts">
  import ArticleCard from "./subcomponent/ArticleCard.vue";
  import Article from "./models/article";
  import useArticle from "@/composables/useArticle";
  import { ref } from "vue";
  import { computed } from "@vue/reactivity";

  const { activeArticleList, articleListLoaded, getArticleList } = useArticle()
  getArticleList();

</script>

<template>
  <div class="container container--medium">
    <h1 class="title">Latest Articles!</h1>
    <!-- <p>activeArticle: {{ activeArticleList }}</p>
    <p>articlesLoaded: {{ articleListLoaded }}</p> -->
    <div class="article-list" v-if="articleListLoaded">
      <ArticleCard
        v-for="(article, index) in activeArticleList"
        :article="article"
        :key="index"
      >
    </ArticleCard>
    </div>
  </div>
</template>

<style scoped>
  .title {
    font-size: 3.2rem;
    margin: 100px 0 80px 0;
  }

  .article-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0px 48px;
  }
</style>