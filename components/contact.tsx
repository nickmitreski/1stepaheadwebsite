"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/ui/section-title"
import { useParallax } from "@/lib/use-parallax"
import { useReveal } from "@/lib/use-reveal"

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  subject?: string
  message?: string
  general?: string
}

interface FormState {
  isSubmitting: boolean
  isSubmitted: boolean
  errors: FormErrors
}

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  useParallax({ root: sectionRef })
  useReveal({ root: sectionRef, stagger: 0.2 })

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSubmitted: false,
    errors: {}
  })

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const sanitizeInput = (input: string): string => {
    // Remove potentially dangerous characters and limit length
    return input
      .replace(/[<>\"'&]/g, '') // Remove HTML/script injection characters
      .trim()
      .slice(0, 1000) // Limit input length
  }

  const validateForm = (data: ContactFormData): FormErrors => {
    const errors: FormErrors = {}

    if (!data.firstName.trim()) {
      errors.firstName = 'First name is required'
    } else if (data.firstName.length < 2) {
      errors.firstName = 'First name must be at least 2 characters'
    }

    if (!data.lastName.trim()) {
      errors.lastName = 'Last name is required'
    } else if (data.lastName.length < 2) {
      errors.lastName = 'Last name must be at least 2 characters'
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required'
    } else if (!validateEmail(data.email)) {
      errors.email = 'Please enter a valid email address'
    }

    if (!data.subject.trim()) {
      errors.subject = 'Subject is required'
    } else if (data.subject.length < 5) {
      errors.subject = 'Subject must be at least 5 characters'
    }

    if (!data.message.trim()) {
      errors.message = 'Message is required'
    } else if (data.message.length < 10) {
      errors.message = 'Message must be at least 10 characters'
    }

    return errors
  }

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    const sanitizedValue = sanitizeInput(value)
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }))
    
    // Clear field error when user starts typing
    if (formState.errors[field]) {
      setFormState(prev => ({
        ...prev,
        errors: { ...prev.errors, [field]: undefined }
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setFormState(prev => ({ ...prev, isSubmitting: true, errors: {} }))

    // Validate form
    const errors = validateForm(formData)
    if (Object.keys(errors).length > 0) {
      setFormState(prev => ({ ...prev, errors, isSubmitting: false }))
      return
    }

    try {
      // TODO: Implement actual form submission to your backend
      // This would typically involve sending to an API endpoint with CSRF protection
      console.log('Form submission would happen here:', formData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false, 
        isSubmitted: true 
      }))
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        errors: { general: 'Failed to send message. Please try again.' }
      }))
    }
  }

  if (formState.isSubmitted) {
    return (
      <section id="contact" className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-md mx-auto text-center p-8 rounded-2xl border shadow-lg bg-background">
            <div className="mb-4 text-green-500">
              <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
            <p className="text-muted-foreground mb-4">
              Thank you for your message. We'll get back to you as soon as possible.
            </p>
            <Button 
              onClick={() => setFormState(prev => ({ ...prev, isSubmitted: false }))}
              variant="outline"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} id="contact" className="py-16 md:py-24 bg-section-b">
      <div className="container grid gap-20 md:grid-cols-2">
        <div className="text-left" data-reveal data-reveal-direction="left">
          <SectionTitle 
            keyword="Connect" 
            title="Let's Connect" 
            center={false}
            className="mb-4"
          />
          <p className="mb-8 text-lg text-black" data-reveal data-reveal-delay="0.2">
            We're here to answer your questions, explore opportunities, and discuss your next idea. Whether you're
            looking for a partnership or need program details, our team is ready to help.
          </p>

          <div data-reveal data-reveal-delay="0.4">
            <h3 className="mb-4 text-2xl font-semibold text-black">Contact Details</h3>
            <ul className="space-y-3 text-base text-black">
              <li data-reveal data-reveal-delay="0.5">
                <strong className="text-black">Email:</strong> <a href="mailto:hello@1stepahead.au" className="underline hover:text-light-primary">hello@1stepahead.au</a>
              </li>
              <li data-reveal data-reveal-delay="0.6">
                <strong className="text-black">Instagram:</strong> <a href="https://instagram.com/1stepahead.au" className="underline hover:text-light-primary" target="_blank" rel="noreferrer">@1stepahead.au</a>
              </li>
              <li data-reveal data-reveal-delay="0.7">
                <strong className="text-black">Based in:</strong> VIC — available Australia-wide online
              </li>
            </ul>
          </div>
        </div>

        <div className="p-8 rounded-2xl border shadow-lg bg-background" data-reveal data-reveal-direction="right" data-parallax data-parallax-speed="100">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {formState.errors.general && (
              <div className="p-3 rounded-md bg-red-50 border border-red-200">
                <p className="text-sm text-red-600">{formState.errors.general}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 text-left">
                <label htmlFor="firstName" className="block text-sm font-medium">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className={`w-full rounded-md border px-3 py-2 bg-background ${
                    formState.errors.firstName ? 'border-red-500' : 'border-input'
                  }`}
                  placeholder="First Name"
                  required
                  maxLength={50}
                  aria-describedby={formState.errors.firstName ? 'firstName-error' : undefined}
                />
                {formState.errors.firstName && (
                  <p id="firstName-error" className="text-sm text-red-600">{formState.errors.firstName}</p>
                )}
              </div>
              <div className="space-y-2 text-left">
                <label htmlFor="lastName" className="block text-sm font-medium">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className={`w-full rounded-md border px-3 py-2 bg-background ${
                    formState.errors.lastName ? 'border-red-500' : 'border-input'
                  }`}
                  placeholder="Last Name"
                  required
                  maxLength={50}
                  aria-describedby={formState.errors.lastName ? 'lastName-error' : undefined}
                />
                {formState.errors.lastName && (
                  <p id="lastName-error" className="text-sm text-red-600">{formState.errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="space-y-2 text-left">
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full rounded-md border px-3 py-2 bg-background ${
                  formState.errors.email ? 'border-red-500' : 'border-input'
                }`}
                placeholder="Email Address"
                required
                maxLength={100}
                aria-describedby={formState.errors.email ? 'email-error' : undefined}
              />
              {formState.errors.email && (
                <p id="email-error" className="text-sm text-red-600">{formState.errors.email}</p>
              )}
            </div>

            <div className="space-y-2 text-left">
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                className={`w-full rounded-md border px-3 py-2 bg-background ${
                  formState.errors.subject ? 'border-red-500' : 'border-input'
                }`}
                placeholder="Subject"
                required
                maxLength={100}
                aria-describedby={formState.errors.subject ? 'subject-error' : undefined}
              />
              {formState.errors.subject && (
                <p id="subject-error" className="text-sm text-red-600">{formState.errors.subject}</p>
              )}
            </div>

            <div className="space-y-2 text-left">
              <label htmlFor="message" className="block text-sm font-medium">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className={`w-full rounded-md border px-3 py-2 bg-background ${
                  formState.errors.message ? 'border-red-500' : 'border-input'
                }`}
                placeholder="Write your message here..."
                required
                maxLength={1000}
                aria-describedby={formState.errors.message ? 'message-error' : undefined}
              />
              {formState.errors.message && (
                <p id="message-error" className="text-sm text-red-600">{formState.errors.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={formState.isSubmitting}
              className="w-full h-11 bg-light-primary text-white border-2 border-light-primary hover:bg-light-primary/90"
            >
              {formState.isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
