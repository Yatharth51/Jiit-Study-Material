type CsFacultyContact = {
  name: string;
  room?: string;
  mobile: string;
};

export const columns = [
  { key: "name", header: "Name" },
  { key: "room", header: "Room" },
  { key: "mobile", header: "Mobile" },
];

export const CsFacultyData: CsFacultyContact[] = [
  {
    name: "Ankita Verma",
    room: "255",
    mobile: "99689 81965",
  },
  {
    name: "Aditi Sharma",
    room: "252",
    mobile: "90152 27761",
  },
  {
    name: "Adwitya Sinha",
    room: "242",
    mobile: "98114 48990",
  },
  {
    name: "Aman Preet Kaur",
    room: "265",
    mobile: "95604 33778",
  },
  {
    name: "Amarjeet Kaur",
    room: "298",
    mobile: "95821 36979",
  },
  {
    name: "Ankita",
    room: "241",
    mobile: "98680 30989",
  },
  {
    name: "Amarjeet Prajapati",
    room: "251",
    mobile: "89507 75885",
  },
  {
    name: "Anuja Arora",
    room: "264",
    mobile: "98109 82939",
  },
  {
    name: "Aparajita Nanda",
    room: "297",
    mobile: "95567 06896",
  },
  {
    name : "Sonal",
    room : "266",
    mobile : "9643685218"
  },
  {
    name : "",
    room : "",
    mobile : ""
  },
];
