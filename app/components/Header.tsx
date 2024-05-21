import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Logo from '@/assets/icons/logo.svg';
import NotificationBell from './NotificationBell';

type HeaderProps = {
  variant: 'root' | 'back';
};

export default function Header({ variant }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <NotificationBell />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    backgroundColor: '#000',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    color: 'white',
  },
});
