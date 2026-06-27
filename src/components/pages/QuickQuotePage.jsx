import { useState } from 'react';
import ContactPage from '../ContactPage';

export default function QuickQuotePage() {
  const [selectedService] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('service') || '';
  });

  return <ContactPage selectedService={selectedService} />;
}
