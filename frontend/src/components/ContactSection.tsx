import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, MapPin, Mail, Phone } from 'lucide-react';
import { useSubmitMessage } from '../hooks/useQueries';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormState = { name: '', email: '', subject: '', message: '' };

const contactInfo = [
  {
    icon: <MapPin size={18} />,
    label: 'Address',
    value: 'India',
  },
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'info@brainscribe.in',
  },
  {
    icon: <Phone size={18} />,
    label: 'Phone',
    value: '+91 (0) 000 000 0000',
  },
];

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = useSubmitMessage();

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await submitMutation.mutateAsync(form);
      setSubmitted(true);
      setForm(initialForm);
    } catch {
      // error handled via mutation state
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Get in Touch
          </div>
          <h2 className="font-display font-700 text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Let's Start a Conversation
          </h2>
          <p className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            Have a project in mind or want to learn more about our services? We'd love to hear
            from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact info sidebar */}
          <aside className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <h3 className="font-display font-600 text-xl mb-2">Brainscribe Solutions LLP</h3>
              <p className="text-sm text-primary-foreground/80 leading-relaxed mb-8">
                We're here to help you navigate your technology challenges. Reach out and our team
                will respond within one business day.
              </p>
              <div className="flex flex-col gap-5">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs text-primary-foreground/60 font-medium uppercase tracking-wide mb-0.5">
                        {info.label}
                      </p>
                      <p className="text-sm font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <p className="text-sm font-semibold text-foreground mb-1">Business Hours</p>
              <p className="text-sm text-muted-foreground">Monday – Friday: 9:00 AM – 6:00 PM IST</p>
              <p className="text-sm text-muted-foreground">Saturday: 10:00 AM – 2:00 PM IST</p>
            </div>
          </aside>

          {/* Contact form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center bg-card rounded-2xl border border-border p-12 shadow-card">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-5">
                  <CheckCircle size={32} className="text-emerald-600" />
                </div>
                <h3 className="font-display font-700 text-2xl text-foreground mb-3">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground text-base max-w-sm leading-relaxed mb-6">
                  Thank you for reaching out. Our team will review your message and get back to you
                  within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-dark transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-card rounded-2xl border border-border p-8 shadow-card flex flex-col gap-5"
              >
                {/* Error banner */}
                {submitMutation.isError && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                    <AlertCircle size={18} className="flex-shrink-0" />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}

                {/* Name & Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      className={errors.name ? 'border-destructive focus-visible:ring-destructive' : ''}
                      disabled={submitMutation.isPending}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={handleChange}
                      className={errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}
                      disabled={submitMutation.isPending}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help you?"
                    value={form.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'border-destructive focus-visible:ring-destructive' : ''}
                    disabled={submitMutation.isPending}
                  />
                  {errors.subject && (
                    <p className="text-xs text-destructive">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or enquiry..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={`resize-none ${errors.message ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                    disabled={submitMutation.isPending}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="self-start inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary-dark transition-all duration-200 shadow-card hover:shadow-card-hover disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitMutation.isPending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
