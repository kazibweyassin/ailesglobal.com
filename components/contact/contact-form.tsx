"use client"

import { useState } from "react"

export function ContactForm({ interest }: { interest?: string }) {
  const [note, setNote] = useState("")

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const name = String(data.get("name") ?? "")
        const topic = String(data.get("interest") ?? "")
        const message = String(data.get("message") ?? "")
        const body = `Name: ${name}\nTopic: ${topic}\n\n${message}`
        window.location.href = `mailto:hello@ailesglobal.com?subject=${encodeURIComponent("Ailes Global")}&body=${encodeURIComponent(body)}`
        setNote("Your email app should open with this message. You can also write straight to hello@ailesglobal.com.")
      }}
    >
      <label className="block text-sm font-medium">
        Name
        <input name="name" required className="mt-2 w-full rounded-2xl border border-[#e4d9c8] bg-white px-4 py-3 font-normal" />
      </label>
      <label className="block text-sm font-medium">
        Topic
        <select name="interest" defaultValue={interest || "product"} className="mt-2 w-full rounded-2xl border border-[#e4d9c8] bg-white px-4 py-3 font-normal">
          <option value="product">A question about my path</option>
          <option value="guided">Tell me when guided support is ready</option>
          <option value="employer">I am hiring</option>
          <option value="correction">A source looks out of date</option>
        </select>
      </label>
      <label className="block text-sm font-medium">
        Message
        <textarea name="message" required rows={6} className="mt-2 w-full rounded-2xl border border-[#e4d9c8] bg-white px-4 py-3 font-normal" />
      </label>
      <button type="submit" className="w-fit rounded-full bg-[#1e4638] px-5 py-3 text-sm font-medium text-[#f6f1e7]">
        Write to us
      </button>
      {note ? <p className="text-sm text-[#1e4638]">{note}</p> : null}

    </form>
  )
}
