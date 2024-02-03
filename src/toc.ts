enum DayType {
  CalendarDate,
  SeptuagesimaWeek,
  SexagesesimaWeek,
  QuinquagesimaWeek,
  AfterAshWednesday,
  FeastDay,
  Sunday,
  Vigil};

enum CalendarPeriods {
  Advent,
  Christmastide,
  Epihpanytide,
  Septuagesima,
  Sexagesima,
  Quinquagesima,
  Lent,
  HolyWeek,
  EasterTide,
  Pentacost,
  SeasonAfterPentacost};

exports.toc = [
  {
    period: CalendarPeriods.Epihpanytide,
    type: DayType.Sunday, 
    day: 5,
    page: 94,
    last_page: 100,
    volume: 4,
    heading: "Tue Firta Sunday aFTeR THE EpipHany",
  },
  {
    period: CalendarPeriods.Epihpanytide,
    type: DayType.Sunday,
    day: 6,
    page: 100,
    last_page: 106,
    volume: 4,
    heading: "Tue SrxtH Sunpay AFTER THE EPIPHANY"
  },
  {
    period: CalendarPeriods.Septuagesima,
    type: DayType.SeptuagesimaWeek,
    day: -1,
    page: 106,
    last_page: 116,
    volume: 4,
    heading: "SATURDAY BEFORE SEPTUAGESIMA SUNDAY—SusPENSION"
  },
  {
    period: CalendarPeriods.Septuagesima,
    type: DayType.Sunday,
    day: 0,
    page: 116,
    last_page: 131,
    volume: 4,
    heading: "SeproacEsima Sunpay."
  },
  {
    period: CalendarPeriods.Septuagesima,
    type: DayType.SeptuagesimaWeek,
    day: 1,
    page: 131,
    last_page: 135,
    volume: 4,
    heading: "Monpbay OF SEPTUAGESIMA Waex"
  },
  {
    period: CalendarPeriods.Septuagesima,
    type: DayType.SeptuagesimaWeek,
    day: 2,
    page: 135,
    last_page: 138,
    volume: 4,
    heading: "Tuxnspay or SEpTuacesima WEEK"
  },
  {
    period: CalendarPeriods.Septuagesima,
    type: DayType.SeptuagesimaWeek,
    day: 2,
    page: 138,
    last_page: 140,
    volume: 4,
    heading: "Wepbnespay oF SEPTUAGESIMA WEEK"
  },
  {
    period: CalendarPeriods.Septuagesima,
    type: DayType.SeptuagesimaWeek,
    day: 4,
    page: 140,
    last_page: 142,
    volume: 4,
    heading: "TuHuRsDay oF SEpTuaGESIMA WEEK"
  },
  {
    period: CalendarPeriods.Septuagesima,
    type: DayType.SeptuagesimaWeek,
    day: 5,
    page: 142,
    last_page: 145,
    volume: 4,
    heading: "Fripay oF SepTuaGEsiIMA WEEK"
  },
  {
    period: CalendarPeriods.Septuagesima,
    type: DayType.SeptuagesimaWeek,
    day: 6,
    page: 145,
    last_page: 148,
    volume: 4,
    heading: "Sarurpay oF SEPTUAGESIMA WEEK"
  },
  {
    period: CalendarPeriods.Sexagesima,
    type: DayType.Sunday,
    day: 0,
    page: 148,
    last_page: 160,
    volume: 4,
    heading: "Sexacesima SuNDAY"
  },
  {
    period: CalendarPeriods.Sexagesima,
    type: DayType.SexagesesimaWeek,
    day: 1,
    page: 160,
    last_page: 162,
    volume: 4,
    heading: "Monpay oF SEXAGESIMA WERK ."
  },
  {
    period: CalendarPeriods.Sexagesima,
    type: DayType.SexagesesimaWeek,
    day: 2,
    page: 162,
    last_page: 165,
    volume: 4,
    heading: "TurspDay or Sexacesima WEEK."
  },
  {
    period: CalendarPeriods.Sexagesima,
    type: DayType.SexagesesimaWeek,
    day: 3,
    page: 165,
    last_page: 167,
    volume: 4,
    heading: "WEDNESDAY OF SEXAGESIMA WEEK"
  },
  {
    period: CalendarPeriods.Sexagesima,
    type: DayType.SexagesesimaWeek,
    day: 4,
    page: 167,
    last_page: 170,
    volume: 4,
    heading: "TuHurspay oF SExacesiMaA WEEK"
  },
  {
    period: CalendarPeriods.Sexagesima,
    type: DayType.SexagesesimaWeek,
    day: 5,
    page: 170,
    last_page: 173,
    volume: 4,
    heading: "Fripay or SExaGEsIMA WEEK"
  },
  {
    period: CalendarPeriods.Sexagesima,
    type: DayType.SexagesesimaWeek,
    day: 6,
    page: 173,
    last_page: 178,
    volume: 4,
    heading: "Saturpay oF SEXAGESIMA WEEK"
  },
  {
    period: CalendarPeriods.Quinquagesima,
    type: DayType.Sunday,
    day: 0,
    page: 178,
    last_page: 196,
    volume: 4,
    heading: "QuinquaceEsima SunDAY"
  },
  {
    period: CalendarPeriods.Quinquagesima,
    type: DayType.QuinquagesimaWeek,
    day: 1,
    page: 196,
    last_page: 199,
    volume: 4,
    heading: "Monpay OF QUINQUAGESIMA Ware"
  },
  {
    period: CalendarPeriods.Quinquagesima,
    type: DayType.QuinquagesimaWeek,
    day: 2,
    page: 199,
    last_page: 202,
    volume: 4,
    heading: "TUESDAY OF QUINQUAGESIMA WEEK"
  },
  {
    period: CalendarPeriods.Lent,
    type: DayType.FeastDay,
    day: 0,
    page: 202,
    last_page: 219,
    volume: 4,
    heading: "AsH WEDNESDAY :"
  },
  {
    period: CalendarPeriods.Lent,
    type: DayType.AfterAshWednesday,
    day: 1,
    page: 219,
    last_page: 224,
    volume: 4,
    heading: "THURSDAY AFTER ASH Wrpnespay"
  },
  {
    period: CalendarPeriods.Lent,
    type: DayType.AfterAshWednesday,
    day: 2,
    page: 224,
    last_page: 229,
    volume: 4,
    heading: "Fripay AFTER AsH WEDNESDAY"
  },
  {
    period: CalendarPeriods.Lent,
    type: DayType.AfterAshWednesday,
    day: 3,
    page: 229,
    last_page: 235,
    volume: 4,
    heading: "SaTURDAY AFTER ASH WEDNESDAY"
  },
  {
    type: DayType.CalendarDate,
    month: 2,
    day: 8,
    page: 235,
    last_page: 237,
    volume: 4,
    heading: "Sv. Buasz, Bishop anD Martyr"
  },
  {
    type: DayType.CalendarDate,
    month: 2,
    day: 4,
    page: 237,
    last_page: 240,
    volume: 4,
    heading: "St. ANDREW Corsini, Bishop anp ConFESSOR"
  },
  {
    type: DayType.CalendarDate,
    month: 2,
    day: 5,
    page: 240,
    last_page: 246,
    volume: 4,
    heading: "St. Acatwa, VirGIN AND Martyr"
  },
  {
    type: DayType.CalendarDate,
    month: 2,
    day: 6,
    page: 246,
    last_page: 251,
    volume: 4,
    heading: "St. Dorotuy, VIRGIN AND Martyr"
  },
  {
    type: DayType.CalendarDate,
    month: 2,
    day: 7,
    page: 251,
    last_page: 255,
    volume: 4,
    heading: "St. Romuatp, ABBOT"
  },
  {
    type: DayType.CalendarDate,
    month: 2,
    day: 8,
    page: 255,
    last_page: 260,
    volume: 4,
    heading: "St. Joun or Martua, Conresson"
  },
  {
    type: DayType.CalendarDate,
    month: 2,
    day: 9,
    page: 260,
    last_page: 263,
    volume: 4,
    heading: "St. APoLLoNIA, VIRGIN AND Martyr"
  },
  {
    type: DayType.CalendarDate,
    month: 2,
    day: 10,
    page: 263,
    last_page: 275,
    volume: 4,
    heading: "St. ScHotastica, VIRGIN"
  },
  {
    type: DayType.CalendarDate,
    month: 2,
    day: 14,
    page: 275,
    last_page: 276,
    volume: 4,
    heading: "St. Vauentine, Prizst anD Martyr"
  },
  {
    type: DayType.CalendarDate,
    month: 2,
    day: 15,
    page: 276,
    last_page: 278,
    volume: 4,
    heading: "SS. Faustinus anp Jovita, Martyrs ."
  },
  {
    type: DayType.CalendarDate,
    month: 2,
    day: 18,
    page: 278,
    last_page: 280,
    volume: 4,
    heading: "St. Simeon, Bishop anp Martyr 5"
  },
  {
    type: DayType.CalendarDate,
    month: 2,
    day: 22,
    page: 280,
    last_page: 289,
    volume: 4,
    heading: "St. Peter’s Cuain aT ANTIOCH o"
  },
  {
    type: DayType.CalendarDate,
    month: 2,
    day: 23,
    page: 289,
    last_page: 296,
    volume: 4,
    heading: "St. Prtzr Daman, CARDINAL AND Doctor or THE CHURCH - . o"
  },
  {
    type: DayType.CalendarDate,
    month: 2,
    day: 24,
    page: 296,
    last_page: 299,
    volume: 4,
    heading: "St. Marutas, APOSTLE ."
  },
  {
    type: DayType.CalendarDate,
    month: 2,
    day: 26,
    page: 299,
    last_page: 305,
    volume: 4,
    heading: "St. Marcaret oF Cortona, PENIrenr"
  },
  {
    type: DayType.CalendarDate,
    month: 3,
    day: 4,
    page: 305,
    last_page: 309,
    volume: 4,
    heading: "St. Casimir, Conressor ."
  },
  {
    type: DayType.CalendarDate,
    month: 3,
    day: 6,
    page: 309,
    last_page: 323,
    volume: 4,
    heading: "SS. Perpetua AND FELICITAS, Manryrs"
  },
  {
    type: DayType.CalendarDate,
    month: 3,
    day: 7,
    page: 323,
    last_page: 332,
    volume: 4,
    heading: "St. Tuomas or Aguin, DocrorR oF THE CHURCH ."
  },
  {
    type: DayType.CalendarDate,
    month: 3,
    day: 8,
    page: 332,
    last_page: 337,
    volume: 4,
    heading: "St. JoHNn oF Goo, Conrrsson"
  },
  {
    type: DayType.CalendarDate,
    month: 3,
    day: 9,
    page: 337,
    last_page: 343,
    volume: 4,
    heading: "St. Frances or Rome, Wipow . ."
  },
  {
    type: DayType.CalendarDate,
    month: 3,
    day: 10,
    page: 343,
    last_page: 349,
    volume: 4,
    heading: "Tue Forty Martyrs 5 ."
  },
];
