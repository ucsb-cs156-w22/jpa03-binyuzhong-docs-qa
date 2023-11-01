import React, { useState } from "react";
import { View, SafeAreaView, Image, Text, StatusBar, TouchableOpacity, Linking } from "react-native";
import { Icon } from 'react-native-elements';
import { styles } from "../Styles/UserPageStyle";

const UserPage = () => {
    const [boxHeight, setBoxHeight] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [isActive, setIsActive] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image 
                        source={require("../Data/image/userImage.png")} 
                        style={styles.profileImage} 
                    />
                    <View style={styles.userInfoContainer}>
                        <Text style={styles.userName}>Gaucho</Text>
                        <Text style={styles.userEmail}>gaucho@ucsb.edu</Text>
                    </View>
                </View>
                <View style={styles.userLinksContainer}
                    onLayout={(event) => {
                        const containerWidth = event.nativeEvent.layout.width;
                        setBoxHeight(containerWidth * 0.35);
                    }}
                >
                    <TouchableOpacity
                        style={[styles.box, { height: boxHeight }]}
                        activeOpacity={0.6}
                        onPress={() => Linking.openURL('https://www.canvas.ucsb.edu/')}
                    >
                        <Text style={styles.userLinks}>Canvas</Text>
                        <Icon name="link-outline" type='ionicon' color="black"/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.box, { height: boxHeight }]}
                        activeOpacity={0.6}
                        onPress={() => Linking.openURL('https://my.sa.ucsb.edu/gold/')}
                    >
                        <Text style={styles.userLinks}>Gold</Text>
                        <Icon name="link-outline" type='ionicon' color="black"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.settingBarContainer}>
                    <TouchableOpacity 
                        style={[styles.longBox, isActive ? {backgroundColor: '#F883793D'} : {}]}
                        activeOpacity={0.6} 
                        onPressIn={() => setIsActive(true)}
                        onPressOut={() => setIsActive(false)}
                        onPress={() => setIsMuted(!isMuted)}
                    >
                        <Text style={styles.longBarText}>Status</Text>
                        <Icon 
                            style={styles.longBoxIcon} 
                            name={isMuted ? "book-outline" : "bed-outline"} 
                            type='ionicon' 
                            color="black"
                        />
                    </TouchableOpacity>
                    <View style={styles.longBox}>
                        <Text style={styles.longBarText}>Settings</Text>
                        <Icon style={styles.longBoxIcon} name="settings-outline" type='ionicon' color="black"/>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default UserPage;
