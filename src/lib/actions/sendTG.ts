"use server";
import zod from "zod";

const token = process.env.TG_TOKEN;
const id = process.env.TG_ID;

const SendTGSchema = zod.object({
  name: zod.string().min(3, "Name must be at least 3 characters"),
  email: zod.string().email("Invalid email").min(6, "Email must be at least 6 characters"),
  msg: zod.string().min(10, "Message must be at least 10 characters"),
});

export async function sendTG(message: {
  name: string | zod.ZodString;
  email: string | zod.ZodString;
  msg: string | zod.ZodString;
}) {
  const data = await SendTGSchema.parseAsync(message);
  const url = new URL(`https://api.telegram.org/bot${token}/sendMessage`);
  url.searchParams.set("chat_id", id);
  url.searchParams.set("text", `New Mesage :\nFrom : ${data.name}\nEmail : ${data.email}\nMessage : ${data.msg}`);
  url.searchParams.set("parse_mode", "Markdown");
  return new Promise<object | Error>((resolve) => {
    fetch(url.href)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => resolve(err));
  });
}
