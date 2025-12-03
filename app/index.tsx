import { Redirect } from 'expo-router';

export default function Index() {

    // Immediately Redirect the User to the Piano Screen
    // This makes the Root Route ("/") act as a Shortcute to "/Piano"
    return <Redirect href="/Piano" />;
}


