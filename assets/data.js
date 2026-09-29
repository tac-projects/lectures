/*
  Données du "Parcours littéraire CM2B".
  Sources : liste remise par l'enseignant (titres, auteurs, genres, niveaux)
  + notices encyclopédiques pour les résumés et les repères sur les auteurs.
  Document autoportant : aucun lien externe, tout le contenu est ici.
  Les résumés donnent envie de lire sans dévoiler la fin des histoires.
*/

const CATEGORIES = {
  P: "Œuvres du patrimoine",
  C: "Littérature de jeunesse contemporaine"
};

const NIVEAUX = {
  1: { court: "Niveau 1", long: "Lecture accessible", couleur: "vert" },
  2: { court: "Niveau 2", long: "Lecture autonome", couleur: "bleu" },
  3: { court: "Niveau 3", long: "Pour lecteurs très autonomes", couleur: "rouge" }
};

const AUTEURS = {
  lafontaine: {
    nom: "Jean de La Fontaine",
    bio: "(1621-1695) Poète français, il doit sa gloire à ses Fables mises en vers (1668-1694), inspirées d'Ésope et de Phèdre. Il a aussi écrit des Contes et des œuvres diverses."
  },
  giono: {
    nom: "Jean Giono",
    bio: "(1895-1970) Écrivain français profondément attaché à la Provence. Outre L'Homme qui plantait des arbres, il est l'auteur de romans comme Le Hussard sur le toit et de récits pleins de nature."
  },
  perrault: {
    nom: "Charles Perrault",
    bio: "(1628-1703) Homme de lettres français, il publie en 1697 les Contes de ma mère l'Oye, qui rassemblent des récits populaires comme Cendrillon ou Le Petit Poucet. Il fut aussi un proche de Colbert."
  },
  daudet: {
    nom: "Alphonse Daudet",
    bio: "(1840-1897) Écrivain français, auteur des Lettres de mon moulin (1869), recueil de contes provençaux, et de romans comme Le Petit Chose."
  },
  saintex: {
    nom: "Antoine de Saint-Exupéry",
    bio: "(1900-1944) Aviateur et écrivain français. Il est l'auteur du Petit Prince (1943), de Vol de nuit et de Terre des hommes. Il disparaît en mission en 1944."
  },
  anonyme: {
    nom: "Anonyme",
    bio: "Le Roman de Renart est un ensemble de récits médiévaux, composés aux XIIe et XIIIe siècles par plusieurs auteurs, pour la plupart anonymes."
  },
  collodi: {
    nom: "Carlo Collodi",
    bio: "(1826-1890) Journaliste et écrivain italien, créateur du personnage de Pinocchio, publié en feuilleton à partir de 1881."
  },
  lagerlof: {
    nom: "Selma Lagerlöf",
    bio: "(1858-1940) Femme de lettres suédoise, première femme lauréate du prix Nobel de littérature (1909). Elle est l'auteure du Merveilleux Voyage de Nils Holgersson."
  },
  grahame: {
    nom: "Kenneth Grahame",
    bio: "(1859-1932) Romancier britannique, auteur du Vent dans les saules (1908), classique de la littérature enfantine anglaise."
  },
  carroll: {
    nom: "Lewis Carroll",
    bio: "(1832-1898) Écrivain et mathématicien britannique, auteur d'Alice au pays des merveilles (1865) et de sa suite, De l'autre côté du miroir."
  },
  homere: {
    nom: "Homère",
    bio: "Poète de la Grèce antique (vers le VIIIe siècle av. J.-C.), à qui l'on attribue l'Iliade et l'Odyssée, les deux grandes épopées fondatrices de la culture grecque."
  },
  defoe: {
    nom: "Daniel Defoe",
    bio: "(vers 1660-1731) Écrivain anglais, auteur de Robinson Crusoé (1719), l'un des premiers grands romans d'aventures anglais."
  },
  stevenson: {
    nom: "Robert Louis Stevenson",
    bio: "(1850-1894) Écrivain écossais et grand voyageur, auteur de L'Île au trésor (1883) et de L'Étrange Cas du docteur Jekyll et de M. Hyde."
  },
  malot: {
    nom: "Hector Malot",
    bio: "(1830-1907) Romancier français, auteur de Sans famille (1878) et d'En famille, romans populaires très lus à son époque."
  },
  verne: {
    nom: "Jules Verne",
    bio: "(1828-1905) Écrivain français, pionnier du roman d'aventures et de science-fiction : Vingt mille lieues sous les mers, Le Tour du monde en quatre-vingts jours, Les Enfants du capitaine Grant."
  },
  desplechin: {
    nom: "Marie Desplechin",
    bio: "(née en 1959) Journaliste et écrivaine française, autrice de nombreux livres pour la jeunesse, dont Verte et la série des Pome."
  },
  annefine: {
    nom: "Anne Fine",
    bio: "(née en 1947) Romancière britannique spécialisée en littérature de jeunesse, autrice de la série du Chat assassin. Elle a été Children's Laureate au Royaume-Uni (2001-2003) et a reçu deux fois la médaille Carnegie."
  },
  sepulveda: {
    nom: "Luis Sepúlveda",
    bio: "(1949-2020) Écrivain chilien, auteur du Vieux qui lisait des romans d'amour et de nombreux récits engagés pour la jeunesse."
  },
  morgenstern: {
    nom: "Susie Morgenstern",
    bio: "(née en 1945) Autrice franco-américaine, reine de l'humour dans la littérature jeunesse, avec des romans comme Joker ou Lettres d'amour à tous les enfants."
  },
  murail: {
    nom: "Marie-Aude Murail",
    bio: "(née en 1954) Autrice française, principalement connue pour ses romans destinés à la jeunesse, comme Le Hollandais sans peine ou la série des Nils Hazard."
  },
  leclezio: {
    nom: "J. M. G. Le Clézio",
    bio: "(né en 1940) Écrivain de langue française, prix Nobel de littérature 2008. Il a écrit pour les enfants Voyage au pays des arbres et Balaabilou."
  },
  klotz: {
    nom: "Claude Klotz",
    bio: "(1932-2010) Romancier et scénariste français, également connu sous le pseudonyme de Patrick Cauvin. Il a écrit des romans policiers et des récits pour la jeunesse."
  },
  clauderoy: {
    nom: "Claude Roy",
    bio: "(1915-1997) Poète, journaliste et écrivain français, auteur de nombreux livres pour la jeunesse, dont Le Chat qui parlait malgré lui."
  },
  karr: {
    nom: "Kathleen Karr",
    bio: "(1946-2017) Autrice américaine de littérature jeunesse à thème historique, notamment La Longue Marche des dindes."
  },
  kastner: {
    nom: "Erich Kästner",
    bio: "(1899-1974) Écrivain allemand, auteur d'Émile et les Détectives (1929) et de nombreux livres pour la jeunesse. Ses œuvres furent brûlées par les nazis."
  },
  lindgren: {
    nom: "Astrid Lindgren",
    bio: "(1907-2002) Romancière suédoise, créatrice de Fifi Brindacier et de nombreux autres personnages de la littérature jeunesse."
  },
  ferdjoukh: {
    nom: "Malika Ferdjoukh",
    bio: "Romancière française de littérature jeunesse, plusieurs fois primée et traduite, autrice de Minuit-Cinq et de la série des Quatre sœurs."
  },
  friot: {
    nom: "Bernard Friot",
    bio: "(né en 1951) Écrivain français, auteur pour la jeunesse, célèbre pour ses « Histoires pressées », très utilisées en classe."
  }
};

