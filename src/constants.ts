import { SiteContent } from './types';

export const INITIAL_CONTENT: SiteContent = {
  project: {
    name: {
      en: "Oxley Towers KLCC",
      zh: "Oxley Towers（豪利大厦）"
    },
    tagline: {
      en: "The Jewel of Kuala Lumpur Skyline",
      zh: "吉隆坡天际线的璀璨明珠"
    }
  },
  hero: {
    title: {
      en: "Oxley Towers KLCC: A Global Icon of Luxury",
      zh: "Oxley Towers KLCC：全球奢华地标"
    },
    subtitle: {
      en: "Kuala Lumpur's Premier Freehold Integrated Development Featuring SO/ KL and Jewel Residences",
      zh: "吉隆坡首屈一指的永久产权综合开发项目，汇聚 SO/ KL 与 Jewel Residences"
    },
    image: "https://lh3.googleusercontent.com/d/1Z55EVCE9Z4PvRK8vUc5GSnQYceP4BNl1"
  },
  overview: {
    title: {
      en: "The Pinnacle of Sophistication",
      zh: "精致生活的巅峰"
    },
    content: {
      en: "Rising gracefully above Kuala Lumpur's vibrant City Centre, Oxley Towers KLCC is more than just a destination—it's a global landmark. This freehold integrated development combines three signature towers linked by a luxury retail boulevard, creating a seamless blend of world-class hospitality, private residences, and premium business spaces.",
      zh: "Oxley Towers KLCC 高耸于吉隆坡充满活力的市中心之上。这个永久产权综合项目由三栋标志性塔楼组成，由豪华零售连廊连接。"
    },
    image: "https://lh3.googleusercontent.com/d/1Q3lOCFp0Q-Q4LmztytvY0OfR0MPUk49m",
    details: {
      developer: {
        en: "Oxley Rising Sdn Bhd",
        zh: "Oxley Rising Sdn Bhd"
      },
      towers: {
        en: "3 Iconic Towers",
        zh: "3 栋标志性塔楼"
      },
      location: {
        en: "Jalan Ampang, KLCC",
        zh: "吉隆坡 KLCC, Jalan Ampang"
      },
      tenure: {
        en: "Freehold",
        zh: "永久产权"
      },
      completion: {
        en: "Expected 2024 / 2025",
        zh: "预计 2024 / 2025 年"
      }
    }
  },
  whyChoose: {
    title: {
      en: "Why Choose Oxley Towers?",
      zh: "为何选择 Oxley Towers？"
    },
    items: [
      {
        title: {
          en: "Steps from the Twin Towers",
          zh: "步行即可到达双子塔"
        },
        description: {
          en: "Live just 300 meters from the famous Petronas Twin Towers. The heart of the city is your playground.",
          zh: "居住在距离著名的双子塔仅 300 米的地方。整个城市中心就是您的后花园。"
        },
        icon: "MapPin"
      },
      {
        title: {
          en: "Global Partnership with SO/",
          zh: "全球品牌合作伙伴"
        },
        description: {
          en: "Experience Malaysia's first SO/ Residences, combining Parisian fashion with luxury hotel services.",
          zh: "体验马来西亚首家 SO/ 品牌住宅，将巴黎时尚与奢华酒店服务完美结合。"
        },
        icon: "Crown"
      },
      {
        title: {
          en: "Interconnected Lifestyle",
          zh: "互联互通的生活方式"
        },
        description: {
          en: "With a luxury mall managed by Pavilion Group right downstairs, everything you need is just an elevator ride away.",
          zh: "楼下即是由 Pavilion 集团管理的豪华商场，您需要的一切都只需搭乘电梯即可到达。"
        },
        icon: "ShoppingBag"
      },
      {
        title: {
          en: "A Rare Freehold Asset",
          zh: "稀有的永久产权资产"
        },
        description: {
          en: "Own a piece of KLCC forever. This is one of the last freehold spots in the city's most valuable area.",
          zh: "永久拥有吉隆坡城中城的一份资产。这是该城市最昂贵地段中仅存的永久产权地块之一。"
        },
        icon: "ShieldCheck"
      },
      {
        title: {
          en: "Wellness in the Clouds",
          zh: "云端的健康生活"
        },
        description: {
          en: "Relax in our sky-high infinity pools or work out at the gym with the most stunning city views.",
          zh: "在我们的高空无边泳池中放松身心，或在拥有震撼城市美景的健身房中锻炼。"
        },
        icon: "Waves"
      },
      {
        title: {
          en: "Seamless City Connections",
          zh: "无缝的城市连接"
        },
        description: {
          en: "Skip the traffic with easy walks to the LRT and MRT stations, connecting you to all of Kuala Lumpur.",
          zh: "步行即可到达 LRT 和 MRT 站，助您告别拥堵，轻松连接整个吉隆坡。"
        },
        icon: "Zap"
      }
    ]
  },
  towers: {
    title: {
      en: "The Residences",
      zh: "尊贵府邸"
    },
    so: {
      name: {
        en: "SO/ KL Residences",
        zh: "SO/ 索菲特品牌公寓"
      },
      image: "",
      description: {
        en: "Tower 1: A 78-storey beacon of bold luxury. 590 exclusive units soaring high above the city.",
        zh: "Tower 1: 78 层高的奢华标杆。590 套专属单位高耸于城市之上。"
      },
      stats: [
        {
          label: {
            en: "Height",
            zh: "高度"
          },
          value: {
            en: "78 Storeys",
            zh: "78 层"
          }
        },
        {
          label: {
            en: "Unit Count",
            zh: "单位总数"
          },
          value: {
            en: "590 Units",
            zh: "590 套"
          }
        },
        {
          label: {
            en: "Service",
            zh: "服务"
          },
          value: {
            en: "SO/ Five-Star",
            zh: "SO/ 五星级"
          }
        }
      ],
      layouts: [
        {
          id: "so-a2-new",
          type: {
            en: "Type A2",
            zh: "A2 户型"
          },
          size: {
            en: "566 sq.ft. (53 sqm)",
            zh: "566 平方英尺 (53 平方米)"
          },
          description: {
            en: "Modern studio residence designed for efficient urban living.",
            zh: "为高效都市生活设计的现代开间住宅。"
          },
          image: "https://lh3.googleusercontent.com/d/1qtYSs35l7vtkY_Oan53Vh4mk2vc4Uc57",
          price: {
            en: "From RM 1,600,000",
            zh: "售价从 RM 1,600,000 起"
          },
          perks: [
            {
              en: "Studio Layout",
              zh: "开间布局"
            },
            {
              en: "Signature SO/ Finishes",
              zh: "SO/ 标志性饰面"
            },
            {
              en: "High Floor Options",
              zh: "高楼层选择"
            }
          ]
        },
        {
          id: "so-c2a",
          type: {
            en: "Type C-2A",
            zh: "C-2A 户型"
          },
          size: {
            en: "815 sq.ft. (76 sqm)",
            zh: "815 平方英尺 (76 平方米)"
          },
          description: {
            en: "Spacious 1+1 room layout ideal for couples or professionals.",
            zh: "宽敞的 1+1 房布局，非常适合情侣或专业人士。"
          },
          image: "https://lh3.googleusercontent.com/d/1Tyr7ZkmFm3fSmuBRU1MgITP-GoC0dcQK",
          price: {
            en: "From RM 2,300,000",
            zh: "售价从 RM 2,300,000 起"
          },
          perks: [
            {
              en: "1+1 Bedrooms",
              zh: "1+1 房"
            },
            {
              en: "Flexible Study Space",
              zh: "灵活书房空间"
            },
            {
              en: "Premium Built-ins",
              zh: "高端嵌入式家具"
            }
          ]
        },
        {
          id: "so-c1-new",
          type: {
            en: "Type C-1",
            zh: "C-1 户型"
          },
          size: {
            en: "711 sq.ft. (66 sqm)",
            zh: "711 平方英尺 (66 平方米)"
          },
          description: {
            en: "Refined 1+1 room configuration with optimized living space.",
            zh: "经过优化的 1+1 房配置，居住空间更精致。"
          },
          image: "https://lh3.googleusercontent.com/d/17FugrS_fVmsSP9bA-pGmDPsE9TBH0Jfi",
          price: {
            en: "From RM 2,050,000",
            zh: "售价从 RM 2,050,000 起"
          },
          perks: [
            {
              en: "1+1 Bedrooms",
              zh: "1+1 房"
            },
            {
              en: "Urban Views",
              zh: "都市景观"
            },
            {
              en: "Smart Home Ready",
              zh: "智能家居就绪"
            }
          ]
        },
        {
          id: "so-d1",
          type: {
            en: "Type D-1",
            zh: "D-1 户型"
          },
          size: {
            en: "903 sq.ft. (84 sqm)",
            zh: "903 平方英尺 (84 平方米)"
          },
          description: {
            en: "Elegant 2-bedroom residence with premium layout and finishes.",
            zh: "优雅的两居室住宅，拥有高级布局和饰面。"
          },
          image: "https://lh3.googleusercontent.com/d/1M9vLeWGTNdBUu7ndxO1rFcZPvD-Efnl3",
          price: {
            en: "From RM 2,700,000",
            zh: "售价从 RM 2,700,000 起"
          },
          perks: [
            {
              en: "2 Bedrooms",
              zh: "2 房"
            },
            {
              en: "Dual View Aspects",
              zh: "双面景观"
            },
            {
              en: "Spacious Living Area",
              zh: "宽敞起居区"
            }
          ]
        },
        {
          id: "so-d2",
          type: {
            en: "Type D-2",
            zh: "D-2 户型"
          },
          size: {
            en: "956 sq.ft. (89 sqm)",
            zh: "956 平方英尺 (89 平方米)"
          },
          description: {
            en: "Sophisticated 2-bedroom home for the ultimate luxury experience.",
            zh: "奢华体验的精致两居室住宅。"
          },
          image: "https://lh3.googleusercontent.com/d/1fSwzA3_DhpYqieTKTAoziT6-cnLS16kD",
          price: {
            en: "From RM 2,900,000",
            zh: "售价从 RM 2,900,000 起"
          },
          perks: [
            {
              en: "2 Bedrooms",
              zh: "2 房"
            },
            {
              en: "Luxury Finishes",
              zh: "奢华饰面"
            },
            {
              en: "City Skyline Views",
              zh: "城市天际线景观"
            }
          ]
        },
        {
          id: "so-d3",
          type: {
            en: "Type D-3 (Dual Key)",
            zh: "D-3 户型 (双钥匙)"
          },
          size: {
            en: "956 sq.ft. (89 sqm)",
            zh: "956 平方英尺 (89 平方米)"
          },
          description: {
            en: "Versatile dual-key concept offering flexible living or investment potential.",
            zh: "多功能双钥匙概念，提供灵活的居住或投资潜力。"
          },
          image: "https://lh3.googleusercontent.com/d/1nwrTpclDg3L5mkzGa5efxJ4Nl0Bno1mV",
          price: {
            en: "From RM 3,000,000",
            zh: "售价从 RM 3,000,000 起"
          },
          perks: [
            {
              en: "Dual Key Layout",
              zh: "双钥匙布局"
            },
            {
              en: "High Investment Yield",
              zh: "高投资回报"
            },
            {
              en: "Multi-Generational Living",
              zh: "多代同堂生活"
            }
          ]
        },
        {
          id: "so-d4a",
          type: {
            en: "Type D-4A",
            zh: "D-4A 户型"
          },
          size: {
            en: "995 sq.ft. (92 sqm)",
            zh: "995 平方英尺 (92 平方米)"
          },
          description: {
            en: "Premier 2-bedroom residence with expanded living space.",
            zh: "拥有扩展居住空间的顶级两居室住宅。"
          },
          image: "https://lh3.googleusercontent.com/d/10NvsA7R3YnuzaSxKuDgeuJzRCNbHaGhw",
          price: {
            en: "From RM 3,100,000",
            zh: "售价从 RM 3,100,000 起"
          },
          perks: [
            {
              en: "2 Bedrooms",
              zh: "2 房"
            },
            {
              en: "Maximized Square Footage",
              zh: "最大化建筑面积"
            },
            {
              en: "Floor-to-Ceiling Windows",
              zh: "落地窗"
            }
          ]
        },
        {
          id: "so-d5a",
          type: {
            en: "Type D-5A",
            zh: "D-5A 户型"
          },
          size: {
            en: "894 sq.ft. (83 sqm)",
            zh: "894 平方英尺 (83 平方米)"
          },
          description: {
            en: "Elegant 2-bedroom unit combining comfort and style.",
            zh: "结合舒适与风格的优雅两居室单元。"
          },
          image: "https://lh3.googleusercontent.com/d/1UEQ8VWiVKFRV0paJwvhyx16k-Z5hbsDP",
          price: {
            en: "From RM 2,650,000",
            zh: "售价从 RM 2,650,000 起"
          },
          perks: [
            {
              en: "2 Bedrooms",
              zh: "2 房"
            },
            {
              en: "Functional Design",
              zh: "功能性设计"
            },
            {
              en: "Exclusive Residence Status",
              zh: "尊贵住宅地位"
            }
          ]
        }
      ]
    },
    "jewel": {
      "name": {
        "en": "Jewel Residences",
        "zh": "珍宝精品公寓"
      },
      "image": "https://lh3.googleusercontent.com/d/1T94H34E1aI-Kgh9zoJxgayktQUt6z27i",
      "description": {
        "en": "Tower 2: A refined sanctuary of elegance. 267 boutique residences for the discerning few wanting ultimate privacy.",
        "zh": "Tower 2: 优雅且宁静的避风港。267 套精品公寓，专为追求极致私密的少数人士打造。"
      },
      "stats": [
        {
          "label": {
            "en": "Height",
            "zh": "高度"
          },
          "value": {
            "en": "49 Storeys",
            "zh": "49 层"
          }
        },
        {
          "label": {
            "en": "Unit Count",
            "zh": "单位总数"
          },
          "value": {
            "en": "267 Units",
            "zh": "267 套"
          }
        },
        {
          "label": {
            "en": "Style",
            "zh": "风格"
          },
          "value": {
            "en": "Boutique Luxury",
            "zh": "精品奢华"
          }
        }
      ],
      "layouts": [
        {
          "id": "jw-a1",
          "type": {
            "en": "Type A1",
            "zh": "Type A1"
          },
          "size": {
            "en": "678 sq.ft. (63 sqm)",
            "zh": "678 平方英尺 (63 平方米)"
          },
          "description": {
            "en": "678 sq.ft. (63 sqm) - 1 Bedroom",
            "zh": "678 平方英尺 (63 平方米) - 1 房"
          },
          "image": "https://lh3.googleusercontent.com/d/1CkzG8AnlBKkrBYK2guHxkgorFRn6geFb",
          "price": {
            "en": "From RM 1,900,000",
            "zh": "售价从 RM 1,900,000 起"
          },
          "perks": [
            {
              "en": "1 Bedroom",
              "zh": "1 房"
            },
            {
              "en": "Artisan Wood Flooring",
              "zh": "工匠级实木地板"
            },
            {
              "en": "Luxury Kitchen Suite",
              "zh": "奢华整体厨房"
            }
          ]
        },
        {
          "id": "jw-b1",
          "type": {
            "en": "Type B1",
            "zh": "Type B1"
          },
          "size": {
            "en": "678 sq.ft. (63 sqm)",
            "zh": "678 平方英尺 (63 平方米)"
          },
          "description": {
            "en": "678 sq.ft. (63 sqm) - 1 Bedroom",
            "zh": "678 平方英尺 (63 平方米) - 1 房"
          },
          "image": "https://lh3.googleusercontent.com/d/19YgGCwwYJQu-bFy0jlJlTcs-RAIFHQof",
          "price": {
            "en": "From RM 1,950,000",
            "zh": "售价从 RM 1,950,000 起"
          },
          "perks": [
            {
              "en": "1 Bedroom",
              "zh": "1 房"
            },
            {
              "en": "European Branded Fittings",
              "zh": "欧洲品牌卫浴五金"
            },
            {
              "en": "High-Ceiling Grandeur",
              "zh": "高挑天花板气派感"
            }
          ]
        },
        {
          "id": "jw-b3",
          "type": {
            "en": "Type B3",
            "zh": "Type B3"
          },
          "size": {
            "en": "754 sq.ft. (70 sqm)",
            "zh": "754 平方英尺 (70 平方米)"
          },
          "description": {
            "en": "754 sq.ft. (70 sqm) - 1 Bedroom",
            "zh": "754 平方英尺 (70 平方米) - 1 房"
          },
          "image": "https://lh3.googleusercontent.com/d/1V-ZGoA-cVTG2JIiY3eN-RDIa-ZvJGFL5",
          "price": {
            "en": "From RM 2,150,000",
            "zh": "售价从 RM 2,150,000 起"
          },
          "perks": [
            {
              "en": "1 Bedroom",
              "zh": "1 房"
            },
            {
              "en": "Boutique Intimacy",
              "zh": "精品级私密空间"
            },
            {
              "en": "Premium Natural Stone",
              "zh": "高端天然石材饰面"
            }
          ]
        },
        {
          "id": "jw-c1",
          "type": {
            "en": "Type C1",
            "zh": "Type C1"
          },
          "size": {
            "en": "958 sq.ft. (89 sqm)",
            "zh": "958 平方英尺 (89 平方米)"
          },
          "description": {
            "en": "958 sq.ft. (89 sqm) - 1+1 Bedroom",
            "zh": "958 平方英尺 (89 平方米) - 1+1 房"
          },
          "image": "https://lh3.googleusercontent.com/d/1zslfFwGdCQvARED-eLTJsqc0gXhUJiFd",
          "price": {
            "en": "From RM 2,850,000",
            "zh": "售价从 RM 2,850,000 起"
          },
          "perks": [
            {
              "en": "1+1 Bedrooms",
              "zh": "1+1 房"
            },
            {
              "en": "Flexible Study Wing",
              "zh": "灵活书房侧翼"
            },
            {
              "en": "Dual Vista Concept",
              "zh": "双面景观概念"
            }
          ]
        },
        {
          "id": "jw-c2",
          "type": {
            "en": "Type C2",
            "zh": "Type C2"
          },
          "size": {
            "en": "980 sq.ft. (91 sqm)",
            "zh": "980 平方英尺 (91 平方米)"
          },
          "description": {
            "en": "980 sq.ft. (91 sqm) - 2 Bedroom",
            "zh": "980 平方英尺 (91 平方米) - 2 房"
          },
          "image": "https://lh3.googleusercontent.com/d/1ohYl2ZsFDqxhlNzeayS_6t4Mkzry1M13",
          "price": {
            "en": "From RM 3,000,000",
            "zh": "售价从 RM 3,000,000 起"
          },
          "perks": [
            {
              "en": "2 Bedrooms",
              "zh": "2 房"
            },
            {
              "en": "Designer Walk-in Closets",
              "zh": "设计师级步入式衣帽间"
            },
            {
              "en": "Chef's Kitchen",
              "zh": "大厨级厨房"
            }
          ]
        },
        {
          "id": "jw-d1",
          "type": {
            "en": "Type D1 (Dual Key)",
            "zh": "Type D1 (双钥匙)"
          },
          "size": {
            "en": "1227 sq.ft. (114 sqm)",
            "zh": "1227 平方英尺 (114 平方米)"
          },
          "description": {
            "en": "1227 sq.ft. (114 sqm) - 2 Bedroom Dual Key",
            "zh": "1227 平方英尺 (114 平方米) - 2 房双钥匙"
          },
          "image": "https://lh3.googleusercontent.com/d/1NDNekNvYb4zqOF-JhPawX3aRxIdgh6Zk",
          "price": {
            "en": "From RM 3,800,000",
            "zh": "售价从 RM 3,800,000 起"
          },
          "perks": [
            {
              "en": "Dual Key Layout",
              "zh": "双钥匙布局"
            },
            {
              "en": "2 Bedrooms",
              "zh": "2 房"
            },
            {
              "en": "Investment Potential",
              "zh": "投资潜力"
            }
          ]
        }
      ]
    }
  },
  "features": {
    "title": {
      "en": "Integrated Lifestyle",
      "zh": "综合生活方式"
    },
    "items": [
      {
        "id": "feat-1",
        "title": {
          "en": "Tower 1: SO/ Sofitel",
          "zh": "Tower 1: SO/ Sofitel"
        },
        "description": {
          "en": "78-storey tower featuring world-class hotel and residences.",
          "zh": "78 层高楼，拥有世界级酒店与公寓。"
        },
        "icon": "Hotel"
      },
      {
        "id": "feat-2",
        "title": {
          "en": "Tower 2: Jewel Residences",
          "zh": "Tower 2: Jewel Residences"
        },
        "description": {
          "en": "49-storey residential tower offering exclusive KLCC views.",
          "zh": "49 层住宅大楼，提供独一无二的 KLCC 景观。"
        },
        "icon": "Home"
      },
      {
        "id": "feat-3",
        "title": {
          "en": "Tower 3: Grade-A Office",
          "zh": "Tower 3: 甲级写字楼"
        },
        "description": {
          "en": "29-storey BCA Green Mark Gold certified workspace.",
          "zh": "29 层获得 BCA Green Mark Gold 认证的办公空间。"
        },
        "icon": "Briefcase"
      },
      {
        "id": "feat-4",
        "title": {
          "en": "The Boulevard",
          "zh": "零售连廊"
        },
        "description": {
          "en": "Premium retail space managed by Pavilion group.",
          "zh": "由 Pavilion 团队管理的优质零售空间。"
        },
        "icon": "ShoppingBag"
      }
    ]
  },
  "location": {
    "title": {
      "en": "The Ultimate Address",
      "zh": "顶级地段"
    },
    "subtitle": {
      "en": "Strategic Location",
      "zh": "战略地段"
    },
    "description": {
      "en": "Strategically located on Jalan Ampang, Oxley Towers offers unparalleled connectivity and proximity to KL's most prestigious landmarks.",
      "zh": "Oxley Towers 位于 Jalan Ampang 的战略位置，提供无与伦比的连通性，毗邻吉隆坡最负盛名的地标。"
    },
    "mapImage": "https://lh3.googleusercontent.com/d/1BDPyXN7UBNZ7ibGEelEnZ5i8zsxGGAga",
    "highlights": [
      {
        "en": "Walking distance to KLCC Park & Suria KLCC",
        "zh": "步行可达 KLCC 公园与 Suria KLCC 商场"
      },
      {
        "en": "Near Ampang Park LRT/MRT station",
        "zh": "靠近 Ampang Park LRT/MRT 站"
      },
      {
        "en": "Direct access to major highways",
        "zh": "直接通往主要高速公路"
      },
      {
        "en": "Heart of the Embassy Row area",
        "zh": "大使馆区的核心地带"
      }
    ]
  },
  "facilities": {
    "title": {
      "en": "World-Class Facilities",
      "zh": "世界级设施"
    },
    "items": [
      {
        "id": "fac-1",
        "name": {
          "en": "Infinity Sky Pool",
          "zh": "天际无边际泳池"
        },
        "icon": "Waves"
      },
      {
        "id": "fac-2",
        "name": {
          "en": "Sky Gym",
          "zh": "空中健身房"
        },
        "icon": "Dumbbell"
      },
      {
        "id": "fac-3",
        "name": {
          "en": "Zen Garden",
          "zh": "禅意花园"
        },
        "icon": "Leaf"
      },
      {
        "id": "fac-4",
        "name": {
          "en": "Co-working Space",
          "zh": "共享办公空间"
        },
        "icon": "Users"
      },
      {
        "id": "fac-5",
        "name": {
          "en": "Sky Lounge",
          "zh": "空中酒廊"
        },
        "icon": "Coffee"
      },
      {
        "id": "fac-6",
        "name": {
          "en": "Entertainment Deck",
          "zh": "娱乐平台"
        },
        "icon": "Tv"
      }
    ]
  },
  "gallery": {
    "title": {
      "en": "Visual Experience",
      "zh": "视觉体验"
    },
    "items": [
      {
        "id": "gal-1",
        "url": "https://lh3.googleusercontent.com/d/1IimGS_hsADdJyIG_9suTf7TGXO-iQ1PD",
        "title": "Tower Exterior"
      },
      {
        "id": "gal-2",
        "url": "https://lh3.googleusercontent.com/d/1Q3lOCFp0Q-Q4LmztytvY0OfR0MPUk49m",
        "title": "Luxury Suite"
      },
      {
        "id": "gal-3",
        "url": "https://lh3.googleusercontent.com/d/1Q6KwKpRJYvjXrb8eWSHrEJZ7I9on_t_7",
        "title": "3 Towers"
      },
      {
        "id": "gal-4",
        "url": "https://lh3.googleusercontent.com/d/1hh0flmOavVP7r9qcfbHl7IDwxOINFtTf",
        "title": "Living Area"
      },
      {
        "id": "gal-5",
        "url": "https://lh3.googleusercontent.com/d/1X4t_OAN_YFax2gn5pdp0YbqLvRhSeSks",
        "title": "Infinity Pool View"
      },
      {
        "id": "1778139461069",
        "url": "https://lh3.googleusercontent.com/d/1tDdZXqyGkJ1AcQksTdDD0S_AaBC1SGLv",
        "title": "Drop-off Area"
      },
      {
        "id": "1778145724276",
        "url": "https://lh3.googleusercontent.com/d/1QLbsw1SgHZXbEagjIpcujuHvU_QYpiHR",
        "title": "Facilities Floor Pelan"
      },
      {
        "id": "1778145756652",
        "url": "https://lh3.googleusercontent.com/d/1hg6HUWep1ALJfBrhFVR66iQBtLYD9vgy",
        "title": "Grand Lobby"
      },
      {
        "id": "1778145804421",
        "url": "https://lh3.googleusercontent.com/d/18xbQVz-ZzIMz2hKASnZzcvZecP0PO0-u",
        "title": "Jewel Drop Off Area"
      },
      {
        "id": "1778145825436",
        "url": "https://lh3.googleusercontent.com/d/1ODLXointHP07fZRL6SnB0I9TUrsXFWgF",
        "title": "Gym and Swimming Pool"
      },
      {
        "id": "1778145870488",
        "url": "https://lh3.googleusercontent.com/d/1kbG518mYAa7iW0tDCOKTXMjMzeEc66yf",
        "title": "Dinning and Living"
      },
      {
        "id": "1778145900764",
        "url": "https://lh3.googleusercontent.com/d/1lHX9lok4JlobRrKi6E3CiSyD-v4Dvs3Z",
        "title": "Bedroom"
      },
      {
        "id": "1778145915463",
        "url": "https://lh3.googleusercontent.com/d/1HrJn0Tosfzi9MlqZIzNBnHpGa_uP_rtl",
        "title": "Bathroom"
      },
      {
        "id": "1778145942879",
        "url": "https://lh3.googleusercontent.com/d/1Y0LHC2jEyfqVOlmNRPXZJVSeH4s4S0YC",
        "title": "KLCC View"
      }
    ]
  },
  "cta": {
    "title": {
      "en": "Own the Sky Today",
      "zh": "今天就开始拥有这座天空之城"
    },
    "subtitle": {
      "en": "Register your interest for exclusive preview and special launch packages.",
      "zh": "注册您的兴趣，获取专属预览和特别发布优惠包。"
    },
    "buttonText": {
      "en": "WhatsApp Inquiry",
      "zh": "WhatsApp 咨询"
    },
    "formType": "built-in"
  },
  "agent": {
    "name": "Yee Woei Shyan",
    "ren": "46305",
    "agency": "IQI Holdings SDN BHD",
    "agencyReg": "E(1)1584",
    "phone": "+60195598932",
    "email": "saltyfish1987@gmail.com",
    "whatsappMessage": "[OXLEYKLCC] I am interested in Oxley Towers.",
    "address": "IQI Global Head Office, Level 11, Tower 1, Menara Bangsar, KL"
  },
  "disclaimers": {
    "management": {
      "en": "This website is managed by Yee Woei Shyan (REN 46305) of IQI Agency. It is for informational and marketing purposes only and does not represent the official website of the developer.",
      "zh": "本网站由 IQI 代理公司的 Yee Woei Shyan (REN 46305) 管理。仅供参考和营销之用，不代表开发商的官方网站。"
    },
    "general": {
      "en": "All information is subject to change. Architectural renderings and artist impressions are for illustrative purposes only.",
      "zh": "所有信息如有更改，恕不另行通知。建筑平面图和艺术家印象仅用于说明目的。"
    }
  },
  "seo": {
    "title": "Oxley Towers KLCC | Luxury Residences & SO/ KL Residences",
    "description": "Oxley Towers KLCC - The Jewel of Kuala Lumpur Skyline. Discover luxury freehold residences including SO/ KL Residences and Jewel Residences in the heart of KLCC.",
    "keywords": "Oxley Towers KLCC, SO/ KL Residences, Jewel Residences, KL luxury condo, Kuala Lumpur real estate, freehold KLCC property, Oxley Rising"
  },
  "legal": {
    "terms": {
      "en": "By accessing this website, you agree to be bound by these terms of use and all applicable laws and regulations. The information provided on this website is for general informational purposes only.",
      "zh": "访问本网站即表示您同意受这些使用条和所有适用法律法规的约束。本网站提供的信息仅供一般参考之用。"
    },
    "privacy": {
      "en": "We value your privacy. Any personal information you provide to us through this website will be handled in accordance with our privacy policy and the Personal Data Protection Act (PDPA).",
      "zh": "我们重视您的隐私。您通过本网站向我们提供的任何个人信息都将根据我们的隐私政策和个人数据保护法 (PDPA) 进行处理。"
    }
  }
};
