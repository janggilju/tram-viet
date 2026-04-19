export type GalleryCategory = "all" | "interior" | "food";

export interface GalleryImage {
  src: string;
  alt: {
    ko: string;
    en: string;
    vi: string;
    ja: string;
    zh: string;
  };
  category: "interior" | "food";
}

export const galleryImages: GalleryImage[] = [
  // Interior photos
  {
    src: "/gallery/interior-lanterns-1.jpg",
    alt: {
      ko: "대나무 등불 인테리어",
      en: "Bamboo lantern interior",
      vi: "Đèn lồng tre trang trí",
      ja: "竹のランタンインテリア",
      zh: "竹灯笼装饰",
    },
    category: "interior",
  },
  {
    src: "/gallery/interior-painting-1.jpg",
    alt: {
      ko: "베트남 시골 풍경 그림",
      en: "Vietnamese countryside painting",
      vi: "Tranh phong cảnh làng quê Việt Nam",
      ja: "ベトナムの田園風景画",
      zh: "越南乡村风景画",
    },
    category: "interior",
  },
  {
    src: "/gallery/interior-pottery.jpg",
    alt: {
      ko: "전통 도자기와 젓가락",
      en: "Traditional pottery and chopsticks",
      vi: "Gốm sứ và đũa truyền thống",
      ja: "伝統的な陶器と箸",
      zh: "传统陶器和筷子",
    },
    category: "interior",
  },
  {
    src: "/gallery/interior-hall.jpg",
    alt: {
      ko: "전통 베트남식 홀 인테리어",
      en: "Traditional Vietnamese hall interior",
      vi: "Nội thất hội trường truyền thống",
      ja: "伝統的なベトナムのホール",
      zh: "传统越南大厅内饰",
    },
    category: "interior",
  },
  {
    src: "/gallery/interior-lanterns-2.jpg",
    alt: {
      ko: "라탄 등불 장식",
      en: "Rattan lantern decorations",
      vi: "Đèn lồng mây trang trí",
      ja: "ラタンランタンの装飾",
      zh: "藤编灯笼装饰",
    },
    category: "interior",
  },
  {
    src: "/gallery/interior-conical-hats.jpg",
    alt: {
      ko: "논라 (베트남 전통 모자) 장식",
      en: "Conical hat (nón lá) ceiling decoration",
      vi: "Trang trí nón lá trên trần",
      ja: "ノンラー（ベトナム笠）の天井装飾",
      zh: "斗笠天花板装饰",
    },
    category: "interior",
  },
  {
    src: "/gallery/interior-painting-2.jpg",
    alt: {
      ko: "봄꽃 베트남 시골 그림",
      en: "Spring blossom Vietnamese countryside painting",
      vi: "Tranh làng quê mùa xuân",
      ja: "春の花が咲くベトナムの田園画",
      zh: "春花越南乡村画",
    },
    category: "interior",
  },
  // Food photos
  {
    src: "/gallery/food-set-platter.jpg",
    alt: {
      ko: "베트남 요리 세트 플래터",
      en: "Vietnamese cuisine set platter",
      vi: "Mâm cỗ Việt Nam",
      ja: "ベトナム料理セットプラッター",
      zh: "越南料理拼盘",
    },
    category: "food",
  },
  {
    src: "/gallery/food-seafood-soup.jpg",
    alt: {
      ko: "해산물 파인애플 수프",
      en: "Seafood pineapple soup",
      vi: "Canh chua hải sản",
      ja: "シーフードパイナップルスープ",
      zh: "海鲜菠萝汤",
    },
    category: "food",
  },
  {
    src: "/gallery/food-braised-meat.jpg",
    alt: {
      ko: "돼지고기 조림과 밥",
      en: "Braised pork with rice",
      vi: "Thịt kho với cơm",
      ja: "豚肉の煮物とご飯",
      zh: "红烧肉配米饭",
    },
    category: "food",
  },
  {
    src: "/gallery/food-pho.jpg",
    alt: {
      ko: "소고기 쌀국수 (포)",
      en: "Beef pho noodle soup",
      vi: "Phở bò",
      ja: "牛肉フォー",
      zh: "牛肉河粉",
    },
    category: "food",
  },
  {
    src: "/gallery/food-beef-noodles.jpg",
    alt: {
      ko: "소고기 볶음면",
      en: "Stir-fried beef noodles",
      vi: "Mì xào bò",
      ja: "牛肉焼きそば",
      zh: "牛肉炒面",
    },
    category: "food",
  },
  {
    src: "/gallery/food-crispy-shrimp.jpg",
    alt: {
      ko: "바삭한 새우튀김",
      en: "Crispy fried shrimp",
      vi: "Tôm chiên giòn",
      ja: "エビのカリカリ揚げ",
      zh: "脆皮炸虾",
    },
    category: "food",
  },
  {
    src: "/gallery/food-spring-rolls.jpg",
    alt: {
      ko: "신선한 월남쌈 (스프링롤)",
      en: "Fresh spring rolls",
      vi: "Gỏi cuốn tôm",
      ja: "生春巻き",
      zh: "鲜虾春卷",
    },
    category: "food",
  },
  {
    src: "/gallery/food-eggplant-tofu.jpg",
    alt: {
      ko: "가지와 두부 요리",
      en: "Eggplant and tofu dish",
      vi: "Cà tím đậu hũ",
      ja: "ナスと豆腐の料理",
      zh: "茄子豆腐",
    },
    category: "food",
  },
  {
    src: "/gallery/food-seafood-noodles.jpg",
    alt: {
      ko: "해산물 볶음면",
      en: "Seafood stir-fried noodles",
      vi: "Mì xào hải sản",
      ja: "シーフード焼きそば",
      zh: "海鲜炒面",
    },
    category: "food",
  },
  {
    src: "/gallery/food-tofu-sauce-1.jpg",
    alt: {
      ko: "매콤한 두부 요리",
      en: "Spicy tofu with sauce",
      vi: "Đậu hũ sốt cay",
      ja: "スパイシー豆腐",
      zh: "辣酱豆腐",
    },
    category: "food",
  },
  {
    src: "/gallery/food-tofu-sauce-2.jpg",
    alt: {
      ko: "두부 요리와 밥",
      en: "Tofu dish with rice",
      vi: "Đậu hũ sốt với cơm",
      ja: "豆腐料理とご飯",
      zh: "豆腐配米饭",
    },
    category: "food",
  },
  {
    src: "/gallery/food-mushroom-noodles.jpg",
    alt: {
      ko: "버섯 야채 볶음면",
      en: "Mushroom vegetable noodles",
      vi: "Mì xào nấm rau",
      ja: "きのこ野菜焼きそば",
      zh: "蘑菇蔬菜炒面",
    },
    category: "food",
  },
  {
    src: "/gallery/food-mango-shrimp-salad.jpg",
    alt: {
      ko: "망고 새우 샐러드",
      en: "Mango shrimp salad",
      vi: "Gỏi xoài tôm",
      ja: "マンゴーエビサラダ",
      zh: "芒果虾沙拉",
    },
    category: "food",
  },
  {
    src: "/gallery/food-cha-gio.jpg",
    alt: {
      ko: "짜조 (베트남 튀김 스프링롤)",
      en: "Chả giò (Vietnamese fried spring rolls)",
      vi: "Chả giò",
      ja: "チャーゾー（ベトナム揚げ春巻き）",
      zh: "越南炸春卷",
    },
    category: "food",
  },
  {
    src: "/gallery/food-chicken-passionfruit.jpg",
    alt: {
      ko: "패션후르츠 소스 치킨과 밥",
      en: "Chicken with passion fruit sauce and rice",
      vi: "Gà sốt chanh dây với cơm",
      ja: "パッションフルーツソースチキンとご飯",
      zh: "百香果酱鸡配米饭",
    },
    category: "food",
  },
  {
    src: "/gallery/food-ca-kho-to.jpg",
    alt: {
      ko: "까꼬또 (뚝배기 생선조림)",
      en: "Cá kho tộ (caramelized fish in clay pot)",
      vi: "Cá kho tộ",
      ja: "カーコートー（土鍋煮魚）",
      zh: "砂锅焖鱼",
    },
    category: "food",
  },
  {
    src: "/gallery/food-steamed-shrimp.jpg",
    alt: {
      ko: "찐새우",
      en: "Steamed shrimp",
      vi: "Tôm hấp",
      ja: "蒸しエビ",
      zh: "蒸虾",
    },
    category: "food",
  },
  {
    src: "/gallery/food-shrimp-spring-rolls.jpg",
    alt: {
      ko: "새우 스프링롤 튀김",
      en: "Fried shrimp spring rolls",
      vi: "Chả giò tôm",
      ja: "エビ揚げ春巻き",
      zh: "炸虾春卷",
    },
    category: "food",
  },
  {
    src: "/gallery/food-bun-cha.jpg",
    alt: {
      ko: "분짜 (쌀국수와 구운고기)",
      en: "Bún chả (rice noodles with grilled meat)",
      vi: "Bún chả",
      ja: "ブンチャー（焼肉とビーフン）",
      zh: "烤肉米粉",
    },
    category: "food",
  },
  {
    src: "/gallery/food-nem-lui.jpg",
    alt: {
      ko: "넴루이 (스프링롤과 쌀국수)",
      en: "Nem lụi with rice noodles",
      vi: "Nem lụi cuốn bánh tráng",
      ja: "ネムルイとビーフン",
      zh: "越南烤肉卷配米粉",
    },
    category: "food",
  },
  {
    src: "/gallery/food-banh-xeo-set.jpg",
    alt: {
      ko: "반쎄오 세트 (베트남 크레페)",
      en: "Bánh xèo set (Vietnamese crepe)",
      vi: "Bánh xèo set",
      ja: "バインセオセット（ベトナムクレープ）",
      zh: "越南煎饼套餐",
    },
    category: "food",
  },
  {
    src: "/gallery/food-full-table-2.jpg",
    alt: {
      ko: "베트남 요리 풀 테이블 세트",
      en: "Full table Vietnamese cuisine spread",
      vi: "Mâm cỗ đầy đủ món Việt",
      ja: "ベトナム料理フルテーブルセット",
      zh: "越南料理满桌套餐",
    },
    category: "food",
  },
];
