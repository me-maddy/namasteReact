const data = [
  {
    info: {
      id: "79628",
      name: "Bhawna Sweets",
      cloudinaryImageId: "ij5lrqmlvgwr6wz8iawj",
      locality: "Madiya Katra",
      areaName: "Lohamandi",
      costForTwo: "₹200 for two",
      cuisines: ["Sweets", "Snacks", "Bakery"],
      avgRating: 3.7,
      avgRatingString: "3.7",
      deliveryTime: 25,
      imageId: "v1695133679/badges/Pure_Veg111.png",
      description: "pureveg",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/bhawna-sweets-madiya-katra-lohamandi-agra-79628",
    },
  },
  {
    info: {
      id: "74826",
      name: "Subway",
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      locality: "Khandari",
      areaName: "Church Road",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 3.8,
      avgRatingString: "3.8",
      deliveryTime: 25,
    },
  },
  {
    info: {
      id: "361098",
      name: "Pure Veg Meals by Lunchbox",
      cloudinaryImageId: "qiyaa6kqahc66capmkyd",
      locality: "Nehru Nagar",
      areaName: "Civil Lines",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "North Indian", "Desserts", "Beverages"],
      avgRating: 4.3,
      veg: true,
      deliveryTime: 33,
      imageId: "v1695133679/badges/Pure_Veg111.png",
      description: "pureveg",
      isOpen: true,
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pure-veg-meals-by-lunchbox-nehru-nagar-civil-lines-agra-361098",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "566482",
      name: "Faasos Signature Wraps & Rolls",
      cloudinaryImageId: "c583ca6ce40b426797a78ae2ac91f2ec",
      locality: "Nehru Nagar",
      areaName: "Civil Lines",
      costForTwo: "₹350 for two",
      cuisines: [
        "Fast Food",
        "Snacks",
        "North Indian",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      deliveryTime: 32,
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/faasos-signature-wraps-and-rolls-nehru-nagar-civil-lines-agra-566482",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "254105",
      name: "McDonald's",
      cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
      locality: "Civil Lines",
      areaName: "Civil Lines",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4,
      parentId: "630",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
      deliveryTime: 24,
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-civil-lines-agra-254105",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "75401",
      name: "Bikanervala",
      cloudinaryImageId: "qnfib2ogu14wcmxjuua8",
      locality: "Tajganj",
      areaName: "Tajganj",
      costForTwo: "₹400 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "South Indian",
        "Snacks",
        "Street Food",
        "Desserts",
        "Bakery",
        "Beverages",
      ],
      avgRating: 4.1,
      veg: true,

      deliveryTime: 30,
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/bikanervala-tajganj-agra-75401",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "89136",
      name: "Cafe Coffee Day",
      cloudinaryImageId: "yf5jsyj14ngofifztopb",
      locality: "Wazirpura Rd",
      areaName: "Civil Lines",
      costForTwo: "₹300 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Burgers",
        "Ice Cream",
        "Bakery",
        "Fast Food",
      ],
      avgRating: 3.7,
      deliveryTime: 26,
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/cafe-coffee-day-wazirpura-rd-civil-lines-agra-89136",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "361094",
      name: "Sweet Truth - Cake and Desserts",
      cloudinaryImageId: "4a3b48488e3aa9bda13efd8cfcd95284",
      locality: "Nehru Nagar",
      areaName: "Civil Lines",
      costForTwo: "₹450 for two",
      cuisines: ["Snacks", "Bakery", "Desserts", "Beverages"],
      avgRating: 4.2,

      deliveryTime: 25,

      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-nehru-nagar-civil-lines-agra-361094",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "439068",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Nehru Nagar",
      areaName: "Civil Lines",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.5,
      veg: true,
      deliveryTime: 33,
      imageId: "v1695133679/badges/Pure_Veg111.png",
      description: "pureveg",
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹1000",
        discountTag: "FLAT DEAL",
      },
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-nehru-nagar-civil-lines-agra-439068",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "361095",
      name: "LunchBox - Meals and Thalis",
      cloudinaryImageId: "ehuumajovdh0qu396khx",
      locality: "Nehru Nagar",
      areaName: "Civil Lines",
      costForTwo: "₹200 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.2,
      deliveryTime: 34,
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-nehru-nagar-civil-lines-agra-361095",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "361090",
      name: "Faasos - Wraps & Rolls",
      cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
      locality: "Nehru Nagar",
      areaName: "Civil Lines",
      costForTwo: "₹200 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "North Indian",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      deliveryTime: 33,
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-nehru-nagar-civil-lines-agra-361090",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "289869",
      name: "Pushpak Misthan Bhandar",
      cloudinaryImageId: "xxolr2vqymwj3ukfq6nx",
      locality: "Maithan Gali Road",
      areaName: "Mantola",
      costForTwo: "₹200 for two",
      cuisines: ["Sweets", "Street Food"],
      avgRating: 4.1,
      veg: true,
      deliveryTime: 22,
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pushpak-misthan-bhandar-maithan-gali-road-mantola-agra-289869",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "137924",
      name: "Raj Rasoi Sweets & Restaurant",
      cloudinaryImageId: "nwr8wksyyakepe4prpjy",
      locality: "Sanjay Place",
      areaName: "Sanjay Place",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "North Indian", "Snacks", "Sweets"],
      avgRating: 4.1,
      veg: true,
      deliveryTime: 23,
      imageId: "v1695133679/badges/Pure_Veg111.png",
      description: "pureveg",
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/raj-rasoi-sweets-and-restaurant-sanjay-place-agra-137924",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "421647",
      name: "Deviram Food Circle",
      cloudinaryImageId: "isgcj4eauamm0bfinnaz",
      locality: "Sikandra Bodla",
      areaName: "Dayal Bagh",
      costForTwo: "₹300 for two",
      cuisines: ["Sweets", "Snacks", "Continental", "North Indian"],
      avgRating: 4,
      veg: true,
      deliveryTime: 28,
      imageId: "v1695133679/badges/Pure_Veg111.png",
      description: "pureveg",
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/deviram-food-circle-sikandra-bodla-dayal-bagh-agra-421647",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "280486",
      name: "Cakewala",
      cloudinaryImageId: "5d537cc4b3d7a849fa7e7e29cee19565",
      locality: "Idgah Colony",
      areaName: "Agra Cantt",
      costForTwo: "₹500 for two",
      cuisines: ["Bakery"],
      avgRating: 3.8,
      veg: true,
      deliveryTime: 57,
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/cakewala-idgah-colony-agra-cantt-agra-280486",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "74562",
      name: "Bhagat Halwai (Dayal Bagh)",
      cloudinaryImageId: "crfkxcc5jbvdgmxioey2",
      locality: "Dayal Bagh",
      areaName: "Dayal Bagh",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "North Indian", "Sweets", "South Indian", "Chaat"],
      avgRating: 4,
      veg: true,
      deliveryTime: 30,
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/bhagat-halwai-dayal-bagh-dayal-bagh-agra-74562",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "102953",
      name: "GMB - Gopika Sweets & Restaurant",
      cloudinaryImageId: "l6iqlfn5uwesenzcm0xk",
      locality: "Jeoni Mandi",
      areaName: "Jeoni Mandi",
      costForTwo: "₹300 for two",
      cuisines: ["Sweets", "North Indian", "Snacks"],
      avgRating: 4.3,
      veg: true,
      deliveryTime: 31,
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/gmb-gopika-sweets-and-restaurant-jeoni-mandi-agra-102953",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "202097",
      name: "New Pizza King",
      cloudinaryImageId: "xdp9sbt5mwrsfz4wile7",
      locality: "Saket Colony Road",
      areaName: "Shahganj",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Italian"],
      avgRating: 4.1,
      deliveryTime: 33,
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/new-pizza-king-saket-colony-road-shahganj-agra-202097",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "362058",
      name: "Bhagat Halwai",
      cloudinaryImageId: "gz66njxgive038qw5l4c",
      locality: "Civil Lines",
      areaName: "Khandari",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "Desserts"],
      avgRating: 4.3,
      veg: true,
      deliveryTime: 32,
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/bhagat-halwai-civil-lines-khandari-agra-362058",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "265520",
      name: "Costa Coffee",
      cloudinaryImageId: "asgla4pa1kqwn643gjz4",
      locality: "Amar Yatri Niwas Hotel",
      areaName: "Tajganj",
      costForTwo: "₹450 for two",
      cuisines: ["Beverages"],
      avgRating: 4.1,
      deliveryTime: 28,
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/costa-coffee-amar-yatri-niwas-hotel-tajganj-agra-265520",
      type: "WEBLINK",
    },
  },
];
