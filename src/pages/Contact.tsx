import { Mail, MapPin, Send, UserRound } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { contactOptions } from '../data/site';

type FormValues = {
  fullName: string;
  email: string;
  company: string;
  serviceRequired: string;
  budget: string;
  projectDetails: string;
};

const initialValues: FormValues = {
  fullName: '',
  email: '',
  company: '',
  serviceRequired: '',
  budget: '',
  projectDetails: '',
};

export default function Contact() {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (field: keyof FormValues, value: string) => {
    setFormValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!formValues.fullName.trim()) {
      nextErrors.fullName = 'Full name is required.';
    }

    if (!formValues.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formValues.serviceRequired.trim()) {
      nextErrors.serviceRequired = 'Please select a service.';
    }

    if (!formValues.projectDetails.trim()) {
      nextErrors.projectDetails = 'Project details are required.';
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('error');
      setMessage('Please correct the highlighted fields before submitting.');
      return;
    }

    setStatus('submitting');
    setMessage('Sending your inquiry...');

    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus('success');
    setMessage('Your inquiry is ready for a backend or email-service integration. Please review the details before sending.');
    setFormValues(initialValues);
  };

  return (
    <section className="section-shell pb-8">
      <div className="container grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <div className="badge">Let&apos;s talk</div>
          <h1 className="mt-6 page-title text-[var(--graphite)]">Let&apos;s Build Something Great Together.</h1>
          <p className="mt-5 max-w-lg text-lg text-[var(--muted)]">
            Have a project in mind or need help improving your digital presence? We&apos;d love to hear from you.
          </p>

          <div className="mt-8 space-y-4">
            <a href="mailto:codetechfsd@gmail.com" className="flex items-center gap-3 text-[var(--graphite)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--mist)] text-[var(--royal)]">
                <Mail size={16} />
              </span>
              codetechfsd@gmail.com
            </a>
            <a href="https://instagram.com/codetechfsd" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[var(--graphite)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--mist)] text-[var(--royal)]">
                <UserRound size={16} />
              </span>
              @codetechfsd
            </a>
            <div className="flex items-center gap-3 text-[var(--graphite)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--mist)] text-[var(--royal)]">
                <MapPin size={16} />
              </span>
              Near Imtiaz Mart, Sheikhupura Road, Faisalabad, Pakistan.
            </div>
          </div>
        </div>

        <div className="soft-card p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-[var(--graphite)]">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formValues.fullName}
                  onChange={(event) => handleChange('fullName', event.target.value)}
                  className="input-field"
                  aria-invalid={Boolean(errors.fullName)}
                />
                {errors.fullName && <p className="mt-2 text-sm text-red-600">{errors.fullName}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--graphite)]">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={(event) => handleChange('email', event.target.value)}
                  className="input-field"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-[var(--graphite)]">
                  Company Name (Optional)
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formValues.company}
                  onChange={(event) => handleChange('company', event.target.value)}
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="serviceRequired" className="mb-2 block text-sm font-medium text-[var(--graphite)]">
                  Service Required
                </label>
                <select
                  id="serviceRequired"
                  name="serviceRequired"
                  value={formValues.serviceRequired}
                  onChange={(event) => handleChange('serviceRequired', event.target.value)}
                  className="input-field"
                  aria-invalid={Boolean(errors.serviceRequired)}
                >
                  <option value="">Select a service</option>
                  {contactOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.serviceRequired && <p className="mt-2 text-sm text-red-600">{errors.serviceRequired}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="budget" className="mb-2 block text-sm font-medium text-[var(--graphite)]">
                Project Budget (Optional)
              </label>
              <input
                id="budget"
                name="budget"
                type="text"
                value={formValues.budget}
                onChange={(event) => handleChange('budget', event.target.value)}
                className="input-field"
                placeholder="e.g. $5,000 - $20,000"
              />
            </div>

            <div>
              <label htmlFor="projectDetails" className="mb-2 block text-sm font-medium text-[var(--graphite)]">
                Project Details
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                rows={5}
                value={formValues.projectDetails}
                onChange={(event) => handleChange('projectDetails', event.target.value)}
                className="input-field resize-none"
                aria-invalid={Boolean(errors.projectDetails)}
              />
              {errors.projectDetails && <p className="mt-2 text-sm text-red-600">{errors.projectDetails}</p>}
            </div>

            {message && (
              <div
                className={`rounded-2xl border px-4 py-3 text-sm ${
                  status === 'success'
                    ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                    : status === 'error'
                      ? 'border-red-200 bg-red-50 text-red-700'
                      : 'border-[var(--line)] bg-[var(--surface)] text-[var(--graphite)]'
                }`}
              >
                {message}
              </div>
            )}

            <button type="submit" className="primary-button w-full disabled:cursor-not-allowed disabled:opacity-80" disabled={status === 'submitting'}>
              <span>{status === 'submitting' ? 'Sending...' : 'Send Inquiry'}</span>
              {status !== 'submitting' && <Send size={16} className="ml-2" />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
