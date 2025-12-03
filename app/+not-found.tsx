import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops! Page Not Found!' }} />
            <View style={styles.container}>
                {/* Link Navigates the User back to the Piano Tab */}
                <Link href="/Piano" style={styles.button}>
                    Go back to Home Screen!
                </Link>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    // Fullscreen Centered Container with Dark Background
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Styles Link that Looks like a Button
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});