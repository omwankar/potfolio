import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { profile, socials } from '../constants/index.js';

const initialForm = { name: '', email: '', message: '' };

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [form, setForm] = useState(initialForm);

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      await emailjs.send(
        'service_l1atn48',
        'template_tr17uig',
        {
          from_name: form.name,
          to_name: profile.name,
          from_email: form.email,
          to_email: profile.email,
          message: form.message,
        },
        'hWuG9tMVf4NIinvHV',
      );
      setStatus('success');
      setForm(initialForm);
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-pad">
      <div className="c-space mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build"
          accent="something"
          subtitle="Have a role, a project, or an idea? Drop a message and I'll get back to you."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="glass relative overflow-hidden p-8" delay={0.05}>
            <div className="pointer-events-none absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-accent-cyan/15 blur-3xl" />
            <p className="text-lg font-semibold text-white">Get in touch</p>
            <p className="mt-2 text-sm leading-relaxed text-white/55">
              Based in {profile.location}, open to remote work worldwide.
            </p>

            <div className="mt-8 space-y-3">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target={s.name === 'Email' ? undefined : '_blank'}
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition-all hover:border-accent-violet/50 hover:bg-white/[0.08]">
                  <span className="text-white/50">{s.name}</span>
                  <span className="text-white/90">{s.handle}</span>
                </a>
              ))}
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition-all hover:border-accent-violet/50 hover:bg-white/[0.08]">
                <span className="text-white/50">Phone</span>
                <span className="text-white/90">{profile.phone}</span>
              </a>
            </div>
          </Reveal>

          <Reveal className="glass p-8" delay={0.1}>
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
              <label className="space-y-2">
                <span className="field-label">Full Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="field-input"
                />
              </label>
              <label className="space-y-2">
                <span className="field-label">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  className="field-input"
                />
              </label>
              <label className="space-y-2">
                <span className="field-label">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or role..."
                  className="field-input resize-none"
                />
              </label>

              <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-sm text-accent-cyan">Thanks! Your message has been sent.</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400">Something went wrong. Please email me directly.</p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
