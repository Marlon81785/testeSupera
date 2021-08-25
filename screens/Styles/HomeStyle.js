import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    header: {
      flexDirection: "row",
      alignItems: 'flex-end',
      justifyContent: "center",
      backgroundColor: 'gray',
      height: 70,
    },
    headerInput: {
      borderWidth: 2,
      borderRadius: 100,
      minWidth: 300,
      maxWidth: 320,
      minHeight: 34,
      backgroundColor: 'white',
      marginBottom: 10,
      paddingLeft: 10,
      paddingRight: 10
    },
    headerIcon: {
      marginBottom: 10,
      marginLeft: 4

    }

    
});