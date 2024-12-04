const countries = [
  {
    name: 'Afghanistan',
    population: '38,928,346',
    capital: 'Kabul',
    language: 'Pashto, Dari',
    id: 'Afghanistan',
    continent: 'Asia'
  },
  {
    name: 'Albania',
    population: '2,877,797',
    capital: 'Tirana',
    language: 'Albanian',
    id: 'Albania',
    continent: 'Europe'
  },
  {
    name: 'Algeria',
    population: '43,851,044',
    capital: 'Algiers',
    language: 'Arabic',
    id: 'Algeria',
    continent: 'Africa'
  },
  {
    name: 'Andorra',
    population: '77,265',
    capital: 'Andorra la Vella',
    language: 'Catalan',
    id: 'Andorra',
    continent: 'Europe'
  },
  {
    name: 'Angola',
    population: '32,866,272',
    capital: 'Luanda',
    language: 'Portuguese',
    id: 'Angola',
    continent: 'Africa'
  },
  {
    name: 'Antigua and Barbuda',
    population: '97,929',
    capital: "Saint John's",
    language: 'English',
    id: 'AntiguaAndBarbuda',
    continent: 'North America'
  },
  {
    name: 'Argentina',
    population: '45,195,774',
    capital: 'Buenos Aires',
    language: 'Spanish',
    id: 'Argentina',
    continent: 'South America'
  },
  {
    name: 'Armenia',
    population: '2,963,243',
    capital: 'Yerevan',
    language: 'Armenian',
    id: 'Armenia',
    continent: 'Asia'
  },
  {
    name: 'Australia',
    population: '25,499,884',
    capital: 'Canberra',
    language: 'English',
    id: 'Australia',
    continent: 'Oceania'
  },
  {
    name: 'Austria',
    population: '9,006,398',
    capital: 'Vienna',
    language: 'German',
    id: 'Austria',
    continent: 'Europe'
  },
  {
    name: 'Azerbaijan',
    population: '10,139,177',
    capital: 'Baku',
    language: 'Azerbaijani',
    id: 'Azerbaijan',
    continent: 'Asia'
  },
  {
    name: 'Bahamas',
    population: '393,244',
    capital: 'Nassau',
    language: 'English',
    id: 'Bahamas',
    continent: 'North America'
  },
  {
    name: 'Bahrain',
    population: '1,701,575',
    capital: 'Manama',
    language: 'Arabic',
    id: 'Bahrain',
    continent: 'Asia'
  },
  {
    name: 'Bangladesh',
    population: '164,689,383',
    capital: 'Dhaka',
    language: 'Bengali',
    id: 'Bangladesh',
    continent: 'Asia'
  },
  {
    name: 'Barbados',
    population: '287,375',
    capital: 'Bridgetown',
    language: 'English',
    id: 'Barbados',
    continent: 'North America'
  },
  {
    name: 'Belarus',
    population: '9,449,323',
    capital: 'Minsk',
    language: 'Belarusian, Russian',
    id: 'Belarus',
    continent: 'Europe'
  },
  {
    name: 'Belgium',
    population: '11,589,623',
    capital: 'Brussels',
    language: 'Dutch, French, German',
    id: 'Belgium',
    continent: 'Europe'
  },
  {
    name: 'Belize',
    population: '397,628',
    capital: 'Belmopan',
    language: 'English',
    id: 'Belize',
    continent: 'North America'
  },
  {
    name: 'Benin',
    population: '12,123,200',
    capital: 'Porto-Novo',
    language: 'French',
    id: 'Benin',
    continent: 'Africa'
  },
  {
    name: 'Bhutan',
    population: '771,608',
    capital: 'Thimphu',
    language: 'Dzongkha',
    id: 'Bhutan',
    continent: 'Asia'
  },
  {
    name: 'Bolivia',
    population: '11,673,021',
    capital: 'Sucre',
    language: 'Spanish, Quechua, Aymara',
    id: 'Bolivia',
    continent: 'South America'
  },
  {
    name: 'Bosnia and Herzegovina',
    population: '3,280,819',
    capital: 'Sarajevo',
    language: 'Bosnian, Croatian, Serbian',
    id: 'BosniaAndHerzegovina',
    continent: 'Europe'
  },
  {
    name: 'Botswana',
    population: '2,351,627',
    capital: 'Gaborone',
    language: 'English, Setswana',
    id: 'Botswana',
    continent: 'Africa'
  },
  {
    name: 'Brazil',
    population: '211,049,527',
    capital: 'Brasília',
    language: 'Portuguese',
    id: 'Brazil',
    continent: 'South America'
  },
  {
    name: 'Brunei',
    population: '437,479',
    capital: 'Bandar Seri Begawan',
    language: 'Malay',
    id: 'Brunei',
    continent: 'Asia'
  },
  {
    name: 'Bulgaria',
    population: '6,948,445',
    capital: 'Sofia',
    language: 'Bulgarian',
    id: 'Bulgaria',
    continent: 'Europe'
  },
  {
    name: 'Burkina Faso',
    population: '20,903,273',
    capital: 'Ouagadougou',
    language: 'French',
    id: 'BurkinaFaso',
    continent: 'Africa'
  },
  {
    name: 'Burundi',
    population: '11,890,784',
    capital: 'Gitega',
    language: 'Kirundi, French',
    id: 'Burundi',
    continent: 'Africa'
  },
  {
    name: 'Cabo Verde',
    population: '555,987',
    capital: 'Praia',
    language: 'Portuguese',
    id: 'CaboVerde',
    continent: 'Africa'
  },
  {
    name: 'Cambodia',
    population: '16,718,965',
    capital: 'Phnom Penh',
    language: 'Khmer',
    id: 'Cambodia',
    continent: 'Asia'
  },
  {
    name: 'Cameroon',
    population: '26,545,863',
    capital: 'Yaoundé',
    language: 'French, English',
    id: 'Cameroon',
    continent: 'Africa'
  },
  {
    name: 'Canada',
    population: '37,364,117',
    capital: 'Ottawa',
    language: 'English, French',
    id: 'Canada',
    continent: 'North America'
  },
  {
    name: 'Central African Republic',
    population: '4,829,767',
    capital: 'Bangui',
    language: 'French, Sango',
    id: 'CentralAfricanRepublic',
    continent: 'Africa'
  },
  {
    name: 'Chad',
    population: '16,425,864',
    capital: "N'Djamena",
    language: 'Arabic, French',
    id: 'Chad',
    continent: 'Africa'
  },
  {
    name: 'Chile',
    population: '19,116,201',
    capital: 'Santiago',
    language: 'Spanish',
    id: 'Chile',
    continent: 'South America'
  },
  {
    name: 'China',
    population: '1,402,625,888',
    capital: 'Beijing',
    language: 'Mandarin',
    id: 'China',
    continent: 'Asia'
  },
  {
    name: 'Colombia',
    population: '50,882,891',
    capital: 'Bogotá',
    language: 'Spanish',
    id: 'Colombia',
    continent: 'South America'
  },
  {
    name: 'Comoros',
    population: '869,601',
    capital: 'Moroni',
    language: 'Comorian, Arabic, French',
    id: 'Comoros',
    continent: 'Africa'
  },
  {
    name: 'Congo',
    population: '5,518,087',
    capital: 'Brazzaville',
    language: 'French',
    id: 'Congo',
    continent: 'Africa'
  },
  {
    name: 'Costa Rica',
    population: '5,094,118',
    capital: 'San José',
    language: 'Spanish',
    id: 'CostaRica',
    continent: 'North America'
  },
  {
    name: "Ivory Coast (Côte d'Ivoire)",
    population: '26,378,274',
    capital: 'Yamoussoukro',
    language: 'French',
    id: 'IvoryCoast',
    continent: 'Africa'
  },
  {
    name: 'Croatia',
    population: '4,105,267',
    capital: 'Zagreb',
    language: 'Croatian',
    id: 'Croatia',
    continent: 'Europe'
  },
  {
    name: 'Cuba',
    population: '11,326,616',
    capital: 'Havana',
    language: 'Spanish',
    id: 'Cuba',
    continent: 'North America'
  },
  {
    name: 'Cyprus',
    population: '1,207,359',
    capital: 'Nicosia',
    language: 'Greek, Turkish',
    id: 'Cyprus',
    continent: 'Europe'
  },
  {
    name: 'Czech Republic (Czechia)',
    population: '10,708,981',
    capital: 'Prague',
    language: 'Czech',
    id: 'CzechRepublic',
    continent: 'Europe'
  },
  {
    name: 'Democratic Republic of the Congo',
    population: '89,561,403',
    capital: 'Kinshasa',
    language: 'French',
    id: 'DemocraticRepublicOfTheCongo',
    continent: 'Africa'
  },
  {
    name: 'Denmark',
    population: '5,792,202',
    capital: 'Copenhagen',
    language: 'Danish',
    id: 'Denmark',
    continent: 'Europe'
  },
  {
    name: 'Djibouti',
    population: '988,000',
    capital: 'Djibouti',
    language: 'French, Arabic',
    id: 'Djibouti',
    continent: 'Africa'
  },
  {
    name: 'Dominica',
    population: '71,986',
    capital: 'Roseau',
    language: 'English',
    id: 'Dominica',
    continent: 'North America'
  },
  {
    name: 'Dominican Republic',
    population: '10,847,910',
    capital: 'Santo Domingo',
    language: 'Spanish',
    id: 'DominicanRepublic',
    continent: 'North America'
  },
  {
    name: 'Ecuador',
    population: '17,643,054',
    capital: 'Quito',
    language: 'Spanish',
    id: 'Ecuador',
    continent: 'South America'
  },
  {
    name: 'Egypt',
    population: '104,124,440',
    capital: 'Cairo',
    language: 'Arabic',
    id: 'Egypt',
    continent: 'Africa'
  },
  {
    name: 'El Salvador',
    population: '6,486,205',
    capital: 'San Salvador',
    language: 'Spanish',
    id: 'ElSalvador',
    continent: 'North America'
  },
  {
    name: 'Equatorial Guinea',
    population: '1,402,985',
    capital: 'Malabo',
    language: 'Spanish, French, Portuguese',
    id: 'EquatorialGuinea',
    continent: 'Africa'
  },
  {
    name: 'Eritrea',
    population: '3,546,421',
    capital: 'Asmara',
    language: 'Tigrinya, Arabic, English',
    id: 'Eritrea',
    continent: 'Africa'
  },
  {
    name: 'Estonia',
    population: '1,326,535',
    capital: 'Tallinn',
    language: 'Estonian',
    id: 'Estonia',
    continent: 'Europe'
  },
  {
    name: 'Eswatini',
    population: '1,160,164',
    capital: 'Mbabane',
    language: 'English, Swazi',
    id: 'Eswatini',
    continent: 'Africa'
  },
  {
    name: 'Ethiopia',
    population: '114,963,588',
    capital: 'Addis Ababa',
    language: 'Amharic',
    id: 'Ethiopia',
    continent: 'Africa'
  },
  {
    name: 'Fiji',
    population: '896,445',
    capital: 'Suva',
    language: 'English, Fijian, Hindi',
    id: 'Fiji',
    continent: 'Oceania'
  },
  {
    name: 'Finland',
    population: '5,540,720',
    capital: 'Helsinki',
    language: 'Finnish, Swedish',
    id: 'Finland',
    continent: 'Europe'
  },
  {
    name: 'France',
    population: '65,273,511',
    capital: 'Paris',
    language: 'French',
    id: 'France',
    continent: 'Europe'
  },
  {
    name: 'Gabon',
    population: '2,225,734',
    capital: 'Libreville',
    language: 'French',
    id: 'Gabon',
    continent: 'Africa'
  },
  {
    name: 'Gambia',
    population: '2,416,668',
    capital: 'Banjul',
    language: 'English',
    id: 'Gambia',
    continent: 'Africa'
  },
  {
    name: 'Georgia',
    population: '3,989,167',
    capital: 'Tbilisi',
    language: 'Georgian',
    id: 'Georgia',
    continent: 'Asia'
  },
  {
    name: 'Germany',
    population: '83,783,942',
    capital: 'Berlin',
    language: 'German',
    id: 'Germany',
    continent: 'Europe'
  },
  {
    name: 'Ghana',
    population: '31,072,940',
    capital: 'Accra',
    language: 'English',
    id: 'Ghana',
    continent: 'Africa'
  },
  {
    name: 'Greece',
    population: '10,423,054',
    capital: 'Athens',
    language: 'Greek',
    id: 'Greece',
    continent: 'Europe'
  },
  {
    name: 'Grenada',
    population: '112,523',
    capital: "St. George's",
    language: 'English',
    id: 'Grenada',
    continent: 'North America'
  },
  {
    name: 'Guatemala',
    population: '17,915,568',
    capital: 'Guatemala City',
    language: 'Spanish',
    id: 'Guatemala',
    continent: 'North America'
  },
  {
    name: 'Guinea',
    population: '13,132,795',
    capital: 'Conakry',
    language: 'French',
    id: 'Guinea',
    continent: 'Africa'
  },
  {
    name: 'Guinea-Bissau',
    population: '1,968,001',
    capital: 'Bissau',
    language: 'Portuguese',
    id: 'GuineaBissau',
    continent: 'Africa'
  },
  {
    name: 'Guyana',
    population: '786,552',
    capital: 'Georgetown',
    language: 'English',
    id: 'Guyana',
    continent: 'South America'
  },
  {
    name: 'Haiti',
    population: '11,402,528',
    capital: 'Port-au-Prince',
    language: 'French',
    id: 'Haiti',
    continent: 'North America'
  },
  {
    name: 'Holy See',
    population: '801',
    capital: 'Vatican City (city-state)',
    language: 'Italian, Latin',
    id: 'HolySee',
    continent: 'Europe'
  },
  {
    name: 'Honduras',
    population: '9,904,607',
    capital: 'Tegucigalpa',
    language: 'Spanish',
    id: 'Honduras',
    continent: 'North America'
  },
  {
    name: 'Hungary',
    population: '9,660,351',
    capital: 'Budapest',
    language: 'Hungarian',
    id: 'Hungary',
    continent: 'Europe'
  },
  {
    name: 'Iceland',
    population: '366,423',
    capital: 'Reykjavik',
    language: 'Icelandic',
    id: 'Iceland',
    continent: 'Europe'
  },
  {
    name: 'India',
    population: '1,380,004,385',
    capital: 'New Delhi',
    language: 'Hindi, English',
    id: 'India',
    continent: 'Asia'
  },
  {
    name: 'Indonesia',
    population: '273,523,615',
    capital: 'Jakarta',
    language: 'Indonesian',
    id: 'Indonesia',
    continent: 'Asia'
  },
  {
    name: 'Iran',
    population: '83,992,949',
    capital: 'Tehran',
    language: 'Persian (Farsi)',
    id: 'Iran',
    continent: 'Asia'
  },
  {
    name: 'Iraq',
    population: '40,222,493',
    capital: 'Baghdad',
    language: 'Arabic, Kurdish',
    id: 'Iraq',
    continent: 'Asia'
  },
  {
    name: 'Ireland',
    population: '4,937,786',
    capital: 'Dublin',
    language: 'English, Irish',
    id: 'Ireland',
    continent: 'Europe'
  },
  {
    name: 'Israel',
    population: '8,655,535',
    capital: 'Jerusalem',
    language: 'Hebrew',
    id: 'Israel',
    continent: 'Asia'
  },
  {
    name: 'Italy',
    population: '60,461,826',
    capital: 'Rome',
    language: 'Italian',
    id: 'Italy',
    continent: 'Europe'
  },
  {
    name: 'Jamaica',
    population: '2,961,167',
    capital: 'Kingston',
    language: 'English',
    id: 'Jamaica',
    continent: 'North America'
  },
  {
    name: 'Japan',
    population: '126,476,461',
    capital: 'Tokyo',
    language: 'Japanese',
    id: 'Japan',
    continent: 'Asia'
  },
  {
    name: 'Jordan',
    population: '10,203,134',
    capital: 'Amman',
    language: 'Arabic',
    id: 'Jordan',
    continent: 'Asia'
  },
  {
    name: 'Kazakhstan',
    population: '18,776,707',
    capital: 'Nur-Sultan',
    language: 'Kazakh, Russian',
    id: 'Kazakhstan',
    continent: 'Asia'
  },
  {
    name: 'Kenya',
    population: '53,771,296',
    capital: 'Nairobi',
    language: 'Swahili, English',
    id: 'Kenya',
    continent: 'Africa'
  },
  {
    name: 'Kiribati',
    population: '119,449',
    capital: 'South Tarawa',
    language: 'English, Gilbertese',
    id: 'Kiribati',
    continent: 'Oceania'
  },
  {
    name: 'Kuwait',
    population: '4,270,571',
    capital: 'Kuwait City',
    language: 'Arabic',
    id: 'Kuwait',
    continent: 'Asia'
  },
  {
    name: 'Kyrgyzstan',
    population: '6,524,195',
    capital: 'Bishkek',
    language: 'Kyrgyz, Russian',
    id: 'Kyrgyzstan',
    continent: 'Asia'
  },
  {
    name: 'Laos',
    population: '7,275,560',
    capital: 'Vientiane',
    language: 'Lao',
    id: 'Laos',
    continent: 'Asia'
  },
  {
    name: 'Latvia',
    population: '1,886,198',
    capital: 'Riga',
    language: 'Latvian',
    id: 'Latvia',
    continent: 'Europe'
  },
  {
    name: 'Lebanon',
    population: '6,825,445',
    capital: 'Beirut',
    language: 'Arabic',
    id: 'Lebanon',
    continent: 'Asia'
  },
  {
    name: 'Lesotho',
    population: '2,142,249',
    capital: 'Maseru',
    language: 'English, Sesotho',
    id: 'Lesotho',
    continent: 'Africa'
  },
  {
    name: 'Liberia',
    population: '5,057,681',
    capital: 'Monrovia',
    language: 'English',
    id: 'Liberia',
    continent: 'Africa'
  },
  {
    name: 'Libya',
    population: '6,871,292',
    capital: 'Tripoli',
    language: 'Arabic',
    id: 'Libya',
    continent: 'Africa'
  },
  {
    name: 'Liechtenstein',
    population: '38,128',
    capital: 'Vaduz',
    language: 'German',
    id: 'Liechtenstein',
    continent: 'Europe'
  },
  {
    name: 'Lithuania',
    population: '2,722,289',
    capital: 'Vilnius',
    language: 'Lithuanian',
    id: 'Lithuania',
    continent: 'Europe'
  },
  {
    name: 'Luxembourg',
    population: '625,978',
    capital: 'Luxembourg City',
    language: 'Luxembourgish, French, German',
    id: 'Luxembourg',
    continent: 'Europe'
  },
  {
    name: 'Madagascar',
    population: '27,691,018',
    capital: 'Antananarivo',
    language: 'Malagasy, French',
    id: 'Madagascar',
    continent: 'Africa'
  },
  {
    name: 'Malawi',
    population: '19,129,952',
    capital: 'Lilongwe',
    language: 'English, Chichewa',
    id: 'Malawi',
    continent: 'Africa'
  },
  {
    name: 'Malaysia',
    population: '32,365,999',
    capital: 'Kuala Lumpur',
    language: 'Malay',
    id: 'Malaysia',
    continent: 'Asia'
  },
  {
    name: 'Maldives',
    population: '540,544',
    capital: 'Malé',
    language: 'Maldivian',
    id: 'Maldives',
    continent: 'Asia'
  },
  {
    name: 'Mali',
    population: '20,250,833',
    capital: 'Bamako',
    language: 'French',
    id: 'Mali',
    continent: 'Africa'
  },
  {
    name: 'Malta',
    population: '441,543',
    capital: 'Valletta',
    language: 'Maltese, English',
    id: 'Malta',
    continent: 'Europe'
  },
  {
    name: 'Marshall Islands',
    population: '59,190',
    capital: 'Majuro',
    language: 'Marshallese, English',
    id: 'MarshallIslands',
    continent: 'Oceania'
  },
  {
    name: 'Mauritania',
    population: '4,649,658',
    capital: 'Nouakchott',
    language: 'Arabic',
    id: 'Mauritania',
    continent: 'Africa'
  },
  {
    name: 'Mauritius',
    population: '1,271,767',
    capital: 'Port Louis',
    language: 'English',
    id: 'Mauritius',
    continent: 'Africa'
  },
  {
    name: 'Mexico',
    population: '128,932,753',
    capital: 'Mexico City',
    language: 'Spanish',
    id: 'Mexico',
    continent: 'North America'
  },
  {
    name: 'Micronesia',
    population: '548,914',
    capital: 'Palikir',
    language: 'English',
    id: 'Micronesia',
    continent: 'Oceania'
  },
  {
    name: 'Moldova',
    population: '4,033,963',
    capital: 'Chisinau',
    language: 'Romanian',
    id: 'Moldova',
    continent: 'Europe'
  },
  {
    name: 'Monaco',
    population: '39,242',
    capital: 'Monaco',
    language: 'French',
    id: 'Monaco',
    continent: 'Europe'
  },
  {
    name: 'Mongolia',
    population: '3,278,290',
    capital: 'Ulaanbaatar',
    language: 'Mongolian',
    id: 'Mongolia',
    continent: 'Asia'
  },
  {
    name: 'Montenegro',
    population: '628,066',
    capital: 'Podgorica',
    language: 'Montenegrin',
    id: 'Montenegro',
    continent: 'Europe'
  },
  {
    name: 'Morocco',
    population: '36,910,560',
    capital: 'Rabat',
    language: 'Arabic',
    id: 'Morocco',
    continent: 'Africa'
  },
  {
    name: 'Mozambique',
    population: '31,255,435',
    capital: 'Maputo',
    language: 'Portuguese',
    id: 'Mozambique',
    continent: 'Africa'
  },
  {
    name: 'Myanmar',
    population: '54,409,800',
    capital: 'Naypyidaw',
    language: 'Burmese',
    id: 'Myanmar',
    continent: 'Asia'
  },
  {
    name: 'Namibia',
    population: '2,540,905',
    capital: 'Windhoek',
    language: 'English',
    id: 'Namibia',
    continent: 'Africa'
  },
  {
    name: 'Nauru',
    population: '10,824',
    capital: 'Yaren',
    language: 'Nauruan, English',
    id: 'Nauru',
    continent: 'Oceania'
  },
  {
    name: 'Nepal',
    population: '29,136,808',
    capital: 'Kathmandu',
    language: 'Nepali',
    id: 'Nepal',
    continent: 'Asia'
  },
  {
    name: 'Netherlands',
    population: '17,134,872',
    capital: 'Amsterdam',
    language: 'Dutch',
    id: 'Netherlands',
    continent: 'Europe'
  },
  {
    name: 'New Zealand',
    population: '4,822,233',
    capital: 'Wellington',
    language: 'English, Māori',
    id: 'NewZealand',
    continent: 'Oceania'
  },
  {
    name: 'Nicaragua',
    population: '6,624,554',
    capital: 'Managua',
    language: 'Spanish',
    id: 'Nicaragua',
    continent: 'North America'
  },
  {
    name: 'Niger',
    population: '24,206,644',
    capital: 'Niamey',
    language: 'French',
    id: 'Niger',
    continent: 'Africa'
  },
  {
    name: 'Nigeria',
    population: '206,139,589',
    capital: 'Abuja',
    language: 'English',
    id: 'Nigeria',
    continent: 'Africa'
  },
  {
    name: 'North Korea',
    population: '25,778,816',
    capital: 'Pyongyang',
    language: 'Korean',
    id: 'NorthKorea',
    continent: 'Asia'
  },
  {
    name: 'North Macedonia',
    population: '2,083,374',
    capital: 'Skopje',
    language: 'Macedonian',
    id: 'NorthMacedonia',
    continent: 'Europe'
  },
  {
    name: 'Norway',
    population: '5,421,241',
    capital: 'Oslo',
    language: 'Norwegian',
    id: 'Norway',
    continent: 'Europe'
  },
  {
    name: 'Oman',
    population: '5,106,626',
    capital: 'Muscat',
    language: 'Arabic',
    id: 'Oman',
    continent: 'Asia'
  },
  {
    name: 'Pakistan',
    population: '220,892,340',
    capital: 'Islamabad',
    language: 'Urdu',
    id: 'Pakistan',
    continent: 'Asia'
  },
  {
    name: 'Palau',
    population: '18,094',
    capital: 'Ngerulmud',
    language: 'English',
    id: 'Palau',
    continent: 'Oceania'
  },
  {
    name: 'Panama',
    population: '4,314,767',
    capital: 'Panama City',
    language: 'Spanish',
    id: 'Panama',
    continent: 'North America'
  },
  {
    name: 'Papua New Guinea',
    population: '8,947,024',
    capital: 'Port Moresby',
    language: 'English',
    id: 'PapuaNewGuinea',
    continent: 'Oceania'
  },
  {
    name: 'Paraguay',
    population: '7,132,538',
    capital: 'Asunción',
    language: 'Spanish, Guarani',
    id: 'Paraguay',
    continent: 'South America'
  },
  {
    name: 'Peru',
    population: '32,971,854',
    capital: 'Lima',
    language: 'Spanish',
    id: 'Peru',
    continent: 'South America'
  },
  {
    name: 'Philippines',
    population: '109,581,078',
    capital: 'Manila',
    language: 'Filipino, English',
    id: 'Philippines',
    continent: 'Asia'
  },
  {
    name: 'Poland',
    population: '37,846,611',
    capital: 'Warsaw',
    language: 'Polish',
    id: 'Poland',
    continent: 'Europe'
  },
  {
    name: 'Portugal',
    population: '10,196,709',
    capital: 'Lisbon',
    language: 'Portuguese',
    id: 'Portugal',
    continent: 'Europe'
  },
  {
    name: 'Qatar',
    population: '2,881,053',
    capital: 'Doha',
    language: 'Arabic',
    id: 'Qatar',
    continent: 'Asia'
  },
  {
    name: 'Romania',
    population: '19,237,691',
    capital: 'Bucharest',
    language: 'Romanian',
    id: 'Romania',
    continent: 'Europe'
  },
  {
    name: 'Russia',
    population: '145,934,462',
    capital: 'Moscow',
    language: 'Russian',
    id: 'Russia',
    continent: 'Europe, Asia'
  },
  {
    name: 'Rwanda',
    population: '12,952,218',
    capital: 'Kigali',
    language: 'Kinyarwanda, French, English',
    id: 'Rwanda',
    continent: 'Africa'
  },
  {
    name: 'Saint Kitts and Nevis',
    population: '53,199',
    capital: 'Basseterre',
    language: 'English',
    id: 'SaintKittsAndNevis',
    continent: 'North America'
  },
  {
    name: 'Saint Lucia',
    population: '183,627',
    capital: 'Castries',
    language: 'English',
    id: 'SaintLucia',
    continent: 'North America'
  },
  {
    name: 'Saint Vincent and the Grenadines',
    population: '110,940',
    capital: 'Kingstown',
    language: 'English',
    id: 'SaintVincentAndTheGrenadines',
    continent: 'North America'
  },
  {
    name: 'Samoa',
    population: '198,414',
    capital: 'Apia',
    language: 'Samoan, English',
    id: 'Samoa',
    continent: 'Oceania'
  },
  {
    name: 'San Marino',
    population: '33,931',
    capital: 'San Marino',
    language: 'Italian',
    id: 'SanMarino',
    continent: 'Europe'
  },
  {
    name: 'Sao Tome and Principe',
    population: '219,159',
    capital: 'São Tomé',
    language: 'Portuguese',
    id: 'SaoTomeAndPrincipe',
    continent: 'Africa'
  },
  {
    name: 'Saudi Arabia',
    population: '34,813,871',
    capital: 'Riyadh',
    language: 'Arabic',
    id: 'SaudiArabia',
    continent: 'Asia'
  },
  {
    name: 'Senegal',
    population: '16,743,927',
    capital: 'Dakar',
    language: 'French',
    id: 'Senegal',
    continent: 'Africa'
  },
  {
    name: 'Serbia',
    population: '8,737,371',
    capital: 'Belgrade',
    language: 'Serbian',
    id: 'Serbia',
    continent: 'Europe'
  },
  {
    name: 'Seychelles',
    population: '98,347',
    capital: 'Victoria',
    language: 'French, English, Seselwa',
    id: 'Seychelles',
    continent: 'Africa'
  },
  {
    name: 'Sierra Leone',
    population: '7,976,983',
    capital: 'Freetown',
    language: 'English',
    id: 'SierraLeone',
    continent: 'Africa'
  },
  {
    name: 'Singapore',
    population: '5,850,342',
    capital: 'Singapore',
    language: 'English, Malay, Mandarin, Tamil',
    id: 'Singapore',
    continent: 'Asia'
  },
  {
    name: 'Slovakia',
    population: '5,459,642',
    capital: 'Bratislava',
    language: 'Slovak',
    id: 'Slovakia',
    continent: 'Europe'
  },
  {
    name: 'Slovenia',
    population: '2,078,938',
    capital: 'Ljubljana',
    language: 'Slovene',
    id: 'Slovenia',
    continent: 'Europe'
  },
  {
    name: 'Solomon Islands',
    population: '686,884',
    capital: 'Honiara',
    language: 'English',
    id: 'SolomonIslands',
    continent: 'Oceania'
  },
  {
    name: 'Somalia',
    population: '15,893,222',
    capital: 'Mogadishu',
    language: 'Somali, Arabic',
    id: 'Somalia',
    continent: 'Africa'
  },
  {
    name: 'South Africa',
    population: '59,308,690',
    capital: 'Pretoria',
    language: 'IsiZulu, IsiXhosa, Afrikaans, English',
    id: 'SouthAfrica',
    continent: 'Africa'
  },
  {
    name: 'South Sudan',
    population: '11,193,725',
    capital: 'Juba',
    language: 'English',
    id: 'SouthSudan',
    continent: 'Africa'
  },
  {
    name: 'Spain',
    population: '46,754,778',
    capital: 'Madrid',
    language: 'Spanish',
    id: 'Spain',
    continent: 'Europe'
  },
  {
    name: 'Sri Lanka',
    population: '21,413,249',
    capital: 'Colombo',
    language: 'Sinhala, Tamil',
    id: 'SriLanka',
    continent: 'Asia'
  },
  {
    name: 'Sudan',
    population: '43,849,260',
    capital: 'Khartoum',
    language: 'Arabic, English',
    id: 'Sudan',
    continent: 'Africa'
  },
  {
    name: 'Suriname',
    population: '586,632',
    capital: 'Paramaribo',
    language: 'Dutch',
    id: 'Suriname',
    continent: 'South America'
  },
  {
    name: 'Sweden',
    population: '10,099,265',
    capital: 'Stockholm',
    language: 'Swedish',
    id: 'Sweden',
    continent: 'Europe'
  },
  {
    name: 'Switzerland',
    population: '8,372,000',
    capital: 'Bern',
    language: 'German, French, Italian, Romansh',
    id: 'Switzerland',
    continent: 'Europe'
  },
  {
    name: 'Syria',
    population: '17,500,658',
    capital: 'Damascus',
    language: 'Arabic',
    id: 'Syria',
    continent: 'Asia'
  },
  {
    name: 'Taiwan',
    population: '23,816,775',
    capital: 'Taipei',
    language: 'Mandarin',
    id: 'Taiwan',
    continent: 'Asia'
  },
  {
    name: 'Tajikistan',
    population: '9,537,645',
    capital: 'Dushanbe',
    language: 'Tajik',
    id: 'Tajikistan',
    continent: 'Asia'
  },
  {
    name: 'Tanzania',
    population: '61,500,000',
    capital: 'Dodoma',
    language: 'Swahili, English',
    id: 'Tanzania',
    continent: 'Africa'
  },
  {
    name: 'Texas',
    population: '30,503,301',
    capital: 'Austin',
    language: 'English',
    id: 'Texas',
    continent: 'North America'
  },
  {
    name: 'Thailand',
    population: '69,799,978',
    capital: 'Bangkok',
    language: 'Thai',
    id: 'Thailand',
    continent: 'Asia'
  },
  {
    name: 'Togo',
    population: '8,278,724',
    capital: 'Lomé',
    language: 'French',
    id: 'Togo',
    continent: 'Africa'
  },
  {
    name: 'Tonga',
    population: '105,695',
    capital: "Nuku'alofa",
    language: 'Tongan, English',
    id: 'Tonga',
    continent: 'Oceania'
  },
  {
    name: 'Trinidad and Tobago',
    population: '1,399,488',
    capital: 'Port of Spain',
    language: 'English',
    id: 'TrinidadAndTobago',
    continent: 'North America'
  },
  {
    name: 'Tunisia',
    population: '11,818,619',
    capital: 'Tunis',
    language: 'Arabic',
    id: 'Tunisia',
    continent: 'Africa'
  },
  {
    name: 'Turkey',
    population: '82,003,882',
    capital: 'Ankara',
    language: 'Turkish',
    id: 'Turkey',
    continent: 'Asia'
  },
  {
    name: 'Turkmenistan',
    population: '6,031,200',
    capital: 'Ashgabat',
    language: 'Turkmen',
    id: 'Turkmenistan',
    continent: 'Asia'
  },
  {
    name: 'Tuvalu',
    population: '11,792',
    capital: 'Funafuti',
    language: 'Tuvaluan, English',
    id: 'Tuvalu',
    continent: 'Oceania'
  },
  {
    name: 'Uganda',
    population: '45,741,007',
    capital: 'Kampala',
    language: 'English, Swahili',
    id: 'Uganda',
    continent: 'Africa'
  },
  {
    name: 'Ukraine',
    population: '43,733,762',
    capital: 'Kiev',
    language: 'Ukrainian',
    id: 'Ukraine',
    continent: 'Europe'
  },
  {
    name: 'United Arab Emirates',
    population: '9,890,400',
    capital: 'Abu Dhabi',
    language: 'Arabic',
    id: 'UnitedArabEmirates',
    continent: 'Asia'
  },
  {
    name: 'United Kingdom',
    population: '66,834,405',
    capital: 'London',
    language: 'English',
    id: 'UnitedKingdom',
    continent: 'Europe'
  },
  {
    name: 'United States',
    population: '331,002,651',
    capital: 'Washington, D.C.',
    language: 'English',
    id: 'UnitedStates',
    continent: 'North America'
  },
  {
    name: 'Uruguay',
    population: '3,473,730',
    capital: 'Montevideo',
    language: 'Spanish',
    id: 'Uruguay',
    continent: 'South America'
  },
  {
    name: 'Uzbekistan',
    population: '33,469,203',
    capital: 'Tashkent',
    language: 'Uzbek',
    id: 'Uzbekistan',
    continent: 'Asia'
  },
  {
    name: 'Vanuatu',
    population: '307,145',
    capital: 'Port Vila',
    language: 'Bislama, English, French',
    id: 'Vanuatu',
    continent: 'Oceania'
  },
  {
    name: 'Venezuela',
    population: '28,435,940',
    capital: 'Caracas',
    language: 'Spanish',
    id: 'Venezuela',
    continent: 'South America'
  },
  {
    name: 'Vietnam',
    population: '97,338,579',
    capital: 'Hanoi',
    language: 'Vietnamese',
    id: 'Vietnam',
    continent: 'Asia'
  },
  {
    name: 'Yemen',
    population: '29,825,964',
    capital: 'Sanaa',
    language: 'Arabic',
    id: 'Yemen',
    continent: 'Asia'
  },
  {
    name: 'Zambia',
    population: '18,383,955',
    capital: 'Lusaka',
    language: 'English',
    id: 'Zambia',
    continent: 'Africa'
  },
  {
    name: 'Zimbabwe',
    population: '14,862,924',
    capital: 'Harare',
    language: 'English, Shona, Sindebele',
    id: 'Zimbabwe',
    continent: 'Africa'
  }
]

export default countries
