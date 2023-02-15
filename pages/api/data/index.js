const details = [
  // Rokith
  // SBOVDB553751
  { id: "SBOVDB553751", name: "Rokith" },

  // Hema
  // SBOVDB553954
  { id: "SBOVDB553954", name: "Hema" },

  // Gopika
  // SBOVDP5536281
  { id: "SBOVDP5536281", name: "Gopika" },

  // Vetri
  // SBOVDB554155
  { id: "SBOVDB554155", name: "Vetri" },

  // Motcha Ratchagan
  // SBOVDB554600
  { id: "SBOVDB554600", name: "Motcha Ratchagan" },

  // Meena
  // SBOVDB555102
  { id: "SBOVDB555102", name: "Meena" },

  // Elaisha Mothi
  // SBOVDB555938
  { id: "SBOVDB555938", name: "Elaisha Mothi" },

  // Naveen Bharath
  // SBOVDP558690
  { id: "SBOVDP558690", name: "Naveen Bharath" },

  // Jokin
  // SBOVDP558687
  { id: "SBOVDP558687", name: "Jokin" },

  // sharan
  // SBOVDP5531219
  { id: "SBOVDP5531219", name: "sharan" },

  // Pugazhendhi
  // SBOVDB5517626
  { id: "SBOVDB5517626", name: "Pugazhendhi" },

  // Sanjay
  // SBOVDP5520365
  { id: "SBOVDP5520365", name: "Sanjay" },

  // yugeswar
  // SBOVDP5532605
  { id: "SBOVDP5532605", name: "yugeswar" },

  // Devi Priya
  // SBOVDP5534165
  { id: "SBOVDP5534165", name: "Devi Priya" },

  // Rajasekar
  // SBOVDB5519325
  { id: "SBOVDB5519325", name: "Rajasekar" },

  // Sivaranjani Murugan
  // SBOVDP5535516
  { id: "SBOVDP5535516", name: "Sivaranjani Murugan" },

  // Manibharathi Prakash
  // SBOVDP5536281
  { id: "SBOVDP5536281", name: "Manibharathi Prakash" },

  // Gowri
  // SBOVDP5537528
  { id: "SBOVDP5537528", name: "Gowri" },

  // Hariharan
  // SBOVDP5536990
  { id: "SBOVDP5536990", name: "Hariharan" },

  // Vijayakumar
  // SBOVDP5540033
  { id: "SBOVDP5540033", name: "Vijayakumar" },

  // viknesh
  // SBOVDP5541808
  { id: "SBOVDP5541808", name: "viknesh" },

  // Vishnu Sarath
  // SBOVDP5543603
  { id: "SBOVDP5543603", name: "Vishnu Sarath" },

  // Hemalatha
  // SBOVDP5545222
  { id: "SBOVDP5545222", name: "Hemalatha" },

  // Saravanan
  // SBOVDP5545231
  { id: "SBOVDP5545231", name: "Saravanan" },

  // Sundar
  // SBOVDP5545262
  { id: "SBOVDP5545262", name: "Sundar" },

  // Vignesh
  // SBOVDP5547877
  { id: "SBOVDP5547877", name: "Vignesh" },

  // Mohammad Ashik
  // SBOVDP5549594
  { id: "SBOVDP5549594", name: "Mohammad Ashik" },

  // Hemavarthini
  // SBOVDP5551367
  { id: "SBOVDP5551367", name: "Hemavarthini" },
];

export default async function handler(req, res) {
  const { query } = req;
  res.status(200).json(details);
}

// google sheet id
// 161wliiE_6v0zFpbahrWUkNYtn_FIWJr0_kGXljmeczc

// Sheet link
// https://docs.google.com/spreadsheets/d/161wliiE_6v0zFpbahrWUkNYtn_FIWJr0_kGXljmeczc/edit?usp=sharing