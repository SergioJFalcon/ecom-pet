const SHOP_DATA = [
    {
      title: 'Dogs',
      items: [
        {
          id: 1,
          name: 'Dog Food - Wet',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3347923-center-1',
          price: 5,
          tags: [
            'food', 'dog', 'wet'
          ]
        },
        {
          id: 2,
          name: 'Dog Food - Dry',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3354787-center-1',
          price: 50,
          tags: [
            'food', 'dog', 'dry'
          ]
        },
        {
            id: 3,
            name: 'Dog Food - Veterinary',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2684418-center-1',
            price: 105,
            tags: [
              'food', 'dog', 'veterinary'
            ]
        },
        {
            id: 4,
            name: 'Dog Food - Puppy',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2992437-center-1',
            price: 60,
            tags: [
              'food', 'dog', 'puppy'
            ]
        },
        {
            id: 5,
            name: 'Dog Food - Frozen',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_petco-pick-badge,fl_relative,w_0.3,g_north_west,e_sharpen/2889464-center-1',
            price: 35,
            tags: [
              'food', 'dog', 'frozen'
            ]
        },
        {
            id: 6,
            name: 'Dog Treat - Soft',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_onlyatpetco_badge,fl_relative,w_0.15,g_north_west,e_sharpen/2924469-center-1',
            price: 15,
            tags: [
              'food', 'dog', 'treat', 'soft'
            ]
        },
        {
            id: 7,
            name: 'Dog Treat - Crunch',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_onlyatpetco_badge,fl_relative,w_0.15,g_north_west,e_sharpen/3037618-center-1',
            price: 13,
            tags: [
              'food', 'dog', 'treat', 'crunch'
            ]
        },
        {
            id: 8,
            name: 'Dog Treat - Bone',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3008729-center-1',
            price: 13,
            tags: [
              'food', 'dog', 'treat', 'bone'
            ]
        },
        {
            id: 9,
            name: 'Dog Treat - Jerky',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3322443-center-1',
            price: 30,
            tags: [
              'food', 'dog', 'treat', 'jerky'
            ]
        },
        {
            id: 10,
            name: 'Dog Treat - Dental',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_best-seller-badge,fl_relative,w_0.2,g_north_west,e_sharpen/1537660-center-1',
            price: 35,
            tags: [
              'food', 'dog', 'treat', 'dental'
            ]
        },
        {
            id: 11,
            name: 'Dog Treat - Training',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/1352288-center-1',
            price: 16,
            tags: [
              'food', 'dog', 'treat', 'training'
            ]
        },
        {
            id: 12,
            name: 'Dog Treat - Pill',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3224131-center-1',
            price: 6,
            tags: [
              'food', 'dog', 'treat', 'pill'
            ]
        },
        {
            id: 13,
            name: 'Dog Toy - Dragon Plush',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/1349074-center-5',
            price: 20,
            tags: [
              'toy', 'dog', 'blue', 'plush', 'dragon', 'supplies'
            ]
        },
        {
            id: 14,
            name: 'Dog Toy - Chew Stick',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3426269-center-1',
            price: 9,
            tags: [
              'toy', 'dog', 'red', 'chew', 'durable', 'supplies'
            ]
        },
        {
            id: 15,
            name: 'Dog Bed - Camo',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3353135-center-1',
            price: 90,
            tags: [
              'bed', 'dog', 'camo', 'durable', 'supplies'
            ]
        },
        {
            id: 16,
            name: 'Dog Bed - Black',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3021392-center-2',
            price: 60,
            tags: [
              'bed', 'dog', 'black', 'durable', 'supplies'
            ]
        },
        {
            id: 17,
            name: 'Dog Bowl - Marble',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3162785-center-3',
            price: 5,
            tags: [
              'bowl', 'dog', 'marble', 'durable', 'supplies'
            ]
        },
        {
            id: 18,
            name: 'Dog Feeder - White',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/3163016-center-1',
            price: 10,
            tags: [
              'feeder', 'dog', 'white', 'durable', 'supplies'
            ]
        },
        {
            id: 19,
            name: 'Dog Carrier - Black',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_best-seller-badge,fl_relative,w_0.2,g_north_west,e_sharpen/77046-center-1',
            price: 33,
            tags: [
              'carrier', 'dog', 'black', 'durable', 'supplies', 'travel'
            ]
        },
        {
            id: 20,
            name: 'Dog Health - Tablets',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3271949-center-1',
            price: 15,
            tags: [
              'health', 'dog', 'medicine', 'tablets'
            ]
        },
        {
            id: 21,
            name: 'Dog Health - Tablets',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3271949-center-1',
            price: 15,
            tags: [
              'health', 'dog', 'medicine', 'tablets'
            ]
        },
        {
            id: 22,
            name: 'Dog Health - Flea Treatment',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/966533-center-1',
            price: 40,
            tags: [
              'health', 'dog', 'medicine', 'flea', 'tick', 'treatment'
            ]
        },
        {
            id: 23,
            name: 'Dog Grooming - deShedder',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2882529-Center-1',
            price: 32,
            tags: [
              'grooming', 'dog', 'supplies', 'deshedder'
            ]
        },
        {
            id: 24,
            name: 'Dog Clothes - Hoodie',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/3472839-center-5',
            price: 18,
            tags: [
              'clothes', 'dog', 'supplies', 'green', 'hoodie'
            ]
        },
        {
            id: 25,
            name: 'Dog Cleaning - Waste Bags',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/3184861-center-1',
            price: 5,
            tags: [
              'cleaning', 'dog', 'supplies', 'waste', 'blue', 'grey'
            ]
        },
        {
            id: 26,
            name: 'Dog Collar - Olive',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/3381187-center-10',
            price: 17,
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
          tags: [
            'food', 'cat', 'wet'
          ]
        },
        {
          id: 28,
          name: 'Cat Food - Dry',
          imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3328378-center-1',
          price: 14,
          tags: [
            'food', 'cat', 'dry'
          ]
        },
        {
            id: 29,
            name: 'Cat Food - Veterinary',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2195032-center-1',
            price: 60,
            tags: [
              'food', 'cat', 'veterinary'
            ]
        },
        {
            id: 30,
            name: 'Cat Food - Kitten',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3080481-center-1',
            price: 19,
            tags: [
              'food', 'cat', 'kitten'
            ]
        },
        {
            id: 31,
            name: 'Cat Treats - Soft',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2160016-center-1',
            price: 5,
            tags: [
              'food', 'cat', 'treats', 'soft'
            ]
        },
        {
            id: 32,
            name: 'Cat Treats - Crunchy',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3349857-center-1',
            price: 15,
            tags: [
              'food', 'cat', 'treats', 'crunchy'
            ]
        },
        {
            id: 33,
            name: 'Cat Treats - Catnip',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2243057-Center-1',
            price: 3,
            tags: [
              'food', 'cat', 'treats', 'catnip'
            ]
        },
        {
            id: 34,
            name: 'Cat Treats - Dental',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3367203-center-1',
            price: 6,
            tags: [
              'food', 'cat', 'treats', 'dental'
            ]
        },
        {
            id: 35,
            name: 'Cat Treats - Pill',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3108105-center-1',
            price: 10,
            tags: [
              'food', 'cat', 'treats', 'pill'
            ]
        },
        {
            id: 36,
            name: 'Cat Toy - Plush Lamb',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_petco-new-badge,fl_relative,w_0.12,g_north_west,e_sharpen/3482164-center-2',
            price: 10,
            tags: [
              'toy', 'cat', 'plush', 'catnip', 'lamb', 'white', 'supplies'
            ]
        },
        {
            id: 37,
            name: 'Cat Toy - Laser Light',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2924573-center-2',
            price: 24,
            tags: [
              'toy', 'cat', 'laser', 'supplies', 'white'
            ]
        },
        {
            id: 38,
            name: 'Cat Bed - Pink',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3146380-center-1',
            price: 30,
            tags: [
              'bed', 'cat', 'supplies', 'durable', 'pink'
            ]
        },
        {
            id: 39,
            name: 'Cat Bed - Grey',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/2669091-center-1',
            price: 35,
            tags: [
              'bed', 'cat', 'supplies', 'durable', 'grey'
            ]
        },
        {
            id: 40,
            name: 'Cat Bowl - Pink',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2699505-center-1',
            price: 3,
            tags: [
              'bowl', 'cat', 'supplies', 'durable', 'pink'
            ]
        },
        {
            id: 41,
            name: 'Cat Feeder - White',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/402966-center-1',
            price: 55,
            tags: [
              'feeder', 'cat', 'supplies', 'durable', 'white'
            ]
        },
        {
            id: 42,
            name: 'Cat Litter - Teal Box',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_best-seller-badge,fl_relative,w_0.2,g_north_west,e_sharpen/2847539-center-1',
            price: 24,
            tags: [
              'litter', 'cat', 'supplies', 'durable', 'teal', 'box'
            ]
        },
        {
            id: 43,
            name: 'Cat Tree - Scratcher',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_best-seller-badge,fl_relative,w_0.2,g_north_west,e_sharpen/2890385-center-1',
            price: 128,
            tags: [
              'tree', 'cat', 'supplies', 'durable', 'scratcher', 'grey'
            ]
        },
        {
            id: 44,
            name: 'Cat Carrier - Blue',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2956639-center-1',
            price: 30,
            tags: [
              'carrier', 'cat', 'supplies', 'durable', 'blue', 'travel'
            ]
        },
        {
            id: 45,
            name: 'Cat Health - Chews',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/2370267-center-1',
            price: 11,
            tags: [
              'health', 'cat', 'medicine', 'chews'
            ]
        },
        {
            id: 46,
            name: 'Cat Health - Flea Treatment',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/2254717-center-1',
            price: 60,
            tags: [
              'health', 'cat', 'medicine', 'flea', 'tick', 'treatment'
            ]
        },
        {
            id: 48,
            name: 'Cat Grooming - Nail Clippers',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/2370187-center-2',
            price: 8,
            tags: [
              'grooming', 'cat', 'supplies', 'clippers'
            ]
        },
        {
            id: 49,
            name: 'Cat Clothes - Striped Sweater',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3473250-center-3',
            price: 15,
            tags: [
              'clothes', 'cat', 'supplies', 'sweater', 'striped', 'blue', 'white'
            ]
        },
        {
            id: 50,
            name: 'Cat Cleaning - Litter Deodorizer',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/1154710-center-1',
            price: 4,
            tags: [
              'cleaning', 'cat', 'supplies', 'litter', 'deodorizer'
            ]
        },
        {
            id: 51,
            name: 'Cat Collar - Yellow',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3489243-center-1',
            price: 19,
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
            tags: [
              'food', 'fish', 'frozen'
            ]
          },
          {
            id: 53,
            name: 'Fish Food - Saltwater',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3008631-center-1',
            price: 12,
            tags: [
              'food', 'fish', 'saltwater'
            ]
          },
          {
            id: 54,
            name: 'Fish Food - Freshwater',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/110124-center-1',
            price: 6,
            tags: [
              'food', 'fish', 'freshwater'
            ]
          },
          {
            id: 55,
            name: 'Fish Aquarium - Tank',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/170968-center-1',
            price: 100,
            tags: [
              'aquarium', 'fish', 'tank', 'supplies'
            ]
          },
          {
            id: 56,
            name: 'Fish Health - Parasite Treatment',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2728468-center-1',
            price: 7,
            tags: [
              'health', 'fish', 'treatment', 'medicine', 'parasite'
            ]
          },
          {
            id: 57,
            name: 'Fish Health - Bacterial Remedy',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/2728361-center-1',
            price: 15,
            tags: [
              'health', 'fish', 'medicine', 'remedy', 'bacterial', 'fungal'
            ]
          },
          {
            id: 58,
            name: 'Fish Decor - Tree',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2427315-center-1',
            price: 35,
            tags: [
              'decor', 'fish', 'supplies', 'tree'
            ]
          },
          {
            id: 59,
            name: 'Fish Decor - Plant',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2245141-center-1',
            price: 7,
            tags: [
              'decor', 'fish', 'supplies', 'plant', 'blue'
            ]
          },
          {
            id: 60,
            name: 'Fish Decor - Sand',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_best-seller-badge,fl_relative,w_0.2,g_north_west,e_sharpen/2558278-center-1',
            price: 23,
            tags: [
              'decor', 'fish', 'supplies', 'sand', 'black'
            ]
          },
          {
            id: 61,
            name: 'Fish Cleaning - Scrubber',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2638956-center-1',
            price: 5,
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
            tags: [
              'food', 'small pet', 'guinea pig'
            ]
          },
          {
            id: 63,
            name: 'Small Pet Food - Rabbit',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2164594-center-1',
            price: 8,
            tags: [
              'food', 'small pet', 'rabbit'
            ]
          },
          {
            id: 64,
            name: 'Small Pet Food - Hamster and Gerbil',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/3155235-center-1',
            price: 19,
            tags: [
              'food', 'small pet', 'hamster', 'gerbil'
            ]
          },
          {
            id: 65,
            name: 'Small Pet Food - Rat and Mouse',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_petco-new-badge,fl_relative,w_0.12,g_north_west,e_sharpen/3403139-center-1',
            price: 10,
            tags: [
              'food', 'small pet', 'rat', 'mouse'
            ]
          },
          {
            id: 66,
            name: 'Small Pet Food - Chinchilla and Degu',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2248982-center-1',
            price: 9,
            tags: [
              'food', 'small pet', 'chinchilla', 'degu'
            ]
          },
          {
            id: 67,
            name: 'Small Pet Food - Ferret',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/1339168-center-1',
            price: 20,
            tags: [
              'food', 'small pet', 'ferret'
            ]
          },
          {
            id: 68,
            name: 'Small Pet Food - Hay',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3403155-center-1',
            price: 7,
            tags: [
              'food', 'small pet', 'hay', 'rabbit', 'guinea pig', 'chinchilla'
            ]
          },
          {
            id: 69,
            name: 'Small Pet Food - Treats',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2694907-center-1',
            price: 7,
            tags: [
              'food', 'small pet', 'treats', 'guinea pig', 'rabbit', 'hamster', 'gerbil', 'rat', 'mouse', 'chinchilla', 'degu', 'ferret' 
            ]
          },
          {
            id: 70,
            name: 'Small Pet Health - Vitamins',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2700246-center-1',
            price: 8,
            tags: [
              'health', 'small pet', 'medicine', 'vitamins', 'guinea pig', 'rabbit', 'hamster', 'gerbil', 'rat', 'mouse', 'chinchilla', 'degu', 'ferret' 
            ]
          },
          {
            id: 71,
            name: 'Small Pet Carrier - Black',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/3235681-center-1',
            price: 35,
            tags: [
              'carrier', 'small pet', 'supplies', 'guinea pig', 'rabbit', 'hamster', 'gerbil', 'rat', 'mouse', 'chinchilla', 'degu', 'ferret', 'black', 'durable', 'travel' 
            ]
          },
          {
            id: 72,
            name: 'Small Pet Toy - Blocks',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/2493929-center-2',
            price: 5,
            tags: [
              'toy', 'small pet', 'supplies', 'guinea pig', 'rabbit', 'hamster', 'gerbil', 'rat', 'mouse', 'chinchilla', 'degu', 'ferret', 'blocks', 'durable' 
            ]
          },
          {
            id: 73,
            name: 'Small Pet Toy - Exercise Ball',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/302627-left-1',
            price: 9,
            tags: [
              'toy', 'small pet', 'supplies', 'guinea pig', 'rabbit', 'hamster', 'gerbil', 'rat', 'mouse', 'chinchilla', 'degu', 'ferret', 'exercise', 'ball', 'durable'
            ]
          },
          {
            id: 74,
            name: 'Small Pet Cleaning - Cage Wipes',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2312850-center-1',
            price: 11,
            tags: [
              'cleaning', 'small pet', 'supplies', 'guinea pig', 'rabbit', 'hamster', 'gerbil', 'rat', 'mouse', 'chinchilla', 'degu', 'ferret', 'cage', 'wipes' 
            ]
          },
          {
            id: 75,
            name: 'Small Pet Habitat - Cage',
            imageUrl: '',
            price: 93,
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
            tags: [
              'food', 'bird', 'seed'
            ]
          },
          {
            id: 77,
            name: 'Bird Food - Worms',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2761006-center-1',
            price: 10,
            tags: [
              'food', 'bird', 'worm'
            ]
          },
          {
            id: 78,
            name: 'Bird Food - Pellets',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/3535078-center-1',
            price: 100,
            tags: [
              'food', 'bird', 'pellets'
            ]
          },
          {
            id: 79,
            name: 'Bird Food - Treats',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2157378-center-1',
            price: 4,
            tags: [
              'food', 'bird', 'treats'
            ]
          },
          {
            id: 80,
            name: 'Bird Cage - Blue',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2430881-center-1',
            price: 83,
            tags: [
              'cage', 'bird', 'blue', 'supplies', 'durable'
            ]
          },
          {
            id: 81,
            name: 'Bird Feeder - White',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2431111-center-1',
            price: 9,
            tags: [
              'feeder', 'bird', 'supplies', 'durable', 'white'
            ]
          },
          {
            id: 82,
            name: 'Bird Waterer - Silo',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/2431074-center-1',
            price: 5,
            tags: [
              'waterer', 'bird', 'supplies', 'durable', 'silo'
            ]
          },
          {
            id: 83,
            name: 'Bird Perch - Wood',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2504712-center-1',
            price: 6,
            tags: [
              'perch', 'bird', 'wood', 'supplies', 'durable'
            ]
          },
          {
            id: 84,
            name: 'Bird Perch - Swing',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/2504763-center-1',
            price: 12,
            tags: [
              'perch', 'bird', 'swing', 'bells', 'supplies', 'durable'
            ]
          },
          {
            id: 85,
            name: 'Bird Health - Vitamin Powder',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3027701-center-1',
            price: 14,
            tags: [
              'health', 'bird', 'medicine', 'vitamins', 'powder'
            ]
          },
          {
            id: 86,
            name: 'Bird Toy - Bamboo Log',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2204402-right-1',
            price: 72,
            tags: [
              'toy', 'bird', 'supplies', 'durable', 'bamboo', 'log'
            ]
          },
          {
            id: 87,
            name: 'Bird Toy - Playground',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2430979-center-2',
            price: 15,
            tags: [
              'toy', 'bird', 'supplies', 'durable', 'wood', 'playground'
            ]
          },
          {
            id: 88,
            name: 'Bird Cleaning - Cage Cleaner',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2188203-center-1',
            price: 8,
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
            tags: [
              'food', 'reptile', 'dry'
            ]
          },
          {
            id: 90,
            name: 'Reptile Food - Frozen',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2610494-center-1',
            price: 22,
            tags: [
              'food', 'reptile', 'frozen'
            ]
          },
          {
            id: 91,
            name: 'Reptile Food - Live Crickets',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/110515-Center-2',
            price: 1,
            tags: [
              'food', 'reptile', 'live', 'cricket'
            ]
          },
          {
            id: 92,
            name: 'Reptile Food - Live Worms',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2882115-Center-2',
            price: 11,
            tags: [
              'food', 'reptile', 'live', 'worm'
            ]
          },
          {
            id: 93,
            name: 'Reptile Food - Live Flies',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,h_1272,q_auto,w_1272/c_pad,h_1272,w_1272/973041-center-1',
            price: 27,
            tags: [
              'food', 'reptile', 'live', 'flies'
            ]
          },
          {
            id: 94,
            name: 'Reptile Habitat - Terrarium',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/1404237-right-1',
            price: 210,
            tags: [
              'habitat', 'reptile', 'supplies', 'terrarium'
            ]
          },
          {
            id: 95,
            name: 'Reptile Decor - Refuge',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/504408-right-1',
            price: 15,
            tags: [
              'decor', 'reptile', 'supplies', 'durable', 'refuge', 'wood' 
            ]
          },
          {
            id: 96,
            name: 'Reptile Decor - Hideaway',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2919731-center-1',
            price: 16,
            tags: [
              'decor', 'reptile', 'supplies', 'durable', 'hideaway', 'temple'
            ]
          },
          {
            id: 97,
            name: 'Reptile Heating - Lamp',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/1404695-center-1',
            price: 13,
            tags: [
              'heating', 'reptile', 'supplies', 'lamp', 'habitat'
            ]
          },
          {
            id: 98,
            name: 'Reptile Health - Supplement',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/1440349-center-1',
            price: 6,
            tags: [
              'health', 'reptile', 'medicine', 'supplement'
            ]
          },
          {
            id: 99,
            name: 'Reptile Health - Relief Spray',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/928763-center-1',
            price: 9,
            tags: [
              'health', 'reptile', 'medicine', 'spray', 'relief'
            ]
          },
          {
            id: 100,
            name: 'Reptile Cleaning - Habitat Cleaner',
            imageUrl: 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2151646-center-1',
            price: 11,
            tags: [
              'cleaning', 'reptile', 'cleaner', 'habitat', 'scrubber'
            ]
          }
        ]
    }
];

export default SHOP_DATA;