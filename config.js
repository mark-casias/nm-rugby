'use strict';

module.exports = {
  url: 'https://nm-rugby.com',
  pathPrefix: '/',
  title: 'Rugby New Mexico',
  subtitle: "New Mexico's only youth rugby organization",
  copyright: '© 2021 All rights reserved.',
  disqusShortname: '',
  postsPerPage: 5,
  menu: [
    {
      label: 'Home',
      path: '/'
    },
    {
      label: 'About',
      path: '/about',
      children: [
        {
          label: 'Who we are',
          path: '/about/who-we-are'
        },
        {
          label: 'The Board Members',
          path: '/about/board'
        }
      ]
    },
    {
      label: 'Players and Parents',
      path: '/players-parents',
      children: [
        {
          label: 'A rugby 101 guide',
          path: '/players-parents/rugby-101'
        },
        {
          label: 'High School Teams',
          path: '/players-parents/high-school-teams'
        },
        {
          label: 'Youth Teams',
          path: '/players-parents/youth-teams'
        },
        {
          label: 'Registration',
          path: 'https://whereeverthefuck.com'
        }
      ]
    },
    {
      label: 'Resources',
      path: '/resources',
      children: [
        {
          label: 'Safesport',
          path: '/resources/safesport'
        },
        {
          label: 'Concussion',
          path: '/resources/concussion'
        },
        {
          label: 'Return to Play',
          path: '/resources/return-to-play'
        },
        {
          label: 'Board Meetings and Minutes',
          path: '/resources/board-meetings'
        }
      ]
    },
    {
      label: 'Contact Us',
      path: 'mailto://stoney@theplaceinsertedhere.com'
    },
  ],
  author: {
    name: '',
  }
};
