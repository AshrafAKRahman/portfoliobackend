// import { query } from "../Data/index.js";

// export async function getAllEmails() {
//   const result = await query("SELECT  * FROM emails;");
//   const gettingallEmails = result.rows;
//   return gettingallEmails;
// }

// export async function addEmail(emailObj) {
//   const result = await query(
//     `INSERT INTO emails (firstName, lastName, email, phone, message) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
//     [
//       emailObj.firstName,
//       emailObj.lastName,
//       emailObj.email,
//       emailObj.phone,
//       emailObj.message,
//     ]
//   );
//   const newEmailObj = result.rows[0];
//   return newEmailObj;
// }
