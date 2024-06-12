import { NotificationType } from '@/components/common/notification-detector';

export default function generateNotiType(type: NotificationType) {
  switch (type) {
    case 'ad':
      return '광고';
    case 'fall':
      return '🚨 낙상감지';
    case 'info':
      return 'ℹ️ 정보';
    default:
      return '알 수 없음';
  }
}
