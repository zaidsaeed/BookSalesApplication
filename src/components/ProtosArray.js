const protos = [
  {
    id: 1,
    bookTitle: "The Hunger Games",
    author: "Suzanne Collins",
    description:
      "A young man discovers he is the descendant of a Greek god and embarks, with the help of a satyr and the daughter of Athena, in a dangerous adventure to resolve a war between gods. On his way, he will face a horde of mythological enemies determined to stop him.",
    price: "12.00",
    imageURL:
      "http://static.oprah.com/images/o2/201503/201503-book-hunger-games-949x1356.jpg"
  },
  {
    id: 2,
    bookTitle: "The Hunger Games: Catching Fire",
    author: "Suzanne Collins",
    description:
      "It has been six months since Katniss Everdeen and Peeta Mellark won the Seventy-fourth Hunger Games, an annual event in which each district in Panem sends one female and one male tribute to fight to the death in a televised competition for food and money. Though only one tribute can win, a change in the rules allowed Peeta and Katniss to both win. Their victory was partly secured because of Peeta's declaration of love for Katniss before the Games.",
    price: "9.99",
    imageURL: "https://www.nahdetmisr.com/wp-content/uploads/2016/11/65.jpg"
  },
  {
    id: 3,
    bookTitle: "The Hunger Games: Mockingjay Part 1",
    author: "Suzanne Collins",
    description:
      "The story continues to follow Katniss Everdeen; having twice survived the Hunger Games, Katniss finds herself in District 13. Under the leadership of President Coin and the advice of her trusted friends, Katniss reluctantly becomes the symbol of a mass rebellion against the Capitol and fights to save Peeta and a nation moved by her courage. It is the sequel to The Hunger Games: Catching Fire and was followed by the concluding entry, The Hunger Games: Mockingjay – Part 2",
    price: "12",
    imageURL: "https://images-na.ssl-images-amazon.com/images/I/71X7lgH1nRL.jpg"
  },
  {
    id: 4,
    bookTitle: "The Hunger Games: Mockingjay Part 2",
    author: "Suzanne Collins",
    description:
      "With the nation of Panem in a full scale war, Katniss confronts President Snow in the final showdown. Teamed with a group of her closest friends – including Gale, Finnick, and Peeta – Katniss goes off on a mission with the unit from District 13 as they risk their lives to liberate the citizens of Panem, and stage an assassination attempt on President Snow who has become increasingly obsessed with destroying her. The mortal traps, enemies, and moral choices that await Katniss will challenge her more than any arena she faced in the Hunger Games.",
    price: "12",
    imageURL:
      "https://i.pinimg.com/originals/b9/ca/65/b9ca652e751d61063a54d0086a856900.jpg"
  },
  {
    id: 5,
    bookTitle: "Percy Jackson and the Lightning Thief",
    author: "Rick Roirdan",
    description:
      "Twelve-year-old Percy Jackson is on the most dangerous quest of his life. With the help of a satyr and a daughter of Athena, Percy must journey across the United States to catch a thief who has stolen the original weapon of mass destruction — Zeus’ master bolt. Along the way, he must face a host of mythological enemies determined to stop him. Most of all, he must come to terms with a father he has never known, and an Oracle that has warned him of betrayal by a friend.",
    price: "12",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/The_Lightning_Thief_cover.jpg"
  },
  {
    id: 6,
    bookTitle: "The Sea Of Monsters",
    author: "Rick Roirdan",
    description:
      "When Thalia’s tree is mysteriously poisoned, the magical borders of Camp Half-Blood begin to fail. Now Percy and his friends have just days to find the only magic item powerful to save the camp before it is overrun by monsters. The catch: they must sail into the Sea of Monsters to find it. Along the way, Percy must stage a daring rescue operation to save his old friend Grover, and he learns a terrible secret about his own family, which makes him question whether being the son of Poseidon is an honor or a curse.",
    price: "12",
    imageURL:
      "https://www.scholastic.com/content5/media/products/21/9780439027021_mres.jpg"
  },
  {
    id: 7,
    bookTitle: "The Titan's Curse",
    author: "Rick Roirdan",
    description:
      "When Percy Jackson gets an urgent distress call from his friend Grover, he immediately prepares for battle. He knows he will need his powerful demigod allies at his side, his trusty bronze sword Riptide, and… a ride from his mom. The demigods rush to the rescue to find that Grover has made an important discovery: two powerful half-bloods whose parentage is unknown. But that’s not all that awaits them. The titan lord Kronos has devised his most treacherous plot yet, and the young heroes have just fallen prey. They’re not the only ones in danger. An ancient monster has arisen — one rumored to be so powerful it could destroy Olympus — and Artemis, the only goddess who might know how to track it, is missing. Now Percy and his friends, along with the Hunters of Artemis, have only a week to find the kidnapped goddess and solve the mystery of the monster she was hunting. Along the way, they must face their most dangerous challenge yet: the chilling prophecy of the titan’s curse.",
    price: "12",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/en/3/3c/The_titan%27s_curse.jpg"
  },
  {
    id: 8,
    bookTitle: "The Serpent's Shadow",
    author: "Rick Roirdan",
    description:
      "When young magicians Carter and Sadie Kane learned how to follow the path of the ancient Egyptian gods, they knew they would have to play an important role in restoring Ma’at—order—to the world. What they didn’t know is how chaotic the world would become. The Chaos snake Apophis is loose and threatening to destroy the earth in three days’ time. The magicians are divided. The gods are disappearing, and those that remain are weak. Walt, one of Carter and Sadie’s most gifted initiates, is doomed and can already feel his life force ebbing. Zia is too busy babysitting the senile sun god, Ra, to be of much help. What are a couple of teenagers and a handful of young trainees to do? There is, possibly, one way to stop Apophis, but it is so difficult that it might cost Carter and Sadie their lives, if it even works at all. It involves trusting the ghost of a psychotic magician not to betray them, or worse, kill them. They’d have to be crazy to try. Well, call them crazy. With hilarious asides, memorable monsters, and an ever-changing crew of friends and foes, the excitement never lets up in The Serpent’s Shadow, a thoroughly entertaining and satisfying conclusion to the Kane Chronicles trilogy.",
    price: "12",
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/517as-k3qSL._SX324_BO1,204,203,200_.jpg"
  },
  {
    id: 8,
    bookTitle: "The Fault In Our Stars",
    author: "John Green",
    description:
      "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel’s story is about to be completely rewritten. Insightful, bold, irreverent, and raw, The Fault in Our Stars is award-winning-author John Green’s most ambitious and heartbreaking work yet, brilliantly exploring the funny, thrilling, and tragic business of being alive and in love.",
    price: "12",
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/51ED6WxFy8L._SX335_BO1,204,203,200_.jpg"
  },
  {
    id: 9,
    bookTitle: "Divergent",
    author: "Veronica Roth",
    description:
      "In Beatrice Prior's dystopian Chicago world, society is divided into five factions, each dedicated to the cultivation of a particular virtue-Candor (the honest), Abnegation (the selfless), Dauntless (the brave), Amity (the peaceful), and Erudite (the intelligent). On an appointed day of every year, all sixteen-year-olds must select the faction to which they will devote the rest of their lives. For Beatrice, the decision is between staying with her family and being who she really is-she can't have both. So she makes a choice that surprises everyone, including herself.      During the highly competitive initiation that follows, Beatrice renames herself Tris and struggles alongside her fellow initiates to live out the choice they have made. Together they must undergo extreme physical tests of endurance and intense psychological simulations, some with devastating consequences. As initiation transforms them all, Tris must determine who her friends really are-and where, exactly, a romance with a sometimes fascinating, sometimes exasperating boy fits into the life she's chosen. But Tris also has a secret, one she's kept hidden from everyone because she's been warned it can mean death. And as she discovers unrest and growing conflict that threaten to unravel her seemingly perfect society, she also learns that her secret might help her save those she loves . . . or it might destroy her.",
    price: "12",
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/51--jK6gScL._SX331_BO1,204,203,200_.jpg"
  },
  {
    id: 10,
    bookTitle: "The Hate U Give",
    author: "Angie Thomas",
    description:
      "Sixteen-year-old Starr Carter moves between two worlds: the poor neighborhood where she lives and the fancy suburban prep school she attends. The uneasy balance between these worlds is shattered when Starr witnesses the fatal shooting of her childhood best friend Khalil at the hands of a police officer. Khalil was unarmed. Soon afterward, his death is a national headline. Some are calling him a thug, maybe even a drug dealer and a gangbanger. Protesters are taking to the streets in Khalil’s name. Some cops and the local drug lord try to intimidate Starr and her family. What everyone wants to know is: what really went down that night? And the only person alive who can answer that is Starr.But what Starr does—or does not—say could upend her community. It could also endanger her life.",
    price: "12",
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/41PN13KdexL._SX329_BO1,204,203,200_.jpg"
  },
  {
    id: 11,
    bookTitle: "The Book Thief",
    author: "Markus Zusak",
    description:
      "The extraordinary #1 New York Times bestseller that is now a major motion picture, Markus Zusak's unforgettable story is about the ability of books to feed the soul. It is 1939. Nazi Germany. The country is holding its breath. Death has never been busier, and will become busier still. Liesel Meminger is a foster girl living outside of Munich, who scratches out a meager existence for herself by stealing when she encounters something she can’t resist–books. With the help of her accordion-playing foster father, she learns to read and shares her stolen books with her neighbors during bombing raids as well as with the Jewish man hidden in her basement. In superbly crafted writing that burns with intensity, award-winning author Markus Zusak, author of I Am the Messenger, has given us one of the most enduring stories of our time.",
    price: "12",
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/51dEuPZMS-L._SX322_BO1,204,203,200_.jpg"
  },
  {
    id: 12,
    bookTitle: "The Maze Runner",
    author: "James Dashner",
    description:
      "The perfect gift for fans of The Hunger Games and Divergent, this boxed set includes the paperback editions of James Dashner's #1 New York Times bestselling series--The Maze Runner, The Scorch Trials, The Death Cure and The Kill Order. The first and second books, The Maze Runner and The Scorch Trials, are now major motion pictures featuring the star of MTV's Teen Wolf, Dylan O’Brien; Kaya Scodelario; Aml Ameen; Will Poulter; and Thomas Brodie-Sangster! Also look for James Dashner’s newest novels, The Eye of Minds and The Rule of Thoughts, the first two books in the Mortality Doctrine series. If you ain’t scared, you ain’t human.",
    price: "12",
    imageURL: "https://images-na.ssl-images-amazon.com/images/I/51wNYq-Xt5L.jpg"
  },
  {
    id: 13,
    bookTitle: "Looking For Alaska",
    author: "John Green",
    description:
      "The perfect gift for fans of The Hunger Games and Divergent, this boxed set includes the paperback editions of James Dashner's #1 New York Times bestselling series--The Maze Runner, The Scorch Trials, The Death Cure and The Kill Order. The first and second books, The Maze Runner and The Scorch Trials, are now major motion pictures featuring the star of MTV's Teen Wolf, Dylan O’Brien; Kaya Scodelario; Aml Ameen; Will Poulter; and Thomas Brodie-Sangster! Also look for James Dashner’s newest novels, The Eye of Minds and The Rule of Thoughts, the first two books in the Mortality Doctrine series. If you ain’t scared, you ain’t human.",
    price: "12",
    imageURL: "https://images-na.ssl-images-amazon.com/images/I/91nTClkODkL.jpg"
  },
  {
    id: 14,
    bookTitle: "The Maze Runner",
    author: "james Dashner",
    description:
      "Before. Miles “Pudge” Halter is done with his safe life at home. His whole life has been one big non-event, and his obsession with famous last words has only made him crave “the Great Perhaps” even more (Francois Rabelais, poet). He heads off to the sometimes crazy and anything-but-boring world of Culver Creek Boarding School, and his life becomes the opposite of safe. Because down the hall is Alaska Young. The gorgeous, clever, funny, sexy, self-destructive, screwed up, and utterly fascinating Alaska Young. She is an event unto herself. She pulls Pudge into her world, launches him into the Great Perhaps, and steals his heart. Then. . . . After. Nothing is ever the same.",
    price: "12",
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/41JbPzUy7UL._SX329_BO1,204,203,200_.jpg"
  }
];

export default protos;
