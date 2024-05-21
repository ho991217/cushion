import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function SettingScreen() {
  return (
    <View style={styles.container}>
      <View style={{ gap: 20 }}>
        <Link style={styles.link} href='/setting/info'>
          <Text>어르신 정보</Text>
        </Link>
        <Link style={styles.link} href='/setting/keyword'>
          <Text>키워드 설정</Text>
        </Link>
        <Link style={styles.link} href='/setting/device'>
          <Text>시니어 캠 기기 설정</Text>
        </Link>
      </View>
      <View>
        <Link style={styles.logout} href='/setting/device'>
          <Text>로그아웃</Text>
        </Link>
        <Link style={styles.transparent} href='/setting/device'>
          <Text>회원 탈퇴</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  link: {
    width: '100%',
    height: 60,
    borderRadius: 16,
    padding: 20,
    backgroundColor: '#1D1D20',
    color: 'white',
    overflow: 'hidden',
    fontWeight: 'bold',
  },
  logout: {
    width: '100%',
    textAlign: 'center',
    height: 60,
    borderRadius: 16,
    padding: 20,
    color: 'white',
    overflow: 'hidden',
    backgroundColor: '#FF004D',
    fontWeight: 'bold',
  },
  transparent: {
    width: '100%',
    textAlign: 'center',
    height: 60,
    borderRadius: 16,
    padding: 20,
    color: '#6E6E76',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    textDecorationLine: 'underline',
  },
});
