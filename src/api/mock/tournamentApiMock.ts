import Tournament from "@/components/tournament/models/tournament";
import { ID } from "@/models/generic";

class TournamentAPIMock {

  static getTournamentList() : Tournament[] {
    return [
      {
        id: 1,
        author: "Jökull Jóhannsson ",
        publishDate: "25. August 2022",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet erat et felis vestibulum suscipit. Phasellus tincidunt id dui eget tempor...",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet erat et felis vestibulum suscipit. Phasellus tincidunt id dui eget tempor. Proin varius vehicula luctus. Sed rhoncus justo risus, placerat elementum elit venenatis ac. Sed dictum elit quis metus mattis posuere. Suspendisse condimentum, ex sed condimentum bibendum, libero dui scelerisque leo, quis molestie turpis neque ac tortor. Cras blandit, mi et molestie elementum, sapien nisi viverra felis, eu blandit orci odio at urna. Fusce id dui id nunc ultricies tempor. Praesent euismod maximus sapien sit amet pulvinar. Etiam luctus, quam rutrum semper consectetur, massa odio varius sem, at sagittis leo neque at ipsum. Pellentesque eget lectus molestie, imperdiet arcu efficitur, porttitor massa. Duis ut arcu in neque posuere pharetra. Quisque sit amet tristique lacus.",
        imagePath: "src/assets/images/idno_salur.jpg",
        imageSubText: "Þessi mynd hefur verið samsett",
        imagedump: [
          "",
          "",
        ]
      },
      {
        id: 2,
        author: "Heiðar Þór Stefánsson ",
        publishDate: "2. September 2022",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet erat et felis vestibulum suscipit. Phasellus tincidunt id dui eget tempor...",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet erat et felis vestibulum suscipit. Phasellus tincidunt id dui eget tempor. Proin varius vehicula luctus. Sed rhoncus justo risus, placerat elementum elit venenatis ac. Sed dictum elit quis metus mattis posuere. Suspendisse condimentum, ex sed condimentum bibendum, libero dui scelerisque leo, quis molestie turpis neque ac tortor. Cras blandit, mi et molestie elementum, sapien nisi viverra felis, eu blandit orci odio at urna. Fusce id dui id nunc ultricies tempor. Praesent euismod maximus sapien sit amet pulvinar. Etiam luctus, quam rutrum semper consectetur, massa odio varius sem, at sagittis leo neque at ipsum. Pellentesque eget lectus molestie, imperdiet arcu efficitur, porttitor massa. Duis ut arcu in neque posuere pharetra. Quisque sit amet tristique lacus.",
        imagePath: "src/assets/images/team_iceland.jpg",
        imageSubText: "Þessi mynd hefur verið samsett",
        imagedump: [
          "",
          "",
        ]
      },
    ]
  }
}

export default TournamentAPIMock;