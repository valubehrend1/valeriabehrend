import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { ContactFormState } from '../types';

const initialFormState: ContactFormState = {
  name: '',
  email: '',
  projectType: '',
  message: ''
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const toEmail = import.meta.env.VITE_CONTACT_TO_EMAIL ?? 'behrendvaleria@gmail.com';

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage('Faltan variables de EmailJS. Configura .env.local para enviar mensajes.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const formattedMessage = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Project Type: ${formData.projectType}`,
      '',
      'Message:',
      formData.message
    ].join('\n');

    const templateParams = {
      to_email: toEmail,
      from_name: formData.name,
      from_email: formData.email,
      project_type: formData.projectType,
      message: formData.message,
      formatted_message: formattedMessage,
      sent_at: new Date().toLocaleString('es-AR')
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, { publicKey });
      setIsSubmitted(true);
      setFormData(initialFormState);
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch {
      setErrorMessage('No se pudo enviar el mensaje. Intenta nuevamente en unos minutos.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setIsSubmitted(false);
    setIsSubmitting(false);
    setErrorMessage(null);
  };

  return {
    formData,
    isSubmitted,
    isSubmitting,
    errorMessage,
    handleChange,
    handleSubmit,
    resetForm
  };
};
