import * as React from "react";
import Hero from '../components/hero/hero';
import Menu from '../components/menu/menu';

import Footer from '../components/footer/footer';


import '../scss/main.scss';

// markup
const IndexPage = () => {
  return (
    <main>
      <Hero title="New Mexico Rugby" tagline="New Mexico's only youth rugby organization" />
      <Menu />
      <main className="container px-4 mx-auto md:px-0">
        <p>New Mexico Rugby is a registered non-profit and all-volunteer sports organization, dedicated to the development of young athletes in New Mexico and west Texas through youth and high school rugby for all. Our programs, leagues, and clubs state-wide offer contact and non-contact rugby open to all elementary, middle school, and high school student-athletes. NMYR's mission is to develop and grow the sport of rugby for all youth within the state of New Mexico. Our goals are to provide a safe and fair sporting environment, and to develop youth character by introducing the values of rugby into a team sport experience that will endure for a lifetime."</p>

        <h2>About Rugby</h2>
        <p>"Rugby is one of the fastest growing sports in the United States. Many people are familiar with rugby as a fringe sport, but you may be surprised to learn that it is actually the second most popular sport in the world behind soccer. In fact, in Europe, Australia and South Africa, the teams and players are elevated to a star status that exceeds that of NFL players in the United States! Many teams fill 80,000 seat stadiums for international match play.</p>

        <p>The allure of rugby is easy to understand yet hard to explain. Who can't appreciate the toughness required to play a fast-paced, hard-hitting game that is 60 minutes long with no timeouts and only a 5-minute half time. All players play both defense and offense at any given time during a game.And, most appealing is the fact that there is a position for everyone who wants to play - large, thin, short, or tall. Above all, rugby is a social sport that praises competition but demands good sportsmanship. As part of the rugby tradition, the home team hosts the visiting team and an after game social, which is filled only with good cheer and camaraderie."</p>
      </main>
      <Footer />
    </main>
  )
}

export default IndexPage
