import { StyleSheet } from 'react-native'
import { StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    backgroundColor: '#ededed',
    flexWrap: 'wrap'
  }
})

const buttons = StyleSheet.create({
  primary: {
    flex: 1,
    height: 70,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20
  }
})

const loginStyle = StyleSheet.create({
  panel: {
    backgroundColor: '#ffffff',
  },
  logo: {
    flexGrow: 2,
    width: '100%'
  },
  button: {
    backgroundColor: '#ca2039',
  },
  loginText: {
    color: '#ffffff'
  }
})
const leaderboardStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#DCDCDC',
    borderWidth: 3,
    borderColor: '#D3D3D3',
    borderRadius: 30,
  },
  subtitle: {
    fontSize: 30,
    flex: 1,
    color: '#A9A9A9',
    textAlign: "center",
    fontWeight: "bold"
  },
  title: {
    fontSize: 30,
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: 'grey'
  },
  icon: {
    marginVertical: 8,
    width: 200,
    height: 200,
    alignSelf: 'center'
  }
})

const quizesStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export { styles, buttons, loginStyle, quizesStyles, leaderboardStyle }