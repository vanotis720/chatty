import React, { useState } from "react";
import { Dimensions, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { validateEmail } from "../../utils/validation";
import { colors } from "../../styles/colors";

const { width, height } = Dimensions.get('window');

export default function SignupScreen({ navigation }) {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSignUp = () => {
        setIsLoading(true);

        if (!validateEmail(email)) {
            alert('email invalide');
            setIsLoading(false);
            return;
        }

        if (username.length < 3) {
            alert('email invalide');
            setIsLoading(false);
            return;
        }

        if (password.length() < 8) {
            alert('Votre mot de passe doit avoir plus de caracteres');
            setIsLoading(false);
            return;
        }

        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                setIsLoading(false);
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }
                console.error(error);
                setIsLoading(false);
            });
    }
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.title}>Créer un compte</Text>
                <View style={styles.loginSection}>
                    <Text style={styles.subtitle}>Tu as déjà un compte ? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={[styles.subtitle, { color: colors.primary }]}>S'identifier</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.formSection}>
                <TextInput
                    placeholder="Nom d'utilisateur"
                    value={username}
                    onChangeText={setUserName}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Adresse email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Mot de passe"
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    secureTextEntry
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSignUp}
                >
                    <Text style={styles.buttonText}>Continuer</Text>
                </TouchableOpacity>
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
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        marginVertical: 20,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
    },
    loginSection: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    formSection: {
        marginVertical: 10,
    },
    input: {
        height: 50,
        backgroundColor: colors.sgray,
        marginBottom: 15,
        borderRadius: 10,
        paddingHorizontal: 20,
    },
    button: {
        height: 50,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 30,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '800',
        color: colors.white
    },
});