// // // // app/index.js
// // // import { router, useFocusEffect } from 'expo-router';
// // // import { useCallback, useState } from 'react';
// // // import {
// // //   FlatList,
// // //   Pressable,
// // //   StyleSheet,
// // //   Text,
// // //   View
// // // } from 'react-native';
// // // import { getProjects } from './src/db/database';

// // // export default function HomeScreen() {
// // //   const [projects, setProjects] = useState([]);

// // //   useFocusEffect(
// // //     useCallback(() => {
// // //       const data = getProjects();
// // //       setProjects(data);
// // //     }, [])
// // //   );

// // //   function renderProject({ item }) {
// // //     return (
// // //       <Pressable
// // //         style={styles.card}
// // //         onPress={() => router.push(`/project/${item.id}`)}
// // //       >
// // //         <Text style={styles.title}>
// // //           {item.year} {item.make} {item.model}
// // //         </Text>

// // //         <Text>VIN: {item.vin || 'N/A'}</Text>
// // //         <Text>Auction: {item.auctionSource || 'N/A'}</Text>
// // //         <Text>
// // //           Purchase: ${Number(item.purchasePrice || 0).toFixed(2)}
// // //         </Text>
// // //       </Pressable>
// // //     );
// // //   }

// // //   return (
// // //     <View style={styles.container}>
// // //       <Pressable
// // //         style={styles.addButton}
// // //         onPress={() => router.push('/project/new')}
// // //       >
// // //         <Text style={styles.addButtonText}>
// // //           + New Vehicle Project
// // //         </Text>
// // //       </Pressable>

// // //       <FlatList
// // //         data={projects}
// // //         keyExtractor={(item) => String(item.id)}
// // //         renderItem={renderProject}
// // //         ListEmptyComponent={
// // //           <Text style={styles.empty}>No projects yet.</Text>
// // //         }
// // //       />
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     padding: 16,
// // //     backgroundColor: '#fff'
// // //   },
// // //   addButton: {
// // //     backgroundColor: '#111',
// // //     padding: 16,
// // //     borderRadius: 12,
// // //     marginBottom: 16
// // //   },
// // //   addButtonText: {
// // //     color: '#fff',
// // //     textAlign: 'center',
// // //     fontWeight: '700'
// // //   },
// // //   card: {
// // //     borderWidth: 1,
// // //     borderColor: '#ddd',
// // //     borderRadius: 12,
// // //     padding: 14,
// // //     marginBottom: 12
// // //   },
// // //   title: {
// // //     fontSize: 18,
// // //     fontWeight: '700',
// // //     marginBottom: 6
// // //   },
// // //   empty: {
// // //     textAlign: 'center',
// // //     marginTop: 40
// // //   }
// // // });


// // // app/index.js
// // import { router, useFocusEffect } from 'expo-router';
// // import { useCallback, useState } from 'react';
// // import {
// //   FlatList,
// //   Pressable,
// //   StyleSheet,
// //   Text,
// //   View
// // } from 'react-native';
// // import { getProjects } from './src/db/database';

// // export default function HomeScreen() {
// //   const [projects, setProjects] = useState([]);
// //   const [showArchived, setShowArchived] = useState(false);

// //   function loadProjects(archivedValue) {
// //     const data = getProjects(archivedValue);
// //     setProjects(data);
// //   }

// //   useFocusEffect(
// //     useCallback(() => {
// //       loadProjects(showArchived);
// //     }, [showArchived])
// //   );

// //   function handleShowActive() {
// //     setShowArchived(false);
// //   }

// //   function handleShowArchived() {
// //     setShowArchived(true);
// //   }

// //   function renderProject({ item }) {
// //     return (
// //       <Pressable
// //         style={styles.card}
// //         onPress={() => router.push(`/project/${item.id}`)}
// //       >
// //         <Text style={styles.title}>
// //           {item.year} {item.make} {item.model}
// //         </Text>

// //         <Text>VIN: {item.vin || 'N/A'}</Text>
// //         <Text>Auction: {item.auctionSource || 'N/A'}</Text>
// //         <Text>
// //           Purchase: ${Number(item.purchasePrice || 0).toFixed(2)}
// //         </Text>

