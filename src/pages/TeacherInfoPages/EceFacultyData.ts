type EceFacultyContact = {
  name: string;
  room?: string;
  mobile: string;
};

export const columns = [
  { key: "name", header: "Name" },
  { key: "room", header: "Room" },
  { key: "mobile", header: "Mobile" },
];




export const EceFacultyData: EceFacultyContact[] = [
  {
    name : "Richa Gupta" ,
    room : "" ,
    mobile : "97113 04116",
  },
  {
    name : "Abhinav Gupta" ,
    room : "329" ,
    mobile : "98115 11740",
  },
  {
    name : "Amit Kumar Goel" ,
    room : "324" ,
    mobile : "",
  },
  {
    name : "Ankur Bhardwaj" ,
    room : "311" ,
    mobile : "98711 73145",
  },
  {
    name : "Archana Pandey" ,
    room : "" ,
    mobile : "99588 93317",
  },
  {
    name : "Ashish Goel" ,
    room : "" ,
    mobile : "98119 46987",
  },
  {
    name : "Atul Kumar Shrivastav" ,
    room : "" ,
    mobile : "99101 81129",
  },
  {
    name : "Bhawna Gupta" ,
    room : "" ,
    mobile : "97178 91610",
  },
  {
    name : "Dharmendra Kr" ,
    room : "" ,
    mobile : "96355 50330",
  },
  {
    name : "Neetu Joshi" ,
    room : "" ,
    mobile : "94543 28219",
  },
  {
    name : "Neetu Joshi" ,
    room : "" ,
    mobile : "94543 28219",
  },
  {
    name : "Garima Kapoor" ,
    room : "" ,
    mobile : "88264 11204",
  },
  {
    name : "Gaurav Verma" ,
    room : "" ,
    mobile : "98115 06739",
  },
  {
    name : "Jasmine Saini" ,
    room : "" ,
    mobile : "98710 05331",
  },
  {
    name : "Jitendra Mohan",
    mobile : "99109 09863"
  },
  {
    name : "Juhi" ,
    room : "" ,
    mobile : "95553 77979",
  },
  {
    name : "Mandeep Singh" ,
    room : "" ,
    mobile : "88265 83790",
  },
  {
    name : "Monika" ,
    room : "" ,
    mobile : "98739 04393",
  },
  {
    name : "Neetu Singh" ,
    room : "" ,
    mobile : "97114 11769",
  },
  {
    name : "Nitin Muchhal",
    mobile : "97115 30309"
  },
  {
    name : "Pankaj Kumar Yadav" ,
    room : "" ,
    mobile : "87009 77638",
  },
  {
    name : "Parul Puri" ,
    room : "" ,
    mobile : "98992 70409",
  },
  {
    name : "Rahul Kaushik" ,
    room : "" ,
    mobile : "98736 60813",
  },
  {
    name : "Reema Budhiraja" ,
    room : "" ,
    mobile : "92127 01449",
  },
  {
    name : "Ritesh Kumar Sharma" ,
    room : "" ,
    mobile : "91677 81375",
  },
  {
    name : "Ruby Beniwal" ,
    room : "" ,
    mobile : "97178 74337",
  },
  {
    name: "Samriti Kalia",
    mobile: "83778 02778",
  },
  { 
    name : "Shweta Srivastava (Dean) (HOD)",
    mobile : "99101 75183"
  },
  {
    name : "Shamim Akhter" ,
    room : "" ,
    mobile : "98990 37043",
  },
  {
    name : "Shivaji Tyagi" ,
    room : "" ,
    mobile : "88020 28727",
  },
  {
    name : "Shradha Saxena" ,
    room : "" ,
    mobile : "99113 73860",
  },
  {
    name: "Vineet Khandelwal",
    mobile: "98113 78879",
  },
  {
    name : "Vijay Khare" ,
    room : "" ,
    mobile : "98913 72671",
  },
];

export const EceFacultyData2: EceFacultyContact[] = EceFacultyData.map((val)=>({name : val.name, mobile : val.mobile})) ;


