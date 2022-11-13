<script setup lang="ts">
  import pdf_GT_Location from '@/assets/pdf/Icehammer-GT-III-2023-Location-Pack.pdf';
  import pdf_GT_TournamentPack from '@/assets/pdf/Icehammer-GT-III-2023-Tournament-Pack.pdf';
  import pdf_GT_Mission_and_TournamentPack from '@/assets/pdf/Icehammer-GT-III-2023-Mission-and-Terrain-Pack.pdf';
</script>

<template>
  <div class="container container--large">
    <div class="banner">
      <div class="info">
        <h1 class="title">Biggest GT of the Year in Iceland!</h1>
        <!-- <router-link to="/">
          <p class="link">See more</p>
        </router-link> -->
      </div>
    </div>
  </div>
  <div class="textContainer container container--medium">
    <p>On the weekend of April 29th and 30th , we will see Iceland´s biggest  Warhammer 40.000 event of the year. where the best of the best will fight out for the title as the best ICE HAMMER player.</p>
    <p>This tournament will mark one of two truly international Warhammer 40.000 tournaments in Iceland as we will have open registration for all players, both foreign and domestic.</p>
    <p>The tournament will be a two-day event with five games total and held at Iðnó – Culture house (Vonarstræti 3, 101 Reykjavík) in the center of Reykjavik. A fantastic venue with a long history of serving all sorts of events and is located in the heart of Reykjavik.</p>
    <ul class="flexlist">
      <li>Location Pack: <a :href="pdf_GT_Location" download>Here</a></li>
      <li>Tournament Pack: <a :href="pdf_GT_TournamentPack" download>Here</a></li>
      <li>Terrain & Mission Pack: <a :href="pdf_GT_Mission_and_TournamentPack" download>Here</a></li>
    </ul>
    <div class="info">
      <h2 class="bold">What:</h2>
      <p>The ICE HAMMER ITC GT III is a 2,000 point matched play event</p>
    </div>
    <div class="info">
      <h2 class="bold">When:</h2>
      <p>April 29th and 30th 2023</p>
    </div>
    <div class="info">
      <h2 class="bold">Where:</h2>
      <p>Iðnó, Vonarstræti 3, 101 Reykjavik, Iceland</p>
    </div>
    <div class="info">
      <h2 class="bold">Where do I register:</h2>
      <a href="https://amplify.bestcoastpairings.com/event/8Q6MLWJFN3">Right here!</a>
    </div>
    <div class="info">
      <h2 class="bold">Where can I get tickets:</h2>
      <p>Send 65 USD / EUR  or 55 GBP via this <a href="https://paypal.me/ICEHAMMER40K?country.x=IS&locale.x=en_US" target="_blank">link</a></p>
      <p>Add your email in the comments/description.</p>
      <br/>
      <p>Or</p>
      <br/>
      <p>Send 9.500 kr. via Bank transfer to:</p>
      <p>Reiknr: 0511-26-015297</p>
      <p>Kt: 281179-5519</p>
      <p>Remember to add your email in the comments/description.</p>
    </div>
    <div class="info">
      <h2 class="bold">I have questions:</h2>
      <p>Contact us at <a href="mailto:IcehammerGT@gmail.com?subject=Icehammer GT III">IcehammerGT@gmail.com</a></p>
    </div>
    <div class="info">
      <h2 class="bold">Where can I share information about the event:</h2>
      <a href="https://fb.me/e/73HUx9jgc">https://fb.me/e/73HUx9jgc</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .bold {
    font-weight: bold;
  }

  .info {
    margin-bottom: 40px;
    p {
      margin-bottom: 5px;
    }
  }

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 15px;
  }

  ul {
    margin: 40px 0 50px 0;

    li {
      margin: 15px 0;
    }
  }

  .flexlist {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .textContainer {
    margin-bottom: 200px;
  }
  .banner {
    background-image: url('@/assets/images/idno.jpg');
    background-position: 50% 50%;
    background-size: cover;
    height: 80vh;
    max-height: 1200px;
    margin: 80px 40px;
    position: relative;
    color: white;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0,0,0,0.6);
    }

    .info {
      position: absolute;
      top: 60%;
      z-index: 2;
      padding: 0 80px;
    }
  }

  .title {
    font-size: 80px;
    margin-bottom: 40px;
    line-height: 9.8rem;
  }

  .link {
    font-size: 32px;
  }

  @media only screen and (max-width: 1180px) {
    .banner {
      .info {
        top: 40%;
        .title {
          font-size: 7rem;
        }
      }
    }
  }

  @media only screen and (max-width: 720px) {
    .banner {
      height: 420px;
      background-position: 50% 50%;
      background-size: cover;
      margin: 80px 0px 40px 0;
      .info {
        top: 40%;
        padding: 0 20px;
        .title {
          font-size: 5rem;
          line-height: 7rem;
        }
        
      }
    }
  }

</style>