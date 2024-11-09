"use server";

export const login_undergraduate = async (prevState:any,formData:FormData) => {
    try {
        const respose = await fetch(
            "https://eportal.oauife.edu.ng/login1.php",
            {
                method: "POST",
                body: formData,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        console.log(await respose.text());
    } catch (err) {
        console.log(err);
    }
};

// The server sends html and not json data,  i guess i'm stuck with using native form action and not server actions
