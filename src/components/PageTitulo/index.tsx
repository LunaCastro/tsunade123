import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { IPage } from "../../../App"

export function PageTitulo({ setPageI, pagenumber }: IPage) {
    return (
        <View style={styles.container}>
            {pagenumber == 1 ? (
                <>
                    <TouchableOpacity onPress={() => setPageI(pagenumber)}>
                        <Text style={styles.text}>{'<<'}</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>Tricampeão mundial</Text>
                </>
            ) : (
                <>
                    <Text style={styles.text}>Acelera a motoca</Text>
                    <TouchableOpacity onPress={() => setPageI(pagenumber)}>
                        <Text style={styles.text}>{'>>'}</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>

    )
}