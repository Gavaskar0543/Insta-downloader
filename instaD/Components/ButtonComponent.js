import { Button ,View,StyleSheet} from "react-native"

const ButtonComponent = () => {
const onPressLearnMore = ()=>{
    alert("btn press");
}
return(
    <View style={styles.btn}>
    <Button
  onPress={onPressLearnMore}
  title="Start Download"
  color="brown"
  accessibilityLabel="StartDownLoading"
/>
</View>
)
}
const styles = StyleSheet.create({
btn:{
    marginTop:25,
}
,
btnStyle:{
    borderRadius:3,
}
})
export default ButtonComponent;