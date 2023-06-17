import { Text, TouchableOpacity} from "react-native";

const Button = ({ onPress, cor = "#000", tamanhoW = "auto", tamanhoH = "auto", tFonte = 30, children }) => {
  return (
    <TouchableOpacity style={styles(cor, tamanhoW, tamanhoH).button} onPress={onPress}>
      <Text style={styles(cor, tamanhoW, tamanhoH, tFonte).buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
