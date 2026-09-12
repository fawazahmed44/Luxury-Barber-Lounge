import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { FileText, CheckCircle2, Upload, AlertCircle, ShieldCheck } from 'lucide-react';

export const BecomeBarberPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    workExperience: '',
    skillsTraining: '',
    reference1: '',
    reference2: '',
    backgroundCheckConsent: false,
    handbookAcknowledgement: false
  });

  const [licenseFileName, setLicenseFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLicenseFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'A valid email is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.workExperience.trim()) newErrors.workExperience = 'Please describe your haircutting experience.';
    if (!formData.skillsTraining.trim()) newErrors.skillsTraining = 'Please detail your barbering skills and training.';
    if (!formData.reference1.trim()) newErrors.reference1 = 'First reference is required.';
    if (!formData.reference2.trim()) newErrors.reference2 = 'Second reference is required.';
    if (!formData.backgroundCheckConsent) newErrors.background = 'Background check authorization is required.';
    if (!formData.handbookAcknowledgement) newErrors.handbook = 'Employee Handbook acknowledgement is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f4f2ee]">
      <PageHeader
        badge="Career Opportunities"
        title="Become A Barber"
        subtitle="Talented, licensed, and friendly barbers are invited to apply. Join our high-end Downtown San Diego team led by owner Antony."
        breadcrumbs={[
          { label: 'Barbers', href: '/barbers' },
          { label: 'Become a Barber' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {submitted ? (
          <div className="bg-[#121417] border border-[#272a33] p-8 sm:p-12 text-center rounded-sm space-y-6">
            <div className="w-16 h-16 bg-[#1b1e25] border border-[#c5a880] text-[#c5a880] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
                Application Received
              </span>
              <h2 className="font-serif text-3xl font-medium text-white">
                Thank You For Applying, {formData.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#8e929e] max-w-md mx-auto leading-relaxed">
                Our management team and owner Antony will review your qualifications and references. If selected, we will contact you directly at <strong className="text-white">{formData.phone}</strong> for an in-person audition and interview.
              </p>
            </div>
            <div className="pt-4 flex justify-center gap-4">
              <Link
                to="/barbers"
                className="px-6 py-3 bg-[#c5a880] text-[#0c0d0e] text-xs uppercase tracking-widest font-semibold"
              >
                Meet Our Current Barbers
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-10">
            {/* Quick Policy links */}
            <div className="p-4 bg-[#14151a] border border-[#242730] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <span className="text-[#9ea1ad]">
                Before applying, please review our standard policies and agreement templates:
              </span>
              <div className="flex gap-4">
                <Link
                  to="/policies"
                  className="text-[#c5a880] hover:underline flex items-center gap-1 font-medium"
                >
                  <FileText className="w-3.5 h-3.5" /> Employee Handbook
                </Link>
                <Link
                  to="/contractor-agreement"
                  className="text-[#c5a880] hover:underline flex items-center gap-1 font-medium"
                >
                  <FileText className="w-3.5 h-3.5" /> Contractor Agreement
                </Link>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-[#121316] border border-[#24262d] p-6 sm:p-10 rounded-sm space-y-8">
              <div className="border-b border-[#202228] pb-4">
                <h3 className="font-serif text-2xl font-medium text-white">Barber Application Form</h3>
                <p className="text-xs text-[#828692] mt-1">
                  Please complete all fields accurately.
                </p>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-wider text-[#a2a6b2] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="First and Last Name"
                    className="w-full bg-[#181a1f] border border-[#2b2e36] focus:border-[#c5a880] px-4 py-3 text-sm text-white outline-none"
                  />
                  {errors.name && <p className="text-xs text-[#d65f5f] mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a2a6b2] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="barber@example.com"
                    className="w-full bg-[#181a1f] border border-[#2b2e36] focus:border-[#c5a880] px-4 py-3 text-sm text-white outline-none"
                  />
                  {errors.email && <p className="text-xs text-[#d65f5f] mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a2a6b2] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(619) 000-0000"
                    className="w-full bg-[#181a1f] border border-[#2b2e36] focus:border-[#c5a880] px-4 py-3 text-sm text-white outline-none"
                  />
                  {errors.phone && <p className="text-xs text-[#d65f5f] mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* License Upload */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-[#a2a6b2]">
                  Upload Driver's License / Barber's License
                </label>
                <div className="border-2 border-dashed border-[#2b2e36] hover:border-[#c5a880] p-6 text-center cursor-pointer transition-colors rounded-sm bg-[#16181d] relative">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="w-6 h-6 text-[#c5a880]" />
                    <span className="text-xs text-[#8e929e]">
                      {licenseFileName ? (
                        <strong className="text-white">{licenseFileName}</strong>
                      ) : (
                        'Click or drag file to upload license document (PDF, PNG, JPG)'
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a2a6b2] mb-2">
                  Work Experience *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.workExperience}
                  onChange={(e) => setFormData({ ...formData, workExperience: e.target.value })}
                  placeholder="Detail previous barbershop or salon environments, years in chair, specialties (fades, shears, beard shaping)..."
                  className="w-full bg-[#181a1f] border border-[#2b2e36] focus:border-[#c5a880] px-4 py-3 text-sm text-white outline-none"
                />
                {errors.workExperience && <p className="text-xs text-[#d65f5f] mt-1">{errors.workExperience}</p>}
              </div>

              {/* Key Skills / Barber Training */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a2a6b2] mb-2">
                  Key Skills & Barber Training *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.skillsTraining}
                  onChange={(e) => setFormData({ ...formData, skillsTraining: e.target.value })}
                  placeholder="Barber college or apprenticeship history, straight razor certifications, clipper techniques, customer service ethos..."
                  className="w-full bg-[#181a1f] border border-[#2b2e36] focus:border-[#c5a880] px-4 py-3 text-sm text-white outline-none"
                />
                {errors.skillsTraining && <p className="text-xs text-[#d65f5f] mt-1">{errors.skillsTraining}</p>}
              </div>

              {/* Two References */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a2a6b2] mb-2">
                    Reference 1 (Name & Contact) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.reference1}
                    onChange={(e) => setFormData({ ...formData, reference1: e.target.value })}
                    placeholder="e.g. Master Barber / Shop Owner, Phone"
                    className="w-full bg-[#181a1f] border border-[#2b2e36] focus:border-[#c5a880] px-4 py-3 text-sm text-white outline-none"
                  />
                  {errors.reference1 && <p className="text-xs text-[#d65f5f] mt-1">{errors.reference1}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a2a6b2] mb-2">
                    Reference 2 (Name & Contact) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.reference2}
                    onChange={(e) => setFormData({ ...formData, reference2: e.target.value })}
                    placeholder="e.g. Colleague or Client, Phone"
                    className="w-full bg-[#181a1f] border border-[#2b2e36] focus:border-[#c5a880] px-4 py-3 text-sm text-white outline-none"
                  />
                  {errors.reference2 && <p className="text-xs text-[#d65f5f] mt-1">{errors.reference2}</p>}
                </div>
              </div>

              {/* Acknowledgements */}
              <div className="space-y-4 pt-4 border-t border-[#202228]">
                <div className="flex items-start gap-3 text-xs text-[#9094a1]">
                  <input
                    type="checkbox"
                    id="bgCheck"
                    checked={formData.backgroundCheckConsent}
                    onChange={(e) => setFormData({ ...formData, backgroundCheckConsent: e.target.checked })}
                    className="mt-0.5 accent-[#c5a880]"
                  />
                  <label htmlFor="bgCheck">
                    I grant permission for Luxury Barber Lounge to conduct a background check and contact my listed references. *
                  </label>
                </div>
                {errors.background && <p className="text-xs text-[#d65f5f]">{errors.background}</p>}

                <div className="flex items-start gap-3 text-xs text-[#9094a1]">
                  <input
                    type="checkbox"
                    id="handbookAck"
                    checked={formData.handbookAcknowledgement}
                    onChange={(e) => setFormData({ ...formData, handbookAcknowledgement: e.target.checked })}
                    className="mt-0.5 accent-[#c5a880]"
                  />
                  <label htmlFor="handbookAck">
                    I acknowledge that I have reviewed the Barbershop Employee Handbook & Terms of Service guidelines. *
                  </label>
                </div>
                {errors.handbook && <p className="text-xs text-[#d65f5f]">{errors.handbook}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#c5a880] hover:bg-[#d4b992] text-[#0c0d0e] font-semibold text-xs tracking-widest uppercase transition-all shadow-md"
              >
                Submit Barber Application
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
