import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {
  deleteProject,
  getProject,
  saveImage,
  updateProject
} from '../../src/db/database';

export default function EditProjectScreen() {
  const { id } = useLocalSearchParams();

  const [form, setForm] = useState(null);
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    const project = getProject(id);

    if (project) {
      setForm(project);
      setImageUri(project.imageUri);
    }
  }, [id]);

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 0.7
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  }

  async function saveChanges() {
    try {
      let finalImage = imageUri;

      if (imageUri && !imageUri.startsWith('file:///data/user')) {
        finalImage = await saveImage(imageUri, 'projects');
      }

      updateProject({
        ...form,
        imageUri: finalImage
      });

      router.back();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  }

  function handleDeleteProject() {
    Alert.alert(
      'Delete Project',
      'Are you sure you want to delete this project? This will also delete its expenses and tasks.',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            deleteProject(id);
            router.replace('/');
          }
        }
      ]
    );
  }

  if (!form) return null;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <TextInput
        style={styles.input}
        value={form.year}
        placeholder="Year"
        onChangeText={(text) =>
          setForm({ ...form, year: text })
        }
      />

      <TextInput
        style={styles.input}
        value={form.make}
        placeholder="Make"
        onChangeText={(text) =>
          setForm({ ...form, make: text })
        }
      />

      <TextInput
        style={styles.input}
        value={form.model}
        placeholder="Model"
        onChangeText={(text) =>
          setForm({ ...form, model: text })
        }
      />

      <TextInput
        style={styles.input}
        value={form.vin}
        placeholder="VIN"
        onChangeText={(text) =>
          setForm({ ...form, vin: text })
        }
      />

      <TextInput
        style={styles.input}
        value={form.auctionSource}
        placeholder="Auction / Source"
        onChangeText={(text) =>
          setForm({ ...form, auctionSource: text })
        }
      />

      <TextInput
        style={styles.input}
        value={String(form.purchasePrice || '')}
        placeholder="Purchase Price"
        keyboardType="numeric"
        onChangeText={(text) =>
          setForm({ ...form, purchasePrice: text })
        }
      />

      <TextInput
        style={styles.input}
        value={String(form.salePrice || '')}
        placeholder="Sale Price"
        keyboardType="numeric"
        onChangeText={(text) =>
          setForm({ ...form, salePrice: text })
        }
      />

      <Pressable style={styles.imageButton} onPress={pickImage}>
        <Text>Change Vehicle Image</Text>
      </Pressable>

      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : null}

      <Pressable style={styles.saveButton} onPress={saveChanges}>
        <Text style={styles.saveText}>Save Changes</Text>
      </Pressable>

      <Pressable
        style={styles.deleteButton}
        onPress={handleDeleteProject}
      >
        <Text style={styles.deleteText}>Delete Project</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 120
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12
  },
  imageButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginTop: 12
  },
  saveButton: {
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 12,
    marginTop: 20
  },
  saveText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
  deleteButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d00',
    padding: 16,
    borderRadius: 12,
    marginTop: 12
  },
  deleteText: {
    color: '#d00',
    textAlign: 'center',
    fontWeight: '700'
  }
});
