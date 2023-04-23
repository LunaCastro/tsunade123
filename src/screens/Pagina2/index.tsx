import {View, Text, FlatList} from "react-native"
import { styles } from "./styles"
import { ComponentListImage, ComponentPageTitulo, ComponentPanelTitulo } from "../../components"
import { IPage } from "../../../App"

export function Pagina2({setPageI, pagenumber}:IPage) {
    const img = require ("../../assets/img1.png")
    const img2 = require ("../../assets/img2.png")
    const pagina2Texto = [
        { id: "As melhores", img: img1 },
        { id: "para curtir!!", img: img2 },
    ]
    return (
        <View style={styles.container}>
        <ComponentPageTitulo setPageI={setPageI} pagenumber={pagenumber} />
        <View style={styles.panel}>
            <ComponentPanelTitulo titulo="Crie capa e título "/>
            <FlatList
            data={pagina2Texto}
            renderItem={({item})=>
            <ComponentListImage key={item.id} text={item.id} img={item.img} />
        }
            keyExtractor={(item: { id: any }) => item.id}
            />

        </View>
    </View>
    )
}