import React, { useState } from 'react'
import CameraView from './CameraView'

import {
	Modal,
	StyleSheet,
	View,
} from 'react-native'

export default function CameraModal({
	visible,
	setModalVisible,
    setCameraModalVisible,
    setImage,
    image
}) {

const [cameraViewVisible, setCameraViewVisible] = useState(true);

	return (
		<Modal
			animationType='slide'
			transparent={true}
			visible={visible}
			onRequestClose={() => {
				Alert.alert('Modal has been closed.')
				setModalVisible(false)
			}}>

			<View style={styles.centeredView}>
				<View style={styles.modalView}>
                <CameraView setImage={setImage} image={image} setCameraViewVisible={setCameraViewVisible} setCameraModalVisible={setCameraModalVisible}/>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		height: 500,
		width: 350,
		backgroundColor: '#FFF9EB',
		borderRadius: 20,
		alignContent: 'center',
		justifyContent: 'space-between',
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 15,
			height: 15,
		},
		shadowOpacity: 0.7,
		shadowRadius: 5,
		elevation: 9,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: '#545454',
	},
	buttonClose: {
		backgroundColor: '#545454',
		width: 160,
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		textAlign: 'center',

	},
})
