import { router } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { addProject, saveImage } from '../../src/db/database';

export default function NewProjectScreen() {
  const [form, setForm] = useState({
    make: '',
    model: '',
    year: '',
    vin: '',
    auctionSource: '',
    purchasePrice: '',
    notes: ''
  });

  const [imageUri, setImageUri] = useState(null);

  async function pickImage() {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        'Permission required',
        'Please allow access to your photos.'
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 0.7
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  }

  async function handleSave() {
    try {
      let savedImage = null;

      if (imageUri) {
        savedImage = await saveImage(imageUri, 'projects');
      }

      addProject({
        ...form,
        salePrice: 0,
        imageUri: savedImage
      });

      router.replace('/');
    } catch (error) {
      Alert.alert(
        'Error',
        error.message || 'Failed to save project'
      );
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <TextInput
        style={styles.input}
        placeholder="Year"
        value={form.year}
        onChangeText={(text) =>
          setForm({ ...form, year: text })
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Make"
        value={form.make}
        onChangeText={(text) =>
          setForm({ ...form, make: text })
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Model"
        value={form.model}
        onChangeText={(text) =>
          setForm({ ...form, model: text })
        }
      />

      <TextInput
        style={styles.input}
        placeholder="VIN"
        value={form.vin}
        onChangeText={(text) =>
          setForm({ ...form, vin: text })
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Auction / Source"
        value={form.auctionSource}
        onChangeText={(text) =>
          setForm({ ...form, auctionSource: text })
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Purchase Price"
        keyboardType="numeric"
        value={form.purchasePrice}
        onChangeText={(text) =>
          setForm({ ...form, purchasePrice: text })
        }
      />

      <TextInput
        style={[styles.input, styles.notes]}
        placeholder="Notes"
        multiline
        value={form.notes}
        onChangeText={(text) =>
          setForm({ ...form, notes: text })
        }
      />

      <Pressable
        style={styles.imageButton}
        onPress={pickImage}
      >
        <Text>Select Vehicle Image</Text>
      </Pressable>

      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          style={styles.image}
        />
      ) : null}

      <View style={styles.bottomSpacer}>
        <Pressable
          style={styles.saveButton}
          onPress={handleSave}
        >
          <Text style={styles.saveText}>Save Project</Text>
        </Pressable>
      </View>
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
  notes: {
    minHeight: 100,
    textAlignVertical: 'top'
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
  bottomSpacer: {
    paddingTop: 16,
    paddingBottom: 24
  },
  saveButton: {
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 12,
    marginTop: 8
  },
  saveText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
});
