const { Router } = require("express");
const p5Table = require("../../p5/table");
// const TasksTable = require("../../todo-tasks/table");
// const { authenticated } = require("./helper");

const router = new Router();

const p1 = [
  [
    "Д.д",
    "Нэр",
    "Үндсэн цалин",
    "Ажилбал зохих цаг",
    "Ажилласан цаг",
    "Тооцсон",
    "НДШ",
    "Татвар тооцох орлого",
    "ХАОАТ",
    "Урьдчилгаа",
    "Нийт олгох",
    "Байгууллагаас олгох НДШ",
  ],
  [
    1,
    "Б.Уу",
    6000000.0,
    160,
    145,
    5437500.0,
    320000.0,
    5117500.0,
    511750.0,
    2400000.0,
    2205750.0,
    679688,
  ],
  [
    2,
    "П.Ун",
    4500000.0,
    160,
    156,
    4387500.0,
    320000.0,
    4067500.0,
    406750.0,
    1800000.0,
    1860750.0,
    548438,
  ],
  [
    3,
    "Э.Гэ",
    3500000.0,
    160,
    146,
    3193750.0,
    320000.0,
    2873750.0,
    275708.33,
    null,
    2598041.67,
    399219,
  ],
  [
    4,
    "Т.Со",
    3000000.0,
    160,
    155,
    2906250.0,
    320000.0,
    2586250.0,
    246958.33,
    1200000.0,
    1139291.67,
    363281,
  ],
  [
    5,
    "Б.Ба",
    2500000.0,
    160,
    156,
    2437500.0,
    280312.5,
    2157187.5,
    202385.42,
    1000000.0,
    954802.08,
    304688,
  ],
  [
    6,
    "Г.Ху",
    2000000.0,
    160,
    138,
    1725000.0,
    198375.0,
    1526625.0,
    137662.5,
    800000.0,
    588962.5,
    215625,
  ],
  [
    7,
    "О.Дү",
    1500000.0,
    160,
    152,
    1425000.0,
    163875.0,
    1261125.0,
    109445.83,
    600000.0,
    551679.17,
    178125,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    21512500.0,
    1922562.5,
    19589937.5,
    1890660.41,
    7800000.0,
    9899277.09,
    2689062.5,
    null,
  ],
  [
    8,
    "Г.Га",
    1000000.0,
    160,
    153,
    956250.0,
    109968.75,
    846281.25,
    66294.8,
    400000.0,
    379986.46,
    119531,
  ],
  [
    9,
    "К.Од",
    900000.0,
    160,
    138,
    776250.0,
    89268.75,
    686981.25,
    50364.8,
    360000.0,
    276616.46,
    97031,
  ],
  [
    10,
    "Д.Дэ",
    831739.0,
    160,
    141,
    732969.99,
    84291.55,
    648678.44,
    46534.51,
    332695.6,
    269448.33,
    91621,
  ],
  [
    11,
    "Д.Ба",
    750000.0,
    160,
    155,
    726562.5,
    83554.69,
    643007.81,
    45967.45,
    375000.0,
    222040.36,
    90820,
  ],
  [
    12,
    "Б.Мө",
    700000.0,
    160,
    134,
    586250.0,
    67418.75,
    518831.25,
    33549.8,
    null,
    485281.46,
    73281,
  ],
  [
    13,
    "О.Со",
    600000.0,
    160,
    139,
    521250.0,
    59943.75,
    461306.25,
    26130.63,
    240000.0,
    195175.63,
    65156,
  ],
  [
    14,
    "Д.Мө",
    561798.75,
    160,
    143,
    502107.63,
    57742.38,
    444365.26,
    24436.53,
    224719.5,
    195209.23,
    62763,
  ],
  [
    15,
    "М.Ня",
    350000.0,
    160,
    144,
    315000.0,
    36225.0,
    278775.0,
    7877.5,
    140000.0,
    130897.5,
    39375,
  ],
  [
    16,
    "Б.Цо",
    300000.0,
    160,
    151,
    283125.0,
    32559.38,
    250565.63,
    5056.56,
    null,
    245509.06,
    35391,
  ],
  [
    17,
    "О.Уу",
    225989.0,
    160,
    160,
    225989.0,
    25988.74,
    200000.27,
    0.03,
    90395.6,
    109604.64,
    28249,
  ],
  [
    18,
    "Т.Ха",
    150000.0,
    160,
    130,
    121875.0,
    14015.63,
    107859.38,
    0.0,
    60000.0,
    47859.38,
    15234,
  ],
  [
    19,
    "А.Мө",
    100000.0,
    160,
    135,
    84375.0,
    9703.13,
    74671.88,
    0.0,
    40000.0,
    34671.88,
    10547,
  ],
  [
    20,
    "Б.Мө",
    50000.0,
    160,
    135,
    42187.5,
    4851.56,
    37335.94,
    0.0,
    20000.0,
    17335.94,
    5273,
  ],
  [
    null,
    null,
    5874191.63,
    675532.04,
    5198659.59,
    306212.59,
    2282810.7,
    2609636.3,
    734273.95,
  ],
];

