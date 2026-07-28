import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock, Upload, Check, ChevronDown, Trash2 } from 'lucide-react';

const SERVICES = [
  "Rapid Prototyping",
  "Custom 3D Printing",
  "Scale Models",
  "3D Designing & Sculpting",
  "3D Scanning",
  "CNC Machining",
  "Injection Molding"
];

const FAQS = [
  {
    q: "Do you provide online services?",
    a: "Yes. We offer online services. Wherever you are, we'll provide the best support online."
  },
  {
    q: "Do you offer 3D printing services across India?",
    a: "Yes. With online support, we deliver completed projects safely across India."
  },
  {
    q: "Do you offer 3D printing services across India?",
    a: "Yes. With online support, we deliver completed projects safely across India."
  },
  {
    q: "What information should I share initially?",
    a: "You can share your idea, designs or drawings, CAD files, reference images, or project requirements."
  },
  {
    q: "Can you help me choose the right service?",
    a: "Yes. Based on your requirements, we'll recommend the most suitable solution for your project."
  }
];

export default function ContactPage({ selectedService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    shippingAddress: '',
    billingAddress: '',
    gstNumber: '',
    phone: '',
    service: selectedService || ''
  });

  const [focusedField, setFocusedField] = useState({
    name: false,
    companyName: false,
    email: false,
    shippingAddress: false,
    billingAddress: false,
    gstNumber: false,
    phone: false
  });

  const [uploadedFile, setUploadedFile] = useState(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [sameAsShipping, setSameAsShipping] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleFocus = (field) => {
    setFocusedField(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field, val) => {
    if (!val) {
      setFocusedField(prev => ({ ...prev, [field]: false }));
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
      ...(field === 'shippingAddress' && sameAsShipping ? { billingAddress: value } : {}),
    }));
  };

  const handleSameAsShippingChange = (checked) => {
    setSameAsShipping(checked);
    if (checked) {
      setFormData(prev => ({ ...prev, billingAddress: prev.shippingAddress }));
    }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    if (!formData.name || !formData.companyName || !formData.email || !formData.shippingAddress || !formData.billingAddress || !formData.gstNumber || !formData.phone || !formData.service) {
      alert("Please fill in all the required fields.");
      return;
    }
    
    setFormSubmitted(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        throw new Error(errorBody.error || 'Failed to send');
      }
      
      setTimeout(() => {
        setFormData({ name: '', companyName: '', email: '', shippingAddress: '', billingAddress: '', gstNumber: '', phone: '', service: '' });
        setSameAsShipping(false);
        setUploadedFile(null);
        setFocusedField({ name: false, companyName: false, email: false, shippingAddress: false, billingAddress: false, gstNumber: false, phone: false });
        setFormSubmitted(false);
        alert("Thank you! Your quote request has been received. Our team will contact you shortly.");
      }, 1500);
    } catch {
      setFormError('Something went wrong. Please try again or email us directly.');
      setFormSubmitted(false);
    }
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
            Get Your Quote
          </h1>
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
            className="quote-form bg-bg-secondary border border-border-color hover:border-accent-cyan/20 rounded-2xl p-8 sm:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(230,57,70,0.03)] text-left transition-all duration-300"
          >
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-1">Share Your Details</h2>
            <p className="text-sm text-text-secondary mb-8">We'll review and get back to you with the right solution and pricing.</p>

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

              {/* Company Name */}
              <div className={`relative border-b border-border-color pt-4 transition-all duration-300 ${
                focusedField.companyName || formData.companyName ? 'border-accent-cyan' : ''
              }`}>
                <label className={`absolute left-0 font-sans transition-all duration-300 pointer-events-none ${
                  focusedField.companyName || formData.companyName ? 'top-[-0.25rem] text-xs text-accent-cyan' : 'top-5 text-sm text-text-muted hover:text-text-secondary'
                }`}>
                  Company Name *
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-none outline-none text-text-primary font-sans text-base py-2.5"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  onFocus={() => handleFocus('companyName')}
                  onBlur={(e) => handleBlur('companyName', e.target.value)}
                  required
                />
              </div>

              {/* Shipping Address */}
              <div className={`relative border-b border-border-color pt-4 transition-all duration-300 ${
                focusedField.shippingAddress || formData.shippingAddress ? 'border-accent-cyan' : ''
              }`}>
                <label className={`absolute left-0 font-sans transition-all duration-300 pointer-events-none ${
                  focusedField.shippingAddress || formData.shippingAddress ? 'top-[-0.25rem] text-xs text-accent-cyan' : 'top-5 text-sm text-text-muted hover:text-text-secondary'
                }`} htmlFor="shipping-address">Shipping Address *</label>
                <textarea
                  id="shipping-address"
                  className="w-full min-h-20 resize-y bg-transparent border-none outline-none text-text-primary font-sans text-base py-2.5"
                  value={formData.shippingAddress}
                  onChange={(e) => handleInputChange('shippingAddress', e.target.value)}
                  onFocus={() => handleFocus('shippingAddress')}
                  onBlur={(e) => handleBlur('shippingAddress', e.target.value)}
                  required
                />
              </div>

              {/* Billing Address */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  id="same-as-shipping"
                  type="checkbox"
                  checked={sameAsShipping}
                  onChange={(e) => handleSameAsShippingChange(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-accent-cyan cursor-pointer"
                />
                <label htmlFor="same-as-shipping" className="text-sm text-text-secondary cursor-pointer">
                  Billing address is the same as shipping address
                </label>
              </div>

              {!sameAsShipping && (
                <div className={`relative border-b border-border-color pt-4 transition-all duration-300 ${
                  focusedField.billingAddress || formData.billingAddress ? 'border-accent-cyan' : ''
                }`}>
                  <label className={`absolute left-0 font-sans transition-all duration-300 pointer-events-none ${
                    focusedField.billingAddress || formData.billingAddress ? 'top-[-0.25rem] text-xs text-accent-cyan' : 'top-5 text-sm text-text-muted hover:text-text-secondary'
                  }`} htmlFor="billing-address">Billing Address *</label>
                  <textarea
                    id="billing-address"
                    className="w-full min-h-20 resize-y bg-transparent border-none outline-none text-text-primary font-sans text-base py-2.5"
                    value={formData.billingAddress}
                    onChange={(e) => handleInputChange('billingAddress', e.target.value)}
                    onFocus={() => handleFocus('billingAddress')}
                    onBlur={(e) => handleBlur('billingAddress', e.target.value)}
                    required
                  />
                </div>
              )}

              {/* GST Number */}
              <div className={`relative border-b border-border-color pt-4 transition-all duration-300 ${
                focusedField.gstNumber || formData.gstNumber ? 'border-accent-cyan' : ''
              }`}>
                <label className={`absolute left-0 font-sans transition-all duration-300 pointer-events-none ${
                  focusedField.gstNumber || formData.gstNumber ? 'top-[-0.25rem] text-xs text-accent-cyan' : 'top-5 text-sm text-text-muted hover:text-text-secondary'
                }`}>
                  GST Number *
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-none outline-none text-text-primary font-sans text-base py-2.5"
                  value={formData.gstNumber}
                  onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                  onFocus={() => handleFocus('gstNumber')}
                  onBlur={(e) => handleBlur('gstNumber', e.target.value)}
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
                  Contact Number *
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
              <div className="relative border-b border-border-color pt-4 transition-all duration-300">
                <label className="absolute left-0 top-[-0.25rem] text-xs text-text-muted font-sans pointer-events-none">Service Required *</label>
                <div className="relative w-full">
                  <select 
                    className="w-full h-11 bg-transparent border-none outline-none appearance-none cursor-pointer text-text-primary font-sans text-base py-2.5"
                    value={formData.service}
                    onChange={(e) => handleInputChange('service', e.target.value)}
                    required
                  >
                    <option value="" disabled>Select a core service...</option>
                    {SERVICES.map((srv, idx) => (
                      <option key={idx} value={srv}>{srv}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" size={16} />
                </div>
              </div>

              {/* File Dropzone */}
              <div className="relative border-b border-border-color pt-4 transition-all duration-300">
                <label className="absolute left-0 top-[-0.25rem] text-xs text-text-muted font-sans pointer-events-none">Attach 3D Designs (Optional)</label>
                <div 
                  className={`border-0 bg-transparent p-4 text-center cursor-pointer relative transition-all duration-300 ${
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
              {formError && (
                <p className="text-sm font-semibold text-red-400">{formError}</p>
              )}
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
              <h3 className="font-heading text-lg font-bold text-text-primary mb-5 tracking-wide">Reach Us</h3>
              
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-start p-5 bg-bg-secondary border border-border-color rounded-xl hover:border-accent-cyan/25 hover:translate-x-0.5 hover:shadow-[0_4px_20px_rgba(230,57,70,0.02)] transition-all duration-300">
                  <Mail className="text-accent-cyan mt-0.5 flex-shrink-0" size={20} />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Email Support</span>
                    <a href="mailto:print@layerscraft3d.com" className="text-sm text-text-primary hover:text-accent-cyan transition-colors">print@layerscraft3d.com</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 bg-bg-secondary border border-border-color rounded-xl hover:border-accent-cyan/25 hover:translate-x-0.5 hover:shadow-[0_4px_20px_rgba(230,57,70,0.02)] transition-all duration-300">
                  <Phone className="text-accent-cyan mt-0.5 flex-shrink-0" size={20} />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Phone Number</span>
                    <a href="tel:+918247606508" className="text-sm text-text-primary hover:text-accent-cyan transition-colors">+91 8247606508</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 bg-bg-secondary border border-border-color rounded-xl hover:border-accent-cyan/25 hover:translate-x-0.5 hover:shadow-[0_4px_20px_rgba(230,57,70,0.02)] transition-all duration-300">
                  <MapPin className="text-accent-cyan mt-0.5 flex-shrink-0" size={20} />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Office Location</span>
                    <a href="https://maps.app.goo.gl/HidNNuHFzNKbs2vE9" target="_blank" rel="noreferrer" className="text-sm text-text-primary hover:text-accent-cyan transition-colors">Srila Park Pride Rd, Hafeezpet, Hyderabad, Telangana 500049</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 bg-bg-secondary border border-border-color rounded-xl hover:border-accent-cyan/25 hover:translate-x-0.5 hover:shadow-[0_4px_20px_rgba(230,57,70,0.02)] transition-all duration-300">
                  <Clock className="text-accent-cyan mt-0.5 flex-shrink-0" size={20} />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Response Time</span>
                    <span className="text-sm text-text-primary">Quote Review Within 24 Hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Accordion FAQ Component with Framer Motion height transitions */}
            <div>
              <h3 className="font-heading text-lg font-bold text-text-primary mb-5 tracking-wide">Quick Answers for You</h3>

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
