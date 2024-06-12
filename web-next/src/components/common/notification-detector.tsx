'use client';

import { generateNotiType, supabase } from '@/lib';
import { RealtimePostgresInsertPayload } from '@supabase/supabase-js';
import { useEffect } from 'react';
import { toast } from 'sonner';

export type NotificationType = 'ad' | 'fall' | 'info';

export type Notification = {
  created_at: string;
  id: number;
  message: string;
  type: NotificationType;
  isRead: boolean;
  link?: string;
};

export default function NotificationDetector() {
  useEffect(() => {
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'notifications',
        },
        ({
          new: { id, type, message, created_at },
        }: RealtimePostgresInsertPayload<Notification>) =>
          toast(`(${generateNotiType(type)}) ${message}`)
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return null;
}
