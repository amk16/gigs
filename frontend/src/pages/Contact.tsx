import { useState } from 'react';
import type { ChangeEvent, FC } from 'react';
import { Mail, User, ChevronDown, ArrowRight } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
  agreedToPrivacy: boolean;
}

const ContactPage: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
    agreedToPrivacy: false
  });

  const [showPhoneInput, setShowPhoneInput] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    if (formData.fullName && formData.email && formData.message && formData.agreedToPrivacy) {
      console.log('Form submitted:', formData);
      // Handle form submission here
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-[#050a2a] text-white p-4 flex items-center justify-center">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Header */}
        <div className="flex flex-col justify-center">
          <button className="bg-gray-800 text-gray-300 px-2.5 py-1 rounded-full text-xs font-medium mb-4 self-start hover:bg-gray-700 transition-colors">
            Contact Me
          </button>
          
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">
            Let's Get In Touch.
          </h1>
          
          <p className="text-gray-400 text-sm">
            Or just reach out manually to me by looking up and praying
            <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              
            </span>
            .
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="flex flex-col justify-center">
          <div className="space-y-3">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-medium mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-500 w-3.5 h-3.5" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name..."
                  className="w-full bg-gray-900 border border-gray-800 rounded-md px-8 py-2 text-xs text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-medium mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-500 w-3.5 h-3.5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address..."
                  className="w-full bg-gray-900 border border-gray-800 rounded-md px-8 py-2 text-xs text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-medium mb-1">
                Phone Number
              </label>
              <div className="relative">
                <div className="flex items-center bg-gray-900 border border-gray-800 rounded-md overflow-hidden focus-within:border-blue-500 transition-colors">
                  <button
                    type="button"
                    onClick={() => setShowPhoneInput(!showPhoneInput)}
                    className="flex items-center gap-1 px-2.5 py-2 border-r border-gray-800 hover:bg-gray-800 transition-colors"
                  >
                    <div className="w-3.5 h-2 bg-blue-600 rounded-sm"></div>
                    <ChevronDown className="w-3 h-3 text-gray-500" />
                  </button>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+44 (000) 000-0000"
                    className="flex-1 bg-transparent px-2.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none"
                  />
                  <div className="px-2.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-gray-700 flex items-center justify-center">
                      <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-medium mb-1">
                Message
              </label>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your main text here..."
                  rows={4}
                  maxLength={300}
                  className="w-full bg-gray-900 border border-gray-800 rounded-md px-2.5 py-2 text-xs text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                />
                <div className="absolute bottom-2 left-2.5 text-xs text-gray-500">
                  {formData.message.length}/300
                </div>
              </div>
            </div>

            {/* Privacy Policy Checkbox */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="agreedToPrivacy"
                checked={formData.agreedToPrivacy}
                onChange={handleInputChange}
                className="mt-0.5 w-3.5 h-3.5 bg-gray-900 border-2 border-gray-700 rounded checked:bg-blue-600 checked:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-gray-950 transition-colors cursor-pointer"
              />
              <label className="text-xs text-gray-400">
                I hereby agree to our{' '}
                <span className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                  Privacy Policy
                </span>{' '}
                terms.
              </label>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-md flex items-center justify-center gap-1.5 transition-colors group text-xs"
            >
              Submit Form
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;