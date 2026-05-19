export interface System {
  id: string;
  badge: string;
  themeColor: string;
  coverImage: string;
  previewImages: string[];
  skin: {
    bgClass: string;
    borderClass: string;
    textClass: string;
    glowClass: string;
    spineClass: string;
    goldFrame: boolean;
  };
  iconName: "car" | "shopping-cart" | "boxes" | "cpu" | "ticket" | "bell-concierge" | "flower";
  translations: {
    ar: {
      title: string;
      subtitle: string;
      description: string;
      features: string[];
      featureDescs: string[];
    };
    en: {
      title: string;
      subtitle: string;
      description: string;
      features: string[];
      featureDescs: string[];
    };
    fr: {
      title: string;
      subtitle: string;
      description: string;
      features: string[];
      featureDescs: string[];
    };
  };
}

export const servicesData: System[] = [
  {
    id: "atellas-fleet",
    badge: "01",
    themeColor: "#e0b034", // Gold
    coverImage: "/atellas.png",
    previewImages: ["/atellas.png"],
    skin: {
      bgClass: "bg-gradient-to-br from-[#1a1815] via-[#100f0d] to-[#050504]",
      borderClass: "border-[#e0b034]/50 shadow-[inset_0_0_20px_rgba(224,176,52,0.15)]",
      textClass: "text-[#ecdba2]",
      glowClass: "shadow-[0_0_35px_rgba(224,176,52,0.25)]",
      spineClass: "bg-gradient-to-b from-[#e0b034] via-[#b68912] to-[#6e5005]",
      goldFrame: true,
    },
    iconName: "car",
    translations: {
      ar: {
        title: "أتيلاس فليت - كراء السيارات",
        subtitle: "منصة كراء السيارات الفاخرة",
        description: "تجربة ويب احترافية لإدارة تدفق الحجوزات، والمتابعة اللحظية لأسطول السيارات، ولوحة تحكم العمليات في نظام موحد متكامل.",
        features: [
          "تدفق حجوزات سهل وسلس",
          "مراقبة الأسطول لحظياً",
          "لوحة تحكم العمليات الموحدة",
          "تقارير مالية وتنبيهات الصيانة"
        ],
        featureDescs: [
          "حجز سيارات فوري مع خيارات الدفع والفلترة المتقدمة.",
          "تتبع حالة السيارات، توفرها، وأماكن تواجدها لحظة بلحظة.",
          "لوحة تفاعلية لإدارة الحجوزات النشطة، عقود الكراء، وتسليم السيارات.",
          "متابعة مصاريف التشغيل وجدولة مواعيد الصيانة الدورية للسيارات."
        ]
      },
      en: {
        title: "AtellasFleet Transport",
        subtitle: "Premium Car Rental Platform",
        description: "Professional web experience for reservation flow, real-time fleet visibility, and operations dashboard in one unified system.",
        features: [
          "Sleek Reservation Flow",
          "Real-Time Fleet Visibility",
          "Unified Operations Dashboard",
          "Financial & Maintenance Alerts"
        ],
        featureDescs: [
          "Instant car booking with advanced filtering and dynamic pricing options.",
          "Track active vehicles, availability, and location indicators in real-time.",
          "An interactive hub to manage customer bookings, rental contracts, and handovers.",
          "Monitor operating expenses, cash flows, and schedule periodic maintenance."
        ]
      },
      fr: {
        title: "AtellasFleet Transport",
        subtitle: "Plateforme de Location de Voitures",
        description: "Une expérience web professionnelle pour la gestion des réservations, la visibilité de la flotte en temps réel et un tableau de bord opérationnel unifié.",
        features: [
          "Flux de Réservation Fluide",
          "Suivi de Flotte en Temps Réel",
          "Tableau de Bord Unifié",
          "Alertes Financières & Maintenance"
        ],
        featureDescs: [
          "Réservation immédiate de voitures avec filtres avancés et tarification dynamique.",
          "Suivi en temps réel de l'état des véhicules, disponibilité et géolocalisation.",
          "Console interactive pour gérer les contrats de location, réservations et retours.",
          "Suivi des dépenses opérationnelles et planification de la maintenance préventive."
        ]
      }
    }
  },
  {
    id: "teckmizanne-pos",
    badge: "02",
    themeColor: "#f59e0b", // Amber/Gold
    coverImage: "/techmizane_1.png",
    previewImages: [
      "/techmizane_1.png",
      "/techmizane_2.png",
      "/techmizane_3.png",
      "/techmizane_4.png"
    ],
    skin: {
      bgClass: "bg-gradient-to-br from-[#1c1810] via-[#100e09] to-[#050403]",
      borderClass: "border-[#e0b034]/40 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]",
      textClass: "text-[#f3e8ff]",
      glowClass: "shadow-[0_0_35px_rgba(245,158,11,0.25)]",
      spineClass: "bg-gradient-to-b from-amber-400 via-yellow-600 to-amber-900",
      goldFrame: true,
    },
    iconName: "shopping-cart",
    translations: {
      ar: {
        title: "تيك ميزان كاش",
        subtitle: "منصة نقاط البيع وإدارة المقاهي والمطاعم",
        description: "منصة متكاملة ومتطورة لنقاط البيع (POS) وإدارة المخزون، مصممة للمطاعم والمقاهي. تدعم واجهات ذكية للنادل (إدارة الطاولات التفاعلية والطلبات)، لوحة تحكم المطبخ الفورية، نقاط بيع سحابية محاسبية، وإدارة دقيقة للمخزون مع تتبع تدقيق الأنشطة والأمان.",
        features: [
          "واجهة النادل اللوحية الذكية",
          "لوحة مراقبة المطبخ والطباعة الحرارية",
          "نقطة بيع وإدارة المدفوعات المرنة",
          "تدقيق الأنشطة وتتبع العمليات الشامل"
        ],
        featureDescs: [
          "إدارة تفاعلية للطاولات (فارغة، مشغولة، محجوزة) مقسمة حسب المناطق مع تسجيل الطلبات وتخصيص الملاحظات.",
          "عرض فوري للطلبات في المطبخ، تغيير حالتها، وتوليد تذاكر حرارية PDF للمطابخ مقاس 80 مم تلقائياً.",
          "شاشة بيع سريعة للمحاسبين تدعم الدفع النقدي والبطاقات والدفع المختلط متزامنة فوراً مع المخزن.",
          "تتبع تفصيلي لأي عملية إضافة أو تعديل أو حذف بالأنظمة يسجل اسم المستخدم ودوره والتاريخ لضمان الشفافية."
        ]
      },
      en: {
        title: "TechMizane Cash",
        subtitle: "Smart POS & Restaurant ERP",
        description: "An advanced, integrated restaurant POS and inventory ecosystem. Features interactive waiter tablets for table/order customization, real-time kitchen display dashboards with 80mm thermal ticketing, flexible POS cashier checkouts, and comprehensive activity audit logs for top security.",
        features: [
          "Smart Waiter Tablet CRM",
          "Kitchen Display & Thermal Printing",
          "Robust POS & Mixed Payments",
          "Comprehensive Operations Audit Trail"
        ],
        featureDescs: [
          "Interactive color-coded table maps (free, occupied, reserved) with direct category browsing and ingredient remarks.",
          "Live order tracking for kitchen staff, one-click state updates, and automatic 80mm KDS ticket generation.",
          "High-speed cashier checkouts supporting Cash, Card, and Mixed payments backed by database transactions.",
          "Foolproof system logs recording every insert, update, or delete with user roles and timestamps for total transparency."
        ]
      },
      fr: {
        title: "TechMizane Cash",
        subtitle: "Système POS & Gestion Restauration",
        description: "Une plateforme POS et de gestion de stocks innovante pour restaurants et cafés. Propose des tablettes serveurs interactives pour la prise de commandes, un écran de cuisine en temps réel avec impression de tickets 80mm, une caisse sécurisée et un audit complet des activités.",
        features: [
          "Tablette Serveur & Plan de Tables",
          "Écran Cuisine & Impression Thermique",
          "Caisse POS & Paiements Multi-Modes",
          "Historique d'Audit & Sécurité Totale"
        ],
        featureDescs: [
          "Plan interactif avec statuts colorés (libre, occupé, réservé) par zones, ajout d'articles et remarques personnalisées.",
          "Affichage instantané des commandes en cuisine avec minuterie, et génération automatique de tickets PDF 80mm.",
          "Écran de caisse avancé avec support Espèces, Carte, et Mixte sécurisé par transactions SQL.",
          "Journal d'activité inviolable traçant chaque ajout, modification et suppression avec rôle utilisateur et horodatage."
        ]
      }
    }
  },
  {
    id: "prostock-logistics",
    badge: "03",
    themeColor: "#3b82f6", // Blue
    coverImage: "/prostock_logistics.png",
    previewImages: ["/prostock_logistics.png"],
    skin: {
      bgClass: "bg-gradient-to-br from-[#0c1a30] via-[#07101e] to-[#02050a]",
      borderClass: "border-[#e0b034]/40 shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]",
      textClass: "text-[#dbeafe]",
      glowClass: "shadow-[0_0_35px_rgba(59,130,246,0.25)]",
      spineClass: "bg-gradient-to-b from-[#3b82f6] via-[#1d4ed8] to-[#1e3a8a]",
      goldFrame: true,
    },
    iconName: "boxes",
    translations: {
      ar: {
        title: "بروستوك - أتمتة المستودعات",
        subtitle: "منظومة تحسين وإدارة المخازن الذكية",
        description: "مجموعة أدوات برمجية متطورة لتحسين وتنسيق عمليات المستودعات والمخازن، تساهم في تقليل وقت معالجة الطلبات بنسبة 40%.",
        features: [
          "تقليل معالجة الطلبات بنسبة 40%",
          "تتبع المسارات الداخلية للمخزون",
          "تحليل سعة المستودعات الذكي",
          "جدولة الشحنات وعمليات التوصيل"
        ],
        featureDescs: [
          "أتمتة تسلسل سحب البضائع وتجهيز الطلبات لزيادة سرعة التعبئة والتسليم.",
          "أدوات تتبع دقيقة لمواقع البضائع على الرفوف والأقسام المختلفة.",
          "خرائط حرارية للمخازن توضح السعة المستغلة والمنتجات الأكثر طلباً.",
          "إدارة أوامر الشحن وتنسيق عمليات النقل مع شركات الخدمات اللوجستية."
        ]
      },
      en: {
        title: "ProStock Logistics",
        subtitle: "Warehouse Optimization Suite",
        description: "Warehouse optimization suite reducing order processing time by 40% through intelligent task sequencing and space tracking.",
        features: [
          "40% Faster Order Processing",
          "Granular Bin & Shelf Tracking",
          "Intelligent Warehouse Capacity Map",
          "Shipment Scheduling & Tracking"
        ],
        featureDescs: [
          "Automates picking sequences and packing lists to optimize processing speeds.",
          "Precise digital logs of every item location on warehouse shelves.",
          "Sleek heatmap visualization of active storage usage and popular items.",
          "Manage shipping logs, parcel weights, and coordinate with logistic partners."
        ]
      },
      fr: {
        title: "ProStock Logistics",
        subtitle: "Suite d'Optimisation d'Entrepôt",
        description: "Une suite avancée d'optimisation d'entrepôt réduisant le temps de traitement des commandes de 40% grâce au séquençage intelligent des tâches.",
        features: [
          "Commandes Traitées 40% Plus Vite",
          "Suivi Précis par Allée & Rayon",
          "Cartographie de Capacité Entrepôt",
          "Planification de Livraisons & Transports"
        ],
        featureDescs: [
          "Optimise le chemin de préparation (picking) pour accélérer l'expédition.",
          "Enregistrement numérique de la position exacte de chaque palette et colis.",
          "Visualisation graphique de l'espace occupé et des zones de stockage d'élite.",
          "Organisation des chargements de camions et suivi des expéditions de fret."
        ]
      }
    }
  },
  {
    id: "droguerie-erp-pos",
    badge: "04",
    themeColor: "#10b981", // Emerald Green
    coverImage: "/droguerie_2.png",
    previewImages: ["/droguerie_2.png", "/droguerie_3.png", "/droguerie_1.png"],
    skin: {
      bgClass: "bg-gradient-to-br from-[#062c1e] via-[#041e14] to-[#010a07]",
      borderClass: "border-[#e0b034]/50 shadow-[inset_0_0_20px_rgba(16,185,129,0.15)]",
      textClass: "text-[#eedffa]",
      glowClass: "shadow-[0_0_35px_rgba(16,185,129,0.25)]",
      spineClass: "bg-gradient-to-b from-[#10b981] via-[#059669] to-[#064e3b]",
      goldFrame: true,
    },
    iconName: "cpu",
    translations: {
      ar: {
        title: "تيكي دروجري - نظام نقاط البيع والمستودعات",
        subtitle: "منصة مبيعات وترخيص تجاري متكاملة",
        description: "منصة مؤسسية متكاملة لإدارة مبيعات ومخازن صيدليات ومحلات التجميل والعقاقير. تتميز بقارئ باركود تفاعلي ونظام ترخيص تجاري مدمج وإدارة صلاحيات متطورة وسجل تدقيق شامل ومصروفات تشغيلية.",
        features: [
          "نقطة بيع ذكية وفائقة السرعة", 
          "نظام التراخيص والتفعيل التجاري", 
          "إدارة مستخدمين وصلاحيات هرمية", 
          "سجل الأمان والتدقيق المتكامل",
          "التقارير الإحصائية والتحليلية الذكية",
          "إدارة المصاريف التشغيلية",
          "طباعة وتوليد مستندات باركود وحرارية",
          "إدارة المرتجعات والإلغاء الذكي"
        ],
        featureDescs: [
          "قارئ باركود فوري تفاعلي (Beeps)، دعم وحدات القياس كقطع أو قياس متري مع دفع مرن متعدد.",
          "شاشة تفعيل تمنع تشغيل النظام دون ترخيص، مع مولد تراخيص محددة المدة (شهري، سنوي، مدى الحياة).",
          "أدوار مدمجة (مدير، كاشير، مشرف) مع جدول صلاحيات (Permission Matrix) مرن للغاية لحماية العمليات.",
          "تسجيل أوتوماتيكي شامل ومحمي لكافة أحداث الموظفين لمنع السرقة الداخلية والتلاعب المالي.",
          "لوحات أداء البائعين ومعدل السلة، تقارير المنتجات الراكدة والمبيعات بنطاق زمني ورسومات بيانية.",
          "تصنيف المصاريف وتتبعها مع دورة موافقة ثلاثية المراحل (Approved) من الإدارة لحساب صافي الربح الحقيقي.",
          "توليد باركود للمنتجات وطباعة ملصقات الرفوف، مع دعم متكامل للطابعات الحرارية (80 مم و 58 مم) تلقائياً.",
          "إلغاء فواتير بموافقة المدير وتفويض مزدوج، مع استرجاع تلقائي جزئي أو كلي للمخزون بدقة."
        ]
      },
      en: {
        title: "TiKiDroguerie ERP & POS System",
        subtitle: "Interactive Pharmacy & Retail Platform",
        description: "An enterprise-grade POS and inventory system featuring commercial licensing, interactive barcode scanning, hierarchical RBAC access, full security audit logs, operational expenses control, thermal receipts printer integration, and returns validation.",
        features: [
          "Interactive Smart POS Terminal", 
          "Commercial Licensing & Activation", 
          "Hierarchical RBAC Staff Matrix", 
          "Comprehensive Safety Audit Trail",
          "Advanced Business Intelligence Insights",
          "Operational Expenses Workflow",
          "Thermal POS & Barcode Print Engine",
          "Returns & Double Auth Cancellations"
        ],
        featureDescs: [
          "Instant barcode scanner reader (Beeps), support for units or metric length sales, and flexible split payments.",
          "Protective license block with custom administrator license generator tool (Monthly, Yearly, Lifetime keys).",
          "Predefined groups (Admin, Cashier, Operator) and a granular Permission Matrix to shield critical operations.",
          "Automatic secured audit logs mapping every stock change and receipt event to the responsible handler.",
          "Cashier speed sheets, average basket metrics, dead stock flags, and interactive time-based net earnings charts.",
          "Expense categorization with a triple-stage cashier-to-manager approval cycle (Approved) to calculate actual net profit.",
          "Auto barcode generation for shelfs, integrated support for thermal receipt printers (80mm & 58mm) and auto-print.",
          "High-value refunds require manager approval with double authorization and instant stock restoration."
        ]
      },
      fr: {
        title: "Système TiKiDroguerie ERP & POS",
        subtitle: "Plateforme Digitale pour Pharmacies & Cosmétiques",
        description: "Une plateforme d'entreprise intégrée pour pharmacies, parapharmacies et quincailleries. Comprend une caisse enregistreuse instantanée, un module de licences commerciales, des rôles RBAC stricts, un journal de sécurité complet, le calcul du bénéfice net réel par validation des coûts et l'impression de reçus.",
        features: [
          "Caisse POS Tactile et Interactive", 
          "Gestion des Licences & Trousseaux", 
          "Matrice des Rôles & Accès RBAC", 
          "Registre de Sécurité & d'Audit",
          "Rapports & Statistiques Décisives",
          "Gestion des Coûts & Validation",
          "Impression Thermique & Codes-Barres",
          "Retours & Annulations Sécurisés"
        ],
        featureDescs: [
          "Lecteur code-barres instantané (Beeps), ventes par unités ou longueur métrique, et paiements divisés.",
          "Écran d'activation de sécurité avec générateur de clés temporelles de licence (Mensuel, Annuel, À vie).",
          "Matrice de permissions configurable pour administrateurs, caissiers et gérants de stock.",
          "Audit de sécurité inviolable qui journalise chaque événement avec le nom du caissier responsable.",
          "Fiche de performance caissiers, produits dormants et rapports de chiffres d'affaires avec graphiques.",
          "Enregistrement des coûts (loyer, salaires) soumis au gérant (Approved) pour calculer le bénéfice net.",
          "Génération de codes-barres et impression optimisée sur imprimantes thermiques standard (80mm et 58mm).",
          "Double validation de gérant pour annuler un ticket et réintégration automatique des articles au stock."
        ]
      }
    }
  },
  {
    id: "pack-joue",
    badge: "05",
    themeColor: "#2563eb", // Vibrant Blue
    coverImage: "/packjoue_1.png",
    previewImages: [
      "/packjoue_2.png",
      "/packjoue_3.png",
      "/packjoue_4.png",
      "/packjoue_1.png"
    ],
    skin: {
      bgClass: "bg-gradient-to-br from-[#0c1e40] via-[#05102a] to-[#010615]",
      borderClass: "border-[#e0b034]/50 shadow-[inset_0_0_20px_rgba(37,99,235,0.15)]",
      textClass: "text-[#dbeafe]",
      glowClass: "shadow-[0_0_35px_rgba(37,99,235,0.25)]",
      spineClass: "bg-gradient-to-b from-[#2563eb] via-[#1d4ed8] to-[#1e3a8a]",
      goldFrame: true,
    },
    iconName: "ticket",
    translations: {
      ar: {
        title: "باك جوي - قرية الأطفال",
        subtitle: "منظومة إدارة ألعاب وترفيه الأطفال",
        description: "نظام متكامل لإدارة مناطق الألعاب الترفيهية، يتيح بيع الوقت، طباعة تذاكر الفواتير الحرارية مع رمز QR، الموارد البشرية مع التعرف على الوجه، وإشعارات واتساب الفورية للآباء لضمان الراحة والأمان.",
        features: [
          "إدارة مبيعات وتذاكر أوقات اللعب",
          "إشعارات واتساب فورية للآباء",
          "طباعة تذاكر حرارية بتقنية QR",
          "نظام حضور وانصراف بالتعرف على الوجه",
          "تقارير محاسبية ومالية ديناميكية",
          "إدارة أيام العمل والرواتب والموظفين"
        ],
        featureDescs: [
          "إنشاء تذاكر دخول زمنية وتتبع دخول وخروج الأطفال من قرية الألعاب.",
          "إرسال رسائل آلية لولي الأمر فور دخول الطفل لضمان أمان الأطفال رقمياً.",
          "دعم طباعة الإيصالات الحرارية لتسهيل وتسريع خروج الأطفال بأمان.",
          "نظام متطور لحضور الموظفين مدعوم بالبصمة الوجهية لمنع التلاعب وتوفير الوقت.",
          "توليد تقارير شاملة (Excel و PDF) لساعات العمل، الحضور، وتدقيق المحاسبة.",
          "إدارة بيانات ومستندات الموظفين مع إعدادات ديناميكية لأيام الراحة والغياب."
        ]
      },
      en: {
        title: "Pack Joué (KidsVillage)",
        subtitle: "Kids Playtime & Ticketing Suite",
        description: "An integrated operational system for play areas featuring time-based ticketing, instant WhatsApp notifications to parents, QR-code thermal receipts, smart facial recognition for attendance, and comprehensive HR & POS management.",
        features: [
          "Kids Playtime Ticketing",
          "Instant WhatsApp Notifications",
          "QR Thermal Receipts Printing",
          "Smart Facial Attendance",
          "Dynamic Financial Reports",
          "HR & Schedule Management"
        ],
        featureDescs: [
          "Create time-based admission passes and accurately track child entry and exit.",
          "Send automated messages to parents upon child entry for digital peace of mind.",
          "Support for thermal receipt generation with QR codes to speed up safe checkouts.",
          "Advanced employee log system powered by facial recognition to eliminate buddy-punching.",
          "Generate comprehensive reports (PDF & Excel) for audits, payrolls, and sales.",
          "Manage staff profiles, fluid onboarding, and configure dynamic rest days."
        ]
      },
      fr: {
        title: "Pack Joué (KidsVillage)",
        subtitle: "Gestion de Billetterie & Espaces de Jeux",
        description: "Un système opérationnel complet pour les aires de jeux permettant la billetterie par temps, l'envoi d'alertes WhatsApp aux parents, l'impression de reçus thermiques avec code QR, la gestion RH et le pointage par reconnaissance faciale.",
        features: [
          "Billetterie & Vente de Temps",
          "Notifications WhatsApp Digitales",
          "Reçus Thermiques & Codes QR",
          "Pointage par Reconnaissance Faciale",
          "Rapports Dynamiques & Audits",
          "Gestion RH & Temps de Travail"
        ],
        featureDescs: [
          "Création de tickets à durée limitée pour suivre les entrées et sorties des enfants.",
          "Envoi de messages automatiques au tuteur pour une tranquillité d'esprit totale.",
          "Impression instantanée de reçus de sortie par scan de QR code sécurisé.",
          "Outil de pointage inviolable pour les employés basé sur la reconnaissance faciale.",
          "Extraction de données et bilans financiers aux formats PDF et Excel.",
          "Création de dossiers employés avec capture photo et gestion flexible des jours de repos."
        ]
      }
    }
  },
  {
    id: "tick-hotel",
    badge: "06",
    themeColor: "#9f1239", // Deep Burgundy (Rose 700)
    coverImage: "/tickhotel_1.jpg",
    previewImages: [
      "/tickhotel_1.jpg",
      "/tickhotel_2.png"
    ],
    skin: {
      bgClass: "bg-gradient-to-br from-[#4c0519] via-[#881337] to-[#2a040b]",
      borderClass: "border-[#e0b034]/50 shadow-[inset_0_0_20px_rgba(225,29,72,0.15)]",
      textClass: "text-[#ffe4e6]",
      glowClass: "shadow-[0_0_35px_rgba(159,18,57,0.25)]",
      spineClass: "bg-gradient-to-b from-[#881337] via-[#be123c] to-[#4c0519]",
      goldFrame: true,
    },
    iconName: "bell-concierge",
    translations: {
      ar: {
        title: "تيك هوتيل - إدارة الفنادق",
        subtitle: "نظام الفنادق والضيافة الذكي (Hotel ERP)",
        description: "حل متكامل لإدارة منشآت الضيافة، يربط بين إدارة المخزون والمشتريات ونقاط البيع. يتميز بنظام طلب رقمي لا تلامسي يسمح للنزلاء بطلب الطعام والخدمات عبر مسح رمز QR من طاولات المطعم أو من داخل الغرف.",
        features: [
          "إدارة المخزون والمشتريات",
          "قوائم الطعام الرقمية الذكية",
          "خدمة الغرف عبر الهاتف (Room Service)",
          "نقاط البيع السحابية (POS)"
        ],
        featureDescs: [
          "تحكم دقيق بمخزون المطعم، مواد التنظيف، ومستلزمات الغرف لتقليل الهدر.",
          "تمكين النزلاء من مسح رمز QR على الطاولة لإرسال الطلب مباشرة إلى المطبخ.",
          "بوابة تفاعلية لطلب الخدمات والأطعمة من داخل الغرفة عبر هواتف النزلاء الشخصية.",
          "شاشة كاشير متقدمة متزامنة مع شاشات عرض المطبخ وإدارة المطعم."
        ]
      },
      en: {
        title: "Tick Hotel - Smart ERP",
        subtitle: "Hotel & Restaurant Management Suite",
        description: "A comprehensive hospitality management solution integrating inventory, procurement, and POS. Features a contactless QR ordering system enabling guests to order food from tables or rooms directly to the kitchen.",
        features: [
          "Inventory & Procurement Control",
          "Smart QR Digital Menus",
          "Digital Room Service",
          "Cloud POS System"
        ],
        featureDescs: [
          "Precise tracking of restaurant inventory, cleaning supplies, and room amenities.",
          "Allow guests to scan a table QR code to send orders straight to the kitchen.",
          "Interactive portal for room service and amenity requests via personal devices.",
          "Advanced cashier screen synced with the kitchen display system (KDS)."
        ]
      },
      fr: {
        title: "Tick Hotel - ERP Intelligent",
        subtitle: "Suite de Gestion Hôtelière & Restauration",
        description: "Une solution complète de gestion hôtelière intégrant l'inventaire, les achats et le point de vente. Intègre un système de commande sans contact par QR code depuis les tables ou les chambres.",
        features: [
          "Gestion des Stocks & Achats",
          "Menus Numériques via QR",
          "Service en Chambre Digital",
          "Point de Vente Cloud (POS)"
        ],
        featureDescs: [
          "Suivi précis des stocks du restaurant, des produits de nettoyage et des commodités.",
          "Permet aux clients de scanner un code QR pour envoyer leur commande en cuisine.",
          "Portail interactif pour les demandes de service en chambre via smartphone.",
          "Écran de caisse avancé synchronisé avec le système d'affichage en cuisine."
        ]
      }
    }
  },
  {
    id: "riad-spa-luna",
    badge: "07",
    themeColor: "#b45309", // Amber/Gold/Bronze
    coverImage: "/riadspa_1.jpg",
    previewImages: [
      "/riadspa_1.jpg",
      "/riadspa_2.jpg"
    ],
    skin: {
      bgClass: "bg-gradient-to-br from-[#2a1705] via-[#45280b] to-[#120801]", // Dark Moroccan Bronze
      borderClass: "border-[#e0b034]/50 shadow-[inset_0_0_20px_rgba(180,83,9,0.15)]",
      textClass: "text-[#fef3c7]",
      glowClass: "shadow-[0_0_35px_rgba(180,83,9,0.25)]",
      spineClass: "bg-gradient-to-b from-[#b45309] via-[#d97706] to-[#78350f]",
      goldFrame: true,
    },
    iconName: "flower",
    translations: {
      ar: {
        title: "رياض سبا لونا",
        subtitle: "نظام إدارة المنتجعات الصحية (SPA POS)",
        description: "نظام نقاط بيع (POS) متكامل ومتخصص في إدارة المنتجعات الصحية بالمغرب. يجمع بين الأصالة المغربية والتكنولوجيا الحديثة موفراً حلاً شاملاً للحجوزات، المبيعات، وإدارة الموظفين والعملاء.",
        features: [
          "إدارة الحجوزات والتقويم التفاعلي",
          "سجل وتتبع زيارات العملاء",
          "نقاط بيع متقدمة للخدمات والمنتجات",
          "تقارير الإيرادات ومؤشرات الأداء (KPIs)"
        ],
        featureDescs: [
          "نظام حجز متقدم مع عرض تقويمي لتخصيص الغرف والمعالجين بدون تضارب.",
          "قاعدة بيانات شاملة للعملاء النشطين وسجل لزياراتهم المفضلة ونظام ولاء.",
          "تحديد الأسعار والمدد للخدمات (مساج، حمام ملكي) وبيع منتجات العناية.",
          "بطاقات إحصائية فورية للمبيعات اليومية وتحليل المنتجات الأكثر مبيعاً."
        ]
      },
      en: {
        title: "Riad Spa Luna",
        subtitle: "Luxury Spa Management & POS",
        description: "An integrated Point of Sale and management system designed for luxury spas. Combines authentic Moroccan aesthetics with modern technology to streamline daily operations, bookings, and CRM.",
        features: [
          "Interactive Booking Calendar",
          "Client CRM & Loyalty Tracking",
          "Advanced POS for Services & Retail",
          "Instant Revenue KPIs & Reports"
        ],
        featureDescs: [
          "Advanced reservation system with visual scheduling for rooms and therapists.",
          "Comprehensive database of active clients, booking history, and loyalty programs.",
          "Flexible pricing for treatments (e.g., Hammam Royal) and retail product sales.",
          "Real-time dashboards showing daily bookings, top-selling items, and total revenue."
        ]
      },
      fr: {
        title: "Riad Spa Luna",
        subtitle: "Système POS & Gestion des Spas",
        description: "Un système de point de vente et de gestion intégré pour les spas de luxe au Maroc. Allie l'esthétique marocaine authentique à la technologie pour optimiser les réservations, les ventes et la CRM.",
        features: [
          "Calendrier de Réservations Interactif",
          "Suivi CRM & Fidélité Client",
          "Caisse POS pour Soins & Produits",
          "KPIs et Rapports de Chiffre d'Affaires"
        ],
        featureDescs: [
          "Système de réservation avancé avec allocation visuelle des salles et thérapeutes.",
          "Base de données clients, historique des visites et gestion de la fidélité.",
          "Tarification flexible des services (Hammam Royal, Soins) et vente de cosmétiques.",
          "Tableau de bord en temps réel affichant les réservations du jour et les revenus."
        ]
      }
    }
  },
  {
    id: "occasions-auto-expert",
    badge: "08",
    themeColor: "#1d4ed8", // Modern Royal Blue
    coverImage: "/oae_4.png", // Login
    previewImages: [
      "/oae_4.png",
      "/oae_1.png",
      "/oae_2.png",
      "/oae_3.png"
    ],
    skin: {
      bgClass: "bg-gradient-to-br from-[#0b1b3d] via-[#1d4ed8] to-[#040d21]", // Royal Blue leather
      borderClass: "border-[#e0b034]/50 shadow-[inset_0_0_20px_rgba(29,78,216,0.15)]",
      textClass: "text-[#dbeafe]",
      glowClass: "shadow-[0_0_35px_rgba(29,78,216,0.25)]",
      spineClass: "bg-gradient-to-b from-[#1d4ed8] via-[#2563eb] to-[#0b1b3d]",
      goldFrame: true,
    },
    iconName: "car",
    translations: {
      ar: {
        title: "Occasions Auto Expert",
        subtitle: "نظام إدارة وكالات السيارات المتكامل",
        description: "حل رقمي شامل مصمم خصيصاً لأتمتة ورقمنة جميع العمليات اليومية لوكالات السيارات. يربط بدقة بين إدارة المخزون، المبيعات، حساب المصاريف لكل سيارة، ونظام إدارة علاقات العملاء (CRM).",
        features: [
          "إدارة المخزون المتقدمة (Inventory)",
          "حساب الأرباح والمصاريف والضرائب",
          "المطابقة الذكية للعملاء (Prospects)",
          "لوحة مؤشرات الأداء الحية (Dashboard)"
        ],
        featureDescs: [
          "تتبع كامل لدورة حياة السيارة من الشراء إلى البيع والتجهيز مع تفاصيل الحالة والمواصفات.",
          "ربط كل سيارة بمصاريفها الخاصة (إصلاح، غسيل) لحساب صافي الربح تلقائياً وربطه بالضرائب.",
          "نظام CRM ذكي يقوم بمطابقة متطلبات العملاء المحتملين تلقائياً مع السيارات المتاحة.",
          "عرض فوري للمبيعات، الأرباح، المصروفات، ورواتب وعمولات الموظفين برسوم بيانية واضحة."
        ]
      },
      en: {
        title: "Occasions Auto Expert",
        subtitle: "Integrated Car Dealership ERP",
        description: "A comprehensive digital solution tailored to automate and digitize daily operations of modern car dealerships. Streamlines vehicle inventory tracking, profit calculations, CRM, and auto invoicing.",
        features: [
          "Advanced Fleet & Inventory Control",
          "Expense, Tax & Profit Calculation",
          "Smart Prospect & Lead Matching",
          "Real-time Analytics Dashboard"
        ],
        featureDescs: [
          "End-to-end vehicle tracking from acquisition to sale, detailed specifications and preparation status.",
          "Log custom vehicle prep expenses (washing, repairs) to instantly evaluate net margin with TVA.",
          "Smart matching algorithms alerting sales reps when available stock fits a prospect's budget.",
          "Interactive KPIs showing dealer revenue, commissions, active inventory, and net results."
        ]
      },
      fr: {
        title: "Occasions Auto Expert",
        subtitle: "ERP Intégré pour Concessionnaires",
        description: "Une solution digitale complète conçue pour automatiser les opérations des concessionnaires automobiles. Centralise le stock de véhicules, le calcul des marges nettes, la CRM et la facturation automatique.",
        features: [
          "Gestion Avancée du Parc (Stock)",
          "Calcul des Marges, Frais & TVA",
          "Matching Intelligent des Prospects",
          "Tableau de Bord & KPIs en Temps Réel"
        ],
        featureDescs: [
          "Suivi complet du cycle de vie du véhicule, de l'acquisition à la vente avec statuts personnalisés.",
          "Associez les frais de préparation (réparation, lavage) pour calculer automatiquement la marge nette.",
          "Algorithme intelligent qui associe les besoins d'un prospect au stock disponible en temps réel.",
          "Visualisation en direct du chiffre d'affaires, des commissions, et des résultats avec graphiques."
        ]
      }
    }
  }
];