const p2 = [
  [
    "БАРАА МАТЕРИАЛЫН ТАЙЛАН",

    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  ["2019 он", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  [
    "Дансны дугаар",
    "",
    "150101",
    "",
    "",
    "",
    "",
    "Эд хариуцагчийн код",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  [
    "Дансны нэр",
    "",
    "Бараа материал",
    "",
    "",
    "",
    "",
    "Агуулахын нэр,№",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  [
    "№",
    "Бараа материалын код",
    "Бараа, материалын үнэт зүйлийн нэр, зэрэг, дугаар",
    "Хэмжих нэгж",
    "Огноо",
    "Орлого",
    "",
    "",
    "Зарлага",
    "",
    "",
    "Үлдэгдэл",
  ],
  [
    2,
    "",
    "",
    "",
    "",
    "Тоо",
    "Үнэ",
    "Нийт",
    "Тоо",
    "Н.Өртөг",
    "Нийт",
    "Тоо",
    "Н.Өртөг",
    "Нийт",
  ],
  [
    2,
    "A001",
    "Материал А",
    "Ш",
    "2019/11/3",
    "",
    "",
    0,
    400,
    340,
    136000,
    100,
    340,
    34000,
    204000,
  ],
  [
    5,
    "A001",
    "Материал А",
    "Ш",
    "2019/11/8",
    "",
    "",
    0,
    2000,
    355,
    710769,
    600,
    355,
    213231,
    1066153.846,
  ],
  [
    6,
    "A001",
    "Материал А",
    "Ш",
    "2019/11/9",
    "",
    "",
    0,
    50,
    355,
    17769,
    550,
    355,
    195462,
    26653.84615,
  ],
  [
    7,
    "A001",
    "Материал А",
    "Ш",
    "2019/11/9",
    "",
    "",
    0,
    40,
    355,
    14215,
    510,
    355,
    181246,
    21323.07692,
  ],
  [
    8,
    "A001",
    "Материал А",
    "Ш",
    "2019/11/9",
    "",
    "",
    0,
    30,
    355,
    10662,
    480,
    355,
    170585,
    15992.30769,
  ],
  [
    10,
    "A001",
    "Материал А",
    "Ш",
    "2019/11/10",
    "",
    "",
    0,
    300,
    361,
    108218,
    780,
    360,
    281367,
    162326.9231,
  ],
  [11, "", "", "", "", "", "", ""],
  [12, "", "", "", "", "", "", ""],
  [13, "", "", "", "", "", "", ""],
  [14, "", "", "", "", "", "", ""],
  [15, "", "", "", "", "", "", ""],
  [16, "", "", "", "", "", "", ""],
  [17, "", "", "", "", "", "", ""],
  [18, "", "", "", "", "", "", ""],
  [19, "", "", "", "", "", "", ""],
  [20, "", "", "", "", "", "", ""],
  ["", "", "Дүн", "", "", "", "", ""],
];

const p3 = [
  [
    "№",
    "Эд хөрөнгийн нэр",
    "Огноо",
    "Элэгдэл байгуулах жил",
    "Хэмжих нэгж",
    "Тоо ширхэг",
    "Үнэ",
    "Хөрөнгийн өртөг",
    "2019 оны элэгдэл",
    "",
    "",
  ],
  [
    "",
    "",
    "",
    "",
    "",
    "",
    "Нэг бүрийн",
    "Бүгд",
    "Тооцож эхлэх огноо",
    "Тооцоолол дуусах огноо",
    "Байгуулсан элэгдэл",
  ],
  ["а", "б", "", "1", "2", "3", "4", "5", "", "", "", "", ""],
  [
    "1",
    "Барилга",
    "7/1/2019",
    "25",
    "ком",
    "1",
    "  125,000,000.0 ",
    "  125,000,000.0 ",
    "7/1/2019",
    "12/31/2019",
    "  2,506,849.32 ",
  ],
  [
    "2",
    "Тоног төхөөрөмж",
    "7/1/2019",
    "5",
    "ком",
    "1",
    "  74,000,000.0  ",
    "  74,000,000.0 ",
    "7/1/2019",
    "12/31/2019",
    "  7,420,273.97 ",
  ],
  [
    "3",
    "Компьютер",
    "7/1/2019",
    "5",
    "ком",
    "1",
    "  4,207,600.0 ",
    "  4,207,600.0  ",
    "7/1/2019",
    "12/31/2019",
    "  1,054,781.92 ",
  ],
  [
    "4",
    "Тавилга эд хогшил",
    "7/1/2019",
    "5",
    "ком",
    "1",
    "  6,258,000.0 ",
    "  6,258,000.0 ",
    "7/1/2019",
    "12/31/2019",
    "  627,514.52 ",
  ],
  [
    "5",
    "Тээврийн хэрэгсэл",
    "7/1/2019",
    "10",
    "ком",
    "1",
    "  13,000,000.0 ",
    "  13,000,000.0 ",
    "7/1/2019",
    "12/31/2019",
    "  651,780.82 ",
  ],
  ["", "", "", "", "", "", "  222,465,600.0 ", "", "", "", "  12,261,200.55  "],
];

const p4 = [
  ["Guilgeenii dugaar", "Debit dans", "Credit dans", "Ognoo", "Dun"],
  [1, "Mungun hurungu", "Banknii zeel", "1/1/2021", 1500000],
  [2, "Avlaga", "Bor.orlogo", "1/1/2021", 500000],
];

const p5 = [];

router.get("/p1", (req, res) => {
  res.json({ a: p1 });
});

router.get("/p2", (req, res) => {
  res.json({ a2: p2 });
});

router.get("/p3", (req, res) => {
  res.json({ a3: p3 });
});

router.get("/p4", (req, res) => {
  res.json({ a4: p4 });
});

router.get("/p5", (req, res) => {
  p5Table.getP5().then((p5) => res.json({ p5 }));
});

router.get("/p6", (req, res) => {
  p5Table.getP6().then((p6) => res.json({ p6 }));
});

// router.post("/getall", authenticated, (req, res, next) => {
//   TasksTable.getTasks()
//     .then((tasks) => res.json({ tasks }))
//     .catch((error) => next(error));
// });

module.exports = router;
