import LogoUrubu from "../../assets/logo.png";
import AppContext from "../contexts/AppContext";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useContext, useEffect, useState } from "react";
import { updateUser } from "../repository/firebase";
import { Box } from "../components/Box";

export function Profile({ navigation }) {
  const { user, setUser } = useContext(AppContext);
  const [error, setError] = useState<string>("");

  const [name, setName] = useState<string>(user.name);
  const [cep, setCep] = useState<string>(user.cep);
  const [streetName, setStreetName] = useState<string>(user.cep);

  useEffect(() => {
    const sanitizedCep = cep?.replace(/\D/g, "");
    setCep(sanitizedCep);
    if (sanitizedCep?.length > 8) setCep(sanitizedCep.slice(0, 8));
    if (sanitizedCep?.length !== 8) return;

    const maskedCep = sanitizedCep.slice(0, 5) + "-" + sanitizedCep.slice(5);
    setCep(maskedCep);

    const getStreetName = async () => {
      await fetch(`https://viacep.com.br/ws/${sanitizedCep}/json/`)
        .then((response) => response.json())
        .then((data) => setStreetName(data.logradouro));
    };
    getStreetName();
  }, [cep]);

  const handleSave = () => {
    const trimmedName = name.trim();
    if (trimmedName.length === 0) {
      setError("O nome não pode ser vazio");
      return;
    }

    setName(trimmedName);
    const newUser = {
      ...user,
      name: trimmedName,
      cep: cep,
      streetName: streetName,
    };
    setUser(newUser);
    updateUser(newUser);

    navigation.pop();
  };

  return (
    <LinearGradient
      style={styles.background}
      colors={["#37b4aa", "#ddd"]}
      locations={[0.25, 0.25]}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Edite suas informações</Text>
        <View style={{ marginBottom: 20 }}>
          <View style={styles.imageOverlay}>
            <FontAwesome5 style={styles.pencil} name="pencil-alt" />
          </View>
          <Image style={styles.image} source={LogoUrubu} />
        </View>
        <View style={styles.innerContainer}>
          <Box>
            <View style={styles.flex}>
              <View style={styles.field}>
                <Text style={styles.subtitle}>Nome</Text>
                <TextInput
                  style={styles.name}
                  placeholder="Seu nome"
                  onChangeText={setName}
                >
                  {name}
                </TextInput>
              </View>
              <View style={styles.field}>
                <Text style={styles.subtitle}>CEP</Text>
                <TextInput
                  style={styles.name}
                  keyboardType="numeric"
                  placeholder="Seu CEP"
                  onChangeText={setCep}
                >
                  {cep}
                </TextInput>
              </View>
              <View style={styles.field}>
                <Text style={styles.subtitle}>Logradouro</Text>
                <TextInput
                  style={styles.name}
                  placeholder="Seu logradouro"
                  onChangeText={setStreetName}
                >
                  {streetName}
                </TextInput>
              </View>
            </View>
            {error.length > 0 && <Text style={styles.error}>{error}</Text>}
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSave()}
            >
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </Box>
        </View>
      </SafeAreaView>
      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  field: {
    marginBottom: 10,
  },
  innerContainer: {
    width: "85%",
  },
  button: {
    backgroundColor: "#8ccec6",
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 8,
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },
  error: {
    marginHorizontal: 80,
    color: "#f00",
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 30,
  },
  subtitle: {
    color: "#666",
    fontWeight: "400",
  },
  flex: {
    display: "flex",
    width: "100%",
  },
  text: {
    color: "#fff",
    fontWeight: "400",
    marginBottom: 20,
  },
  name: {
    fontWeight: "bold",
    fontSize: 17,
    backgroundColor: "#dddddd20",
    borderRadius: 10,
  },
  pencil: {
    fontSize: 50,
    color: "#fff",
  },
  imageOverlay: {
    backgroundColor: "#dddddd50",
    position: "absolute",
    margin: 5,
    borderRadius: 250,
    height: 240,
    width: 240,
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    borderRadius: 250,
    resizeMode: "contain",
    height: 250,
    width: 250,
    backgroundColor: "#4dff7f",
    marginRight: 20,
    borderColor: "#fff",
    borderWidth: 5,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 65,
  },
});