/* Tags de genre pour le filtrage. */
const TAGS = [
  "Aventure",
  "Humour",
  "Fantastique / imaginaire",
  "École & famille",
  "Contes & fables",
  "Récits & nouvelles",
  "Enquête",
  "Nature",
  "Solidarité / amitié"
];

const LIVRES = [
  /* ---------------- I. ŒUVRES DU PATRIMOINE ---------------- */
  {
    id: "fables",
    titre: "Les Fables",
    auteur: "lafontaine",
    annee: "1668-1694",
    cat: "P",
    niveau: 1,
    genre: "Sélection de fables",
    tags: ["Contes & fables"],
    image: "assets/images/fables.webp",
    imageAlt: "Illustration de Gustave Doré : La Cigale et la Fourmi.",
    imageCredit: "Gustave Doré — domaine public",
    accroche: "Des animaux qui parlent et des morales qui font sourire.",
    resume: "Ce recueil rassemble une sélection des fables les plus célèbres de Jean de La Fontaine, publiées entre 1668 et 1694. Dans ces courts récits écrits en vers, les animaux parlent et se conduisent comme des hommes : la cigale insouciante face à la fourmi prévoyante, le corbeau vaniteux berné par le renard flatteur, le lièvre trop sûr de lui qui défie la tortue, ou le loup qui cherche noise à l'agneau. Chaque fable est une petite scène vive et souvent drôle, qui se termine par une morale à méditer. La Fontaine s'inspire des fabulistes de l'Antiquité, Ésope, Babrius et Phèdre, mais il renouvelle le genre par la vivacité de ses vers et sa finesse. Lire ces fables, c'est découvrir un trésor de la langue française, apprendre à reconnaître les ruses et les faux-semblants, et prendre goût à la poésie. Un recueil parfait à lire à voix haute."
  },
  {
    id: "plantait",
    titre: "L'Homme qui plantait des arbres",
    auteur: "giono",
    annee: "1953",
    cat: "P",
    niveau: 1,
    genre: "Récit",
    tags: ["Récits & nouvelles", "Nature"],
    image: "assets/images/plantait.webp",
    imageAlt: "Couverture du livre « L'Homme qui plantait des arbres ».",
    imageCredit: "Couverture de l'édition",
    accroche: "Un berger plante des glands ; des années plus tard, une forêt est née.",
    resume: "En promenade dans une région aride de Haute-Provence, un jeune homme rencontre Elzéard Bouffier, un berger solitaire qui vit simplement avec son chien et son troupeau. Chaque jour, l'homme plante des glands de chêne, un par un, sans rien attendre en retour et sans chercher à être reconnu. Intrigué, le narrateur revient le voir au fil des années, et découvre peu à peu que ce travail obstiné transforme la région : les arbres grandissent, l'eau revient, la vie reprend. Ce court récit de Jean Giono, écrit en 1953, est à la fois un conte écologique avant l'heure et un éloge de la patience et de la persévérance. Il montre qu'un geste modeste, répété avec constance, peut changer un paysage et redonner espoir à tout un pays. Un texte poétique et lumineux, idéal pour réfléchir à la nature et au temps long."
  },
  {
    id: "contes",
    titre: "Les Contes",
    auteur: "perrault",
    annee: "1697",
    cat: "P",
    niveau: 1,
    genre: "Contes",
    tags: ["Contes & fables"],
    image: "assets/images/contes.webp",
    imageAlt: "Estampe ancienne : le loup et le Petit Chaperon rouge.",
    imageCredit: "Estampe ancienne (Rijksmuseum) — domaine public",
    accroche: "Cendrillon, le Chaperon rouge, le Chat botté… les contes de notre enfance.",
    resume: "Ce recueil réunit les contes les plus célèbres de notre patrimoine, mis par écrit par Charles Perrault à la fin du XVIIe siècle : Cendrillon et sa pantoufle de verre, Le Petit Chaperon rouge et le loup, Le Chat botté qui fait la fortune de son maître, La Belle au bois dormant, Barbe bleue et sa chambre interdite, Riquet à la houppe, Les Fées, Le Petit Poucet perdu dans la forêt… Chaque histoire, courte et imagée, raconte une épreuve, un danger ou une ruse, et se termine souvent par une morale qui invite à réfléchir. Perrault s'appuie sur des récits populaires transmis oralement et les transforme en petits chefs-d'œuvre d'écriture. Ces contes, que l'on croit connaître, gagnent à être relus : ils parlent de peur, de courage, d'injustice et d'espoir, et sont à l'origine de tout un imaginaire partagé. Un recueil à savourer seul ou à raconter à voix haute."
  },
  {
    id: "segouin",
    titre: "La Chèvre de monsieur Seguin",
    auteur: "daudet",
    annee: "1869",
    cat: "P",
    niveau: 1,
    genre: "Récit",
    tags: ["Récits & nouvelles"],
    image: "assets/images/segouin.webp",
    imageAlt: "Illustration d'époque de La Chèvre de monsieur Seguin.",
    imageCredit: "Illustration d'époque (1904) — domaine public",
    accroche: "Blanquette rêve de liberté ; le loup, lui, n'est jamais loin.",
    resume: "Blanquette, la chèvre de monsieur Seguin, vit attachée dans le jardin de son maître. Mais elle s'ennuie et rêve de la montagne, de l'herbe libre et de l'aventure. Monsieur Seguin, qui a déjà perdu toutes ses chèvres de la même façon, la met en garde : la montagne, c'est le loup. Pourtant, un jour, Blanquette ronge sa corde et s'échappe. La voilà enfin libre, gambadant dans la nature et savourant chaque instant de cette journée tant attendue. Mais le soir tombe, et avec lui l'ombre du danger… Ce récit court et poignant, extrait des Lettres de mon moulin d'Alphonse Daudet, raconte le désir irrésistible de liberté et ce qu'il peut coûter. La langue y est simple et magnifique, et l'histoire laisse une impression durable. Un texte parfait pour découvrir ce qu'est un récit à suspense."
  },
  {
    id: "petitprince",
    titre: "Le Petit Prince",
    auteur: "saintex",
    annee: "1943",
    cat: "P",
    niveau: 1,
    genre: "Conte philosophique",
    tags: ["Contes & fables", "Fantastique / imaginaire"],
    image: "assets/images/petitprince.webp",
    imageAlt: "Couverture du livre « Le Petit Prince ».",
    imageCredit: "Couverture de l'édition",
    accroche: "« S'il te plaît… dessine-moi un mouton. »",
    resume: "Un aviateur en panne dans le désert du Sahara se réveille face à un petit garçon étrange qui lui demande de dessiner un mouton. Peu à peu, il découvre que l'enfant vient d'une autre planète, l'astéroïde B 612, et qu'il a quitté sa rose pour voyager. Le petit prince raconte ses rencontres : un roi sans sujets, un vaniteux, un buveur, un businessman qui compte les étoiles, un allumeur de réverbères, un géographe… autant de portraits malicieux des adultes et de leurs habitudes. Sur Terre, il se lie d'amitié avec un renard qui lui confie un secret précieux sur ce qui compte vraiment dans la vie. Conte poétique et philosophique, écrit et illustré par Antoine de Saint-Exupéry en 1943, ce livre parle de l'amitié, de la solitude et du regard de l'enfance sur le monde. Un texte à lire et à relire, qui révèle chaque fois quelque chose de nouveau."
  },
  {
    id: "renart",
    titre: "Le Roman de Renart",
    auteur: "anonyme",
    annee: "XIIe-XIIIe siècle",
    cat: "P",
    niveau: 2,
    genre: "Récits médiévaux",
    tags: ["Récits & nouvelles", "Humour", "Aventure"],
    image: "assets/images/renart.webp",
    imageAlt: "Enluminure médiévale du Roman de Renart.",
    imageCredit: "Enluminure médiévale — domaine public",
    accroche: "Un goupil rusé, un loup naïf : le plus grand farceur du Moyen Âge.",
    resume: "Au Moyen Âge, les animaux forment une véritable société, avec un roi, Noble le lion, et une cour. Mais l'un d'eux, Renart le goupil, ne respecte aucune règle : rusé, menteur et toujours affamé, il ne pense qu'à tromper les autres. Sa victime favorite est Ysengrin le loup, fort mais naïf, qu'il ridiculise sans cesse : il lui vole ses provisions, le fait tomber dans un puits, l'entraîne dans des pièges grossiers. Autour d'eux gravitent Tibert le chat, Grimbert le blaireau, Chantecler le coq et bien d'autres. Ces récits, composés aux XIIe et XIIIe siècles par plusieurs auteurs anonymes, se moquent avec drôlerie des puissants, des faux dévots et des hypocrites. Drôles, parfois cruels, les épisodes s'enchaînent comme les chapitres d'une série pleine de rebondissements. Lire Le Roman de Renart, c'est découvrir la littérature médiévale par une porte joyeuse et vivante."
  },
  {
    id: "pinocchio",
    titre: "Les Aventures de Pinocchio",
    auteur: "collodi",
    annee: "1881",
    cat: "P",
    niveau: 2,
    genre: "Roman d'apprentissage",
    tags: ["Aventure", "Fantastique / imaginaire", "Contes & fables"],
    image: "assets/images/pinocchio.webp",
    imageAlt: "Illustration de Maria Louise Kirk pour Pinocchio.",
    imageCredit: "Maria Louise Kirk — domaine public",
    accroche: "Un pantin de bois prend vie — et chaque mensonge allonge son nez.",
    resume: "Dans un petit village italien, Geppetto, un menuisier pauvre et solitaire, sculpte dans un morceau de bois un pantin qui, à sa grande surprise, prend vie : Pinocchio. Le pantin est joyeux, curieux, mais terriblement désobéissant. À chaque mensonge, son nez s'allonge démesurément. Il refuse l'école, se laisse entraîner par de mauvaises compagnies et enchaîne les catastrophes : il fuit au théâtre de marionnettes, se fait voler son argent, se retrouve au pays des Jouets, et bien d'autres mésaventures. Heureusement, la Fée veille sur lui, et un grillon parlant tente de le raisonner. Au fil de ses épreuves, Pinocchio apprend peu à peu la valeur du travail, de l'honnêteté et du courage. Ce grand classique italien de Carlo Collodi, publié en 1881, raconte l'apprentissage difficile de la liberté et de la responsabilité. Un conte initiatique plein de rebondissements, drôle et émouvant."
  },
  {
    id: "nils",
    titre: "Le Merveilleux Voyage de Nils Holgersson",
    auteur: "lagerlof",
    annee: "1906-1907",
    cat: "P",
    niveau: 2,
    genre: "Roman d'aventures",
    tags: ["Aventure", "Nature", "Fantastique / imaginaire"],
    image: "assets/images/nils.webp",
    imageAlt: "Illustration d'Ottilia Adelborg pour Nils Holgersson.",
    imageCredit: "Ottilia Adelborg — domaine public",
    accroche: "Réduit à la taille d'un pouce, Nils s'envole avec les oies sauvages.",
    resume: "Nils est un petit garçon turbulent qui vit dans une ferme du sud de la Suède. Un jour, parce qu'il a joué un mauvais tour à un lutin, il est puni : le voilà réduit à la taille d'un pouce, et capable de comprendre le langage des animaux. Pour échapper à la colère de ses parents, il s'accroche au cou de Martin, une oie domestique, qui s'envole rejoindre un grand vol d'oies sauvages mené par la sage et sévère Akka. Commence alors un extraordinaire voyage à travers toute la Suède : lacs, forêts, montagnes, villes et campagnes défilent, peuplés d'animaux qui parlent et de légendes anciennes. Nils découvre son pays, mais aussi le courage, la solidarité et le respect des autres. Peu à peu, l'enfant égoïste se transforme et apprend à aider ceux qui l'entourent. Ce roman de Selma Lagerlöf, commandé comme un livre de géographie, est devenu un immense classique de la littérature jeunesse."
  },
  {
    id: "saules",
    titre: "Le Vent dans les saules",
    auteur: "grahame",
    annee: "1908",
    cat: "P",
    niveau: 2,
    genre: "Roman d'aventures",
    tags: ["Aventure", "Humour", "Nature"],
    image: "assets/images/saules.webp",
    imageAlt: "Frontispice de Paul Bransom pour Le Vent dans les saules.",
    imageCredit: "Paul Bransom — domaine public",
    accroche: "Quatre amis animaux, une rivière, et un crapaud fou d'automobiles.",
    resume: "Taupe, fatigué de son ménage souterrain, abandonne un jour sa maison et découvre la rivière. Il y rencontre Rat, qui l'initie aux joies de la vie au bord de l'eau : promenades en barque, pique-niques, longues conversations. Ensemble, ils rendent visite au sage et bourru Blaireau, puis à l'extravagant Crapaud, passionné de nouveautés et incapable de résister à la moindre mode — surtout les automobiles. Quand Crapaud, grisé par sa passion, se met dans de mauvais draps, ses amis doivent se mobiliser pour l'aider. Ce grand classique anglais de Kenneth Grahame, publié en 1908, mêle humour, tendresse et amour de la nature. Derrière les aventures des animaux, il célèbre l'amitié, la fidélité et la douceur de la vie simple. Un récit où les bêtes ressemblent tendrement aux hommes, à lire pour le plaisir des personnages et de la langue."
  },
  {
    id: "alice",
    titre: "Alice au pays des merveilles",
    auteur: "carroll",
    annee: "1865",
    cat: "P",
    niveau: 2,
    genre: "Roman fantastique",
    tags: ["Fantastique / imaginaire", "Aventure"],
    image: "assets/images/alice.webp",
    imageAlt: "Illustration de John Tenniel pour Alice au pays des merveilles.",
    imageCredit: "John Tenniel — domaine public",
    accroche: "En suivant un lapin pressé, Alice bascule dans un monde sans logique.",
    resume: "En apercevant un lapin blanc vêtu d'un gilet, qui regarde sa montre et semble très pressé, Alice le suit jusque dans son terrier. La voilà qui bascule dans un monde étrange et merveilleux : le pays des merveilles. Là, plus rien n'obéit à la logique. Alice grandit et rapetisse au gré des gâteaux et des potions, pleure des mares de larmes, discute avec une chenille qui fume, prend le thé avec un Chapelier fou et un Lièvre de mars, rencontre un Chat au sourire inquiétant qui disparaît à volonté, et croise la terrible Reine de cœur. Chaque rencontre est l'occasion de jeux de langage, de devinettes et de situations saugrenues. Écrit par Lewis Carroll en 1865, ce récit plein de fantaisie et d'humour noir est aussi une réflexion sur l'enfance, le temps et les règles. Un classique intemporel qui a nourri l'imaginaire de générations de lecteurs."
  },
  {
    id: "odyssee",
    titre: "L'Odyssée",
    auteur: "homere",
    annee: "VIIIe siècle av. J.-C.",
    cat: "P",
    niveau: 3,
    genre: "Épopée",
    tags: ["Aventure"],
    note: "Œuvre commune de la classe",
    image: "assets/images/odyssee.webp",
    imageAlt: "Peinture de J. M. W. Turner : Ulysse et Polyphème.",
    imageCredit: "J. M. W. Turner — domaine public",
    accroche: "Dix ans pour rentrer chez soi, entre monstres, sirènes et tempêtes.",
    resume: "La guerre de Troie est terminée, mais Ulysse, l'un de ses héros, n'est pas encore rentré chez lui. Il veut rejoindre Ithaque, où l'attendent sa femme Pénélope et son fils Télémaque, mais les dieux en ont décidé autrement : son voyage durera dix longues années. Sur la mer, il affronte des épreuves sans nombre : le Cyclope Polyphème, qui dévore ses compagnons ; les sirènes, dont le chant attire les marins vers la mort ; la magicienne Circé ; la nymphe Calypso, qui le retient prisonnier ; les tempêtes envoyées par Poséidon. Pendant ce temps, à Ithaque, des prétendants s'installent dans son palais et convoitent sa femme et son trône, tandis que Pénélope ruse pour gagner du temps. Cette épopée attribuée à Homère est l'un des textes fondateurs de notre culture : elle célèbre l'intelligence, le courage et le prix du retour. Un fabuleux récit d'aventures et d'émotions, souvent adapté pour la jeunesse."
  },
  {
    id: "robinson",
    titre: "Robinson Crusoé",
    auteur: "defoe",
    annee: "1719",
    cat: "P",
    niveau: 3,
    genre: "Roman d'aventures",
    tags: ["Aventure", "Nature"],
    image: "assets/images/robinson.webp",
    imageAlt: "Illustration ancienne de Robinson Crusoé.",
    imageCredit: "Carington Bowles — domaine public",
    accroche: "Seul sur une île déserte pendant vingt-huit ans.",
    resume: "Embarqué pour une expédition, Robinson Crusoé échoue sur une île déserte après un violent naufrage. Seul survivant, il doit tout réinventer : se nourrir, se loger, se protéger, survivre. Il construit une cabane, cultive du blé, élève des chèvres, fabrique des outils, apprivoise un perroquet, et tient un journal pour ne pas perdre la raison. Pendant vingt-huit ans, il organise sa vie sur cette île, seul face à la nature. Puis un jour, il découvre des empreintes de pas : d'autres humains sont passés par là. Sa solitude serait-elle sur le point de se briser ? Ce roman de Daniel Defoe, publié en 1719, s'inspire d'une histoire vraie. Il raconte la solitude, l'ingéniosité et la rencontre de l'autre, et a donné naissance au mythe du naufragé qui reconstruit sa vie."
  },
  {
    id: "ileautresor",
    titre: "L'Île au trésor",
    auteur: "stevenson",
    annee: "1883",
    cat: "P",
    niveau: 3,
    genre: "Roman d'aventures",
    tags: ["Aventure"],
    image: "assets/images/ileautresor.webp",
    imageAlt: "Illustration de N. C. Wyeth pour L'Île au trésor.",
    imageCredit: "N. C. Wyeth — domaine public",
    accroche: "Une carte, un trésor, et des pirates prêts à tout.",
    resume: "Le jeune Jim Hawkins vit paisiblement dans l'auberge de ses parents quand un vieux marin, Billy Bones, s'y installe et meurt en laissant derrière lui une carte : celle de l'île où le capitaine Flint a caché son trésor. Jim confie la carte au docteur Livesey et au chevalier Trelawney, qui arment aussitôt un navire, l'Hispaniola, et embarquent pour l'île. Mais parmi l'équipage se cachent le redoutable pirate Long John Silver, un homme charmant et dangereux, et toute une bande de flibustiers prêts à tout pour s'emparer du butin. Trahisons, tempêtes, mutinerie et chasse au trésor : l'aventure promet d'être dangereuse. Publié par Robert Louis Stevenson en 1883, ce roman a façonné pour toujours l'image du pirate et de la carte au trésor. Un grand récit de suspense, porté par un héros courageux et un méchant inoubliable."
  },
  {
    id: "sansfamille",
    titre: "Sans famille",
    auteur: "malot",
    annee: "1878",
    cat: "P",
    niveau: 3,
    genre: "Roman",
    tags: ["Récits & nouvelles", "Aventure", "Solidarité / amitié"],
    image: "assets/images/sansfamille.webp",
    imageAlt: "Gravure d'après Émile Bayard pour Sans famille.",
    imageCredit: "H. T. Hildibrand, d'après Émile Bayard — domaine public",
    accroche: "Vendu à un musicien ambulant, Rémi part chercher sa vraie famille.",
    resume: "Rémi est un enfant trouvé, élevé avec tendresse par la mère Barberin dans un village de France. Mais quand son mari, blessé et sans ressources, revient, il vend l'enfant à Vitalis, un musicien ambulant un peu rude. Commence alors pour Rémi une longue errance sur les routes, en compagnie de la troupe de Vitalis : le chien Capi, le singe Joli-Cœur, et bientôt le petit Mattia. Le froid, la faim, la misère et la séparation éprouvent cruellement le garçon. Mais Rémi est courageux et garde espoir : il cherche sa véritable famille, celle qui l'a abandonné. Au fil de ses rencontres, il découvre l'injustice du monde, mais aussi l'amitié et la générosité. Ce roman d'Hector Malot, publié en 1878, a connu un immense succès populaire. Une grande histoire pleine d'émotions, qui parle d'abandon, de courage et de fidélité."
  },
  {
    id: "grant",
    titre: "Les Enfants du capitaine Grant",
    auteur: "verne",
    annee: "1868",
    cat: "P",
    niveau: 3,
    genre: "Roman d'aventures",
    tags: ["Aventure"],
    image: "assets/images/grant.webp",
    imageAlt: "Gravure d'Édouard Riou pour Les Enfants du capitaine Grant.",
    imageCredit: "Édouard Riou — domaine public",
    accroche: "Un message dans une bouteille, et une course autour du monde.",
    resume: "Lors d'une partie de pêche, Lord Glenarvan et son équipage capturent un requin dans le ventre duquel se trouve une bouteille contenant un message à demi effacé : il révèle qu'un certain capitaine Grant a fait naufrage quelque part sur la côte du Pacifique. Décidés à retrouver le disparu, Lord et Lady Glenarvan emmènent à bord de leur yacht, le Duncan, les deux enfants du capitaine, la jeune Mary et le petit Robert. Le voyage les conduit le long des côtes de l'Amérique du Sud, puis jusqu'en Australie, sur des terres hostiles. Ils affrontent des tempêtes, des bandits, de fausses pistes et des trahisons, sans jamais perdre espoir. Ce grand roman de Jules Verne, publié en 1868, mêle aventure, géographie et suspense. Une véritable course autour du monde pour retrouver un père disparu, portée par des personnages courageux et généreux."
  },

  /* ------------- II. LITTÉRATURE DE JEUNESSE CONTEMPORAINE ------------- */
  {
    id: "verte",
    titre: "Verte",
    auteur: "desplechin",
    annee: "1996",
    cat: "C",
    niveau: 1,
    genre: "Humour / fantastique",
    tags: ["Humour", "Fantastique / imaginaire", "École & famille"],
    image: "assets/images/verte.webp",
    imageAlt: "Couverture du livre « Verte ».",
    imageCredit: "Couverture de l'édition",
    accroche: "Née dans une famille de sorcières, Verte ne veut qu'une chose : être normale.",
    resume: "Verte a onze ans et vient d'une lignée de sorcières : sa mère, Ursule, et sa grand-mère, Anastabotte. Mais Verte, elle, rêve d'une vie tout à fait normale : aller à l'école, avoir des amis, et préférer la compagnie des garçons à la magie. Sa mère, qui a tout fait pour que sa fille ne devienne pas une sorcière comme les autres, ne sait plus comment s'y prendre. Elle confie alors Verte à Anastabotte, une grand-mère coquette et pleine de ressources, pour tenter de lui transmettre le don familial. Entre les leçons de magie, les disputes et les secrets de famille, Verte cherche sa propre voie : reconnaître son don sans renoncer à être elle-même. Ce roman de Marie Desplechin, publié en 1996, est drôle, tendre et malicieux. Il parle avec justesse de la différence, de l'héritage familial et du droit de choisir sa vie."
  },
  {
    id: "chatassassin",
    titre: "Journal d'un chat assassin",
    auteur: "annefine",
    annee: "1997 (éd. française)",
    cat: "C",
    niveau: 1,
    genre: "Humour",
    tags: ["Humour", "École & famille"],
    image: "assets/images/chatassassin.webp",
    imageAlt: "Couverture du livre « Journal d'un chat assassin ».",
    imageCredit: "Couverture de l'édition",
    accroche: "Le journal d'un chat qui n'a peur de rien — surtout pas de la vérité.",
    resume: "Tuffy est un chat domestique qui n'a pas la langue dans sa poche. Dans son journal, il raconte sa semaine avec un humour féroce et un mépris assumé pour les humains qui l'entourent. Chaque jour, il rapporte à la maison un « cadeau » : un oiseau, une souris… puis le lapin des voisins, ce qui déclenche la désapprobation de toute la famille. Quand on le croit coupable, Tuffy, imperturbable, trouve la situation parfaitement absurde et nous régale de ses commentaires mordants. Ce court roman d'Anne Fine, écrit comme le journal du chat, se moque des adultes et de leurs émotions avec un comique irrésistible. Facile à lire et malicieux, il donne aussi à réfléchir sur notre rapport aux animaux."
  },
  {
    id: "mouette",
    titre: "Histoire d'une mouette et du chat qui lui apprit à voler",
    auteur: "sepulveda",
    annee: "1996",
    cat: "C",
    niveau: 1,
    genre: "Aventure / solidarité",
    tags: ["Aventure", "Solidarité / amitié"],
    image: "assets/images/mouette.webp",
    imageAlt: "Couverture du livre « Histoire d'une mouette et du chat qui lui apprit à voler ».",
    imageCredit: "Couverture de l'édition",
    accroche: "Un chat promet à une mouette mourante d'apprendre à voler à son petit.",
    resume: "Dans le port de Hambourg, un gros chat noir nommé Zorbas mène une vie tranquille. Un jour, une mouette, Kengah, s'écrase sur son balcon, engluée dans le mazout d'une marée noire. Avant de mourir, elle arrache à Zorbas trois promesses : ne pas manger son œuf, veiller sur lui jusqu'à l'éclosion, et apprendre à voler à son petit. Pour un chat, la tâche est presque impossible. Aidé de ses amis chats du port, Zorbas veille sur l'œuf, puis sur la petite mouette Afortunada, et cherche par tous les moyens à lui apprendre l'art du vol. Entre humour et émotion, ce court roman de Luis Sepúlveda, publié en 1996, parle de solidarité, de différence et de la difficulté de tenir une promesse. C'est une magnifique leçon d'entraide et de respect de la parole donnée, qui touche petits et grands."
  },
  {
    id: "joker",
    titre: "Joker",
    auteur: "morgenstern",
    annee: "",
    cat: "C",
    niveau: 1,
    genre: "École / humour",
    tags: ["École & famille", "Humour"],
    image: "assets/images/joker.webp",
    imageAlt: "Couverture du livre « Joker ».",
    imageCredit: "Couverture de l'édition",
    accroche: "Et si votre maître vous donnait le droit de ne pas faire vos devoirs ?",
    resume: "Cette année, la classe de CM2 découvre un nouvel instituteur, Hubert Noël, un homme un peu âgé, pas commode et plutôt mystérieux. Dès le premier jour, il fait à chaque élève un cadeau surprenant : un jeu de vingt-cinq jokers. Un joker pour ne pas écouter, un pour rester au lit, un pour être en retard, un pour ne pas faire ses devoirs… De quoi rêver pour des enfants fatigués ! Mais attention : ces jokers ne sont pas une invitation à la paresse. Peu à peu, les élèves comprennent qu'ils doivent choisir quand les utiliser, et qu'à chaque liberté correspond une responsabilité. Constance et ses camarades découvrent alors une autre façon d'apprendre, fondée sur la confiance. Ce roman de Susie Morgenstern, drôle et tendre, raconte l'école à hauteur d'enfant et interroge avec finesse la liberté, le choix et la relation entre élèves et professeur."
  },
  {
    id: "hollandais",
    titre: "Le Hollandais sans peine",
    auteur: "murail",
    annee: "1989",
    cat: "C",
    niveau: 2,
    genre: "Humour",
    tags: ["Humour", "École & famille", "Solidarité / amitié"],
    image: "assets/images/hollandais.webp",
    imageAlt: "Couverture du livre « Le Hollandais sans peine ».",
    imageCredit: "Couverture de l'édition",
    accroche: "Deux enfants que tout sépare inventent une langue pour se comprendre.",
    resume: "Pour le père de Jean-Charles, les vacances dans un camping en Allemagne doivent aussi servir de séjour linguistique. Encouragé à se faire des amis, Jean-Charles se lie avec un garçon de son âge, un Hollandais. Problème : aucun des deux ne parle la langue de l'autre. Alors, à force d'imagination, les deux enfants finissent par inventer une langue bien à eux, que seuls eux comprennent. Ce petit roman de Marie-Aude Murail, publié en 1989, est très drôle et plein de finesse. Il raconte la rencontre de l'autre, la barrière de la langue et la naissance de l'amitié. Facile à lire, il montre avec humour que la communication passe aussi par l'envie de se comprendre. Une histoire tendre et malicieuse."
  },
  {
    id: "paysarbres",
    titre: "Voyage au pays des arbres",
    auteur: "leclezio",
    annee: "1978",
    cat: "C",
    niveau: 2,
    genre: "Imaginaire",
    tags: ["Fantastique / imaginaire", "Nature"],
    image: "assets/images/paysarbres.webp",
    imageAlt: "Couverture du livre « Voyage au pays des arbres ».",
    imageCredit: "Couverture de l'édition",
    accroche: "Et si les arbres se mettaient à parler ?",
    resume: "Un petit garçon s'ennuie. Pour tromper l'ennui, il se met à rêver qu'il part au plus profond de la forêt. Là, un vieux chêne majestueux et solennel lui adresse la parole, et de jeunes arbres l'invitent à leur fête. Le voilà plongé dans le pays des arbres, un monde étrange et merveilleux où la nature prend vie, où les végétaux ont une âme et une histoire. Ce voyage poétique et onirique invite à écouter le monde végétal, à observer les arbres avec un autre regard et à laisser libre cours à son imagination. Écrit par J. M. G. Le Clézio, prix Nobel de littérature 2008, ce texte bref et contemplatif est une invitation au rêve et au silence. Porté par de belles illustrations, il se lit lentement, comme une promenade. Un récit calme et lumineux, qui éveille la sensibilité à la nature."
  },
  {
    id: "samedisoir",
    titre: "Drôle de samedi soir !",
    auteur: "klotz",
    annee: "",
    cat: "C",
    niveau: 2,
    genre: "Humour",
    tags: ["Humour", "Enquête"],
    image: "assets/images/samedisoir.webp",
    imageAlt: "Couverture du livre « Drôle de samedi soir ! ».",
    imageCredit: "Couverture de l'édition",
    accroche: "Un samedi soir seul à la maison. Trois coups à la porte.",
    resume: "Ce recueil réunit trois nouvelles drôles et pleines de rebondissements. Dans la première, qui donne son titre au livre, Harp, dix ans, amateur de télévision et de poulet mayonnaise, se retrouve seul chez lui un samedi soir. Quand on sonne à la porte, il comprend qu'il n'est pas seul : il va devoir se débarrasser de quatre individus par la ruse, sans se fatiguer. Les deux autres nouvelles, « Rue de la chance » et « Le mois de mai de M. Dobichon », mettent en scène d'autres personnages hauts en couleur, entre héritage inattendu et jeux loufoques pour tromper l'ennui. Avec un humour pince-sans-rire et un vrai sens du suspense, Claude Klotz joue avec les situations et les personnages. Ce livre est une excellente porte d'entrée dans la nouvelle : des histoires courtes, efficaces et surprenantes, qui se lisent d'une traite."
  },
  {
    id: "chatparlait",
    titre: "Le Chat qui parlait malgré lui",
    auteur: "clauderoy",
    annee: "1982",
    cat: "C",
    niveau: 2,
    genre: "Humour / aventure",
    tags: ["Humour", "Aventure"],
    image: "assets/images/chatparlait.webp",
    imageAlt: "Couverture du livre « Le Chat qui parlait malgré lui ».",
    imageCredit: "Couverture de l'édition",
    accroche: "Un chat se met à parler. En prose, et même en vers.",
    resume: "Un beau matin, sans crier gare, Gaspard, le « Cher Ami Chat » de Thomas, se surprend en train de parler. Non seulement il parle, mais il s'exprime en prose, et même en vers ! Lui qui n'a jamais rien demandé se retrouve avec un don encombrant et un terrible secret à garder. Que faire de cette parole nouvelle ? Faut-il la révéler aux humains, au risque de bouleverser sa vie tranquille ? Doit-il s'en servir pour aider ceux qu'il aime ? Ce roman fantaisiste et malicieux, signé Claude Roy, joue avec le langage, les mots et l'imagination. Derrière l'humour et la fantaisie, il évoque avec délicatesse la relation entre un enfant et son animal, la fidélité et le poids d'un secret. Publié en 1982, ce classique de la littérature jeunesse est une fantaisie pleine de charme."
  },
  {
    id: "dindes",
    titre: "La Longue Marche des dindes",
    auteur: "karr",
    annee: "1998",
    cat: "C",
    niveau: 2,
    genre: "Aventure / société",
    tags: ["Aventure", "Nature", "Solidarité / amitié"],
    image: "assets/images/dindes.webp",
    imageAlt: "Couverture du livre « La Longue Marche des dindes ».",
    imageCredit: "Couverture de l'édition",
    accroche: "Mille dindes à conduire à pied : un défi fou.",
    resume: "Dans le Missouri de la fin du XIXe siècle, Simon Green, quinze ans, n'est pas un élève brillant : son institutrice, Miss Rogers, lui accorde son diplôme de CE1 surtout pour se débarrasser de lui. Mais Simon a une idée : dans le Missouri, une dinde ne vaut que quelques pièces, alors qu'à Denver, à mille kilomètres de là, elle peut rapporter une fortune. Le voilà lancé dans une affaire de convoyage de mille dindes, à laquelle personne ne croit. Avec l'aide de Miss Rogers et d'un charretier bourru, il traverse plaines et territoires hostiles, affrontant brigands, sauterelles et autres mésaventures. Ce roman d'aventures de Kathleen Karr, publié en 1998, mêle humour et histoire et dresse le portrait d'un garçon que l'on disait sans avenir. Une épopée attachante aux allures de western, où chacun finit par trouver sa place."
  },
  {
    id: "emile",
    titre: "Émile et les détectives",
    auteur: "kastner",
    annee: "1929",
    cat: "C",
    niveau: 2,
    genre: "Enquête / aventure",
    tags: ["Enquête", "Aventure", "Solidarité / amitié"],
    image: "assets/images/emile.webp",
    imageAlt: "Couverture du livre « Émile et les détectives ».",
    imageCredit: "Couverture de l'édition",
    accroche: "On a volé son argent dans le train ; tout Berlin traque le voleur.",
    resume: "Émile, un petit garçon sage, prend seul le train pour rejoindre sa grand-mère à Berlin. Pendant le voyage, un inconnu lui vole l'argent que sa mère, veuve et sans fortune, lui a confié. Furieux et honteux, Émile n'ose pas prévenir les adultes. Mais à la gare, il fait la connaissance d'une bande d'enfants qui décident de l'aider. Ensemble, ils organisent une véritable équipe de détectives : filatures, guets, messages codés, plan de la ville et mot de passe… Tout Berlin se met à traquer le voleur. Cette enquête collective devient une grande aventure pleine d'entraide et de solidarité. Écrit par Erich Kästner en 1929, ce classique allemand est drôle, généreux et plein de suspense. Il célèbre l'intelligence et la débrouillardise des enfants face au monde des adultes. Un modèle du roman d'enquête pour la jeunesse."
  },
  {
    id: "fifi",
    titre: "Fifi Brindacier",
    auteur: "lindgren",
    annee: "1945",
    cat: "C",
    niveau: 2,
    genre: "Aventure / humour",
    tags: ["Humour", "Aventure"],
    image: "assets/images/fifi.webp",
    imageAlt: "Couverture du livre « Fifi Brindacier ».",
    imageCredit: "Couverture de l'édition",
    accroche: "La petite fille la plus forte du monde.",
    resume: "Fifi Brindacier est la petite fille la plus forte du monde. Elle vit seule dans sa villa, la maison Villekulla, avec un cheval, un singe nommé Monsieur Nilsson et un coffre plein de pièces d'or. Sans parents pour lui imposer des règles, elle fait tout à sa façon, et rien ne l'impressionne : ni les voleurs, ni les policiers, ni les adultes qui voudraient la placer à l'orphelinat. Avec ses voisins Tommy et Annika, elle invente des jeux extraordinaires, affronte des bandits, se moque des conventions et bouscule joyeusement l'ordre établi. Libres, drôles et pleines d'énergie, ses aventures donnent envie de rire et de rêver. Créée par la Suédoise Astrid Lindgren en 1945, Fifi Brindacier est devenue l'une des héroïnes les plus aimées de la littérature jeunesse du monde entier."
  },
  {
    id: "minuitcinq",
    titre: "Minuit-Cinq",
    auteur: "ferdjoukh",
    annee: "",
    cat: "C",
    niveau: 2,
    genre: "Aventure",
    tags: ["Aventure", "Enquête"],
    image: "assets/images/minuitcinq.webp",
    imageAlt: "Couverture du livre « Minuit-Cinq ».",
    imageCredit: "Couverture de l'édition",
    accroche: "À Prague, trois enfants sans rien se lancent sur la piste d'un collier volé.",
    resume: "À Prague, en plein hiver, trois enfants se débrouillent comme ils peuvent. Il y a Minuit-Cinq, dix ans, qui a si bien oublié son vrai prénom, Antonin, que tout le monde l'appelle ainsi ; sa sœur Bretelle, pleine de ressources ; et leur meilleur ami Emil. Sans argent, ils cherchent de quoi manger et un endroit où se réchauffer quand le vent glacial balaie la vieille ville. Mais voilà qu'un événement agite tout le quartier : le collier de la princesse Daniela Danilova a disparu, et une belle récompense est promise à celui ou celle qui le retrouvera. Nos trois vagabonds décident alors de mener l'enquête. Ce roman vif et chaleureux de Malika Ferdjoukh mêle aventure, mystère, humour et amitié. Il fait vivre une ville de légende, ses ruelles et ses secrets, avec des personnages attachants et débrouillards."
  },
  {
    id: "pressées",
    titre: "Nouvelles histoires pressées",
    auteur: "friot",
    annee: "",
    cat: "C",
    niveau: 2,
    genre: "Récit",
    tags: ["Récits & nouvelles", "Humour"],
    image: "assets/images/pressees.webp",
    imageAlt: "Couverture du livre « Nouvelles histoires pressées ».",
    imageCredit: "Couverture de l'édition",
    accroche: "Des histoires très courtes, drôles et surprenantes, à dévorer une par jour.",
    resume: "Ce recueil rassemble des histoires très courtes, à lire en quelques minutes : drôles, tendres, surprenantes, poétiques ou un peu inquiétantes. Bernard Friot y joue avec les mots, les situations du quotidien et l'imagination : un enfant qui parle avec un arbre, une maîtresse qui disparaît, un père qui se transforme, des objets qui prennent vie… Chaque texte est un petit monde à part entière, souvent avec une chute inattendue, et laisse parfois au lecteur le soin d'imaginer la suite. Ces « histoires pressées », devenues un classique des écoles, sont parfaites pour prendre goût à la lecture sans se lancer dans un long roman : on peut les lire dans l'ordre, au hasard, ou une par jour. Un feu d'artifice d'idées, d'humour et de fantaisie."
  }
];

