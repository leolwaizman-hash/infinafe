"use server";
import { createClient } from "@/lib/supabase/server";

export type WaitlistState = { status: "idle" | "success" | "error"; message: string };

export async function joinWaitlist(_prev: WaitlistState, formData: FormData): Promise<WaitlistState> {
  const email = formData.get("email")?.toString().trim().toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { status: "error", message: "Please enter a valid email address." };

  const supabase = await createClient();
  const { error } = await supabase.from("waitlist").insert({ email });

  if (error) {
    if (error.code === "23505") return { status: "error", message: "You're already on the waitlist!" };
    return { status: "error", message: "Something went wrong. Please try again." };
  }
  return { status: "success", message: "You're on the list! We'll reach out when we launch." };
}