export const uiTranslations = {
  ar: {
    navHome: "الرئيسية",
    navServices: "الكتالوج",
    navProjects: "المشاريع",
    navContact: "تواصل معنا",
    heroBadge: "كتالوج الأنظمة والحلول الرقمية الفاخرة",
    heroTitlePart1: "حلول تقنية",
    heroTitleHighlight: " تعزز نمو أعمالك",
    heroDesc: "استكشف كتالوج أنظمتنا الرقمية الراقية المصممة لتمكين التحول الرقمي وتسهيل إدارة العمليات والشركات بأعلى مستويات الاحترافية والجمال الفني.",
    mainFeaturesHeader: "المميزات الرئيسية للنظام",
    featuresFooter: "نظام ذكي مصمم للشركات النخبوية والحلول المتكاملة.",
    ctaButton: "اطلب النظام الآن",
    closeBookTooltip: "إغلاق الكتاب والعودة للمكتبة",
    flipCoverTooltip: "تصفح التفاصيل",
    backShelfBtn: "الرجوع للمكتبة الرئيسية",
    nextBookBtn: "النظام التالي",
    prevBookBtn: "النظام السابق",
    exploreTitle: "تصفح الخدمات",
    shelfTitle: "المكتبة الرقمية للنخبة",
    spineText: "DevNApp",
    brandTitle: "DevNApp",
    brandSubtitle: "التحول الرقمي الفاخر",
    bottomTitle1: "تصميم فاخر",
    bottomDesc1: "واجهة Premium حديثة",
    bottomTitle2: "أنظمة ذكية",
    bottomDesc2: "حلول متطورة للأعمال",
    bottomTitle3: "أتمتة ذكية",
    bottomDesc3: "أتمتة وربط الأنظمة",
    bottomTitle4: "تجربة مستخدم راقية",
    bottomDesc4: "سهولة وفعالية مطلقة",
  },
  en: {
    navHome: "Home",
    navServices: "Catalog",
    navProjects: "Projects",
    navContact: "Contact Us",
    heroBadge: "Luxury Digital Systems Catalog",
    heroTitlePart1: "Tech Solutions",
    heroTitleHighlight: " Elevating Your Business",
    heroDesc: "Explore our premium digital systems catalog, designed to streamline complex business processes, improve operational speed, and provide world-class visual aesthetics.",
    mainFeaturesHeader: "Key System Features",
    featuresFooter: "An elite smart platform built for modern business transformation.",
    ctaButton: "Order the System Now",
    closeBookTooltip: "Close Book & Return to Library",
    flipCoverTooltip: "Browse Details",
    backShelfBtn: "Return to Library Shelf",
    nextBookBtn: "Next System",
    prevBookBtn: "Previous System",
    exploreTitle: "Explore Services",
    shelfTitle: "Elite Digital Library",
    spineText: "DevNApp",
    brandTitle: "DevNApp",
    brandSubtitle: "LUXURY SMART SOLUTIONS",
    bottomTitle1: "Ultra Luxury Design",
    bottomDesc1: "Premium high-end corporate style",
    bottomTitle2: "Intelligent Systems",
    bottomDesc2: "Enterprise-grade business tools",
    bottomTitle3: "Smart Automation",
    bottomDesc3: "Integrated cross-platform pipes",
    bottomTitle4: "Premium UX",
    bottomDesc4: "Seamless physics & animations",
  },
  fr: {
    navHome: "Accueil",
    navServices: "Catalog",
    navProjects: "Projets",
    navContact: "Contactez-nous",
    heroBadge: "Catalogue Premium de Solutions Digitales",
    heroTitlePart1: "Des Solutions",
    heroTitleHighlight: " Pour Sublimer Votre Activité",
    heroDesc: "Découvrez notre collection exclusive de systèmes numériques haut de gamme, conçus pour optimiser vos flux de travail avec une esthétique épurée et des fonctionnalités de pointe.",
    mainFeaturesHeader: "Fonctionnalités Clés",
    featuresFooter: "Une plateforme intelligente d'élite conçue pour la transformation moderne.",
    ctaButton: "Commander le Système",
    closeBookTooltip: "Fermer le Livre & Revenir aux Rayons",
    flipCoverTooltip: "Feuilleter les Détails",
    backShelfBtn: "Retourner à la Bibliothèque",
    nextBookBtn: "Système Suivant",
    prevBookBtn: "Système Précédent",
    exploreTitle: "Découvrir Nos Offres",
    shelfTitle: "Bibliothèque Digitale de Prestige",
    spineText: "DevNApp",
    brandTitle: "DevNApp",
    brandSubtitle: "SOLUTIONS DIGITALES DE PRESTIGE",
    bottomTitle1: "Esthétique de Luxe",
    bottomDesc1: "Design haut de gamme raffiné",
    bottomTitle2: "Systèmes Intelligents",
    bottomDesc2: "Outils taillés pour l'entreprise",
    bottomTitle3: "Automatisation Stable",
    bottomDesc3: "Pipelines connectés fiables",
    bottomTitle4: "Expérience Client Unique",
    bottomDesc4: "Animations fluides et réalistes",
  }
};
