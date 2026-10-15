  import rubberduck from "/src/assets/rubberduck.png";
  import rubberDuckVideo from "/src/assets/RubberDuck.mp4";
  
  import novellinurkka from "/src/assets/Novellinurkka.png";
  import firstProjectVideo from "/src/assets/FirstProject.mp4";
  
  import yahtzee from "/src/assets/yahtzee.png";
  import miniYahtzeeVideo from "/src/assets/miniYahzee.mp4";
  
  import weatherApp from "/src/assets/WeatherApp.png";
  import weatherAppVideo from "/src/assets/WeatherApp.mp4";
  
  import exercise from "/src/assets/exercise.png";
  import exerciseAppVideo from "/src/assets/ExerciseApp.mp4";
  
  const data = [
    {
      title: "Counter App",
      category: "HTML • CSS • JavaScript",
      description:
        "A simple interactive counter I built to practice JavaScript.",
      image: rubberduck,
    video: rubberDuckVideo
    },

    {
      title: "Online Book Store",
      category: "React JS • Node.js • MySQL",
      description:
        "A full-stack bookstore where I focused on the database, admin and login pages and overall UI design.",
      image: novellinurkka,
    video: firstProjectVideo
    },

    {
      title: "Mini Yahtzee",
      category: "React Native • Expo",
      description:
        "A school project featuring a mobile Yahtzee-style game built with React Native and Expo.",
      image: yahtzee,
    video: miniYahtzeeVideo
    },

    {
      title: "Weather App",
      category: "HTML • CSS • JavaScript • API",
      description:
        "A weather application that fetches and displays live weather data.",
      image: weatherApp,
    video: weatherAppVideo
    },

    {
      title: "Exercise App",
      category: "React Native • Expo",
      description:
        "A simple mobile application for browsing and tracking exercises.",
      image: exercise,
    video: exerciseAppVideo
    }
  ];

  export default data;