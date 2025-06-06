import React, { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data";
import {
  AlertCircle,
  MessageCircle,
  Send,
  CheckCircle,
  User,
  Mail,
} from "lucide-react";
import toast from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setResult] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.trim().length > 500) {
      newErrors.message = "Message cannot exceed 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setResult("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Submission failed");
      }

      await new Promise((resolve) => setTimeout(resolve, 2000));

      setResult("Message sent successfully!");
      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setShowSuccess(false);
        setResult("");
      }, 5000);
    } catch (error: any) {
      setResult(
        error.message ||
          "Network error. Please check your connection and try again."
      );
      toast.error("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding container-padding mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="section-title">
          Contact Me
          <span className="block h-1 w-24 bg-accent mt-2"></span>
        </h2>

        <p className="section-subtitle max-w-3xl">
          Interested in working together? Let's discuss how we can collaborate.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-effect p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">
              Get in Touch
            </h3>

            {showSuccess && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3">
                <CheckCircle
                  className="text-green-400 flex-shrink-0"
                  size={20}
                />
                <span className="text-green-200">
                  Message sent successfully! I'll get back to you soon.
                </span>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                  <User size={16} />
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    errors.name ? "border-red-500" : "border-white/20"
                  } rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                  placeholder="Enter your full name"
                  aria-label="Your full name"
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="text-red-400 text-sm mt-1 flex items-center gap-1"
                  >
                    <AlertCircle size={14} />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                  <Mail size={16} />
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    errors.email ? "border-red-500" : "border-white/20"
                  } rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                  placeholder="Enter your email address"
                  aria-label="Your email address"
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="text-red-400 text-sm mt-1 flex items-center gap-1"
                  >
                    <AlertCircle size={14} />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                  <MessageCircle size={16} />
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    errors.message ? "border-red-500" : "border-white/20"
                  } rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none`}
                  placeholder="Tell me about your project, ideas, or how we can work together..."
                  aria-label="Your message"
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="text-red-400 text-sm mt-1 flex items-center gap-1"
                  >
                    <AlertCircle size={14} />
                    {errors.message}
                  </p>
                )}
                <p className="text-slate-400 text-sm mt-1">
                  {formData.message.length}/500 characters
                </p>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 transform hover:scale-[1.02] disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8">
            <div className="glass-effect p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">
                Contact Information
              </h3>

              <div className="space-y-4">
                {personalInfo.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-secondary hover:text-white group transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 md:w-12 h-10 md:h-12 rounded-full bg-black-100 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <social.icon className="w-5 md:w-6 h-5 md:h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{social.name}</p>
                      <p className="text-sm">
                        {social.url.replace(/(mailto:|tel:)/, "")}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-effect p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Let's Build Together
              </h3>
              <p className="text-secondary">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Let's build the future
                of Web3 together!
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
