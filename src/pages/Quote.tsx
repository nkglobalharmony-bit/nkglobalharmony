import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const quoteSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be under 100 characters"),
  company: z
    .string()
    .trim()
    .min(1, "Company is required")
    .max(150, "Company must be under 150 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be under 255 characters"),
  category: z.enum(
    ["apparel", "jewellery", "toys-games", "other"],
    { errorMap: () => ({ message: "Please select a product category" }) }
  ),
  quantity: z
    .string()
    .trim()
    .min(1, "Quantity / order size is required")
    .max(100, "Please keep this under 100 characters"),
  message: z
    .string()
    .trim()
    .min(10, "Please provide at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),
});

type QuoteForm = z.infer<typeof quoteSchema>;
type FieldErrors = Partial<Record<keyof QuoteForm, string>>;

const categories = [
  { value: "apparel", label: "Apparel" },
  { value: "jewellery", label: "Jewellery" },
  { value: "toys-games", label: "Toys & Games" },
  { value: "other", label: "Other" },
];

const initialValues: QuoteForm = {
  name: "",
  company: "",
  email: "",
  category: "apparel",
  quantity: "",
  message: "",
};

const Quote = () => {
  const [values, setValues] = useState<QuoteForm>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof QuoteForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = quoteSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof QuoteForm;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    // Build mailto link with validated, encoded data
    const { name, company, email, category, quantity, message } = result.data;
    const categoryLabel = categories.find((c) => c.value === category)?.label ?? category;
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nCategory: ${categoryLabel}\nQuantity / Order Size: ${quantity}\n\nMessage:\n${message}`
    );
    const subject = encodeURIComponent(`Quote Request – ${categoryLabel}`);
    window.location.href = `mailto:info@nkglobal.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="container py-24 text-center max-w-lg">
            <CheckCircle size={48} className="mx-auto mb-6 text-foreground" strokeWidth={1.5} />
            <h1 className="font-serif text-4xl font-medium mb-4">Request Sent</h1>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Thank you for reaching out. We'll review your request and get back
              to you shortly.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-border px-8 py-3.5 text-sm font-sans tracking-wide hover:bg-foreground hover:text-background transition-colors"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="container py-16 md:py-24">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-sans tracking-wide text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mb-6">
              Request a Quote
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
              Tell us what you need and our team will get back to you with
              pricing, lead times, and sourcing options.
            </p>
          </div>
        </section>

        {/* Form */}
        <section>
          <div className="container py-16 md:py-20 max-w-2xl">
            <form onSubmit={handleSubmit} noValidate className="space-y-8">
              {/* Name */}
              <Field label="Full Name" error={errors.name}>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  maxLength={100}
                  className={inputClass(!!errors.name)}
                />
              </Field>

              {/* Company */}
              <Field label="Company" error={errors.company}>
                <input
                  type="text"
                  name="company"
                  value={values.company}
                  onChange={handleChange}
                  placeholder="Acme Imports Ltd."
                  maxLength={150}
                  className={inputClass(!!errors.company)}
                />
              </Field>

              {/* Email */}
              <Field label="Email Address" error={errors.email}>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  maxLength={255}
                  className={inputClass(!!errors.email)}
                />
              </Field>

              {/* Product Category */}
              <Field label="Product Category" error={errors.category}>
                <select
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                  className={inputClass(!!errors.category)}
                >
                  {categories.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </Field>

              {/* Quantity */}
              <Field label="Quantity / Order Size" error={errors.quantity}>
                <input
                  type="text"
                  name="quantity"
                  value={values.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 500 units, mixed sizes"
                  maxLength={100}
                  className={inputClass(!!errors.quantity)}
                />
              </Field>

              {/* Message */}
              <Field
                label="Message"
                error={errors.message}
                hint={`${values.message.length}/1000`}
              >
                <textarea
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  rows={6}
                  maxLength={1000}
                  placeholder="Describe your requirements, target markets, or any specific details..."
                  className={inputClass(!!errors.message) + " resize-none"}
                />
              </Field>

              <button
                type="submit"
                className="w-full border border-border py-4 text-sm font-sans tracking-wide hover:bg-foreground hover:text-background transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// ── Helpers ────────────────────────────────────────────────────────────────

const inputClass = (hasError: boolean) =>
  [
    "w-full bg-background border px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-colors",
    hasError ? "border-destructive focus:ring-destructive" : "border-border",
  ].join(" ");

const Field = ({
  label,
  error,
  hint,
  children,
}: {
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-1.5">
    <div className="flex justify-between items-baseline">
      <label className="text-xs font-sans tracking-[0.15em] uppercase text-muted-foreground">
        {label}
      </label>
      {hint && <span className="text-xs text-muted-foreground">{hint}</span>}
    </div>
    {children}
    {error && (
      <p className="text-xs text-destructive font-sans">{error}</p>
    )}
  </div>
);

export default Quote;
