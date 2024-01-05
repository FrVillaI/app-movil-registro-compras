import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet, ImageBackground, Image } from 'react-native';

// Componente funcional para mostrar la información de un registro
const Informacion = ({ nombre, rango, arma, especialidad, imagen }) => {
    return (
      <View style={[styles.infoContainer, styles.centerContent]}>
        <Image source={{ uri: imagen }} style={styles.avatar} />
        <Text>Nombre: {nombre}</Text>
        <Text>Rango: {rango}</Text>
        <Text>Arma: {arma}</Text>
        <Text>Especialidad: {especialidad}</Text>
      </View>
    );
  };

// Componente Screen2
const Screen2 = () => {
  // Datos de ejemplo
  const registros = [
    { id: '1', nombre: 'Soldado 1', rango: 'Soldado Raso', arma: 'Fusil de Francotirador', especialidad: 'Francotirador', imagen: 'https://th.bing.com/th/id/OIP.7lHwC-FJ9eMjvfK-Tz72SQHaEK?rs=1&pid=ImgDetMain' },
    { id: '2', nombre: 'Soldado 2', rango: 'Cabo', arma: 'Subfusil', especialidad: 'Operador de CQB (Combate Cercano)', imagen: 'https://th.bing.com/th/id/OIP.8pOn4Bf5No6AZsJyywtu8QHaE7?rs=1&pid=ImgDetMain' },
    { id: '3', nombre: 'Soldado 3', rango: 'Sargento', arma: 'Rifle de Asalto', especialidad: 'Táctico de Asalto', imagen: 'https://st0.dancf.com/gaoding-material/2020-06-07/1591540116-DjzBL.jpg?x-oss-process=image/resize,w_1080/sharpen,110/interlace,1' },
    { id: '4', nombre: 'Soldado 4', rango: 'Teniente', arma: 'Pistola', especialidad: 'Oficial de Enlace', imagen: 'https://israelnoticias.com/wp-content/uploads/2019/06/5521252.jpg' },
    { id: '5', nombre: 'Soldado 5', rango: 'Capitán', arma: 'Escopeta', especialidad: 'Asalto Cercano', imagen: 'https://image.freepik.com/free-photo/spec-ops-soldier-with-shotgun_1443-564.jpg' },
    { id: '6', nombre: 'Soldado 6', rango: 'Mayor', arma: 'Lanzagranadas', especialidad: 'Demoliciones', imagen: 'https://th.bing.com/th/id/OIP.P7KIbXc4MO44K-h1kHVfAwHaE7?rs=1&pid=ImgDetMain' },
    { id: '7', nombre: 'Soldado 7', rango: 'Teniente Coronel', arma: 'Lanzallamas', especialidad: 'Guerra Química', imagen: 'https://thumbs.dreamstime.com/b/soldado-alem%C3%A1n-con-el-lanzallamas-21420696.jpg' },
    { id: '8', nombre: 'Soldado 8', rango: 'Coronel', arma: 'Cañón de Artillería', especialidad: 'Artillería Pesada', imagen: 'https://i.pinimg.com/originals/14/80/04/14800484c973d33f39599ee11bf7a7e0.jpg' },
    { id: '9', nombre: 'Soldado 9', rango: 'Suboficial', arma: 'Ametralladora Ligera', especialidad: 'Apoyo de Fuego', imagen: 'https://th.bing.com/th/id/OIP.Lrc0BnuX1xGHGy4cVECS2QHaFj?rs=1&pid=ImgDetMain' },
    { id: '10', nombre: 'Soldado 10', rango: 'General', arma: 'Misil Antiaéreo', especialidad: 'Defensa Aérea', imagen: 'https://th.bing.com/th/id/OIP.t2m-eytKBfHWt1HDIywANAHaEk?rs=1&pid=ImgDetMain' },
  ];

  // Estado para almacenar el id seleccionado y la información detallada
  const [selectedId, setSelectedId] = useState(null);
  const [selectedInfo, setSelectedInfo] = useState(null);

  // Función para manejar la selección de un elemento en la FlatList
  const handleSelect = (id, nombre, rango, arma, especialidad, imagen) => {
    setSelectedId(id);
    setSelectedInfo({ nombre, rango, arma, especialidad, imagen });
    Alert.alert('Detalles del Registro', `Nombre: ${nombre}\nCategoría: ${rango}\nDescripción: ${arma}\nDescripción: ${especialidad}`);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/312/851/784/dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840%C3%972400-wallpaper-preview.jpg' }} // Reemplaza con la URL de tu imagen de fondo
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* Sección 1: Obtener datos de un registro por id */}
        <Text style={styles.sectionTitle}>Sección 1: Soldados</Text>
        {selectedId && (
          <Informacion
            nombre={selectedInfo.nombre}
            rango={selectedInfo.rango}
            arma={selectedInfo.arma}
            especialidad={selectedInfo.especialidad}
            imagen={selectedInfo.imagen}
          />
        )}

        {/* Sección 2: Obtener lista de montos */}
        <Text style={styles.sectionTitle}>Sección 2: Lista de soldados</Text>
        <FlatList
          data={registros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelect(item.id, item.nombre, item.rango, item.arma, item.especialidad, item.imagen)}>
              <Text style={styles.montoItem}>Nombre: {item.nombre}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
};


// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  centerContent: {
    alignItems: 'center', // Centra el contenido horizontalmente
    justifyContent: 'center', // Centra el contenido verticalmente
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10, // Añadido para separación
    color: 'white', // Color del título
  },
  montoItem: {
    fontSize: 16,
    marginBottom: 8,
    color: 'white',
  },
  infoContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginBottom: 10, // Añadido para separación
  },
  avatar: {
    width: 200, // Ajusta el ancho de la imagen según tus necesidades
    height: 200, // Ajusta la altura de la imagen según tus necesidades
    borderRadius: 100, // Hace que la imagen sea circular
    marginBottom: 10,
    alignSelf: 'center', // Centra la imagen horizontalmente
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default Screen2;