/* Les 5 étapes du carnet de lecteur (feuille remise par l'enseignant).
   statut de chaque point : "libre" (si je veux et comme je veux) ou
   "obligatoire" (tout le reste, y compris « au moins une proposition »). */
const CARNET = [
  {
    titre: "Décoration et appropriation du carnet",
    texte: "Je personnalise mon carnet de lecteur.",
    points: [
      { texte: "Je peux mettre des autocollants.", statut: "libre" },
      { texte: "Je peux faire un dessin illustrant le livre ou reproduire une illustration du livre.", statut: "libre" },
      { texte: "Je peux faire des collages, des pliages ou du coloriage.", statut: "libre" },
      { texte: "Je peux imaginer et réaliser le dessin d'une scène qui m'a beaucoup plu.", statut: "libre" }
    ]
  },
  {
    titre: "Présentation du livre",
    texte: "Je présente le livre que j'ai lu.",
    points: [
      { texte: "Je peux coller une photo de la couverture du livre, imprimer sa couverture ou la reproduire sous forme de dessin.", statut: "libre" },
      { texte: "J'indique la date de parution et le nom de la maison d'édition.", statut: "obligatoire" },
      { texte: "J'indique le nombre de pages et le temps que j'ai mis pour le lire.", statut: "obligatoire" }
    ]
  },
  {
    titre: "Présentation de l'auteur",
    texte: "Je présente l'auteur du livre.",
    points: [
      { texte: "J'indique où et quand il est né.", statut: "obligatoire" },
      { texte: "J'indique, lorsqu'elles sont connues, ses dates de naissance et de mort.", statut: "obligatoire" },
      { texte: "Je présente brièvement sa bibliographie, en citant quelques-unes de ses œuvres.", statut: "obligatoire" }
    ]
  },
  {
    titre: "Narration",
    texte: "Je dois réaliser au moins une des propositions suivantes, sous la forme d'un texte d'au moins 10 phrases.",
    points: [
      { texte: "Je décris les personnages principaux ou ceux que j'ai le plus aimés.", statut: "obligatoire" },
      { texte: "Je fais un résumé du livre.", statut: "obligatoire" },
      { texte: "Je décris brièvement le ou les passages qui m'ont marqué(e) et j'explique pourquoi.", statut: "obligatoire" }
    ]
  },
  {
    titre: "Mon avis",
    texte: "Je réalise au moins une des propositions suivantes, sous la forme d'un texte d'au moins 10 phrases.",
    points: [
      { texte: "S'il s'agit d'un album ou d'une BD, je donne mon avis sur les illustrations.", statut: "obligatoire" },
      { texte: "Je dis ce qui m'a plu dans le livre et j'explique pourquoi cela m'a plu.", statut: "obligatoire" },
      { texte: "Je donne mon avis sur le format, la couverture et la présentation générale.", statut: "obligatoire" }
    ]
  }
];

