const names = [
  'StarGazer42',
  'ElectricNinja',
  'LunaWanderer',
  'PixelPioneer',
  'MysticWhisper',
  'QuantumQuest',
  'OceanBreeze23',
  'CrimsonHaze',
  'SolarFlare77',
  'MidnightHowler',
  'NeonSpecter',
  'EnchantedGrove',
  'CosmicPenguin',
  'SilverShadow99',
  'FireflyDreamer'
];

const descriptionsBodies = [
  'How to disagree with someone',
  'iPhone review',
  'how-to video',
  'video essay on the history of video games',
  'How to make money on the App Store',
  'Learn NextJS in five minutes (Not clickbate)',
  'Movie trailer',
  'Hello world',
  'Another possible solution to the algorithm',
  'Apology video',
  'Submission for startup pitch',
];

const possibleReactions = [
  'I disagree!',
  'I tried your algorithm, here were the results',
  'This was awesome',
  'Thank you for the great content',
  'Please check out my video response',
  'Like and subscribe to my channel please',
  'Reply: The side effects of in app purchases on digital marketplaces',
];


// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomUser = () =>
  `${getRandomArrItem(names)}`;

// Function to generate random Thoughts that we can add to the database. Includes thought reactions.
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactions: [...getThoughtReactions(3)],
      thoughtText: getRandomArrItem(descriptionsBodies),
      username: getRandomUser()
    });
  }
  return results;
};

// Create the reactions that will be added to each thought
const getThoughtReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleReactions);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(possibleReactions),
      username: getRandomUser(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUser, getRandomThoughts, getThoughtReactions };
