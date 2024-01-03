// RegistroProductosScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function IngresoProdScreen() {
  const [id, setId] = useState('');
  const [objeto, setObjeto] = useState('');
  const [precio, setPrecio] = useState('');
  const [listaProductos, setListaProductos] = useState([]);
  const [total, setTotal] = useState(0);

  const agregarProducto = () => {
    if (id && objeto && precio) {
      const nuevoProducto = { id, objeto, precio: parseFloat(precio) };
      setListaProductos([...listaProductos, nuevoProducto]);
      setTotal(total + parseFloat(precio));

      // Limpiar los campos después de agregar un producto
      setId('');
      setObjeto('');
      setPrecio('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Productos</Text>

      <TextInput
        style={styles.input}
        placeholder="ID del Producto"
        value={id}
        onChangeText={(text) => setId(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Nombre del Objeto"
        value={objeto}
        onChangeText={(text) => setObjeto(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Precio"
        keyboardType="numeric"
        value={precio}
        onChangeText={(text) => setPrecio(text)}
      />

      <Button title="Agregar Producto" onPress={agregarProducto} />

      <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
});