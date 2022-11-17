export const routes = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "NFL Ranks",
      link: "/nfl-ranks",
  
      subRoutes: [
        {
          name: "Weekly",
          link: "/nfl-ranks/weekly",
        },
        {
          name: "Rest of Season",
          link: "/nfl-ranks/rest-of-season",
        },
        {
          name: "Dynasty",
          link: "/nfl-ranks/dynasty",
        },
      ],
    },
    {
      name: "NBA Ranks",
      link: "/nba-ranks",

      subRoutes: [
        {
          name: "Rest of Season",
          link: "/nba-ranks/rest-of-season",
        },
        {
          name: "Dynasty",
          link: "/nba-ranks/dynasty",
        },
      ],
    },
    {
      name: "NHL Ranks",
      link: "/nhl-ranks",
    },
    {
      name: "About",
      link: "/about",
    },
  ];