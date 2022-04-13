const SHOP_DATA = [
  {
    title: 'Dogs',
    items: [
      {
        id: 1,
        name: 'Dog Food - Wet',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3347923-center-1',
        price: 5,
        description: 'Wet Dog food that comes from a can.',
        tags: [
          'food', 'dog', 'wet'
        ]
      },
      {
        id: 2,
        name: 'Dog Food - Dry',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3354787-center-1',
        price: 50,
        description: 'Dry Dog Food that is packaged and easy for consumption and placement.',
        tags: [
          'food', 'dog', 'dry'
        ]
      },
      {
          id: 3,
          name: 'Dog Food - Veterinary',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2684418-center-1',
          price: 105,
          description: 'Dog Food that is recomended and prescribed by vets for your dogs health.',
          tags: [
            'food', 'dog', 'veterinary'
          ]
      },
      {
          id: 4,
          name: 'Dog Food - Puppy',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2992437-center-1',
          price: 60,
          description: 'Dog Food that is safer for young puppies to aid in health and growth.',
          tags: [
            'food', 'dog', 'puppy'
          ]
      },
      {
          id: 5,
          name: 'Dog Food - Frozen',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_petco-pick-badge,fl_relative,w_0.3,g_north_west,e_sharpen/2889464-center-1',
          price: 35,
          description: 'Dog Food that is packaged and frozen to last more time.',
          tags: [
            'food', 'dog', 'frozen'
          ]
      },
      {
          id: 6,
          name: 'Dog Treat - Soft',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_onlyatpetco_badge,fl_relative,w_0.15,g_north_west,e_sharpen/2924469-center-1',
          price: 15,
          description: 'Treats for your dog that are softer and easier to chew.',
          tags: [
            'food', 'dog', 'treat', 'soft'
          ]
      },
      {
          id: 7,
          name: 'Dog Treat - Crunch',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_onlyatpetco_badge,fl_relative,w_0.15,g_north_west,e_sharpen/3037618-center-1',
          price: 13,
          description: 'Treats for your dog that have more of a bite to them. Still just as good.',
          tags: [
            'food', 'dog', 'treat', 'crunch'
          ]
      },
      {
          id: 8,
          name: 'Dog Treat - Bone',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3008729-center-1',
          price: 13,
          description: 'Treats for your dog that come in the shapes of bones. Common for most treats for dogs.',
          tags: [
            'food', 'dog', 'treat', 'bone'
          ]
      },
      {
          id: 9,
          name: 'Dog Treat - Jerky',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3322443-center-1',
          price: 30,
          description: 'Treats for dogs that are mainly dried meat pieces. Really like regular jerky but for dogs.',
          tags: [
            'food', 'dog', 'treat', 'jerky'
          ]
      },
      {
          id: 10,
          name: 'Dog Treat - Dental',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_best-seller-badge,fl_relative,w_0.2,g_north_west,e_sharpen/1537660-center-1',
          price: 35,
          description: 'Dog treats that are meant to aid and improve dogs dental health.',
          tags: [
            'food', 'dog', 'treat', 'dental'
          ]
      },
      {
          id: 11,
          name: 'Dog Treat - Training',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/1352288-center-1',
          price: 16,
          description: 'Dog treats that are to be given in aid for teaching your dog new things and meant as a reward for completing them.',
          tags: [
            'food', 'dog', 'treat', 'training'
          ]
      },
      {
          id: 12,
          name: 'Dog Treat - Pill',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3224131-center-1',
          price: 6,
          description: 'Dog treats that are used to hide medication that your dog may not want to take or has trouble taking.',
          tags: [
            'food', 'dog', 'treat', 'pill'
          ]
      },
      {
          id: 13,
          name: 'Dog Toy - Dragon Plush',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/1349074-center-5',
          price: 20,
          description: 'A regular plush that is a dragon that your dog will enjoy playing around with.',
          tags: [
            'toy', 'dog', 'blue', 'plush', 'dragon', 'supplies'
          ]
      },
      {
          id: 14,
          name: 'Dog Toy - Chew Stick',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3426269-center-1',
          price: 9,
          description: 'A toy that your dog will enjoy chewing on and throwing around maybe.',
          tags: [
            'toy', 'dog', 'red', 'chew', 'durable', 'supplies'
          ]
      },
      {
          id: 15,
          name: 'Dog Bed - Camo',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3353135-center-1',
          price: 90,
          description: 'A comfortable bed that your dog will enjoy that has a camo coloring to it.',
          tags: [
            'bed', 'dog', 'camo', 'durable', 'supplies'
          ]
      },
      {
          id: 16,
          name: 'Dog Bed - Black',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3021392-center-2',
          price: 60,
          description: 'Another comfortable bed that your dog will enjoy sleeping or resting in colored black.',
          tags: [
            'bed', 'dog', 'black', 'durable', 'supplies'
          ]
      },
      {
          id: 17,
          name: 'Dog Bowl - Marble',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3162785-center-3',
          price: 5,
          description: 'A regular bowl that your dog could eat food from. Is not actually made out of marble. Just colored.',
          tags: [
            'bowl', 'dog', 'marble', 'durable', 'supplies'
          ]
      },
      {
          id: 18,
          name: 'Dog Feeder - White',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/3163016-center-1',
          price: 10,
          description: 'An item used to help regulate your dogs eating to help limit them if they are on a diet or to aid them in eating.',
          tags: [
            'feeder', 'dog', 'white', 'durable', 'supplies'
          ]
      },
      {
          id: 19,
          name: 'Dog Carrier - Black',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_best-seller-badge,fl_relative,w_0.2,g_north_west,e_sharpen/77046-center-1',
          price: 33,
          description: 'A travel item for your dog that they can stay in allowing you to take them places.',
          tags: [
            'carrier', 'dog', 'black', 'durable', 'supplies', 'travel'
          ]
      },
      {
          id: 20,
          name: 'Dog Health - Tablets',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3271949-center-1',
          price: 15,
          description: 'Tablets meant to either aid in dogs health or to take for sickeness. Can be prescribed by vet.',
          tags: [
            'health', 'dog', 'medicine', 'tablets'
          ]
      },
      {
          id: 21,
          name: 'Dog Health - Calming Chews',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_best-seller-badge,fl_relative,w_0.2,g_north_west,e_sharpen/2305596-center-1',
          price: 14,
          description: 'Soft chews meant to help calm dogs down from either anxiety or overexcitedness.',
          tags: [
            'health', 'dog', 'medicine', 'chews', 'calm'
          ]
      },
      {
          id: 22,
          name: 'Dog Health - Flea Treatment',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/966533-center-1',
          price: 40,
          description: 'Aid dogs suffering from fleas and ticks with treatment that gets rid of the fleas.',
          tags: [
            'health', 'dog', 'medicine', 'flea', 'tick', 'treatment'
          ]
      },
      {
          id: 23,
          name: 'Dog Grooming - deShedder',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2882529-Center-1',
          price: 32,
          description: 'Grooming tool meant to help dogs get rid of extra shedding hair.',
          tags: [
            'grooming', 'dog', 'supplies', 'deshedder'
          ]
      },
      {
          id: 24,
          name: 'Dog Clothes - Hoodie',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/3472839-center-5',
          price: 18,
          description: 'A small stylish hoodie that your dog can wear to keep warm and look good.',
          tags: [
            'clothes', 'dog', 'supplies', 'green', 'hoodie'
          ]
      },
      {
          id: 25,
          name: 'Dog Cleaning - Waste Bags',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/3184861-center-1',
          price: 5,
          description: 'Waste bags that can help to seal odors for whatever your dog leaves behind to clean up.',
          tags: [
            'cleaning', 'dog', 'supplies', 'waste', 'blue', 'grey'
          ]
      },
      {
          id: 26,
          name: 'Dog Collar - Olive',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/3381187-center-10',
          price: 17,
          description: 'A regular dog collar that your dog can wear. Can even add tags and other things.',
          tags: [
            'collar', 'dog', 'supplies', 'olive'
          ]
      }
    ]
  },
  {
    title: 'Cats',
    items: [
      {
        id: 27,
        name: 'Cat Food - Wet',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3031646-center-1',
        price: 3,
        description: 'Cat food that is wet and in a can. Meant for easier chewing and eating.',
        tags: [
          'food', 'cat', 'wet'
        ]
      },
      {
        id: 28,
        name: 'Cat Food - Dry',
        imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3328378-center-1',
        price: 14,
        description: 'Cat food that is regular crunched up bits of food. Easier for packaging and storage.',
        tags: [
          'food', 'cat', 'dry'
        ]
      },
      {
          id: 29,
          name: 'Cat Food - Veterinary',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2195032-center-1',
          price: 60,
          description: 'Cat food that is prescribed and recommended by vets to aid in your cats health.',
          tags: [
            'food', 'cat', 'veterinary'
          ]
      },
      {
          id: 30,
          name: 'Cat Food - Kitten',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3080481-center-1',
          price: 19,
          description: 'Cat food that is safer for kittens to eat and can aid in their health and growth.',
          tags: [
            'food', 'cat', 'kitten'
          ]
      },
      {
          id: 31,
          name: 'Cat Treats - Soft',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2160016-center-1',
          price: 5,
          description: 'Treats for your cat that are soft and easy to chew.',
          tags: [
            'food', 'cat', 'treats', 'soft'
          ]
      },
      {
          id: 32,
          name: 'Cat Treats - Crunchy',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3349857-center-1',
          price: 15,
          description: 'Treats that are for your cat that are crunchy. For those cats that prefer these over soft treats.',
          tags: [
            'food', 'cat', 'treats', 'crunchy'
          ]
      },
      {
          id: 33,
          name: 'Cat Treats - Catnip',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2243057-Center-1',
          price: 3,
          description: 'Catnip for your cats. They will go crazy for this stuff. Will probably roll around for a bit.',
          tags: [
            'food', 'cat', 'treats', 'catnip'
          ]
      },
      {
          id: 34,
          name: 'Cat Treats - Dental',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3367203-center-1',
          price: 6,
          description: 'Treats for your cat that is meant to aid them in dental health and improve teeth.',
          tags: [
            'food', 'cat', 'treats', 'dental'
          ]
      },
      {
          id: 35,
          name: 'Cat Treats - Pill',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3108105-center-1',
          price: 10,
          description: 'Cat treats meant to hide pills or other medications your cat may not want to take.',
          tags: [
            'food', 'cat', 'treats', 'pill'
          ]
      },
      {
          id: 36,
          name: 'Cat Toy - Plush Lamb',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_petco-new-badge,fl_relative,w_0.12,g_north_west,e_sharpen/3482164-center-2',
          price: 10,
          description: 'A simple plush of a lamb that your cat will enjoy playing around with.',
          tags: [
            'toy', 'cat', 'plush', 'catnip', 'lamb', 'white', 'supplies'
          ]
      },
      {
          id: 37,
          name: 'Cat Toy - Laser Light',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2924573-center-2',
          price: 24,
          description: 'A laser that your cat will continuously chase after. They really do enjoy it.',
          tags: [
            'toy', 'cat', 'laser', 'supplies', 'white'
          ]
      },
      {
          id: 38,
          name: 'Cat Bed - Pink',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3146380-center-1',
          price: 30,
          description: 'A soft pink bed that your cat will enjoy sleeping in.',
          tags: [
            'bed', 'cat', 'supplies', 'durable', 'pink'
          ]
      },
      {
          id: 39,
          name: 'Cat Bed - Grey',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/2669091-center-1',
          price: 35,
          description: 'Another bed that is also very soft and comfortable. This one is grey.',
          tags: [
            'bed', 'cat', 'supplies', 'durable', 'grey'
          ]
      },
      {
          id: 40,
          name: 'Cat Bowl - Pink',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2699505-center-1',
          price: 3,
          description: 'A nice durable bowl that your cat can eat out of. This one is pink.',
          tags: [
            'bowl', 'cat', 'supplies', 'durable', 'pink'
          ]
      },
      {
          id: 41,
          name: 'Cat Feeder - White',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/402966-center-1',
          price: 55,
          description: 'An item that can be used to help regulate your cats diet by giving specific food intakes. This one is white.',
          tags: [
            'feeder', 'cat', 'supplies', 'durable', 'white'
          ]
      },
      {
          id: 42,
          name: 'Cat Litter - Teal Box',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_best-seller-badge,fl_relative,w_0.2,g_north_west,e_sharpen/2847539-center-1',
          price: 24,
          description: 'Box meant to hold cat litter so that your cats can go do their business. Clean regularly. Cat litter not included.',
          tags: [
            'litter', 'cat', 'supplies', 'durable', 'teal', 'box'
          ]
      },
      {
          id: 43,
          name: 'Cat Tree - Scratcher',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_best-seller-badge,fl_relative,w_0.2,g_north_west,e_sharpen/2890385-center-1',
          price: 128,
          description: 'Towering object that cats will enjoy to climb up on and works as a scratching post for them.',
          tags: [
            'tree', 'cat', 'supplies', 'durable', 'scratcher', 'grey'
          ]
      },
      {
          id: 44,
          name: 'Cat Carrier - Blue',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2956639-center-1',
          price: 30,
          description: 'Travel item that you can use to take your cat to places so they can stay in it.',
          tags: [
            'carrier', 'cat', 'supplies', 'durable', 'blue', 'travel'
          ]
      },
      {
          id: 45,
          name: 'Cat Health - Chews',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/2370267-center-1',
          price: 11,
          description: 'Chews that aid in cat health. Can be prescribed and recomended by vets based on cats needs.',
          tags: [
            'health', 'cat', 'medicine', 'chews'
          ]
      },
      {
          id: 46,
          name: 'Cat Health - Flea Treatment',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/2254717-center-1',
          price: 60,
          description: 'Treatment to help cats suffering from fleas and ticks.',
          tags: [
            'health', 'cat', 'medicine', 'flea', 'tick', 'treatment'
          ]
      },
      {
          id: 48,
          name: 'Cat Grooming - Nail Clippers',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/2370187-center-2',
          price: 8,
          description: 'Grooming tool meant to clip cats nails when needed.',
          tags: [
            'grooming', 'cat', 'supplies', 'clippers'
          ]
      },
      {
          id: 49,
          name: 'Cat Clothes - Striped Sweater',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3473250-center-3',
          price: 15,
          description: 'Small striped sweater that your cat can wear to keep warm and look good. Best time to wear is all the time.',
          tags: [
            'clothes', 'cat', 'supplies', 'sweater', 'striped', 'blue', 'white'
          ]
      },
      {
          id: 50,
          name: 'Cat Cleaning - Litter Deodorizer',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/1154710-center-1',
          price: 4,
          description: 'Helps to remove bad stench from litter after cat does its business.',
          tags: [
            'cleaning', 'cat', 'supplies', 'litter', 'deodorizer'
          ]
      },
      {
          id: 51,
          name: 'Cat Collar - Yellow',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3489243-center-1',
          price: 19,
          description: 'A regular collar that your cat can wear. Can have tags or other things. This one is yellow.',
          tags: [
            'collar', 'cat', 'supplies', 'yellow'
          ]
      }
    ]
  },
  {
      title: 'Fish',
      items: [
        {
          id: 52,
          name: 'Fish Food - Frozen',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/1564030-center-5',
          price: 30,
          description: 'Fish food that is kept frozen. Usually kept as square packets that are still dropped in the water.',
          tags: [
            'food', 'fish', 'frozen'
          ]
        },
        {
          id: 53,
          name: 'Fish Food - Saltwater',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3008631-center-1',
          price: 12,
          description: 'Fish food specifically meant for saltwater fish. Please read the label carefully and make sure you have the right one.',
          tags: [
            'food', 'fish', 'saltwater'
          ]
        },
        {
          id: 54,
          name: 'Fish Food - Freshwater',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/110124-center-1',
          price: 6,
          description: 'Fish food specifically meant for freshwater fish. Please read the label carefully and make sure you have the right one.',
          tags: [
            'food', 'fish', 'freshwater'
          ]
        },
        {
          id: 55,
          name: 'Fish Aquarium - Tank',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/170968-center-1',
          price: 100,
          description: 'Regular sized fish tank that you can keep your fish in. Decor and other supplies sold seperately.',
          tags: [
            'aquarium', 'fish', 'tank', 'supplies'
          ]
        },
        {
          id: 56,
          name: 'Fish Health - Parasite Treatment',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2728468-center-1',
          price: 7,
          description: 'Treatment to help fish kill off any parasites that are hurting their body.',
          tags: [
            'health', 'fish', 'treatment', 'medicine', 'parasite'
          ]
        },
        {
          id: 57,
          name: 'Fish Health - Bacterial Remedy',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/2728361-center-1',
          price: 15,
          description: 'Remedy to help fish suffering from any fungal or bacterial issues.',
          tags: [
            'health', 'fish', 'medicine', 'remedy', 'bacterial', 'fungal'
          ]
        },
        {
          id: 58,
          name: 'Fish Decor - Tree',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2427315-center-1',
          price: 35,
          description: 'Simple fish aquarium decoration that is of a tree. They will enjoy swimming around this.',
          tags: [
            'decor', 'fish', 'supplies', 'tree'
          ]
        },
        {
          id: 59,
          name: 'Fish Decor - Plant',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2245141-center-1',
          price: 7,
          description: 'Plant decoration meant to spruce up your fish aquarium. Looks nice with other related plant items.',
          tags: [
            'decor', 'fish', 'supplies', 'plant', 'blue'
          ]
        },
        {
          id: 60,
          name: 'Fish Decor - Sand',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_best-seller-badge,fl_relative,w_0.2,g_north_west,e_sharpen/2558278-center-1',
          price: 23,
          description: 'Sand for the fish aquarium. This is colored as black sand so it looks pretty nice.',
          tags: [
            'decor', 'fish', 'supplies', 'sand', 'black'
          ]
        },
        {
          id: 61,
          name: 'Fish Cleaning - Scrubber',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2638956-center-1',
          price: 5,
          description: 'Cleaning scrubber tool that is used to clean up dirty fish tanks.',
          tags: [
            'cleaning', 'fish', 'supplies', 'scrubber', 'aquarium'
          ]
        }
      ]
  },
  {
      title: 'Small Pets',
      items: [
        {
          id: 62,
          name: 'Small Pet Food - Guinea Pig',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/996653-center-1',
          price: 10,
          description: 'Small pet food that is meant for guinea pigs. Please make sure you have the correct one.',
          tags: [
            'food', 'small pet', 'guinea pig'
          ]
        },
        {
          id: 63,
          name: 'Small Pet Food - Rabbit',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2164594-center-1',
          price: 8,
          description: 'Small pet food that is meant for rabbits. Please make sure you have the correct one. Is not only carrots.',
          tags: [
            'food', 'small pet', 'rabbit'
          ]
        },
        {
          id: 64,
          name: 'Small Pet Food - Hamster and Gerbil',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/3155235-center-1',
          price: 19,
          description: 'Small pet food that is meant for hamsters and gerbils. Please make sure you have the correct one.',
          tags: [
            'food', 'small pet', 'hamster', 'gerbil'
          ]
        },
        {
          id: 65,
          name: 'Small Pet Food - Rat and Mouse',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_petco-new-badge,fl_relative,w_0.12,g_north_west,e_sharpen/3403139-center-1',
          price: 10,
          description: 'Small pet food that is meant for rats and mice. Please make sure you have the correct one.',
          tags: [
            'food', 'small pet', 'rat', 'mouse'
          ]
        },
        {
          id: 66,
          name: 'Small Pet Food - Chinchilla and Degu',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2248982-center-1',
          price: 9,
          description: 'Small pet food that is meant for chinchillas and degus. Please make sure you have the correct one.',
          tags: [
            'food', 'small pet', 'chinchilla', 'degu'
          ]
        },
        {
          id: 67,
          name: 'Small Pet Food - Ferret',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/1339168-center-1',
          price: 20,
          description: 'Small pet food that is meant for ferrets. Please make sure you have the correct one.',
          tags: [
            'food', 'small pet', 'ferret'
          ]
        },
        {
          id: 68,
          name: 'Small Pet Food - Hay',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3403155-center-1',
          price: 7,
          description: 'Small pet food that is for those that enjoy eating hay. Can be for rabbits, guinea pigs, and chinchillas.',
          tags: [
            'food', 'small pet', 'hay', 'rabbit', 'guinea pig', 'chinchilla'
          ]
        },
        {
          id: 69,
          name: 'Small Pet Food - Treats',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2694907-center-1',
          price: 7,
          description: 'Treats that are meant for small pets. Should be safe to eat for most of them.',
          tags: [
            'food', 'small pet', 'treats', 'guinea pig', 'rabbit', 'hamster', 'gerbil', 'rat', 'mouse', 'chinchilla', 'degu', 'ferret' 
          ]
        },
        {
          id: 70,
          name: 'Small Pet Health - Vitamins',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2700246-center-1',
          price: 8,
          description: 'Vitamins for small pets that are either recommended or prescribed by vets. Meant to help improve overall health or aid from sickness.',
          tags: [
            'health', 'small pet', 'medicine', 'vitamins', 'guinea pig', 'rabbit', 'hamster', 'gerbil', 'rat', 'mouse', 'chinchilla', 'degu', 'ferret' 
          ]
        },
        {
          id: 71,
          name: 'Small Pet Carrier - Black',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/3235681-center-1',
          price: 35,
          description: 'Travel carrier to bring your small pets to other places. Ensure that you have the right size for your pet.',
          tags: [
            'carrier', 'small pet', 'supplies', 'guinea pig', 'rabbit', 'hamster', 'gerbil', 'rat', 'mouse', 'chinchilla', 'degu', 'ferret', 'black', 'durable', 'travel' 
          ]
        },
        {
          id: 72,
          name: 'Small Pet Toy - Blocks',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/2493929-center-2',
          price: 5,
          description: 'Toy blocks that your pet will enjoy. Either moving them around or chewing them whichever they like more.',
          tags: [
            'toy', 'small pet', 'supplies', 'guinea pig', 'rabbit', 'hamster', 'gerbil', 'rat', 'mouse', 'chinchilla', 'degu', 'ferret', 'blocks', 'durable' 
          ]
        },
        {
          id: 73,
          name: 'Small Pet Toy - Exercise Ball',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/302627-left-1',
          price: 9,
          description: 'Small ball that your small pet can climb inside of and run around in for exercise. Make sure the size is the correct one for your pet.',
          tags: [
            'toy', 'small pet', 'supplies', 'guinea pig', 'rabbit', 'hamster', 'gerbil', 'rat', 'mouse', 'chinchilla', 'degu', 'ferret', 'exercise', 'ball', 'durable'
          ]
        },
        {
          id: 74,
          name: 'Small Pet Cleaning - Cage Wipes',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2312850-center-1',
          price: 11,
          description: 'Cleaning wipes to help clean around dirty cages after pet use. Use them to clean the cage when needed.',
          tags: [
            'cleaning', 'small pet', 'supplies', 'guinea pig', 'rabbit', 'hamster', 'gerbil', 'rat', 'mouse', 'chinchilla', 'degu', 'ferret', 'cage', 'wipes' 
          ]
        },
        {
          id: 75,
          name: 'Small Pet Habitat - Cage',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/1567080-right-1',
          price: 93,
          description: 'Cage habitat meant to keep your small pet in. Ensure you buy the right size cage for your pet. Decor and other things not included.',
          tags: [
            'cage', 'small pet', 'supplies', 'guinea pig', 'rabbit', 'hamster', 'gerbil', 'rat', 'mouse', 'chinchilla', 'degu', 'ferret', 'habitat', 'durable' 
          ]
        }
      ]
  },
  {
      title: 'Birds',
      items: [
        {
          id: 76,
          name: 'Bird Food - Seed',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/1450077-center-1',
          price: 60,
          description: 'Bird food that is in seed form. Make sure your bird enjoys this type of food first.',
          tags: [
            'food', 'bird', 'seed'
          ]
        },
        {
          id: 77,
          name: 'Bird Food - Worms',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2761006-center-1',
          price: 10,
          description: 'Bird food that is just worms. Make sure your bird enjoys this type of food first.',
          tags: [
            'food', 'bird', 'worm'
          ]
        },
        {
          id: 78,
          name: 'Bird Food - Pellets',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/3535078-center-1',
          price: 100,
          description: 'Bird food that are pellets. Make sure your bird enjoys this type of food first.',
          tags: [
            'food', 'bird', 'pellets'
          ]
        },
        {
          id: 79,
          name: 'Bird Food - Treats',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2157378-center-1',
          price: 4,
          description: 'Bird treats that can be given to your bird for good behavior or other things. Should be safe for most birds.',
          tags: [
            'food', 'bird', 'treats'
          ]
        },
        {
          id: 80,
          name: 'Bird Cage - Blue',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2430881-center-1',
          price: 83,
          description: 'Regular bird cage that your bird can stay in. Ensure that your bird can fit in the cage. This cage is blue.',
          tags: [
            'cage', 'bird', 'blue', 'supplies', 'durable'
          ]
        },
        {
          id: 81,
          name: 'Bird Feeder - White',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2431111-center-1',
          price: 9,
          description: 'Item that you can fill with bird food and your bird can just eat from. Not all forms of bird food are recommended to be used.',
          tags: [
            'feeder', 'bird', 'supplies', 'durable', 'white'
          ]
        },
        {
          id: 82,
          name: 'Bird Waterer - Silo',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/2431074-center-1',
          price: 5,
          description: 'Item that your bird can draw water from whenever they get thirsty.',
          tags: [
            'waterer', 'bird', 'supplies', 'durable', 'silo'
          ]
        },
        {
          id: 83,
          name: 'Bird Perch - Wood',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2504712-center-1',
          price: 6,
          description: 'A wooden item that your bird can perch onto to rest.',
          tags: [
            'perch', 'bird', 'wood', 'supplies', 'durable'
          ]
        },
        {
          id: 84,
          name: 'Bird Perch - Swing',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/2504763-center-1',
          price: 12,
          description: 'A small swing that your bird can perch onto to get some exercise in their cage or to play around with.',
          tags: [
            'perch', 'bird', 'swing', 'bells', 'supplies', 'durable'
          ]
        },
        {
          id: 85,
          name: 'Bird Health - Vitamin Powder',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3027701-center-1',
          price: 14,
          description: 'Vitamin powder given to birds recommended or prescribed by vets. Helps to improve bird health.',
          tags: [
            'health', 'bird', 'medicine', 'vitamins', 'powder'
          ]
        },
        {
          id: 86,
          name: 'Bird Toy - Bamboo Log',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2204402-right-1',
          price: 72,
          description: 'Toy that your bird can play around with by making noise or hitting it.',
          tags: [
            'toy', 'bird', 'supplies', 'durable', 'bamboo', 'log'
          ]
        },
        {
          id: 87,
          name: 'Bird Toy - Playground',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2430979-center-2',
          price: 15,
          description: 'Small playground for your bird to mess around with and enjoy. They can perch onto the rope and do other things.',
          tags: [
            'toy', 'bird', 'supplies', 'durable', 'wood', 'playground'
          ]
        },
        {
          id: 88,
          name: 'Bird Cleaning - Cage Cleaner',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2188203-center-1',
          price: 8,
          description: 'Spray that can be used to clean your bird cage whenever needed or when the odor is too much.',
          tags: [
            'cleaning', 'bird', 'supplies', 'cage', 'spray'
          ]
        }
      ]
  },
  {
      title: 'Reptiles',
      items: [
        {
          id: 89,
          name: 'Reptile Food - Dry',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3460555-center-1',
          price: 5,
          description: 'Dry reptile food that is kept packed. Usually dried up food or some other form.',
          tags: [
            'food', 'reptile', 'dry'
          ]
        },
        {
          id: 90,
          name: 'Reptile Food - Frozen',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2610494-center-1',
          price: 22,
          description: 'Frozen reptile food. This is literally just a frozen mouse or rat.',
          tags: [
            'food', 'reptile', 'frozen'
          ]
        },
        {
          id: 91,
          name: 'Reptile Food - Live Crickets',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/110515-Center-2',
          price: 1,
          description: 'Live reptile food that are live crickets. They are in fact still moving.',
          tags: [
            'food', 'reptile', 'live', 'cricket'
          ]
        },
        {
          id: 92,
          name: 'Reptile Food - Live Worms',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2882115-Center-2',
          price: 11,
          description: 'Live reptile food that are live worms. They are in fact still moving.',
          tags: [
            'food', 'reptile', 'live', 'worm'
          ]
        },
        {
          id: 93,
          name: 'Reptile Food - Live Flies',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,h_1272,q_auto,w_1272/c_pad,h_1272,w_1272/973041-center-1',
          price: 27,
          description: 'Live reptile food that are live flies. They are in fact still moving.',
          tags: [
            'food', 'reptile', 'live', 'flies'
          ]
        },
        {
          id: 94,
          name: 'Reptile Habitat - Terrarium',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/1404237-right-1',
          price: 210,
          description: 'Terrarium habitat that your reptile will stay in. Can come in different biomes. Decor and other items not included.',
          tags: [
            'habitat', 'reptile', 'supplies', 'terrarium'
          ]
        },
        {
          id: 95,
          name: 'Reptile Decor - Refuge',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/504408-right-1',
          price: 15,
          description: 'Habitat decor that is of a small wooden plank. Your reptile may enjoy hiding in it.',
          tags: [
            'decor', 'reptile', 'supplies', 'durable', 'refuge', 'wood' 
          ]
        },
        {
          id: 96,
          name: 'Reptile Decor - Hideaway',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2919731-center-1',
          price: 16,
          description: 'Habitat decor that your reptile will enjoy hiding inside of or messing with it. This one is of a small temple.',
          tags: [
            'decor', 'reptile', 'supplies', 'durable', 'hideaway', 'temple'
          ]
        },
        {
          id: 97,
          name: 'Reptile Heating - Lamp',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/1404695-center-1',
          price: 13,
          description: 'Heating lamp to aid in keeping your reptile warm. Not for every reptile though so ensure that yours actually needs it.',
          tags: [
            'heating', 'reptile', 'supplies', 'lamp', 'habitat'
          ]
        },
        {
          id: 98,
          name: 'Reptile Health - Supplement',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/1440349-center-1',
          price: 6,
          description: 'Supplements to aid in reptile health. Can be recommended or prescribed by vet.',
          tags: [
            'health', 'reptile', 'medicine', 'supplement'
          ]
        },
        {
          id: 99,
          name: 'Reptile Health - Relief Spray',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/928763-center-1',
          price: 9,
          description: 'Spray meant to kill any parasites or bacteria on your reptile that is harming them. Safe to use on them.',
          tags: [
            'health', 'reptile', 'medicine', 'spray', 'relief'
          ]
        },
        {
          id: 100,
          name: 'Reptile Cleaning - Habitat Cleaner',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2151646-center-1',
          price: 11,
          description: 'Scrubber used to clean your reptile habitat after it has gotten dirty. Use often as needed.',
          tags: [
            'cleaning', 'reptile', 'cleaner', 'habitat', 'scrubber'
          ]
        }
      ]
  }
];

export default SHOP_DATA;