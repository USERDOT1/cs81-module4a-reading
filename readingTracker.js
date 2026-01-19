// Weekly reading log
// Here we are defining an array of objects that we can go through. We would access this like readingLog[0].book. I love Dune I'm reading it rn
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Adds a new reading entry to the log
// Prepares and pushes the object to the array. So push is like append or add in Python or java.
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes };
  readingLog.push(newEntry);
}

// I like how this function takes into account the possibility of multiple logs. Like it could have just used our reading log from the top but
// now it could be used for multiple people which is elite
// Returns total minutes spent reading all week
function totalReadingMinutes(log) {
  let total = 0;
  for (let entry of log) {
    // Looping over each array element, so entry is the object
    total += entry.minutes;
  }
  return total;
}

// Returns the book read most frequently
// AHA! This is where we can improve. This counts the number of times a book is read, so If we read 1934 7 times in a week for 
// a minute each time it counts as 7, wheras if we have nothing to do all day and read Dune for 12 hours, it still only counts as one
// This does not line up with how we want it to work in reality.
function mostReadBook(log) {
  const bookCounts = {};
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
    }
  }

  let maxBook = null;
  let maxCount = 0;
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}

// Prints a summary of minutes read per day
// This function is basically perfect, if we're splitting hairs you could check if it's above sixty and use a combination of division
// and modulus to print like Hours and minutes
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
//
// Good tests
addReadBook("Saturday", "Dune", 50);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));
