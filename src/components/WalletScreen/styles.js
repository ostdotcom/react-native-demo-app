import DefaultStyleGenerator from '../../theme/styles/DefaultStyleGenerator';
import Colors from '../../theme/styles/Colors';
import sizeHelper from "../../helper/SizeHelper";

let stylesMap = {

	walletComponent: {
		marginHorizontal: sizeHelper.layoutPtToPx(10),
	},

	walletWrapStyle: {
		flexDirection: "row",
	},

	walletBalanceStyle: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center'
	},

	walletScreenStyle: {
		flex: 1,
		marginTop: sizeHelper.layoutPtToPx(20),
		height: sizeHelper.layoutPtToPx(120),
		borderRadius: sizeHelper.layoutPtToPx(10),
		borderWidth: sizeHelper.layoutPtToPx(2),
	},

	heading: {
		marginTop: sizeHelper.layoutPtToPx(15),
		color: Colors.black,
		fontSize: sizeHelper.layoutPtToPx(14),
		fontWeight: "bold"
	},
	tokenTextStyle: {
		color: '#34445b',
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: sizeHelper.fontPtToPx(28),
	},
	fiatTextStyle: {
		color:'#34445b',
		textAlign:'center',
		fontSize: sizeHelper.fontPtToPx(16),
	},
	flatListStyle: {
		marginTop: sizeHelper.layoutPtToPx(10),
	}
};

export default styles = DefaultStyleGenerator.generate(stylesMap);