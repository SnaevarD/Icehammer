import Article from "@/components/article/models/article";
import ArticleAPI from "@/api/articleApi";
import { ID } from "@/models/generic";
import { computed, ComputedRef } from "vue";
import { useArticlesStore } from "@/store/article";

interface useArticle {
  activeArticleList: ComputedRef<Article[]>
  articleListLoaded: ComputedRef<boolean>
  activeArticle: ComputedRef<Article | undefined | null>
  articleLoaded: ComputedRef<boolean>
  getArticleList() : Promise<Article[]>,
  getArticle(articleID : ID) : Promise<Article | undefined | null>,
}

export default function useArticle() : useArticle {
  const articleStore = useArticlesStore();
  const activeArticleList = computed(() => articleStore.activeArticleList);
  const articleListLoaded = computed(() => articleStore.articleListLoaded);
  const activeArticle = computed(() => articleStore.activeArticle);
  const articleLoaded = computed(() => articleStore.articleLoaded);

  const getArticle = async(articleID : ID) : Promise<Article | undefined | null> => {
    const response = await ArticleAPI.getArticleList();
    console.log("response", response);
    console.log("articleID", articleID);
    let selectedArticle = response.find((data) => { return data.id == articleID })
    console.log("selectedArticle", selectedArticle);
    if( selectedArticle ) {
      articleStore.articleLoaded = true;
      articleStore.activeArticle = selectedArticle;
    }
    else {
      articleStore.articleLoaded = false;
      articleStore.activeArticle = null;
    }
    return selectedArticle;
  }

  const getArticleList = async() : Promise<Article[]> => {
    const response = await ArticleAPI.getArticleList();
    articleStore.articleListLoaded = true;
    articleStore.activeArticleList = response;
    return response;
  }

  return {
    activeArticleList,
    articleListLoaded,
    activeArticle,
    articleLoaded,
    getArticleList,
    getArticle,
  }
}