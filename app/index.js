import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
 Text,
  View
} from 'react-native';
import { getProjects } from '../src/db/database';

export default function HomeScreen() {
  const [projects, setProjects] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  function loadProjects() {
    try {
      const data = getProjects();
      setProjects(Array.isArray(data) ? data : []);
      setErrorMessage('');
    } catch (error) {
      console.log('getProjects error:', error);
      setProjects([]);
      setErrorMessage(error?.message || 'Failed to load projects');
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadProjects();
    }, [])
  );

  function renderProject({ item }) {
    return (
      <Pressable
        style={styles.card}
        onPress={() => router.push(`/project/${item.id}`)}
      >
        <Text style={styles.title}>
          {item.year} {item.make} {item.model}
        </Text>

        <Text>VIN: {item.vin || 'N/A'}</Text>
        <Text>Auction: {item.auctionSource || 'N/A'}</Text>
        <Text>
          Purchase: ${Number(item.purchasePrice || 0).toFixed(2)}
        </Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.addButton}
        onPress={() => router.push('/project/new')}
      >
        <Text style={styles.addButtonText}>
          + New Vehicle Project
        </Text>
      </Pressable>

      {errorMessage ? (
        <View style={styles.errorBox}>
          <Text style={styles.errorTitle}>Projects failed to load</Text>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      ) : null}

      <FlatList
        data={projects}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderProject}
        ListEmptyComponent={
          <Text style={styles.empty}>No projects yet.</Text>
        }
        contentContainerStyle={
          projects.length === 0 ? styles.emptyContainer : undefined
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  addButton: {
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
  errorBox: {
    borderWidth: 1,
    borderColor: '#b00020',
    backgroundColor: '#fff5f5',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16
  },
  errorTitle: {
    fontWeight: '700',
    color: '#b00020',
    marginBottom: 4
  },
  errorText: {
    color: '#333'
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6
  },
  emptyContainer: {
    paddingTop: 24
  },
  empty: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666'
  }
});
