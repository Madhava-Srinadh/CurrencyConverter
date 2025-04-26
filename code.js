const countryList = {
  AED: "AE",  // United Arab Emirates Dirham
  AFN: "AF",  // Afghan Afghani
  ALL: "AL",  // Albanian Lek
  AMD: "AM",  // Armenian Dram
  ANG: "NL",  // Netherlands Antillean Guilder (Curacao, Sint Maarten)
  AOA: "AO",  // Angolan Kwanza
  ARS: "AR",  // Argentine Peso
  AUD: "AU",  // Australian Dollar
  AZN: "AZ",  // Azerbaijani Manat
  BAM: "BA",  // Bosnia-Herzegovina Convertible Mark
  BBD: "BB",  // Barbadian Dollar
  BDT: "BD",  // Bangladeshi Taka
  BGN: "BG",  // Bulgarian Lev
  BHD: "BH",  // Bahraini Dinar
  BIF: "BI",  // Burundian Franc
  BMD: "BM",  // Bermudian Dollar
  BND: "BN",  // Brunei Dollar
  BOB: "BO",  // Bolivian Boliviano
  BRL: "BR",  // Brazilian Real
  BSD: "BS",  // Bahamian Dollar
  BTN: "BT",  // Bhutanese Ngultrum
  BWP: "BW",  // Botswana Pula
  BYN: "BY",  // Belarusian Ruble
  BZD: "BZ",  // Belize Dollar
  CAD: "CA",  // Canadian Dollar
  CDF: "CD",  // Congolese Franc
  CHF: "CH",  // Swiss Franc
  CLP: "CL",  // Chilean Peso
  CNY: "CN",  // Chinese Yuan
  COP: "CO",  // Colombian Peso
  CRC: "CR",  // Costa Rican Colón
  CUP: "CU",  // Cuban Peso
  CVE: "CV",  // Cape Verdean Escudo
  CZK: "CZ",  // Czech Koruna
  DJF: "DJ",  // Djiboutian Franc
  DKK: "DK",  // Danish Krone
  DOP: "DO",  // Dominican Peso
  DZD: "DZ",  // Algerian Dinar
  EGP: "EG",  // Egyptian Pound
  ERN: "ER",  // Eritrean Nakfa
  ETB: "ET",  // Ethiopian Birr
  EUR: "EU",  // Euro
  FJD: "FJ",  // Fijian Dollar
  FKP: "FK",  // Falkland Islands Pound
  FOK: "FO",  // Faroese Króna
  GBP: "GB",  // British Pound Sterling
  GEL: "GE",  // Georgian Lari
  GHS: "GH",  // Ghanaian Cedi
  GIP: "GI",  // Gibraltar Pound
  GMD: "GM",  // Gambian Dalasi
  GNF: "GN",  // Guinean Franc
  GTQ: "GT",  // Guatemalan Quetzal
  GYD: "GY",  // Guyanese Dollar
  HKD: "HK",  // Hong Kong Dollar
  HNL: "HN",  // Honduran Lempira
  HRK: "HR",  // Croatian Kuna
  HTG: "HT",  // Haitian Gourde
  HUF: "HU",  // Hungarian Forint
  IDR: "ID",  // Indonesian Rupiah
  ILS: "IL",  // Israeli New Shekel
  INR: "IN",  // Indian Rupee
  IQD: "IQ",  // Iraqi Dinar
  IRR: "IR",  // Iranian Rial
  ISK: "IS",  // Icelandic Krona
  JMD: "JM",  // Jamaican Dollar
  JOD: "JO",  // Jordanian Dinar
  JPY: "JP",  // Japanese Yen
  KES: "KE",  // Kenyan Shilling
  KGS: "KG",  // Kyrgyzstani Som
  KHR: "KH",  // Cambodian Riel
  KMF: "KM",  // Comorian Franc
  KRW: "KR",  // South Korean Won
  KWD: "KW",  // Kuwaiti Dinar
  KYD: "KY",  // Cayman Islands Dollar
  KZT: "KZ",  // Kazakhstani Tenge
  LAK: "LA",  // Lao Kip
  LBP: "LB",  // Lebanese Pound
  LKR: "LK",  // Sri Lankan Rupee
  LRD: "LR",  // Liberian Dollar
  LSL: "LS",  // Lesotho Loti
  LYD: "LY",  // Libyan Dinar
  MAD: "MA",  // Moroccan Dirham
  MDL: "MD",  // Moldovan Leu
  MGA: "MG",  // Malagasy Ariary
  MKD: "MK",  // Macedonian Denar
  MMK: "MM",  // Myanmar Kyat
  MNT: "MN",  // Mongolian Tugrik
  MOP: "MO",  // Macanese Pataca
  MRU: "MR",  // Mauritanian Ouguiya
  MUR: "MU",  // Mauritian Rupee
  MVR: "MV",  // Maldivian Rufiyaa
  MWK: "MW",  // Malawian Kwacha
  MXN: "MX",  // Mexican Peso
  MYR: "MY",  // Malaysian Ringgit
  MZN: "MZ",  // Mozambican Metical
  NAD: "NA",  // Namibian Dollar
  NGN: "NG",  // Nigerian Naira
  NIO: "NI",  // Nicaraguan Córdoba
  NOK: "NO",  // Norwegian Krone
  NPR: "NP",  // Nepalese Rupee
  NZD: "NZ",  // New Zealand Dollar
  OMR: "OM",  // Omani Rial
  PAB: "PA",  // Panamanian Balboa
  PEN: "PE",  // Peruvian Sol
  PGK: "PG",  // Papua New Guinean Kina
  PHP: "PH",  // Philippine Peso
  PKR: "PK",  // Pakistani Rupee
  PLN: "PL",  // Polish Zloty
  PYG: "PY",  // Paraguayan Guarani
  QAR: "QA",  // Qatari Riyal
  RON: "RO",  // Romanian Leu
  RSD: "RS",  // Serbian Dinar
  RUB: "RU",  // Russian Ruble
  RWF: "RW",  // Rwandan Franc
  SAR: "SA",  // Saudi Riyal
  SBD: "SB",  // Solomon Islands Dollar
  SCR: "SC",  // Seychellois Rupee
  SDG: "SD",  // Sudanese Pound
  SEK: "SE",  // Swedish Krona
  SGD: "SG",  // Singapore Dollar
  SHP: "SH",  // Saint Helena Pound
  SLL: "SL",  // Sierra Leonean Leone
  SOS: "SO",  // Somali Shilling
  SRD: "SR",  // Surinamese Dollar
  SSP: "SS",  // South Sudanese Pound
  STN: "ST",  // Sao Tomean Dobra
  SVC: "SV",  // Salvadoran Colón
  SYP: "SY",  // Syrian Pound
  SZL: "SZ",  // Swazi Lilangeni
  THB: "TH",  // Thai Baht
  TJS: "TJ",  // Tajikistani Somoni
  TMT: "TM",  // Turkmenistani Manat
  TND: "TN",  // Tunisian Dinar
  TOP: "TO",  // Tongan Paʻanga
  TRY: "TR",  // Turkish Lira
  TTD: "TT",  // Trinidad and Tobago Dollar
  TWD: "TW",  // New Taiwan Dollar
  TZS: "TZ",  // Tanzanian Shilling
  UAH: "UA",  // Ukrainian Hryvnia
  UGX: "UG",  // Ugandan Shilling
  USD: "US",  // United States Dollar
  UYU: "UY",  // Uruguayan Peso
  UZS: "UZ",  // Uzbekistani Som
  VES: "VE",  // Venezuelan Bolívar Soberano
  VND: "VN",  // Vietnamese Dong
  VUV: "VU",  // Vanuatu Vatu
  WST: "WS",  // Samoan Tala
  XAF: "CM",  // Central African CFA Franc
  XCD: "AG",  // East Caribbean Dollar
  XOF: "SN",  // West African CFA Franc
  XPF: "PF",  // CFP Franc
  YER: "YE",  // Yemeni Rial
  ZAR: "ZA",  // South African Rand
  ZMW: "ZM",  // Zambian Kwacha
  ZWL: "ZW"   // Zimbabwean Dollar
};
