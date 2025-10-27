import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export const sendMessageContact = async (formData: FormData) => {
  "use server";
  try {
    const rawFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    // Validate the form data
    const validatedFields = contactSchema.safeParse(rawFormData);
    if (!validatedFields.success) {
      throw new Error(
        "Validation failed: " +
          JSON.stringify(validatedFields.error.flatten().fieldErrors)
      );
    }
    console.log("Validated form data:", validatedFields.data);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const apiUrl = `${baseUrl}/api/contact`;
    console.log("API URL being fetched:", apiUrl);

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": "en",
        Accept: "application/json",
      },
      body: JSON.stringify(validatedFields.data),
    });
    if (!res.ok) {
      console.log("Response not ok:", res.status, res.statusText);
      throw new Error("error in post message contact");
    }
    const result = await res.json();
    console.log("Success response:", result);
  } catch (error) {
    console.log("error send message contact", error);
  }
};
