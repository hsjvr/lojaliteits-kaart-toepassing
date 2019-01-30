export function fetchLoyaltyCards() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          date: new Date(2019, 1, 14),
        },
        {
          id: 2,
          date: new Date(2019, 4, 22),
        },
        {
          id: 3,
          date: new Date(2019, 7, 17),
        },
      ]);
    }, 2000);
  });
}

export function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          firstName: 'Desmond',
          lastName: 'Murray',
          numberOfLoyaltyCards: Math.floor(Math.random() * 7) + 1,
        },
        {
          firstName: 'Aylin',
          lastName: 'Leonard',
          numberOfLoyaltyCards: Math.floor(Math.random() * 7) + 1,
        },
        {
          firstName: 'Harrison',
          lastName: 'Ellis',
          numberOfLoyaltyCards: Math.floor(Math.random() * 7) + 1,
        },
        {
          firstName: 'Octavio',
          lastName: 'Gilmore',
          numberOfLoyaltyCards: Math.floor(Math.random() * 7) + 1,
        },
        {
          firstName: 'Ean',
          lastName: 'Reese',
          numberOfLoyaltyCards: Math.floor(Math.random() * 7) + 1,
        },
      ]);
    }, 2000);
  });
}
