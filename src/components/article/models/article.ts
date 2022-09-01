import { ID } from "@/models/generic";

interface Article {
  id: ID,
  author: string,
  title: string,
  publishDate: string,
  shortDescription: string,
  longDescription: string,
  paragraph_one: string,
  paragraph_two: string,
  paragraph_three: string,
  paragraph_four: string,
  podium: {
    first: string,
    second: string,
    third: string,
  }
  imagePath: string,
  imageSubText: string,
  imageSingle: boolean,
  imagePath_Second: string,
  imageSubText_Second: string,
  imagePath_Third: string,
  imageSubText_Third: string,
  imagePath_Fourth: string,
  imageSubText_Fourth: string,
  imagedump: string[],
}

export default Article;
