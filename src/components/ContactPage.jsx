import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Upload, Check, ChevronDown, Trash2 } from 'lucide-react';

const SERVICES = [
  "Rapid Prototyping",
  "Custom 3D Printing",
  "Scale Models",
  "3D Designing & Sculpting",
  "3D Scanning",
  "CNC Machining"
];

const FAQS = [
  {
    q: "Do you provide 3D printing services near me?",
    a: "Yes, we offer both local and online 3D printing services across India. We deliver high-quality parts right to your doorstep."
  },
  {
    q: "What software do you use?",
    a: "We use advanced, industry-standard 3D modeling and slicing software such as Fusion 360, SolidWorks, and Cura to prepare and print your designs with precision."
  },
  {
    q: "Can you help with design?",
    a: "Yes, we provide professional 3D modeling and sculpting services across India. If you share your ideas or sketches, our design team can build ready-to-print 3D models."
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });

  const [focusedField, setFocusedField] = useState({
    name: false,
    email: false,
    phone: false
  });

  const [uploadedFile, setUploadedFile] = useState(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFocus = (field) => {
    setFocusedField(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field, val) => {
    if (!val) {
      setFocusedField(prev => ({ ...prev, [field]: false }));
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (file) => {
    const ext = file.name.split('.').pop().toLowerCase();
    const validExtensions = ['stl', 'obj', 'step', 'stp'];
    
    if (validExtensions.includes(ext)) {
      setUploadedFile(file);
    } else {
      alert("Invalid file format. Please upload .STL, .OBJ, or .STEP files.");
    }
  };

  const removeFile = (e) => {
    e.stopPropagation();
    setUploadedFile(null);
  };

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      alert("Please fill in all the required fields.");
      return;
    }
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '' });
      setUploadedFile(null);
      setFocusedField({ name: false, email: false, phone: false });
      setFormSubmitted(false);
      alert("Thank you! Your quote request has been received. Our team will contact you shortly.");
    }, 2000);
  };

  return (
    <div className="relative min-h-screen bg-bg-primary pb-24 z-10 overflow-hidden transition-colors duration-300">
      <div className="bg-grid-overlay"></div>
      <div className="bg-radial-gradient"></div>

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-xs font-bold text-accent-cyan tracking-[0.15em] uppercase mb-3 inline-block bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent">
            Quick Quote
          </span>
          <h1 className="font-heading text-4xl sm:text-[3.5rem] font-bold text-text-primary leading-tight mb-4 text-gradient">
            Get a LayerCraft3D Quote
          </h1>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Upload your model, choose the service, and share the details our team needs to price your next 3D printing, design, scanning, or machining project.
          </p>
        </div>
      </section>

      {/* Contact Hub */}
      <section className="px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
          
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-bg-secondary border border-border-color hover:border-accent-cyan/20 rounded-2xl p-8 sm:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.03)] text-left transition-all duration-300"
          >
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-1">Request a Quote</h2>
            <p className="text-sm text-text-secondary mb-8">Fill out the details below, and we will get back to you with pricing options.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              {/* Full Name */}
              <div className={`relative border-b border-border-color pt-4 transition-all duration-300 ${
                focusedField.name || formData.name ? 'border-accent-cyan' : ''
              }`}>
                <label className={`absolute left-0 font-sans transition-all duration-300 pointer-events-none ${
                  focusedField.name || formData.name 
                    ? 'top-[-0.25rem] text-xs text-accent-cyan' 
                    : 'top-5 text-sm text-text-muted hover:text-text-secondary'
                }`}>
                  Full Name *
                </label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-none outline-none text-text-primary font-sans text-base py-2.5" 
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  onFocus={() => handleFocus('name')}
                  onBlur={(e) => handleBlur('name', e.target.value)}
                  required
                />
              </div>

              {/* Email Address */}
              <div className={`relative border-b border-border-color pt-4 transition-all duration-300 ${
                focusedField.email || formData.email ? 'border-accent-cyan' : ''
              }`}>
                <label className={`absolute left-0 font-sans transition-all duration-300 pointer-events-none ${
                  focusedField.email || formData.email 
                    ? 'top-[-0.25rem] text-xs text-accent-cyan' 
                    : 'top-5 text-sm text-text-muted hover:text-text-secondary'
                }`}>
                  Email Address *
                </label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-none outline-none text-text-primary font-sans text-base py-2.5" 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onFocus={() => handleFocus('email')}
                  onBlur={(e) => handleBlur('email', e.target.value)}
                  required
                />
              </div>

              {/* Phone Number */}
              <div className={`relative border-b border-border-color pt-4 transition-all duration-300 ${
                focusedField.phone || formData.phone ? 'border-accent-cyan' : ''
              }`}>
                <label className={`absolute left-0 font-sans transition-all duration-300 pointer-events-none ${
                  focusedField.phone || formData.phone 
                    ? 'top-[-0.25rem] text-xs text-accent-cyan' 
                    : 'top-5 text-sm text-text-muted hover:text-text-secondary'
                }`}>
                  Phone Number *
                </label>
                <input 
                  type="tel" 
                  className="w-full bg-transparent border-none outline-none text-text-primary font-sans text-base py-2.5" 
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  onFocus={() => handleFocus('phone')}
                  onBlur={(e) => handleBlur('phone', e.target.value)}
                  required
                />
              </div>

              {/* Service Required */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-text-secondary">Service Required *</label>
                <div className="relative w-full">
                  <select 
                    className="w-full bg-bg-primary border border-border-color rounded-lg text-text-primary font-sans text-sm px-4 py-3 outline-none appearance-none cursor-pointer focus:border-accent-cyan transition-colors duration-300"
                    value={formData.service}
                    onChange={(e) => handleInputChange('service', e.target.value)}
                    required
                  >
                    <option value="" disabled className="bg-bg-secondary text-text-secondary">Select a core service...</option>
                    {SERVICES.map((srv, idx) => (
                      <option key={idx} value={srv} className="bg-bg-secondary text-text-primary">{srv}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" size={16} />
                </div>
              </div>

              {/* File Dropzone */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-text-secondary">Attach 3D Designs (Optional)</label>
                <div 
                  className={`border-[1.5px] border-dashed border-border-color rounded-xl bg-bg-primary/10 p-8 text-center cursor-pointer relative hover:border-accent-cyan hover:bg-accent-cyan/[0.015] transition-all duration-300 ${
                    isDragActive ? 'border-accent-cyan bg-accent-cyan/[0.015]' : ''
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input 
                    type="file" 
                    id="file-upload-input"
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    onChange={handleFileChange}
                    accept=".stl,.obj,.step,.stp"
                  />
                  
                  {!uploadedFile ? (
                    <label htmlFor="file-upload-input" className="flex flex-col items-center gap-2 cursor-pointer">
                      <Upload className="text-text-muted hover:text-accent-cyan transition-colors" size={28} />
                      <span className="text-sm font-semibold text-text-primary">Upload your 3D models/designs</span>
                      <span className="text-xs text-text-muted">Supports .STL, .OBJ, .STEP for expert pricing</span>
                    </label>
                  ) : (
                    <div className="flex items-center gap-4 p-2 text-left relative z-20">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                        <Check size={16} />
                      </div>
                      <div className="flex flex-col flex-grow overflow-hidden">
                        <span className="text-sm font-medium text-text-primary truncate">{uploadedFile.name}</span>
                        <span className="text-xs text-text-muted">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</span>
                      </div>
                      <button type="button" className="p-2 rounded-lg text-text-muted hover:text-red-500 hover:bg-red-500/10 transition-all" onClick={removeFile}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit CTA */}
              <button 
                type="submit" 
                className="btn-glow w-full py-3.5 rounded-lg text-sm font-semibold text-text-primary select-none mt-2 cursor-pointer"
                disabled={formSubmitted}
              >
                {formSubmitted ? "Sending Quote..." : "Get Free Quote"}
              </button>
            </form>
          </motion.div>

          {/* Right Column: Contact Info & FAQ */}
          <div className="flex flex-col gap-14 text-left">
            
            {/* Info Cards */}
            <div>
              <h3 className="font-heading text-lg font-bold text-text-primary mb-5 tracking-wide">Direct Connection</h3>
              
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-start p-5 bg-bg-secondary border border-border-color rounded-xl hover:border-accent-cyan/25 hover:translate-x-0.5 hover:shadow-[0_4px_20px_rgba(6,182,212,0.02)] transition-all duration-300">
                  <Mail className="text-accent-cyan mt-0.5 flex-shrink-0" size={20} />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Email Support</span>
                    <a href="mailto:support@domain.com" className="text-sm text-text-primary hover:text-accent-cyan transition-colors">support@domain.com</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 bg-bg-secondary border border-border-color rounded-xl hover:border-accent-cyan/25 hover:translate-x-0.5 hover:shadow-[0_4px_20px_rgba(6,182,212,0.02)] transition-all duration-300">
                  <MapPin className="text-accent-cyan mt-0.5 flex-shrink-0" size={20} />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Business Address</span>
                    <span className="text-sm text-text-primary">Hyderabad, Telangana, India</span>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 bg-bg-secondary border border-border-color rounded-xl hover:border-accent-cyan/25 hover:translate-x-0.5 hover:shadow-[0_4px_20px_rgba(6,182,212,0.02)] transition-all duration-300">
                  <Clock className="text-accent-cyan mt-0.5 flex-shrink-0" size={20} />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Turnaround Details</span>
                    <span className="text-sm text-text-primary">Design review quotes provided within 24 hours.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Accordion FAQ Component with Framer Motion height transitions */}
            <div>
              <h3 className="font-heading text-lg font-bold text-text-primary mb-5 tracking-wide">Frequently Asked Questions</h3>

              <div className="flex flex-col gap-4">
                {FAQS.map((faq, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-bg-secondary border rounded-xl overflow-hidden transition-all duration-300 ${
                      activeFaq === idx ? 'border-accent-cyan/30' : 'border-border-color hover:border-accent-cyan/30'
                    }`}
                  >
                    <button 
                      type="button" 
                      className="w-full bg-transparent border-none py-4.5 px-6 flex justify-between items-center gap-6 cursor-pointer text-text-primary font-sans text-sm font-semibold text-left focus:outline-none" 
                      onClick={() => toggleFaq(idx)}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`text-text-secondary flex-shrink-0 transform transition-transform duration-300 ${
                        activeFaq === idx ? 'rotate-180 text-accent-cyan' : ''
                      }`} size={18} />
                    </button>
                    
                    <motion.div
                      initial={false}
                      animate={{ height: activeFaq === idx ? "auto" : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-sm text-text-secondary leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
