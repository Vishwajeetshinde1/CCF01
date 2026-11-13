// SAMPLE DATA: replace with your farmers. Add each farmer once, then list the farmer id inside a lot.
const FARMERS=[
{id:"F001",name:"Ramesh Patil",phone:"9800000001",village:"Kalamb",district:"Yavatmal",state:"Maharashtra",hybrid:"Hybrid A",acres:5,quality:{"Grade":"A","Trash":"2.1%","Moisture":"8%"},hvi:{"Micronaire":4.2,"Staple length":"29.5 mm","Strength":"29 g/tex"}},
{id:"F002",name:"Sita Rathod",phone:"9800000002",village:"Pandhurna",district:"Chhindwara",state:"Madhya Pradesh",hybrid:"Hybrid B",acres:3,quality:{"Grade":"A","Trash":"2.4%","Moisture":"8%"},hvi:{"Micronaire":4.0,"Staple length":"30 mm","Strength":"28 g/tex"}},
{id:"F003",name:"Mahesh Reddy",phone:"9800000003",village:"Adoni",district:"Kurnool",state:"Andhra Pradesh",hybrid:"Hybrid A",acres:8,quality:{"Grade":"B","Trash":"3.0%","Moisture":"9%"},hvi:{"Micronaire":4.4,"Staple length":"29 mm","Strength":"27 g/tex"}},
{id:"F004",name:"Lakshmi Devi",phone:"9800000004",village:"Gadwal",district:"Jogulamba Gadwal",state:"Telangana",hybrid:"Hybrid C",acres:4,quality:{"Grade":"A","Trash":"2.2%","Moisture":"8%"},hvi:{"Micronaire":4.1,"Staple length":"29.8 mm","Strength":"28.5 g/tex"}}];
const LOTS=[
{no:1,name:"Kohinoor",date:"20 Oct 2026",bales:24,farmers:[{id:"F001",qty:42},{id:"F002",qty:38},{id:"F003",qty:60}]},
{no:2,name:"Sample Lot B",date:"22 Oct 2026",bales:18,farmers:[{id:"F003",qty:35},{id:"F004",qty:45}]},
{no:3,name:"Sample Lot C",date:"24 Oct 2026",bales:12,farmers:[{id:"F002",qty:30},{id:"F004",qty:30}]}];
