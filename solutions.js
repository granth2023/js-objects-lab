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


const album2 = {
    title: 'More Songs About Buildings and Food',
    albumDetails: {
      released: new Date('July 14, 1978'),
      label: 'Sire',
      formats: ['LP', '8-track']
    }
  };
  
  const album3 = {
    title: 'Fear of Music',
    albumDetails: {
      released: 'August 3, 1979',
      label: 'Sire',
      formats: ['Cassette']
    }
  };
  
  // Exercise 3: Accessing the string 'LP' from album2's formats array, add it to the end of album3's formats array.

  album3.albumDetails.formats.push(album2.albumDetails.formats[0]);
  console.log(album3.albumDetails.formats);
  
  
  
  
  // Exercise 4:  Update the released property of album3 from a string into a Date object using that string
  
  album3.albumDetails.released = new Date(album3.albumDetails.released)
  console.log(album3.albumDetails.released)



  const album4 = {
    title: 'Remain in Light',
    albumDetails: {
      released: new Date('October 8, 1980'),
      formats: ['Cassette', 'LP']
    }
  };
  
  // Exercise 5:  Add a property named label with the value 'Sire' to album4's albumDetails property
  
  