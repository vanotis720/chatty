import React from "react";
import { Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../styles/colors";

const { width, height } = Dimensions.get('window');

export default function SelectionScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image
                    style={styles.image}
                    source={require('../../assets/img/chat.jpg')}
                />
            </View>
            <View style={styles.bottomSection}>
                <Text style={styles.title}>L'application la plus fun pour communiquer avec ses proches.</Text>
                <Text style={styles.subtitle}>
                    Pas de vente de données, pas de surveillance, ce n'est connu que des développeurs, c'est coder avec React Native et Firebase…
                </Text>
                <View style={styles.buttonSection}>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonPrimary]}
                        onPress={() => navigation.navigate('Signin')}
                    >
                        <Text style={[styles.buttonText, { color: colors.white, }]}>Connexion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('SignUp')}
                    >
                        <Text style={styles.buttonText}>Inscription</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: colors.white,
    },
    topSection: {
        flex: 2,
        borderRadius: width * 0.1,
        backgroundColor: colors.primary,
        marginBottom: 30,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: width * 0.1
    },
    bottomSection: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        marginVertical: 20,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '300',
        textAlign: 'center',
    },
    buttonSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        height: 50,
        width: '48%',
        borderWidth: 2,
        borderColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '800'
    },
    buttonPrimary: {
        backgroundColor: colors.primary,
    },
});