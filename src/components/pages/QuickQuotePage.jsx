import { useState, useEffect } from 'react';
import ContactPage from '../ContactPage';

export default function QuickQuotePage() {
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get('service');
    if (service) {
      setSelectedService(service);
    }
  }, []);

  return <ContactPage selectedService={selectedService} />;
}
