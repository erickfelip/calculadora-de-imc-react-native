import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import styles from "./style";
import ResultImc from "./ResultImc/";


export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [TextButton, setTextButton] = useState("Calcular")

    function imcCalculator() {
        return Number((weight / (height * height)).toFixed(2))
    }

    useEffect(() => {
        setMessageImc('Preencha o peso e altura')
        setTextButton("Calcular")
    }, [])

    function validationImc() {
        if (weight != null && height != null){
            let i = imcCalculator() 
            setImc(i)
            console.log(imc)
            if (i < 16) {
                setMessageImc('Magreza grave')
            } else if (i < 17) {
                setMessageImc('Magreza moderada')
            } else if (i < 18.5) {
                setMessageImc('Magreza leve')
            } else if (i < 25) {
                setMessageImc('Saudável')
            } else if (i < 30) {
                setMessageImc('Sobrepeso')
            } else if (i < 35) {
                setMessageImc('Obesidade Grau I')
            } else if (i < 40) {
                setMessageImc('Obesidade Grau II')
            } else {
                setMessageImc('Obesidade Grau III')
            }
            setHeight(null)
            setWeight(null)
            setTextButton("Calcular Novamente")
            return
        } else {
            setImc(null)
            setMessageImc('Preencha o peso e altura')
            setTextButton("Calcular")
        }
    }


    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.73"
                    keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 78.2"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.ButtonCalculator}
                    onPress={() => {
                        validationImc()
                    }}
                >
                    <Text style={styles.textButtonCalculator}>{TextButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    )
}