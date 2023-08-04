export const projectsData = [
  {
    imgName: "magicspoonclone.png",
    name: "MagicSpoon Clone",
    madeAt: "",
    description:
      "React version of magicspoon.com website, so it works fast and reliable without constant reloads.",
    date: 2023,
    features: [
      "Responsive UI",
      "Shopping Cart saved to localstorage",
      "Fast and reliable shop page with paypal payment",
      "Forms for information and shipping with validation",
      "Content carousels for smaller screens",
    ],
    technologies: [
      "React",
      "Redux",
      "Tailwind",
      "React Router",
      "MaterialUi",
      "Formik",
      "Yup",
      "Paypal",
    ],
    link: "https://magic-spoon-clone.vercel.app/",
    github: "https://github.com/Jakub-Prus/magic-spoon-clone/tree/main",
  },
  {
    imgName: "farbki.png",
    name: "Walksee Decor",
    madeAt: "Walksee",
    description:
      "Painting the walls on every 360 panorama image. This is possible thanks to 4 versions of painting, a color palette and the possibility of separating the walls to use different colors. I created most of the features, api`s and data processing on backend. Implemented CNN models using tensorflow.js. Unfortunately, the project was discontinued for time being and the models did not manage to be trained on the target resolution.",
    date: 2023,
    features: [
      "4 options to paint: magic wand library, sam model, cnn models for whole image and partially",
      "Change of resolution for cnn and sam models",
      "Color palette and multiple separate walls",
      "Undo, delete, save options",
      "Data processing on backend and connect via api with custom data compressing",
    ],
    technologies: [
      "Javascript",
      "Tensorflow.js",
      "Node.js",
      "Express.js",
      "RESTful APIs",
    ],
    link: "https://94.152.214.102:8094/farbki-1c079caca5834baf83a7a68335cd6d07.html",
  },
  {
    imgName: "",
    name: "SVM Model evaluating photo blur",
    madeAt: "Walksee",
    description: "SVM Model created for evaluating blur on each photo taken.",
    date: 2023,
    features: ["Fast evaluation", "Trained on indoor photos"],
    technologies: ["Javascript", "Libsvm.js", "OpenCV.js"],
  },
  {
    imgName: "helpWalksee.png",
    name: "Help Walksee",
    madeAt: "Walksee",
    description:
      "Help page created for Walksee products. I designed and coded simple, minimalistic and scalable version of the website.",
    date: 2023,
    features: [
      "Search for articles",
      "Smooth transitions for menu",
      "Responsible design",
    ],
    technologies: ["HTML5", "CSS3", "Javascript"],
    link: "https://devhelp.walksee.pl/",
  },
];


