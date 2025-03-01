import { View , Text} from "react-native";
import {Link , Redirect} from "expo-router";

const Page = () => {
    return(
        <View>
            <Text>Hello</Text>
            <Redirect href={"/accueil/page"}>
                <Text>page accueil</Text>
            </Redirect>    
        </View>
    );
};

export default Page;