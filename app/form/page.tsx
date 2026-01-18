"use client";
import React, { useState, ChangeEvent } from 'react';
import { Mail, Copy, Check, Send, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: ''
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    content: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      content: ''
    };
    
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.content.trim()) {
      newErrors.content = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    // Create mailto link
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.content}`
    );
    
    window.location.href = `mailto:aryangupta.devwork@gmail.com?subject=${subject}&body=${body}`;
    
    // Show success message
    setSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      content: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('aryangupta.devwork@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="flex items-center mb-12 gap-2">
          <Send size={40}/>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Get in Touch
          </h1>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mb-6 p-4 bg-primary/10 border border-primary rounded-md flex items-center gap-3">
            <Check className="w-5 h-5 text-primary" />
            <p className="text-foreground font-medium">
              Opening your email client... Please send the message! 📧
            </p>
          </div>
        )}

        {/* Form */}
        <div className="space-y-6">
          {/* Name and Email Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-foreground text-sm font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your secret identity"
                className={`w-full px-4 py-3 bg-card border ${errors.name ? 'border-red-500' : 'border-border'} rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 ${errors.name ? 'focus:ring-red-500' : 'focus:ring-primary'} transition-all`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-foreground text-sm font-medium">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="I promise I won't spam you"
                className={`w-full px-4 py-3 bg-card border ${errors.email ? 'border-red-500' : 'border-border'} rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-primary'} transition-all`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Content Field */}
          <div className="space-y-2">
            <label htmlFor="content" className="text-foreground text-sm font-medium">
              Content <span className="text-red-500">*</span>
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Your message goes here. Ask me anything 👀"
              rows={8}
              className={`w-full px-4 py-3 bg-card border ${errors.content ? 'border-red-500' : 'border-border'} rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 ${errors.content ? 'focus:ring-red-500' : 'focus:ring-primary'} transition-all resize-none`}
            />
            {errors.content && (
              <p className="text-red-500 text-sm flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.content}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full px-8 py-4 text-base font-semibold text-black bg-primary rounded-md hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_#0eaebd] transition-transform shadow-[0_2px_4px_rgba(19,218,236,0.2)] flex items-center justify-center gap-2"
          >
            Send Email
            <span className="text-xl">→</span>
          </button>
        </div>

        {/* Email Display with Copy */}
        <div className="mt-16 flex items-center justify-between bg-card border border-border rounded-md px-6 py-4">
          <div className="flex items-center gap-3 text-foreground">
            <Mail className="w-5 h-5" />
            <span className="font-mono">Email: aryangupta.devwork@gmail.com</span>
          </div>
          
          <button
            onClick={handleCopyEmail}
            className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
            aria-label="Copy email"
          >
            {copied ? (
              <Check className="w-5 h-5 text-primary" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}