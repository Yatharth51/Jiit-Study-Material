type AdminContact = {
  name: string;
  designation?: string;
  room?: string;
  mobile?: string;
  office_line?: string;
  fax?: string;
  residence?: string;
  residence_line?: string;
};

export const columns = [
  { key: "name", header: "Name" },
  { key: "designation", header: "Designation" },
  { key: "room", header: "Room" },
  { key: "mobile", header: "Mobile" },
  { key: "office_line", header: "Office Line" },
  { key: "fax", header: "Fax" },
  { key: "residence", header: "Residence" },
  { key: "residence_line", header: "Residence Line" }
];


export const adminData: AdminContact[] = [
  {
    name: "Col. (Retd.) P.C. Malhotra",
    designation: "Registrar",
    room: "110",
    mobile: "9958385573",
    office_line: "0120 2400982",
  },
  {
    name: "Ajit Tomar",
    designation: "",
    room: "111",
    mobile: "9818912704",
    office_line: "0120-2401006",
    fax: "2404180",
    residence: "B-11",
  },
  {
    name: "Bhagat Singh Bora",
    room: "174",
    mobile: "9717585492",
  },
  {
    name: "A. S. Bhadouna",
    room: "176",
    mobile: "9958511326",
  },
  {
    name: "Narendra Kumar",
    designation: "Safety Officer",
    room: "178",
    mobile: "9868380632",
    residence_line: "9868380632",
  },
  {
    name: "Virendar Shahi",
    designation: "Jr. Admn. Coordinator",
    room: "177",
    mobile: "9891277678",
  },
  {
    name: "M.S. Bisht",
    designation: "Tel Operator",
    room: "9",
    mobile: "9818118029",
  },
  {
    name: "Hira Lal Rathore",
    designation: "Commn.",
    room: "100/200",
  },
  {
    name: "Kailash Singh",
    designation: "Supervisor - Housekeeping",
    room: "293",
    mobile: "9971660631",
  },
  {
    name: "Sanjay Kumar",
    designation: "Jr Assistant - Housekeeping",
    room: "293",
    mobile: "9899667363",
  },
  {
    name: "Mohd Nasim Raza",
    designation: "Supervisor - Housekeeping",
    room: "628",
    mobile: "8860689810",
  },
  {
    name: "Rizwan Ahmad",
    designation: "CCTV Tech.",
    room: "611",
    mobile: "9999640825",
  },
  {
    name: "Housekeeping Stores",
    room: "695",
  },
  {
    name: "Reception ABB-3",
    room: "400",
  },
];
