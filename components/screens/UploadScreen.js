import React from 'react';
import { Modal, View } from 'react-native';

import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';

import { tailwind } from "../../tailwind.js";

export default UploadScreen = ({ 
                                onDone,
                                progress = 0,
                                visible = false
                                }) => {
    return (
        <Modal visible={visible}>
            <View style={tailwind("flex-1 justify-center items-center")}>

                { progress < 1 ? ( <Progress.Bar 
                    color={"#fc5c65"}
                    progress={progress}
                    width={200}
                /> ) : ( <LottieView
                                   autoPlay={true}
                                   loop={false}
                                   onAnimationFinish={onDone}
                                   source={require("../assets/animations/done.json")}
                                   style={tailwind("w-150")}
                /> ) }
            </View>
        </Modal>
    );
};