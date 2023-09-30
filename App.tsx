import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Player from "./src/components/player";
import History from "./src/components/history";


export default function App() {
  const [ pointsWe, setPointsWe ] = useState(0);
  const [ pointsThen, setPointsThen ] = useState(0);

  function handle10Points(how?: string) { 
    if(how === 'nos'){
      setPointsWe(pointsWe + 10);
    } else {
      setPointsThen(pointsThen + 10)
    }
  }

  function handle100Points(how?: string) {
    if(how === 'nos'){
      setPointsWe(pointsWe + 100);
    }else{
      setPointsThen(pointsThen + 100)
    }
  }

  function handle500Points(how: string) {
    if(how === 'nos'){
      setPointsWe(pointsWe + 500);
    }else{
      setPointsThen(pointsThen + 500)
    }
  }

  function handle10PointsMinus(how: string) {
    if(how === 'nos'){
      setPointsWe(pointsWe - 10);
    }else{
      setPointsThen(pointsThen - 10)
    }
  }

  function handle100PointsMinus(how: string) {
    if(how === 'nos'){
      setPointsWe(pointsWe - 100);
    }else{
      setPointsThen(pointsThen - 100)
    }
  }

  function handle500PointsMinus(how: string) {
    if(how === 'nos'){
      setPointsWe(pointsWe - 500);
    }else{
      setPointsThen(pointsThen - 500)
    }
  }

  function handleResetPoints(){
    setPointsWe(0)
    setPointsThen(0)
  }

  return (
    <SafeAreaProvider >

      <View style={styles.container}>
        {/* <View style={styles.boxPlayer}> */}
          <Player 
            name="Nós"
            points={pointsWe}
            handle10Points={() => handle10Points('nos')}
            handle10PointsMinus={() => handle10PointsMinus('nos')}
            handle100Points={() => handle100Points('nos')}
            handle100PointsMinus={() => handle100PointsMinus('nos')}
            handle500Points={() => handle500Points('nos')}
            handle500PointsMinus={() => handle500PointsMinus('nos')}
          />
        {/* </View> */}
        
        <View
          style={styles.verticleLine}
        />
      <Player 
          name="Eles"
          points={pointsThen}
          handle10Points={() => handle10Points('')}
          handle10PointsMinus={() => handle10PointsMinus('')}
          handle100Points={() => handle100Points('')}
          handle100PointsMinus={() => handle100PointsMinus('')}
          handle500Points={() => handle500Points('')}
          handle500PointsMinus={() => handle500Points('')}
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
    paddingBottom: 10,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
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