/* Colonnes du tableau de suivi « Mes 7 livres de l'année » (7 lignes vides). */
const SUIVI_COLS = ["Livre choisi", "Niveau", "Commencé le", "Terminé le", "Carnet fait"];

/* Fiche de lecture vierge (section 7), proposée par un parent comme brouillon
   pour préparer le carnet de lecteur. Reprend les champs exigés par CARNET.
   type de bloc : "lignes" (zone réglée à écrire) ou "dessin" (cadre à illustrer).
   col : colonne de la fiche ("gauche" ou "droite") ; grow : le bloc s'étire. */
const FICHE_LECTURE = {
  identification: [
    { label: "Titre du livre", wide: true },
    { label: "Auteur" },
    { label: "Éditeur" },
    { label: "Date de parution" },
    { label: "Nombre de pages" },
    { label: "Temps de lecture" },
    { label: "Niveau", cases: [1, 2, 3] }
  ],
  blocs: [
    {
      titre: "Je présente l'auteur",
      texte: "Où et quand est-il né ? Quelles œuvres a-t-il écrites ?",
      type: "lignes",
      lignes: 3,
      col: "gauche"
    },
    {
      titre: "J'illustre",
      texte: "Un dessin, un collage ou une scène du livre.",
      type: "dessin",
      col: "gauche",
      grow: true
    },
    {
      titre: "Je raconte l'histoire",
      texte: "Au moins 10 phrases : les personnages, le résumé ou un passage qui m'a marqué(e).",
      type: "lignes",
      lignes: 9,
      col: "droite"
    },
    {
      titre: "Je donne mon avis",
      texte: "Au moins 10 phrases : ce qui m'a plu, les illustrations, la présentation du livre.",
      type: "lignes",
      lignes: 9,
      col: "droite"
    }
  ]
};
