<script setup lang="ts">
import Article from "../models/article";

  const props = defineProps<{
    article: Article,
  }>()

  const article = props.article;
  const articleLink = "/article/" + article.id;
</script>

<template>
  <div class="card">
    <router-link :to="articleLink">
      <div class="img" :style="'background-image: url(' + article.imagePath + ')'"></div>
      <!-- <img class="img" :src="article.imagePath" /> -->
    </router-link>
    <router-link class="nonDefaultLink" :to="articleLink"><h3 class="title">{{ article.title }}</h3></router-link>
    <p class="author bold">{{ article.author }}</p>
    <p class="text--small">{{ article.publishDate }}</p>
    <p>{{ article.shortDescription }}</p>
    <router-link class="seeMore" :to="articleLink">see more</router-link>
  </div>
</template>

<style scoped lang="scss">
  .card {
    margin-bottom: 80px;
    .text--small, div, img {
      margin-bottom: 20px;
    };

    .author {
      font-size: 1.4rem;
    }

    .seeMore {
      display: block;
      margin-top: 10px
    }
  }

  .nonDefaultLink {
    color: black;
    &:hover {
      color: rgb(200, 233, 233);
    }
  }

  .img {
    width: 100%;
    max-width: 380px;
    background-color: grey;
    height: 220px;
    border-radius: 10px;
    background-size: cover;
    background-position: 50% 50%;
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .text--small {
    font-size: 1rem;
  }
</style>