import Article from "@/components/article/models/article";
import { ID } from "@/models/generic";
import ArticleAPIMock from "./mock/articleApiMock";

class ArticleService {
    
    /*** GET ***/
    static async getArticle(articleID: ID) : Promise<Article> {
        // /dwapi/ecommerce/carts/{secret}
        return {} as Article;
    }

    static async getArticleList() : Promise<Article[]> {
        return ArticleAPIMock.getArticleList();
    }
}

export default ArticleService;