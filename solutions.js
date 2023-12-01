const album1 = {
    title: 'Talking Heads',
    albumDetails: {
      released: new Date('September 16, 1977'),
      label: 'Sire',
      formats: ['LP']
    }
  };
  
  // Exercise 1:  Update the title property of album1 from 'Talking Heads' to 'Talking Heads - 77', then assign that property to a variable named title

album1.title = 'Talking Heads - 77';
let title = album1.title
console.log(title);

// Exercise 2: Assign the string 'Sire' from album1 to a variable named label

album1.label = 'Sire';
let label = album1.label;
console.log(label);