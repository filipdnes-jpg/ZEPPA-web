import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Send, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Zadajte meno").max(100),
  phone: z.string().trim().min(6, "Zadajte telefón").max(40),
  email: z.string().trim().email("Neplatný e-mail").max(255),
  message: z.string().trim().min(5, "Napíšte správu").max(1500),
});

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      toast.error("Skontrolujte vyplnené polia.");
      return;
    }
    setErrors({});
    setSent(true);
    toast.success("Dopyt odoslaný. Ozveme sa do 24 hodín.");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 6000);
  };

  if (sent) {
    return (
      <div className="glass rounded-3xl p-10 text-center animate-fade-in">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[var(--gradient-brand)] shadow-glow mb-4">
          <CheckCircle2 className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold">Ďakujeme!</h3>
        <p className="mt-2 text-muted-foreground">Vaša správa bola odoslaná. Ozveme sa vám čo najskôr.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass rounded-3xl p-6 md:p-8 space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <Field name="name" label="Meno" placeholder="Vaše meno" error={errors.name} />
        <Field name="phone" label="Telefón" placeholder="+421 ..." error={errors.phone} />
      </div>
      <Field name="email" label="E-mail" type="email" placeholder="vas@email.sk" error={errors.email} />
      <div>
        <label className="text-sm font-medium text-foreground/80">Správa</label>
        <textarea
          name="message"
          rows={5}
          placeholder="Popíšte nám váš projekt..."
          className="mt-1.5 w-full rounded-xl bg-black/40 border border-border px-4 py-3 text-sm outline-none focus:border-brand-glow focus:ring-2 focus:ring-brand/30 transition resize-none"
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gradient-brand)] px-6 py-3.5 text-sm font-semibold text-white shadow-glow hover:scale-[1.02] transition-transform"
      >
        Odoslať dopyt <Send className="h-4 w-4" />
      </button>
    </form>
  );
}

function Field({ name, label, placeholder, type = "text", error }: { name: string; label: string; placeholder?: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground/80">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl bg-black/40 border border-border px-4 py-3 text-sm outline-none focus:border-brand-glow focus:ring-2 focus:ring-brand/30 transition"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}