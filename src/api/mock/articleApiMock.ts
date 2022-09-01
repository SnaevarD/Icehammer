import Article from "@/components/article/models/article";
import { ID } from "@/models/generic";

const imgAboutPrefix = "src/assets/images/about/";

class ArticleAPIMock {

  static getArticleList() : Article[] {
    return [       
      {
        id: 2,
        author: "Jökull Jóhannsson",
        title: "WTC",
        publishDate: "2. September 2022",
        shortDescription: "With the summer coming to a close, ICE HAMMER sent its national team forward into...",
        longDescription: "",
        paragraph_one: "With the summer coming to a close, ICE HAMMER sent its national team forward into battle, participating in the WTC after an extended break.",
        paragraph_two: "An early vanguard went ahead and competed in local RTTs that were held before the main event as well as finish the armies, with the latter part of our forces arriving a day before the first day of WTC. The team was led by our trusty captain Heiðar Þór who helped train the team which saw an overall great improvement compared to the last time the country competed in Serbia, landing us in 21st place out of 28.",
        paragraph_three: "Fun was had by all, and the team’s excitement on being present at such an amazing event was evident. We look forward to many international tournaments in the future and look forward to seeing you there.",
        paragraph_four: "",
        podium: {
          first: "",
          second: "",
          third: "",
        },
        imagePath: imgAboutPrefix + "WTC.png",
        imageSubText: "Þessi mynd hefur verið samsett",
        imageSingle: false,
        imagePath_Second: imgAboutPrefix + "WTC_Hall.png",
        imageSubText_Second: "",
        imagePath_Third: imgAboutPrefix + "Legend.png",
        imageSubText_Third: "",
        imagePath_Fourth: imgAboutPrefix + "Team_Iceland2.png",
        imageSubText_Fourth: "",
        imagedump: [
          "",
          "",
        ]
      },
      {
        id: 1,
        author: "Svanhvít Björnsdóttir",
        title: "GT I",
        publishDate: "31. August 2022",
        shortDescription: "ICE HAMMER held the first Warhammer 40.000 Grand Tournament in Iceland in nearly....",
        longDescription: "",
        paragraph_one: "ICE HAMMER held the first Warhammer 40.000 Grand Tournament in Iceland in nearly a decade with numerous attendees battling against each other’s armies. Old and new, people had a blast pitting their skills against worthy opponents vying for award prizes provided by Nexus and Land og Töfrar.",
        paragraph_two: "The Grand Tournament was a culmination of a lot of work by ICE HAMMER and we are glad to see that it was well received by the local community as well as foreign attendees who wanted to experience the local Warhammer scene. We are also proud to announce that we broke the record of the number of attendees.",
        paragraph_three: "We want to thank the amazing support we’ve received from the community and attendees and can’t wait to continue what we’ve started in the upcoming months.",        
        paragraph_four: "",
        podium: {
          first: "Michael Hooper - Tau",
          second: "Jökull Jóhannsson - Tau",
          third: "Heiðar Þór Stefánsson - Custodes",
        },
        imagePath: imgAboutPrefix + "GT1.png",
        imageSubText: "Þessi mynd hefur verið samsett",
        imageSingle: true,
        imagePath_Second: imgAboutPrefix + "Winner&Tau.png",
        imageSubText_Second: "",
        imagePath_Third: "",
        imageSubText_Third: "",
        imagePath_Fourth: "",
        imageSubText_Fourth: "",
        imagedump: [
          "",
          "",
        ]
      },
    ]
  }
}

export default ArticleAPIMock;