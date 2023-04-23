import {Stylesheet} from "react-native";
import {colors} from "../../styles/colors";


export const styles = Stylesheet.create({
    listMarker: {
      margin: 10,
      marginTop: 60,
      flexDirection: "row",
      alignItens: "center"
    },
    textMarker:{
        marginLeft: 10,
        fontSize: 20,
        color: colors.white
    }
   
})