<script lang="ts" setup>
</script>

<template>
  <div class="about container container--medium">
    <div>
      <h2 class="h2">Intro</h2>
      <p>Welcome to the website of the premiere tournament scene for Warhammer 40.000 in Iceland.</p>
    </div>
    <div>
      <h2 class="h2">About</h2>
      <p>Originally started in 2020 to keep the scene alive in the midst of a global epidemic, it has become the mainstay of the local community and hosts tournaments every month and two Grand Tournaments a year.</p>
      <p>Manned by a half a dozen enthusiasts our goal is to enrich the local player base with constant challenges and tournament venues to prove their skill. We believe the Icelandic community has the mettle to prove themselves to be some of the best players in the world, and our aim is to prove that by giving them a chance to become better.</p>
      <p>Some of us have been in and around the hobby since Warhammer 40.000 second edition and we’xve only seen the hobby grow each year, making us excited to be a historic part of that development.</p>
      <p>We hope you enjoy our humble website and we look forward to reporting more of the local scene here in the future, as well as advertise our future GT and RTT events.</p>
    </div>
    <div>
      <h2 class="h2">GT I</h2>
      <p>ICE HAMMER held the first Warhammer 40.000 Grand Tournament in Iceland in nearly a decade with numerous attendees battling against each other’s armies. Old and new, people had a blast pitting their skills against worthy opponents vying for award prizes provided by Nexus and Land og Töfrar.</p>
      <img src="@/assets/images/about/GT1.png" alt="" />
      <p>The Grand Tournament was a culmination of a lot of work by ICE HAMMER and we are glad to see that it was well received by the local community as well as foreign attendees who wanted to experience the local Warhammer scene. We are also proud to announce that we broke the record of the number of attendees.</p>
      <div class="flex textImgContainer">
        <img class="img-50" src="@/assets/images/about/Winner&Tau.png" alt="" />
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
    </div>
    <div>
      <h2 class="h2">WTC</h2>
      <p>With the summer coming to a close, ICE HAMMER sent its national team forward into battle, participating in the WTC after an extended break.</p>
      <div class="flex container--medium">
        <img src="@/assets/images/about/WTC.png" alt="Legend" />
        <img src="@/assets/images/about/WTC_Hall.png" alt="" />
      </div>
      <p>An early vanguard went ahead and competed in local RTTs that were held before the main event as well as finish the armies, with the latter part of our forces arriving a day before the first day of WTC. The team was led by our trusty captain Heiðar Þór who helped train the team which saw an overall great improvement compared to the last time the country competed in Serbia, landing us in 21st place out of 28.</p>
      <p>Fun was had by all, and the team’s excitement on being present at such an amazing event was evident. We look forward to many international tournaments in the future and look forward to seeing you there.</p>
      <div class="flex container--medium">
        <img src="@/assets/images/about/Legend.png" alt="Legend" />
        <img src="@/assets/images/about/Team_Iceland2.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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