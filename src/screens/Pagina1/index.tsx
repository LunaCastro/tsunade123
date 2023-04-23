import {ImageBackground, View, Text, FlatList} from "react-native"
import {styles} from "./styles"
import { ComponentListMarker, ComponentPageTitulo, ComponentPanelTitulo } from "../../components"
import { IPage } from "../../../App"


export function Pagina1({setPageI, pagenumber}:IPage) {
    const fundo = require("../../assets/fundo.png")
    const pagina1Texto = [
        { id: "Crie sua playlist" },
        { id: "Escolha suas bandas" },
        { id: "Utilize IA para sugerir novas músicas" },
    ]
    return (
        <ImageBackground source={fundo} style={styles.container}>
            <ComponentPageTitulo setPageI={setPageI} pagenumber={pagenumber} />
            <View style={styles.panel}>
                <ComponentPanelTitulo titulo="Aplicativo para curtir sua música "/>
                <FlatList
                data={pagina1Texto}
                renderItem={({item})=>
                <ComponentListMarker key={item.id} textMarker={item.id} />
            }
                keyExtractor={(item) => item.id}
                />

            </View>
        </ImageBackground>
    )
}