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
const quizesLayout = StyleSheet.create({
  item: {
    padding: 20,
    backgroundColor: '#ca2039',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    lineHeight: 0,

  },
  subtitle: {
    color: '#ffffff',
    fontSize: 20,
    height: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
})
const leaderboardStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    backgroundColor: '#ca2039',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    zIndex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: '#ca2039'
  },
  icon: {
    marginVertical: 8,
    width: 200,
    height: 200,
    alignSelf: 'center',
    color: '#ca2039',
    borderRadius: 10,
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

export { styles, buttons, loginStyle, quizesStyles, leaderboardStyle, quizesLayout }