const mongoose = require("mongoose");
const Book = require("../models/book");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = [
  {
    authors: "Suzanne Collins",
    description:
      "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image:
      "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link:
      "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
    title: "The Hunger Games",
  },
  {
    authors: "J.K. Rowling",
    description:
      "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.",
    image:
      "https://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70JNyLkLKzr5u_ODcQkISau-Dglu2qpU3h9Ju0YqvHm6cexy2z0Hd5F_ghLsu3qG6U4BODHKbxXsAfd9Owd2M1-BoT_fdaJo_xjStEWX5AasEDYnGK1incVAX0bciu_TiZOeev8",
    link:
      "https://books.google.com/books/about/Harry_Potter_and_the_Sorcerer_s_Stone.html?id=wrOQLV6xB-wC",
    title: "Harry Potter and the Sorcerer's Stone",
  },
];

Book
  .remove({})
  .then(() => Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
