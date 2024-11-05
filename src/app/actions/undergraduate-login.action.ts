// "use server";

// import { NextResponse } from "next/server";

// export const login_undergraduate = async (formData: FormData) => {
//     const formObject = {} as any;
//     formData.forEach((value, key) => {
//         formObject[key] = value;
//     });
//     console.log(formObject);
//     try {
//         const respose = await fetch(
//             "https://eportal.oauife.edu.ng/login1.php",
//             {
//                 method: "POST",
//                 body: JSON.stringify(formObject),
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             }
//         );

//         console.log(await respose.text());
//     } catch (err) {
//         console.log(err);
//     }
// };

// The server sends html and not json data,  i guess i'm stuck with using native form action and not server actions
