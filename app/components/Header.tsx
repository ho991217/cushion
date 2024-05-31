import { View, StyleSheet, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
import Logo from '@/assets/icons/logo.svg';
import NotificationBell from './NotificationBell';
import { router } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

type HeaderProps = {
  variant: 'root' | 'back';
};

export default function Header({ variant }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {variant === 'root' ? (
          <>
            <Logo />
            <NotificationBell />
          </>
        ) : (
          <TouchableHighlight>
            <FontAwesome6
              name='chevron-left'
              size={24}
              color='white'
              onPress={() => {
                router.back();
              }}
            />
          </TouchableHighlight>
        )}
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
  centerTitle: {
    color: 'white',
    fontSize: 20,
  },
});