// //         {showArchived ? (
// //           <Text style={styles.archivedBadge}>Archived</Text>
// //         ) : null}
// //       </Pressable>
// //     );
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <Pressable
// //         style={styles.addButton}
// //         onPress={() => router.push('/project/new')}
// //       >
// //         <Text style={styles.addButtonText}>
// //           + New Vehicle Project
// //         </Text>
// //       </Pressable>

// //       <View style={styles.filterRow}>
// //         <Pressable
// //           style={[
// //             styles.filterButton,
// //             !showArchived && styles.filterButtonActive
// //           ]}
// //           onPress={handleShowActive}
// //         >
// //           <Text
// //             style={[
// //               styles.filterText,
// //               !showArchived && styles.filterTextActive
// //             ]}
// //           >
// //             Active
// //           </Text>
// //         </Pressable>

// //         <Pressable
// //           style={[
// //             styles.filterButton,
// //             showArchived && styles.filterButtonActive
// //           ]}
// //           onPress={handleShowArchived}
// //         >
// //           <Text
// //             style={[
// //               styles.filterText,
// //               showArchived && styles.filterTextActive
// //             ]}
// //           >
// //             Archived
// //           </Text>
// //         </Pressable>
// //       </View>

// //       <FlatList
// //         data={projects}
// //         keyExtractor={(item) => String(item.id)}
// //         renderItem={renderProject}
// //         ListEmptyComponent={
// //           <Text style={styles.empty}>
// //             {showArchived
// //               ? 'No archived projects yet.'
// //               : 'No active projects yet.'}
// //           </Text>
// //         }
// //       />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 16,
// //     backgroundColor: '#fff'
// //   },
// //   addButton: {
// //     backgroundColor: '#111',
// //     padding: 16,
// //     borderRadius: 12,
// //     marginBottom: 16
// //   },
// //   addButtonText: {
// //     color: '#fff',
// //     textAlign: 'center',
// //     fontWeight: '700'
// //   },
// //   filterRow: {
// //     flexDirection: 'row',
// //     gap: 10,
// //     marginBottom: 16
// //   },
// //   filterButton: {
// //     flex: 1,
// //     borderWidth: 1,
// //     borderColor: '#111',
// //     borderRadius: 10,
// //     padding: 12
// //   },
// //   filterButtonActive: {
// //     backgroundColor: '#111'
// //   },
// //   filterText: {
// //     textAlign: 'center',
// //     fontWeight: '700',
// //     color: '#111'
// //   },
// //   filterTextActive: {
// //     color: '#fff'
// //   },
// //   card: {
// //     borderWidth: 1,
// //     borderColor: '#ddd',
// //     borderRadius: 12,
// //     padding: 14,
// //     marginBottom: 12
// //   },
// //   title: {
// //     fontSize: 18,
// //     fontWeight: '700',
// //     marginBottom: 6
// //   },
// //   archivedBadge: {
// //     marginTop: 10,
// //     color: '#666',
// //     fontWeight: '700'
// //   },
// //   empty: {
// //     textAlign: 'center',
// //     marginTop: 40
// //   }
// // });


// // app/_layout.js
// import { Stack } from 'expo-router';
// import { useEffect } from 'react';
// import { initializeDatabase } from './src/db/database';

// export default function Layout() {
//   useEffect(() => {
//     initializeDatabase();
//   }, []);

//   return (
//     <Stack>
//       <Stack.Screen
//         name="index"
//         options={{ title: 'Projects' }}
//       />

//       <Stack.Screen
//         name="project/new"
//         options={{ title: 'New Project' }}
//       />

//       <Stack.Screen
//         name="project/[id]"
//         options={{ title: 'Project Details' }}
//       />

//       <Stack.Screen
//         name="project/edit"
//         options={{ title: 'Edit Project' }}
//       />

//       <Stack.Screen
//         name="project/report"
//         options={{ title: 'Project Report' }}
//       />

//       <Stack.Screen
//         name="expense/new"
//         options={{ title: 'Add Expense' }}
//       />

//       <Stack.Screen
//         name="expense/edit"
//         options={{ title: 'Edit Expense' }}
//       />

//       <Stack.Screen
//         name="task/new"
//         options={{ title: 'Add Task' }}
//       />

//       <Stack.Screen
//         name="task/handwriting"
//         options={{ title: 'Task Handwriting' }}
//       />
//     </Stack>
//   );
// }


// app/index.js
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
 Text,
  View
} from 'react-native';
import { getProjects } from './src/db/database';

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