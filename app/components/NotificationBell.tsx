import { Link } from 'expo-router';
import { TabBarIcon } from './navigation/TabBarIcon';

export default function NotificationBell() {
  return (
    <Link href='/notification'>
      <TabBarIcon size={20} name='notifications' color='#fff' />
    </Link>
  );
}
