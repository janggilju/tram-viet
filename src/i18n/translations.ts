export type Lang = "ko" | "en" | "vi" | "ja" | "zh";

export const langLabels: Record<Lang, string> = {
  ko: "한국어",
  en: "English",
  vi: "Tiếng Việt",
  ja: "日本語",
  zh: "中文",
};

export const translations: Record<Lang, Record<string, Record<string, string>>> = {
  ko: {
    nav: {
      about: "소개",
      menu: "메뉴",
      location: "위치",
      contact: "연락처",
      reservation: "예약하기",
    },
    hero: {
      badge: "정통 베트남 요리",
      subtitle: "현지식 전통 베트남식당",
      description:
        "다낭의 중심에서 정통 베트남 요리를 경험하세요. 신선한 재료와 전통 레시피로 만든 본격 베트남 음식을 제공합니다.",
      viewMenu: "메뉴 보기",
      reserve: "예약하기",
    },
    about: {
      title: "소개",
      food: "정통 베트남 요리",
      foodDesc:
        "전통 레시피로 만든 포, 반쎄오, 분짜 등 다양한 베트남 요리를 맛보세요.",
      fresh: "신선한 재료",
      freshDesc:
        "매일 신선한 허브와 채소, 최고급 재료만을 사용하여 건강하고 맛있는 요리를 제공합니다.",
      home: "가정식 스타일",
      homeDesc:
        "베트남 가정의 따뜻한 맛을 그대로 담아 편안하고 정겨운 식사를 즐기실 수 있습니다.",
    },
    menu: {
      title: "메뉴",
      subtitle: "정통 베트남 요리를 만나보세요",
    },
    reservation: {
      title: "예약하기",
      subtitle: "편리하게 온라인으로 예약하세요",
      name: "이름",
      phone: "전화번호",
      email: "이메일",
      optional: "선택사항",
      date: "날짜",
      time: "시간",
      guests: "인원",
      guestUnit: "명",
      guestOver: "명 이상",
      message: "요청사항",
      messagePlaceholder: "알레르기, 특별 요청 등...",
      submit: "WhatsApp으로 예약하기",
      sending: "전송 중...",
      successTitle: "예약 요청이 전송되었습니다!",
      successMsg:
        "WhatsApp을 통해 예약이 확인됩니다. 곧 연락드리겠습니다.",
      successMsgSub:
        "Your reservation request has been sent via WhatsApp. We will confirm shortly.",
      newReservation: "새 예약하기",
      note: "예약은 WhatsApp을 통해 확정됩니다",
      required: "*",
    },
    location: {
      title: "위치",
      address: "주소",
      hours: "영업시간",
      hoursValue: "매일 09:30 ~ 22:00",
      hoursSub: "Daily 9:30 AM - 10:00 PM",
      phone: "전화",
      viewMap: "Google Maps에서 보기 →",
    },
    contact: {
      title: "연락처",
      phoneLabel: "전화 / WhatsApp / Zalo",
    },
    gallery: {
      title: "갤러리",
      subtitle: "Trạm Việt의 공간과 요리를 만나보세요",
      gridTitle: "포토 갤러리",
    },
    event: {
      banner: "🎉 4/20~4/29 전 메뉴 20% 할인!",
      badge: "EVENT",
      discount: "20% OFF",
    },
    footer: {
      tagline: "Authentic Vietnamese Cuisine · 현지식 전통 베트남식당",
    },
  },
  en: {
    nav: {
      about: "About",
      menu: "Menu",
      location: "Location",
      contact: "Contact",
      reservation: "Reserve",
    },
    hero: {
      badge: "Authentic Vietnamese Cuisine",
      subtitle: "Traditional Vietnamese Restaurant",
      description:
        "Experience authentic Vietnamese cuisine in the heart of Da Nang. Fresh ingredients and traditional recipes for genuine Vietnamese food.",
      viewMenu: "View Menu",
      reserve: "Reserve",
    },
    about: {
      title: "About",
      food: "Authentic Vietnamese",
      foodDesc:
        "Enjoy a variety of Vietnamese dishes like Pho, Banh Xeo, Bun Cha, made with traditional recipes.",
      fresh: "Fresh Ingredients",
      freshDesc:
        "We use only the freshest herbs, vegetables, and premium ingredients for healthy and delicious dishes.",
      home: "Home-style Cooking",
      homeDesc:
        "Experience the warm flavors of a Vietnamese home for a cozy and memorable dining experience.",
    },
    menu: {
      title: "Menu",
      subtitle: "Discover our authentic Vietnamese cuisine",
    },
    reservation: {
      title: "Reservation",
      subtitle: "Book your table online conveniently",
      name: "Name",
      phone: "Phone",
      email: "Email",
      optional: "optional",
      date: "Date",
      time: "Time",
      guests: "Guests",
      guestUnit: "",
      guestOver: "10+",
      message: "Special Request",
      messagePlaceholder: "Allergies, special requests, etc...",
      submit: "Reserve via WhatsApp",
      sending: "Sending...",
      successTitle: "Reservation request sent!",
      successMsg:
        "Your reservation will be confirmed via WhatsApp. We will contact you shortly.",
      successMsgSub: "",
      newReservation: "New Reservation",
      note: "Reservation confirmed via WhatsApp",
      required: "*",
    },
    location: {
      title: "Location",
      address: "Address",
      hours: "Hours",
      hoursValue: "Daily 9:30 AM - 10:00 PM",
      hoursSub: "",
      phone: "Phone",
      viewMap: "View on Google Maps →",
    },
    contact: {
      title: "Contact",
      phoneLabel: "Phone / WhatsApp / Zalo",
    },
    gallery: {
      title: "Gallery",
      subtitle: "Discover the space and cuisine of Trạm Việt",
      gridTitle: "Photo Gallery",
    },
    event: {
      banner: "🎉 Apr 20~29: 20% OFF All Menu!",
      badge: "EVENT",
      discount: "20% OFF",
    },
    footer: {
      tagline: "Authentic Vietnamese Cuisine in Đà Nẵng",
    },
  },
  vi: {
    nav: {
      about: "Giới thiệu",
      menu: "Thực đơn",
      location: "Vị trí",
      contact: "Liên hệ",
      reservation: "Đặt bàn",
    },
    hero: {
      badge: "Ẩm thực Việt Nam chính thống",
      subtitle: "Nhà hàng Việt Nam truyền thống",
      description:
        "Trải nghiệm ẩm thực Việt Nam chính thống giữa trung tâm Đà Nẵng. Nguyên liệu tươi ngon và công thức truyền thống.",
      viewMenu: "Xem thực đơn",
      reserve: "Đặt bàn",
    },
    about: {
      title: "Giới thiệu",
      food: "Ẩm thực Việt Nam",
      foodDesc:
        "Thưởng thức các món ăn Việt Nam đa dạng như Phở, Bánh Xèo, Bún Chả, được chế biến theo công thức truyền thống.",
      fresh: "Nguyên liệu tươi",
      freshDesc:
        "Chúng tôi chỉ sử dụng rau thơm, rau củ tươi nhất và nguyên liệu cao cấp.",
      home: "Phong cách gia đình",
      homeDesc:
        "Trải nghiệm hương vị ấm áp của gia đình Việt Nam cho bữa ăn ấm cúng và đáng nhớ.",
    },
    menu: {
      title: "Thực đơn",
      subtitle: "Khám phá ẩm thực Việt Nam chính thống",
    },
    reservation: {
      title: "Đặt bàn",
      subtitle: "Đặt bàn trực tuyến tiện lợi",
      name: "Họ tên",
      phone: "Số điện thoại",
      email: "Email",
      optional: "tùy chọn",
      date: "Ngày",
      time: "Giờ",
      guests: "Số khách",
      guestUnit: " khách",
      guestOver: "10+",
      message: "Yêu cầu đặc biệt",
      messagePlaceholder: "Dị ứng, yêu cầu đặc biệt...",
      submit: "Đặt bàn qua WhatsApp",
      sending: "Đang gửi...",
      successTitle: "Yêu cầu đặt bàn đã được gửi!",
      successMsg:
        "Đặt bàn sẽ được xác nhận qua WhatsApp. Chúng tôi sẽ liên hệ sớm.",
      successMsgSub: "",
      newReservation: "Đặt bàn mới",
      note: "Đặt bàn được xác nhận qua WhatsApp",
      required: "*",
    },
    location: {
      title: "Vị trí",
      address: "Địa chỉ",
      hours: "Giờ mở cửa",
      hoursValue: "Hàng ngày 9:30 - 22:00",
      hoursSub: "",
      phone: "Điện thoại",
      viewMap: "Xem trên Google Maps →",
    },
    contact: {
      title: "Liên hệ",
      phoneLabel: "Điện thoại / WhatsApp / Zalo",
    },
    gallery: {
      title: "Thư viện ảnh",
      subtitle: "Khám phá không gian và ẩm thực của Trạm Việt",
      gridTitle: "Bộ sưu tập ảnh",
    },
    event: {
      banner: "🎉 20~29/4: Giảm 20% toàn bộ thực đơn!",
      badge: "SỰ KIỆN",
      discount: "Giảm 20%",
    },
    footer: {
      tagline: "Ẩm thực Việt Nam chính thống tại Đà Nẵng",
    },
  },
  ja: {
    nav: {
      about: "紹介",
      menu: "メニュー",
      location: "場所",
      contact: "連絡先",
      reservation: "予約",
    },
    hero: {
      badge: "本格ベトナム料理",
      subtitle: "伝統的なベトナムレストラン",
      description:
        "ダナンの中心で本格的なベトナム料理を体験してください。新鮮な食材と伝統的なレシピ。",
      viewMenu: "メニューを見る",
      reserve: "予約する",
    },
    about: {
      title: "紹介",
      food: "本格ベトナム料理",
      foodDesc:
        "伝統的なレシピで作ったフォー、バインセオ、ブンチャーなど多様なベトナム料理。",
      fresh: "新鮮な食材",
      freshDesc:
        "毎日新鮮なハーブと野菜、最高級の食材のみを使用しています。",
      home: "家庭料理スタイル",
      homeDesc:
        "ベトナム家庭の温かい味をそのまま再現した居心地の良い食事体験。",
    },
    menu: {
      title: "メニュー",
      subtitle: "本格ベトナム料理をお楽しみください",
    },
    reservation: {
      title: "予約",
      subtitle: "オンラインで簡単に予約",
      name: "お名前",
      phone: "電話番号",
      email: "メール",
      optional: "任意",
      date: "日付",
      time: "時間",
      guests: "人数",
      guestUnit: "名",
      guestOver: "名以上",
      message: "特別リクエスト",
      messagePlaceholder: "アレルギー、特別なご要望など...",
      submit: "WhatsAppで予約する",
      sending: "送信中...",
      successTitle: "予約リクエストが送信されました！",
      successMsg:
        "WhatsAppで予約が確認されます。まもなくご連絡いたします。",
      successMsgSub: "",
      newReservation: "新しい予約",
      note: "予約はWhatsAppで確認されます",
      required: "*",
    },
    location: {
      title: "場所",
      address: "住所",
      hours: "営業時間",
      hoursValue: "毎日 9:30 ～ 22:00",
      hoursSub: "",
      phone: "電話",
      viewMap: "Google Mapsで見る →",
    },
    contact: {
      title: "連絡先",
      phoneLabel: "電話 / WhatsApp / Zalo",
    },
    gallery: {
      title: "ギャラリー",
      subtitle: "Trạm Việtの空間と料理をご覧ください",
      gridTitle: "フォトギャラリー",
    },
    event: {
      banner: "🎉 4/20~29 全メニュー20%OFF！",
      badge: "イベント",
      discount: "20% OFF",
    },
    footer: {
      tagline: "ダナンの本格ベトナム料理レストラン",
    },
  },
  zh: {
    nav: {
      about: "关于",
      menu: "菜单",
      location: "位置",
      contact: "联系方式",
      reservation: "预订",
    },
    hero: {
      badge: "正宗越南美食",
      subtitle: "传统越南餐厅",
      description:
        "在岘港中心体验正宗越南美食。新鲜食材和传统配方打造地道越南风味。",
      viewMenu: "查看菜单",
      reserve: "预订",
    },
    about: {
      title: "关于",
      food: "正宗越南美食",
      foodDesc:
        "品尝用传统配方制作的河粉、煎饼、烤肉米粉等各种越南菜肴。",
      fresh: "新鲜食材",
      freshDesc:
        "每天只使用最新鲜的香草、蔬菜和优质食材。",
      home: "家常风味",
      homeDesc:
        "感受越南家庭的温馨味道，享受舒适难忘的用餐体验。",
    },
    menu: {
      title: "菜单",
      subtitle: "探索正宗越南美食",
    },
    reservation: {
      title: "预订",
      subtitle: "在线便捷预订",
      name: "姓名",
      phone: "电话",
      email: "邮箱",
      optional: "选填",
      date: "日期",
      time: "时间",
      guests: "人数",
      guestUnit: "位",
      guestOver: "位以上",
      message: "特殊要求",
      messagePlaceholder: "过敏、特殊要求等...",
      submit: "通过WhatsApp预订",
      sending: "发送中...",
      successTitle: "预订请求已发送！",
      successMsg:
        "预订将通过WhatsApp确认。我们将尽快与您联系。",
      successMsgSub: "",
      newReservation: "新预订",
      note: "预订通过WhatsApp确认",
      required: "*",
    },
    location: {
      title: "位置",
      address: "地址",
      hours: "营业时间",
      hoursValue: "每天 9:30 - 22:00",
      hoursSub: "",
      phone: "电话",
      viewMap: "在Google Maps查看 →",
    },
    contact: {
      title: "联系方式",
      phoneLabel: "电话 / WhatsApp / Zalo",
    },
    gallery: {
      title: "画廊",
      subtitle: "探索Trạm Việt的空间与美食",
      gridTitle: "照片集",
    },
    event: {
      banner: "🎉 4/20~29 全菜单八折优惠！",
      badge: "活动",
      discount: "八折",
    },
    footer: {
      tagline: "岘港正宗越南美食餐厅",
    },
  },
};
