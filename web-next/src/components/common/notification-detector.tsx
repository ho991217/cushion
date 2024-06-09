'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';

type Notification = {
  title: string;
  message: string;
  user: string;
};

export default function NotificationDetector() {
  useEffect(() => {
    const eventSource = new EventSource('http://localhost:5500/sse');

    eventSource.addEventListener('notification', function (event) {
      const data: Notification = JSON.parse(event.data);
      toast.warning(`[${data.title}] ${data.message}`);
    });

    return () => {
      eventSource.close();
    };
  }, []);

  return null;
}
