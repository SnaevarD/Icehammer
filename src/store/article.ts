import Article from "@/components/article/models/article";
import { defineStore } from "pinia";


interface ArticlesState {
  activeArticleList: Article[];
  articleListLoaded: boolean;
  activeArticle: Article | null;
  articleLoaded: boolean;  
};


export const useArticlesStore = defineStore('articles', {
  state: (): ArticlesState => ({
    activeArticleList: [],
    articleListLoaded: false,
    activeArticle: null,
    articleLoaded: false,
  }),
  actions: {
    setActiveArticleList(articles: Article[]) {
      this.articleListLoaded = true;
      this.activeArticleList = articles;
    },
    setActiveArticle(articles: Article) {
      this.articleLoaded = true;
      this.activeArticle = articles;
    },
  }
});
