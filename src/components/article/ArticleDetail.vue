<script setup lang="ts">
  import useArticle from "@/composables/useArticle";
  import { useRouter } from "vue-router";
  import Article from "./models/article";

  const paraArticleID = useRouter().currentRoute.value.params.articleID?.at(0);
  const articleID = paraArticleID ? paraArticleID : "";

  const { activeArticle, articleLoaded, getArticle } = useArticle()
  getArticle(articleID);
  
</script>

<template>
  <!-- <p>{{ articleID }}</p>
  <p>{{ activeArticle }}</p>
  <p>{{ articleLoaded }}</p> -->
  <div class="container articleDetail" v-if="activeArticle">    
    <h2 class="h2">{{ activeArticle?.title }}</h2>
    <p>{{ activeArticle?.paragraph_one }}</p>
    <div class="flex container--medium">
      <img :src="activeArticle?.imagePath" alt="" />
      <img :src="activeArticle?.imagePath_Second" alt="" />
    </div>
    <p>{{ activeArticle?.paragraph_two }}</p>
    <p>{{ activeArticle?.paragraph_three }}</p>
    <div class="flex container--medium">
      <img :src="activeArticle?.imagePath_Third" alt="" />
      <img :src="activeArticle?.imagePath_Fourth" alt="" />
    </div>
  </div>
  <div v-else>
    <p>No article found</p>
  </div>  
  <!-- <div>
      <h2 class="h2">GT I</h2>
      <p>ICE HAMMER held the first Warhammer 40.000 Grand Tournament in Iceland in nearly a decade with numerous attendees battling against each other’s armies. Old and new, people had a blast pitting their skills against worthy opponents vying for award prizes provided by Nexus and Land og Töfrar.</p>
      <img :src="imgPrefix + 'GT1.png'" alt="" />
      <p>The Grand Tournament was a culmination of a lot of work by ICE HAMMER and we are glad to see that it was well received by the local community as well as foreign attendees who wanted to experience the local Warhammer scene. We are also proud to announce that we broke the record of the number of attendees.</p>
      <div class="flex textImgContainer">
        <img class="img-50" :src="imgPrefix + 'Winner&Tau.png'" alt="" />
        <div>
          <h3 class="h4">The top 3 winners are as follows:</h3>
          <ol>
            <li>Michael Hooper - Tau</li>
            <li>Jökull Jóhannsson - Tau</li>
            <li>Heiðar Þór Stefánsson - Custodes </li>
          </ol>
        </div>
      </div>
      <p>We want to thank the amazing support we’ve received from the community and attendees and can’t wait to continue what we’ve started in the upcoming months.</p>
    </div> -->
    
</template>

<style lang="scss" scoped>
  .articleDetail {
    margin-top: 120px;
  }

  .flex {
    margin: 2rem 0 2rem 0;
    img {
      margin-right: 2rem;
      max-width: 50%;
      object-fit: cover;
    }
  }

  .textImgContainer {
    align-items: center;
  }
  .h2 {
    margin-top: 8rem;
    margin-bottom: 4rem;
  }

  p, h3 {
    margin-top: 2rem;
    max-width: 64rem;
  }

  img {
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 0.4rem;
  }

  ol {
    padding-left: 3rem;
    li {
      list-style-type: decimal;
      margin: 1rem 0;
    }
  }
</style>