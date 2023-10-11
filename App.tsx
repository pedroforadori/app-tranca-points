import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Player from "./src/components/player";
import History from "./src/components/history";


export default function App() {
  const [ pointsWe, setPointsWe ] = useState(0);
  const [ pointsThen, setPointsThen ] = useState(0);
  const [ pointsThird, setPointsThird ] = useState(0);

  function handlePoints(how: string, points: number) { 
    if(how === 'nos'){
      setPointsWe(pointsWe + points);
    } else if (how === 'then') {
      setPointsThen(pointsThen + points)
    } else {
      setPointsThird(pointsThird + points)
    }
  }

  function handlePointsMinus(how: string, points: number) { 
    if(how === 'nos'){
      setPointsWe(pointsWe - points);
    } else if (how === 'then') {
      setPointsThen(pointsThen - points)
    } else {
      setPointsThird(pointsThird - points)
    }
  }
  
  function handleResetPoints(){
    setPointsWe(0)
    setPointsThen(0)
    setPointsThird(0)
  }

  return (
    <SafeAreaProvider >

      <View style={styles.container}>
        {/* <View style={styles.boxPlayer}> */}
          <Player 
            name="Nós"
            points={pointsWe}
            handle10Points={() => handlePoints('nos', 10)}
            handle10PointsMinus={() => handlePointsMinus('nos', 10)}
            handle50Points={() => handlePoints('nos', 50)}
            handle50PointsMinus={() => handlePointsMinus('nos', 50)}
            handle100Points={() => handlePoints('nos', 100)}
            handle100PointsMinus={() => handlePointsMinus('nos', 100)}
            handle500Points={() => handlePoints('nos', 500)}
            handle500PointsMinus={() => handlePointsMinus('nos', 500)}
          />
        {/* </View> */}
        
        <View
          style={styles.verticleLine}
        />
      <Player 
          name="Eles"
          points={pointsThen}
          handle10Points={() => handlePoints('then', 10)}
          handle10PointsMinus={() => handlePointsMinus('then', 10)}
          handle50Points={() => handlePoints('then', 50)}
          handle50PointsMinus={() => handlePointsMinus('then', 50)}
          handle100Points={() => handlePoints('then', 100)}
          handle100PointsMinus={() => handlePointsMinus('then', 100)}
          handle500Points={() => handlePoints('then', 500)}
          handle500PointsMinus={() => handlePointsMinus('then', 500)}
        />

      <View
          style={styles.verticleLine}
        />
      </View>
      <View>
        <Pressable onPress={handleResetPoints} style={styles.zero}>
            <Text style={styles.textZero}>Zerar Placar</Text>
        </Pressable>
      </View>
      
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: '#242c40'
  },
  boxPlayer: {
    flex: 1,
    height: '80%',
    flexDirection: 'column',
  },
  imageBG: {
    resizeMode: "cover",
    opacity: 0.2
  },
  zero: {
    backgroundColor: "#fff",
    paddingBottom: 20,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 5,
    borderRadius: 4
  },
  textZero: {
    color: "#rgb(53, 174, 79)",
    fontSize: 20,
    fontWeight: 'bold',
  },
  verticleLine:{
    height: '100%',
    width: 1,
    backgroundColor: '#909090',
  },
});
