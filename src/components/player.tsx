import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import History from "./history";
import IHistory from "../interface/IHistory";

interface IPlayer {
    id?: number
    points: number
    handle10Points(): any
    handle10PointsMinus(): any
    handle50Points(): any
    handle50PointsMinus(): any
    handle100Points(): any
    handle100PointsMinus(): any
    handle500Points(): any
    handle500PointsMinus(): any
    name: string
}

export default function Player(props: IPlayer){
    const [ arrPoints, setArrPoints ] = useState<IHistory[]>([{
      id: 0,
      points: 0
    }])
    const [ viewAction, setViewAction] = useState(false)

    function handleAddHistory(points: number){
      setArrPoints(arrPoints => [...arrPoints, {id: points, points: points}])
    }

    return (
        <View style={styles.player}>
          <Text style={styles.text}>{props.name}</Text>
          <Text style={[styles.text, styles.textPoints]}>{props.points}</Text>
          {/* <View style={styles.edit}>
            <Pressable onPress={() => setViewAction(viewAction === false ? true : false)}>
                <MaterialCommunityIcons name="file-edit-outline" size={24} color="white" />
            </Pressable>
            <Pressable onPress={() => handleAddHistory(props.points)} style={styles.edit}>
                <MaterialCommunityIcons name="plus-outline" size={24} color="white" />
            </Pressable>
          </View> */}

          <View style={styles.action}>
              <Pressable onPress={props.handle10Points} style={styles.plus}>
                  <Text style={styles.textPlus}>+ 10</Text>
              </Pressable>
              <Pressable onPress={props.handle10PointsMinus} style={styles.minus}>
                  <Text style={styles.textMinus}>- 10</Text>
              </Pressable>
          </View>
          <View style={styles.action}>
              <Pressable onPress={props.handle50Points} style={styles.plus}>
              <Text style={styles.textPlus}>+ 50</Text>
              </Pressable>
              <Pressable onPress={props.handle50PointsMinus} style={styles.minus}>
              <Text style={styles.textMinus}>- 50</Text>
              </Pressable>
          </View>
          <View style={styles.action}>
              <Pressable onPress={props.handle100Points} style={styles.plus}>
              <Text style={styles.textPlus}>+ 100</Text>
              </Pressable>
              <Pressable onPress={props.handle100PointsMinus} style={styles.minus}>
              <Text style={styles.textMinus}>- 100</Text>
              </Pressable>
          </View>
          <View style={styles.action}>
          <Pressable onPress={props.handle500Points} style={styles.plus}>
              <Text style={styles.textPlus}>+ 500</Text>
          </Pressable>
          <Pressable onPress={props.handle500PointsMinus} style={styles.minus}>
              <Text style={styles.textMinus}>- 500</Text>
          </Pressable>
          </View> 
          {/* <History points={arrPoints}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: '#242c40'
      },
      player: {
        flex: 1,
        // borderRightWidth: 1,
        // borderRightColor: "#fff",
        alignItems: "center",
        justifyContent: 'flex-start',  
        height: '80%'
      },
      text: {
        fontSize: 36,
        fontWeight: "bold",
        color: '#fff'
      },
      textPoints: {
        fontSize: 45,
        marginTop: 14,
        marginBottom: 14,
        color: '#fff'
      },
      plus: {
        backgroundColor: "#fff",
        width: "40%",
        paddingBottom: 10,
        paddingTop: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 12,
        borderRadius: 4
      },
      minus: {
        backgroundColor: "#fff",
        width: "40%",
        paddingBottom: 10,
        paddingTop: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 12,
        marginLeft: 5,
        borderRadius: 4
      },
      textPlus: {
        color: "#rgb(53, 174, 79)",
        fontSize: 20,
        fontWeight: 'bold'
      },
      textMinus: {
        color: '#971313',
        fontSize: 20,
        fontWeight: 'bold'
      },
      action: {
        flexDirection: 'row',
      },
      actionPoints: {
        alignItems: 'center',
        gap: 4
      },
      edit: {
        padding: 5,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
      },
})