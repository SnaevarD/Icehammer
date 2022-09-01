import { ID } from "@/models/generic";

interface Tournament {
  id: ID,
  author: string,
  publishDate: string,
  shortDescription: string,
  longDescription: string,
  imagePath: string,
  imageSubText: string,
  imagedump: string[],
}

export default Tournament;
